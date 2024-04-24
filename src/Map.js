import React, { useEffect } from 'react';

function Map() {
    useEffect(() => {
        const initMap = () => {
            const myLatLng = { lat: 17.348202, lng: 78.339769 };
            const map = new window.google.maps.Map(document.getElementById("map"), {
                zoom: 12,
                center: myLatLng,
            });

            new window.google.maps.Marker({
                position: myLatLng,
                map: map,
                title: "Hello World!",
            });
            
        };

        if (window.google) {
            initMap();
        } else {
            console.error("Failed to load Google Maps API");
        }
    }, []);

    return (<div id="map" style={{ width: '750px', height: '400px', background:'./back.jpeg' }}>

    </div>)

}

export default Map;