const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simple in-memory cache for IP geo lookups
const geoCache = new Map();

async function getGeoInfo(ip) {
  if (!ip || ip === '::1' || ip === '127.0.0.1') return null;
  if (geoCache.has(ip)) return geoCache.get(ip);

  try {
    const token = process.env.IPINFO_TOKEN ? `?token=${process.env.IPINFO_TOKEN}` : '';
    const res = await fetch(`https://ipinfo.io/${ip}/json${token}`);
    if (!res.ok) return null;
    const data = await res.json();
    const geo = {
      city: data.city || null,
      region: data.region || null,
      country: data.country || null,
      org: data.org || null,
    };
    geoCache.set(ip, geo);
    return geo;
  } catch {
    return null;
  }
}

// Skip logging static assets
const ASSET_RE = /\.(js|css|png|jpg|jpeg|svg|ico|woff2?|ttf|map)(\?.*)?$/;

// Log page visits with geo enrichment
app.use((req, _res, next) => {
  if (ASSET_RE.test(req.path)) return next();

  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
  const referrer = req.headers['referer'] || req.headers['referrer'] || 'direct';
  const userAgent = req.headers['user-agent'] || 'unknown';

  // Fire-and-forget so geo lookup doesn't slow the response
  getGeoInfo(ip).then((geo) => {
    console.log(JSON.stringify({
      event: 'visit',
      timestamp: new Date().toISOString(),
      ip,
      referrer,
      userAgent,
      path: req.path,
      ...(geo && { city: geo.city, region: geo.region, country: geo.country, org: geo.org }),
    }));
  });

  next();
});

// Serve built client in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
  app.use((_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
