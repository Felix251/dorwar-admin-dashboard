import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import GeoHeatMap from '.';
import PropTypes from 'prop-types';

const HeatMapWrapper = ({ points }) => {
  const defaultPosition = [14.6928, -17.4467]; // Dakar, Senegal
  return (
    <MapContainer center={defaultPosition} zoom={12} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoHeatMap data={points} />
    </MapContainer>
  );
};

HeatMapWrapper.propTypes = {
  points: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default HeatMapWrapper;
