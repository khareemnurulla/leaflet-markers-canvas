import * as L from "leaflet";

declare module "leaflet" {
  class MarkersCanvas extends L.Layer {
    constructor();
    addMarker(marker: L.Marker): void;
    addMarkers(markers: L.Marker[]): void;
    removeMarker(marker: L.Marker): void;
    removeMarkers(markers: L.Marker[]): void;
    
    clear(): void;
    redraw(): void
  }
}
