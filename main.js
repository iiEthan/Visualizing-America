import './style.css';
import {Map, View} from '../../node_modules/ol';
import TileLayer from '../../node_modules/ol/layer/Tile';
import OSM from '../../node_modules/ol/source/OSM';
import {useGeographic} from '../../node_modules/ol/proj.js';

useGeographic();

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [-96, 37],
    zoom: 5
  })
});
