import {
  Component,
  computed,
  effect,
  ElementRef,
  untracked,
  viewChild,
} from '@angular/core';
import * as L from 'leaflet';
import { DistanceMapService } from './distance-map.service';

@Component({
  selector: 'app-distance-map',
  standalone: true,
  imports: [],
  templateUrl: './distance-map.component.html',
  styleUrl: './distance-map.component.scss',
})
export class DistanceMapComponent {
  mapEl = viewChild<ElementRef<HTMLDivElement>>('mapEl');
  map = computed(() => {
    const mapEl = this.mapEl();
    if (!mapEl) {
      return null;
    }
    return L.map(mapEl.nativeElement, {
      attributionControl: false,
    })
      .setMaxBounds(
        new L.LatLngBounds([
          [23.92564, 101.638066],
          [7.819444, 110.646855],
        ]),
      )
      .setMaxZoom(19)
      .setMinZoom(10)
      .setView([21.0315499, 105.8330543], 16);
  });
  constructor(private readonly mapService: DistanceMapService) {
    effect(() => {
      const map = this.map();
      if (!map) {
        return;
      }
      const { url, options } = this.mapService.mapLayer.gg_map
      L.tileLayer(url, options).addTo(
        map,
      );
      untracked(() => {
        const resizeObserver = new ResizeObserver(() => {
          map.invalidateSize();
        });
        const mapEl = this.mapEl();
        if (mapEl) {
          resizeObserver.observe(mapEl.nativeElement);
        }
        L.control.layers()
      })
    })
  }
}
