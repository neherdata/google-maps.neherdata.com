/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

function initMap(): void {
  new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      mapId: "402a8adf2b64df82",
      center: { lat: 40.30839, lng: -74.06977 },
      zoom: 12,
    } as google.maps.MapOptions
  );
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
