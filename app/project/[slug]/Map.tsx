/* eslint-disable @next/next/no-img-element */
"use client"
import Image from "next/image";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { IProject } from "../../../data/projects";

type ComponentProps = {
  project:IProject
}

const Map = ({project}:ComponentProps) => {

const [viewPort, setViewPort] = useState({
  latitude: project.coordinates.lat,
  longitude: project.coordinates.lng,
  width: "100%",
  height: "100%",
  zoom: 10,
});

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
        <Marker
          longitude={project.coordinates.lng}
          latitude={project.coordinates.lat}
          anchor="center"
        >
          <Image className="z-30" src="/images/marker.png" alt="Marker" width={20} height={20} />
        </Marker>
      </ReactMapGL>
    </div>
  );
};
export default Map;
