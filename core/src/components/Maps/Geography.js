import React, { useState } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
// import * as constant from "views/MSA Analytics/constant";
const offsets = {
  // VT: [50, -8],
  // NH: [34, 2],
  // MA: [30, -1],
  // RI: [28, 2],
  // CT: [35, 10],
  // NJ: [34, 1],
  // DE: [33, 0],
  // MD: [47, 10],
  // DC: [49, 21],
};

const MapChart = (props) => {
  const {
    areaNameMarker,
    setTooltipContent,
    setShowModal,
    geoUrl,
    markerData,
    showNames,
    showMarker,
    onMarkerClick,
    onAreaClick,
    width,
    height,
    zoomButtonsPositionPorps,
    projection,
    initialCoodinates,
  } = props;
  const [hoverArea, setHoverArea] = useState(null);
  const [selectedSite, setSelectedSite] = useState(null);
  const [position, setPosition] = useState({
    coordinates: [...initialCoodinates],
    zoom: 1.2100000000000002,
  });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.1 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.1 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  return (
    <div>
      <ComposableMap projection={projection} width={width} height={height}>
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
          filterZoomEvent={(evt) => {
            return evt.type === "wheel" ? false : true;
          }}
        >
          <Geographies geography={geoUrl} onScroll={() => null}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => {
                  return (
                    <Geography
                      data-tip={geo?.properties?.NAME}
                      key={geo.rsmKey}
                      onClick={() => {
                        onAreaClick(geo);
                      }}
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        ReactTooltip.rebuild();
                        // setHoverArea(geo.properties.name);
                        setTooltipContent(geo?.properties?.NAME);
                      }}
                      onMouseLeave={() => {
                        // setHoverArea(null);
                        setTooltipContent("");
                      }}
                      stroke={"#FFF"}
                      geography={geo}
                      fill={geo.properties.fill || "lightGrey"}
                      style={{
                        default: {
                          outline: "none",
                        },
                        hover: {
                          outline: "none",
                          cursor: "pointer",
                        },
                        pressed: {
                          outline: "none",
                        },
                      }}
                    />
                  );
                })}

                {geographies.map((geo, index) => {
                  const centroid = geoCentroid(geo);
                  const cur = areaNameMarker.find((s) => s.val === geo.id);
                  return (
                    showNames && (
                      <g key={geo.rsmKey + "-name"}>
                        {cur &&
                          centroid[0] > -160 &&
                          centroid[0] < -67 &&
                          (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                            <></>
                          ) : (
                            <></>
                          ))}
                      </g>
                    )
                  );
                })}
              </>
            )}
          </Geographies>
          {showMarker &&
            markerData.map((item) => (
              <Marker
                coordinates={item.coodinates}
                onClick={() => onMarkerClick(item)}
              >
                <circle
                  r={item.radius}
                  fill={item.color}
                  stroke="black"
                  style={{
                    fillOpacity: 0.7,
                  }}
                />
              </Marker>
            ))}
        </ZoomableGroup>
      </ComposableMap>

      <Grid
        style={{
          ...zoomButtonsPositionPorps,
        }}
      >
        <Grid container direction="column">
          <Grid>
            <button onClick={handleZoomIn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          </Grid>
          <button onClick={handleZoomOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </Grid>
      </Grid>
    </div>
  );
};
MapChart.propTypes = {
  geoUrl: PropTypes.isRequired,
};

MapChart.defaultProps = {
  geoUrl: "",
  markerData: [],
  areaNameMarker: "",
  showNames: false,
  showMarker: false,
  onAreaClick: () => {},
  onMarkerClick: () => {},
  markerPosition: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  initialCoodinates: [0, 0],
};
export default MapChart;
