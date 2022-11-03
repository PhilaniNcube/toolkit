/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { IProject } from "../data/projects";

type ComponentProps = {
  project:IProject
}

const Map = ({project}:ComponentProps) => {



  return (
    <div className="w-full h-full oveflow-hidden">
      <ReactMapGL
        initialViewState={{
          longitude: project.coordinates.lng,
          latitude: project.coordinates.lat,
          zoom: 14,
        }}
        style={{ width: "100%", height: "90vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      >
        {/* <Marker
          longitude={project.coordinates.lng}
          latitude={project.coordinates.lat}
          anchor="center"
        >

        </Marker> */}
      </ReactMapGL>
    </div>
  );
};
export default Map;
