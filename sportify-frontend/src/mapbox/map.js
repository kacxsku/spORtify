import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '../styles/map.css'
// import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FjeHNrdSIsImEiOiJja3V4dmk3OWkyaXU4Mm5xdjQ5eDI2YnI5In0._VztRL12bY4t9w17ap7eQw';

const MapView = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(7);
    const longitude = -70.9;
    const latitude = 42.35;

    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [longitude, latitude],
            zoom: zoom,
        });

        new mapboxgl.Marker({
            color: "#ff1500",
            draggable: false,
          }).setLngLat([longitude, latitude]).addTo(map.current);
    });
    
    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

    });

    return (
        <div className="mapView">
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat}
            </div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

const MapFinder = () => {
    return (
        <div>

        </div>
    )
}


export { MapView, MapFinder }; 