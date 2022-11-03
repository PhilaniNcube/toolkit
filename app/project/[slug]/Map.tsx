"use client"
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
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      >
        <Marker
          longitude={project.coordinates.lng}
          latitude={project.coordinates.lat}
          anchor="bottom"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </Marker>
      </ReactMapGL>
    </div>
  );
};
export default Map;
