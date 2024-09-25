import React from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';
import PropTypes from 'prop-types';

const GeoHeatMap = ({ data }) => {
  const map = useMap();

  L.heatLayer(data, {
    radius: 25,
    blur: 15,
    maxZoom: 17,
  }).addTo(map);

  return null;
};

GeoHeatMap.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default GeoHeatMap;
