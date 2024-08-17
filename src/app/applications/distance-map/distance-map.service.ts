import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DistanceMapService {
  mapLayer = {
    street_map: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      options: {},
    },
    wiki_map: {
      url: 'http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
      options: {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      },
    },
    gg_map: {
      url: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      options: {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      },
    },
    vt_map: {
      url: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
      options: {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      },
    },
  };
  constructor() { }
}
