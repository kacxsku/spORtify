import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '../styles/map.css'
import Map from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FjeHNrdSIsImEiOiJja3V4dmk3OWkyaXU4Mm5xdjQ5eDI2YnI5In0._VztRL12bY4t9w17ap7eQw';

const MapView = ({longitude, latitude}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(longitude ? longitude : -70.9);
    const [lat, setLat] = useState(latitude ? latitude : 42.35);
    const [zoom, setZoom] = useState(7);

    useEffect(() => {
        if (map.current) return; 

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            viewState: {
                width: "2em",
                height: "5em"
            },
            center: [lng, lat],
            zoom: zoom,
        });

        // map.current.on('load', function () {
        //     map.resize();
        // });

        new mapboxgl.Marker({
            color: "#ff1500",
            draggable: false,
          }).setLngLat([lng, lat]).addTo(map.current);
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

const getLocation = () => {
    
    const successCallback = (position) => {
        console.log(position);
    };
      const errorCallback = (error) => {
        console.log(error);
    };
      
    return navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

export function MapFinder(){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const geocoder = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(7);

    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom,
        });
        
        geocoder.current = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker:  {
                color: 'orange'
                }, 
            placeholder: 'Search for places',
          });
          map.current.addControl(geocoder.current);
    });
    
    useEffect(() => {

    map.current.on('load', () => {
        map.current.addSource('single-point', {
            'type': 'geojson',
            'data': {
            'type': 'FeatureCollection',
            'features': []
            }
        });
    });

      geocoder.current.on('result', (event) => {
        map.getSource('single-point').setData(event.result.geometry);
      });

    });

    return (
        <div id="map">
            <div ref={mapContainer} className="map-s-container" />
        </div>
    )
}

export { MapView };
