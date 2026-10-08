# SF POPOs React App
This is a single page app that shows most of San Francisco's privately-owned public open spaces. The data I used is available **[here](https://www.spur.org/sites/default/files/migrated/anchors/popos-guide.pdf)** from **[spur.org](http://www.spur.org)**

### Credits
Maps use [Leaflet](https://leafletjs.com/) (BSD-2-Clause) and
[OpenStreetMap](https://www.openstreetmap.org/copyright) data (ODbL), with visible
OpenStreetMap attribution. No map API key is needed. The overview uses the same
Firebase records as the list; records without valid coordinates are skipped on
the map. Pins link to each space's detail page, which also uses Leaflet.

Tiles are loaded from the public OpenStreetMap tile service, subject to its
[usage policy](https://operations.osmfoundation.org/policies/tiles/). For higher
traffic or self-hosting, change the tile URL and attribution in
`src/components/Map.js` to an appropriate provider or your own tile server.

I altered **[@tsaiDavid](https://github.com/tsaiDavid)'s [Simple Redux Boilerplate](https://github.com/tsaiDavid/simple-redux-boilerplate/tree/react-router-redux)** by taking out the redux part of it with the help of **[@claudiuandrei](https://github.com/claudiuandrei)**

### POPO Resources
[99percentinvisible podcast](http://99percentinvisible.org/episode/episode-09-99-private/)

[SPUR](https://www.spur.org/sites/default/files/migrated/anchors/popos-guide.pdf)

[San Francisco Planning Deptartment](https://www.spur.org/sites/default/files/migrated/anchors/popos-guide.pdf)

[Foursquare](https://foursquare.com/sfpopos/list/popos-all)

[The 21 Secret Parks of San Francisco](https://medium.com/sf-popos)
