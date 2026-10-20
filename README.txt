ROADWATCH — Free iPhone-ready GPS road map prototype
======================================================

What works
- GPS position, GPS speed (when your phone reports speed) and accuracy.
- OpenStreetMap road map on an internet connection.
- Fetch mapped traffic lights, signs, ALPR/speed cameras and maxspeed road metadata within roughly 3 km of your position/map center.
- GPS + local police-report proximity alerts with red screen flash, 4-tone beep, optional voice alert.
- Your own incident pins stored only in the browser on that phone; manually add/pick/remove pins.
- Demo alert button to verify that audio and screen warning work.
- Home screen support with a manifest and minimal app-shell cache.

Important limitations
- NO real police detection, radar detector or police radio receiver. The phone cannot detect an officer, radar gun, or encrypted traffic by itself.
- Police and accident pins are LOCAL reports; they are not publicly shared, externally verified, or supplied by live crowdsourcing.
- Live 911 dispatch, police-scanner feeds, and live road-incident feeds are not connected.
- Road-sign and camera mapping is incomplete. Camera labels identify Flock only when OSM names Flock as manufacturer.
- Speed limits are approximate mapped values and should never replace posted signs.
- The app must be in the foreground for GPS sound/flash alerts. Sound may be muted by iPhone settings.
- Internet is required to load map tiles/libraries and refresh OpenStreetMap data; not a full offline map.
- Geolocation permission requires an HTTPS website (or localhost) on iPhone; simply opening a local HTML file in Files usually won't activate GPS.

Publishing free for iPhone via GitHub Pages
1. On github.com, create a PUBLIC repository named roadwatch (public Pages on free accounts).
2. Upload the CONTENTS of this folder to the repository root, not the ZIP file.
3. In repository Settings > Pages > Build and deployment, choose Deploy from a branch: main and folder /(root). Save.
4. Open https://YOUR-GITHUB-USERNAME.github.io/roadwatch/ in iPhone Safari after Pages publishes.
5. Tap Share > Add to Home Screen. Open RoadWatch from the icon.
6. Tap GPS target and allow location; tap ENABLE ALERTS. Use TEST ALERT to test.
7. Tap REPORT to add your own police stop or accident markers, or pick a map point.

Privacy and data sources
- OpenStreetMap contributors, ODbL; map tiles and Overpass public endpoints receive requests for viewed map areas.
- Local reports are saved in localStorage on the device only and can be cleared inside the app.
- DeFlock community site: https://maps.deflock.org/ (separate independent map).
- Official Florida incident map: https://fl511.com/ (separate independent website).

Do NOT manipulate the app while driving. Mounted navigation and passenger operation only.
