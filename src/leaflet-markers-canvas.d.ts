import * as L from "leaflet";

declare module "leaflet" {
  class MarkersCanvas extends L.Layer {
    // Add any properties or methods you need for MarkersCanvas
  }
}
