// "use client";

// import React, { useState, useEffect, useRef } from "react";

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }

// const RouteFinder: React.FC = () => {
//   const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Set your API key here
//   const [source, setSource] = useState<string>("");
//   const [destination, setDestination] = useState<string>("");
//   const [output, setOutput] = useState<string>("");

//   const mapRef = useRef<google.maps.Map | null>(null);
//   const directionsServiceRef = useRef<google.maps.DirectionsService | null>(null);
//   const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
//   const geocoderRef = useRef<google.maps.Geocoder | null>(null);

//   useEffect(() => {
//     if (typeof window !== "undefined" && !mapRef.current) {
//       const script = document.createElement("script");
//       script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
//       script.async = true;
//       document.body.appendChild(script);
//       window.initMap = initMap;
//     }
//   }, []);

//   const initMap = () => {
//     if (!window.google) return;

//     const mapInstance = new window.google.maps.Map(
//       document.getElementById("map") as HTMLElement,
//       {
//         center: { lat: 12.9716, lng: 77.5946 }, // Default to Bangalore
//         zoom: 12,
//       }
//     );

//     directionsServiceRef.current = new window.google.maps.DirectionsService();
//     directionsRendererRef.current = new window.google.maps.DirectionsRenderer();
//     directionsRendererRef.current.setMap(mapInstance);
//     geocoderRef.current = new window.google.maps.Geocoder();

//     mapRef.current = mapInstance;

//     new window.google.maps.places.Autocomplete(
//       document.getElementById("source") as HTMLInputElement
//     );
//     new window.google.maps.places.Autocomplete(
//       document.getElementById("destination") as HTMLInputElement
//     );
//   };

//   const getOptimalRoute = () => {
//     if (!source || !destination) {
//       alert("Please enter both source and destination.");
//       return;
//     }
  
//     const request: google.maps.DirectionsRequest = {
//       origin: source,
//       destination: destination,
//       travelMode: google.maps.TravelMode.DRIVING,
//     };
  
//     if (directionsServiceRef.current && directionsRendererRef.current) {
//       directionsServiceRef.current.route(request, (result, status) => {
//         if (status === "OK" && result && result.routes && result.routes[0]) {
//           directionsRendererRef.current.setDirections(result);
  
//           const distance = result.routes[0].legs?.[0]?.distance?.value || 0; // Safely access distance
//           if (distance > 0) {
//             calculateOptimalCost(distance / 1000); // Convert meters to km
//             displayTransportMode(distance / 1000);
//           }
//         } else {
//           setOutput(`Error fetching directions: ${status}`);
//         }
//       });
//     }
//   };
  

//   const calculateOptimalCost = (distance: number) => {
//     let cost = 0;
//     if (distance < 1.5) cost = 5;
//     else if (distance < 5) cost = Math.random() < 0.5 ? 10 : 15;
//     else if (distance < 20) cost = 40;
//     else if (distance < 30) cost = 60;
//     else if (distance < 40) cost = 80;
//     else cost = 100;

//     setOutput((prevOutput) => `${prevOutput}<h3>Total Estimated Cost: ₹${cost}</h3>`);
//   };

//   const displayTransportMode = (distance: number) => {
//     let transportMode = "";
//     if (distance < 1.5) transportMode = "🚶 Walking (since the distance is less than 1.5 km)";
//     else if (distance < 5) transportMode = Math.random() < 0.5 ? "🚌 Bus" : "🚖 Rickshaw";
//     else transportMode = "🚌 Bus or 🚆 Train (for the longer part) + 🚶 Walking (for the last part)";

//     setOutput((prevOutput) => `${prevOutput}<h3>Suggested Transport Mode: ${transportMode}</h3>`);
//   };

//   const useCurrentLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const lat = position.coords.latitude;
//           const lng = position.coords.longitude;

//           if (geocoderRef.current) {
//             geocoderRef.current.geocode(
//               { location: { lat, lng } },
//               (results, status) => {
//                 if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
//                   setSource(results[0].formatted_address);
//                 } else {
//                   alert("Geocoder failed due to: " + status);
//                 }
//               }
//             );
//           }
//         },
//         (error) => {
//           alert("Geolocation error: " + error.message);
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };

//   return (
//     <div>
//       <h1>Optimal Cost Multi-Modal Route Finder</h1>

//       <label htmlFor="source">Enter Source Location (Address/Place):</label>
//       <input
//         type="text"
//         id="source"
//         placeholder="Enter source location"
//         value={source}
//         onChange={(e) => setSource(e.target.value)}
//       />
//       <button onClick={useCurrentLocation}>Use My Current Location</button>
//       <br />
//       <br />

//       <label htmlFor="destination">Enter Destination (Address/Place):</label>
//       <input
//         type="text"
//         id="destination"
//         placeholder="Enter destination place"
//         value={destination}
//         onChange={(e) => setDestination(e.target.value)}
//       />
//       <br />
//       <br />
//       <button onClick={getOptimalRoute}>Find Optimal Cost Route</button>

//       <div id="map" style={{ height: "500px", width: "100%" }}></div>
//       <div
//         id="output"
//         dangerouslySetInnerHTML={{ __html: output }}
//         style={{ marginTop: "10px" }}
//       />
//     </div>
//   );
// };

// export default RouteFinder;


"use client";

import React, { useState, useEffect, useRef } from "react";

const RouteFinder: React.FC = () => {
  const apiKey = "AIzaSyDLAaURMjPq0ij7J3or2Q9HrcRSr1AMVQk"; // Replace with your Google Maps API Key
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const mapRef = useRef<google.maps.Map | null>(null);
  const directionsServiceRef = useRef<google.maps.DirectionsService | null>(null);
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(null);
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !mapRef.current) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
      (window as any).initMap = initMap; // Expose initMap to the global scope
    }
  }, []);

  const initMap = () => {
    if (!window.google) return;

    const mapInstance = new window.google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: 12.9716, lng: 77.5946 }, // Default to Bangalore
        zoom: 12,
      }
    );

    directionsServiceRef.current = new window.google.maps.DirectionsService();
    directionsRendererRef.current = new window.google.maps.DirectionsRenderer();
    directionsRendererRef.current.setMap(mapInstance);
    geocoderRef.current = new window.google.maps.Geocoder();

    mapRef.current = mapInstance;

    // Enable autocomplete for input fields
    new window.google.maps.places.Autocomplete(
      document.getElementById("source") as HTMLInputElement
    );
    new window.google.maps.places.Autocomplete(
      document.getElementById("destination") as HTMLInputElement
    );
  };

  const getOptimalRoute = () => {
    if (!source || !destination) {
      alert("Please enter both source and destination.");
      return;
    }

    const request: google.maps.DirectionsRequest = {
      origin: source,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    if (
      directionsServiceRef.current &&
      directionsRendererRef.current &&
      directionsRendererRef.current !== null
    ) {
      directionsServiceRef.current.route(request, (result, status) => {
        if (status === "OK" && result && result.routes && result.routes[0]) {
          directionsRendererRef.current!.setDirections(result);

          const distance = result.routes[0].legs?.[0]?.distance?.value || 0; // Safely access distance
          if (distance > 0) {
            calculateOptimalCost(distance / 1000); // Convert meters to km
            displayTransportMode(distance / 1000);
          }
        } else {
          setOutput(`Error fetching directions: ${status}`);
        }
      });
    } else {
      console.error("DirectionsRenderer is not initialized.");
      setOutput("Unable to render directions. Please try again.");
    }
  };

  const calculateOptimalCost = (distance: number) => {
    let cost = 0;
    if (distance < 1.5) cost = 5;
    else if (distance < 5) cost = Math.random() < 0.5 ? 10 : 15;
    else if (distance < 20) cost = 40;
    else if (distance < 30) cost = 60;
    else if (distance < 40) cost = 80;
    else cost = 100;

    setOutput(
      (prevOutput) =>
        prevOutput + `<h3>Total Estimated Cost: ₹${cost}</h3>`
    );
  };

  const displayTransportMode = (distance: number) => {
    let transportMode = "";
    if (distance < 1.5) transportMode = "🚶 Walking (since the distance is less than 1.5 km)";
    else if (distance < 5) transportMode = Math.random() < 0.5 ? "🚌 Bus" : "🚖 Rickshaw";
    else transportMode = "🚌 Bus or 🚆 Train (for the longer part) + 🚶 Walking (for the last part)";

    setOutput(
      (prevOutput) =>
        prevOutput + `<h3>Suggested Transport Mode: ${transportMode}</h3>`
    );
  };

  const useCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          if (geocoderRef.current) {
            geocoderRef.current.geocode(
              { location: { lat, lng } },
              (results, status) => {
                if (status === "OK" && results && results[0]) {
                  setSource(results[0].formatted_address);
                } else {
                  alert("Geocoder failed due to: " + status);
                }
              }
            );
          }
        },
        (error) => {
          alert("Geolocation error: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <h1>Optimal Cost Multi-Modal Route Finder</h1>

      <label htmlFor="source">Enter Source Location (Address/Place):</label>
      <input
        type="text"
        id="source"
        placeholder="Enter source location"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <button onClick={useCurrentLocation}>Use My Current Location</button>
      <br />
      <br />

      <label htmlFor="destination">Enter Destination (Address/Place):</label>
      <input
        type="text"
        id="destination"
        placeholder="Enter destination place"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <br />
      <br />
      <button onClick={getOptimalRoute}>Find Optimal Cost Route</button>

      <div id="map" style={{ height: "500px", width: "100%" }}></div>
      <div
        id="output"
        dangerouslySetInnerHTML={{ __html: output }}
        style={{ marginTop: "10px" }}
      />
    </div>
  );
};

export default RouteFinder;
