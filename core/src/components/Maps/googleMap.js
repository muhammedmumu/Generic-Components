import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import InfoWindow from "./infoWindow";

function pinSymbol({ color, scale }) {
  const MAP_MARKER =
    "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z";

  return {
    path: MAP_MARKER,
    fillColor: color,
    fillOpacity: 1,
    strokeColor: "#000",
    strokeWeight: 2,
    scale: scale,
  };
}
function MapContainer(props) {
  const { InfoData, CustomView, zoom, center } = props;
  return (
    <Map
      google={props.google}
      zoom={zoom}
      style={{
        width: "98%",
        height: props.height || 600,
        position: "relative",
      }}
      containerStyle={{
        width: "100%",
        height: props.height || 600,
        position: "relative",
      }}
      onClick={props.onMapClicked}
      initialCenter={center}
      center={center}
    >
      {props.marketData?.map((item) => (
        <Marker
          name={item?.label}
          onClick={props.onMarkerClick}
          data={item}
          icon={pinSymbol({
            color: item?.pin_colour || "red",
            scale: item?.own_property ? 2.5 : 1.5,
          })}
          style={{
            background: "#FBBC04",
          }}
          position={{
            lat: item?.position?.latitude,
            lng: item?.position?.longitude,
          }}
          title={item?.label}
        />
      ))}

      <InfoWindow
        marker={props?.selectedMarker?.activeMarker}
        visible={props?.selectedMarker?.showingInfoWindow}
      >
        <InfoData />
      </InfoWindow>
      {CustomView && <CustomView />}
    </Map>
  );
}

export default GoogleApiWrapper((props) => ({
  apiKey: props.apiKey,
  language: props.language,
  client: props.client,
  marketData: props?.data,
  InfoData: props?.InfoData,
  CustomView: props?.CustomView,
  height: props?.height || "60vh",
  zoom: props?.zoom,
  center: props?.center,
}))(MapContainer);
