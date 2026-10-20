ROADWATCH V2 — iPHONE GITHUB PAGES UPDATE
==========================================
To update your EXISTING public GitHub repo (Roadwatch-):
1. From your iPhone, open the repository "nickolassantiago525-cell/Roadwatch-".
2. Upload all files inside this folder directly to the root of the repository. Accept replacing any files with the same name, or edit/replace index.html + sw.js individually. Do not upload the enclosing folder itself.
3. The Pages configuration stays main + /(root). No separate site is needed.
4. Open https://nickolassantiago525-cell.github.io/Roadwatch-/ in Safari. Refresh, and if necessary close and reopen the Home Screen app to get the new version.

WHAT IS ACTUALLY WORKING IN THIS EDITION
- GPS speed display, GPS accuracy, mapped maximum-speed lookup on nearby OpenStreetMap highway segments.
- Visible red 'OVER MAPPED LIMIT' display when GPS estimates a speed > mapped limit by 3 mph; optional alert sound when alerts are enabled and you've exceeded for >3 seconds.
- Separate markers for traffic signals vs red-light enforcement cameras, and speed enforcement cameras from OpenStreetMap tags.
- ALPR/Flock cameras: national public camera vector tiles from FlockHopper/DeFlock, with an OpenStreetMap nearby fallback. Labels 'Flock Safety' only when vendor metadata says so.
- Local on-device police/accident pins. THESE ARE NOT SHARED OR LIVE.
- Audible/visual alerts when the app stays in foreground. iOS browser background restrictions apply.

LIMITATIONS
- Not a real hardware radar detector or live police scanner. Not detecting other vehicles' speed.
- Camera databases are partial, not exhaustive. No app can guarantee all cameras; reports can be stale or wrong.
- OpenStreetMap limits are sometimes absent, conditional or inaccurate; dash can say UNKNOWN. Treat only roadside signs as authoritative.
- GPS geolocation requires HTTPS and permission; online tiles and lookup require data. No offline nationwide map.
- Overpass queries are community operated and may be unavailable or rate limited.
- FlockHopper camera vector tiles are publicly available without a key, but reliability/CORS could not be tested live from this environment.

SOURCES
https://www.openstreetmap.org/copyright
https://github.com/flockhopper3/deflock-data
https://deflock.org/app
https://wiki.openstreetmap.org/wiki/Relation:enforcement
