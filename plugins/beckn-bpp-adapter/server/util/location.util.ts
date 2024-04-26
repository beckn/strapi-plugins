import { RADIUS, TOLERANCE_RADIUS, MAX_DISTANCE } from "../constants";
import * as polyline from '@mapbox/polyline';
import * as geolib from 'geolib';
import { GeolibGeoJSONPoint } from "geolib/es/types";

export const isInRange = (lat1, lon1, lat2, lon2, radius = RADIUS) => {
    const distance = calculateDistance(lat1, lon1, lat2, lon2);
    console.log('Distance between Source and Target Lat Lang', distance);
    return distance <= radius;
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Function to convert degrees to radians
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Decode polyline
function decodePolyline(encodedPolyline) {
    return polyline.decode(encodedPolyline).map(pair => ({
        latitude: pair[0],
        longitude: pair[1]
    }));
}

// Check if a store is near the route within specified distance
function isStoreNearRouteWithinDistance(store, routePoints, location, maxDistance) {
    // Find the segment of the route within the specified distance from the location
    let pointsWithinDistance: GeolibGeoJSONPoint[] = [];
    if (maxDistance && location) {
        pointsWithinDistance = routePoints.filter(point =>
            geolib.isPointWithinRadius(
                point,
                location,
                maxDistance
            )
        );
    } else {
        pointsWithinDistance = routePoints;
    }

    // Check if the store is within 500 meters of any point in this segment
    return pointsWithinDistance.some(point =>
        geolib.isPointWithinRadius(
            { latitude: store.lat, longitude: store.lng },
            point,
            TOLERANCE_RADIUS
        )
    );
}

// Main function to find stores along a segment of the route
export const findStoresAlongRouteWithinDistance = (
    encodedPolyline,
    stores,
    location,
    maxDistance = MAX_DISTANCE
) => {
    const routePoints = decodePolyline(encodedPolyline);
    const storesAlongRoute = stores.filter(store =>
        isStoreNearRouteWithinDistance(store, routePoints, location, maxDistance)
    );
    return storesAlongRoute;
}
