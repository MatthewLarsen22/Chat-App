import { useEffect, useState } from 'react';

interface MapProps {
    latitude: number | undefined;
    longitude: number | undefined;
}

export const Map = (props: MapProps) => {
  if (!props.latitude || !props.longitude){
    return <p>"Could not share location"</p>;
  }

  let mapSrc = "https://www.google.com/maps/embed/v1/place";
  mapSrc += "?key=AIzaSyCKLK88KSPJDGICEcAYoVFfBE42aknKAqo";
  mapSrc += "&q=" + props.latitude + "," + props.longitude;
  mapSrc += "&center=" + props.latitude + "," + props.longitude;
  mapSrc += "&maptype=satellite";

  return (
    <iframe
        width="450"
        height="250"
        frameBorder="0"
        referrerPolicy="no-referrer-when-downgrade"
        src={mapSrc}
    >
    </iframe>
  );
}
