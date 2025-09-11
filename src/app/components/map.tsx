"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/mapbox";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function MyMap() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_TOKEN}
      initialViewState={{
        longitude: 77.0970,
        latitude: 30.9091,
        zoom: 9,
      }}
      minZoom={8}   
      maxZoom={9}
      style={{ width: "100%", height: "350px", borderRadius: "inherit" }}
      mapStyle={`mapbox://styles/${process.env.NEXT_PUBLIC_MAP_USER}/${process.env.NEXT_PUBLIC_MAP_STYLE_ID}`}
    >
      <NavigationControl position="top-right" />

      <Marker longitude={77.0970} latitude={30.9091} anchor="bottom">
        <Icon
          icon="mdi:map-marker"
          className="size-10 text-rose-500 hover:text-rose-400"
          style={{ cursor: "pointer" }}
          onClick={() => setShowPopup(true)}
        />
      </Marker>

      {showPopup && (
        <Popup
          longitude={77.0970}
          latitude={30.9091}
          anchor="top"
          onClose={() => setShowPopup(false)}
        >
          📍 Solan, Himachal Pradesh
        </Popup>
      )}
    </Map>
  );
}
