export const isInsidePolygon = (point: [number, number], polygon: [number, number][]) => {
    const [x, y] = point; // Location point (latitude, longitude)
    let inside = false;

    // Loop through each edge of the polygon
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]; // Current vertex
        const [xj, yj] = polygon[j]; // Previous vertex

        // Check if the point is within the bounds of the edge's y-coordinates
        const intersect = ((yi > y) !== (yj > y)) &&
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside; // Toggle the inside status if there's an intersection
    }

    return inside;
}
