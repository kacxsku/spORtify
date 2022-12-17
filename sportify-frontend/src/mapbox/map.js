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
    const [zoom, setZoom] = useState(10);
    console.log("long", longitude)

    useEffect(() => {
        if (map.current) return; 

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            viewState: {
                width: "2em",
                height: "4em"
            },
            center: [lng, lat],
            zoom: zoom,
        });

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

export function MapFinder({setLongitude, setLatitude}){
    const mapContainer = useRef(null);
    const map = useRef(null);
    const geocoder = useRef(null);

    const [lng, setLng] = useState(19.1451);
    const [lat, setLat] = useState( 51.9194);
    const [zoom, setZoom] = useState(7);

    function successFunction(position) {
        var userLatitude = position.coords.latitude;
        var userLongitude = position.coords.longitude;
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction);
    }



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
          map.current.addControl(
            new mapboxgl.GeolocateControl({
            positionOptions: {
            enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
            }));

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

    geocoder.current.on('result', function(ev) {
        setLongitude(ev.result.geometry.coordinates[0]);
        setLatitude(ev.result.geometry.coordinates[1])
        map.current.getSource('single-point').setData(ev.result.geometry);
      });
    });

    return (
        <div id="map">
            <div ref={mapContainer} className="map-s-container" />
        </div>
    )
}

export { MapView };
