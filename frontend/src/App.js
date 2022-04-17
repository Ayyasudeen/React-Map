import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';


function App() {
  // const [showPopup, setShowPopup] = React.useState(true);

  return (
    <div className="App">
      <Map
      initialViewState={{
        latitude: 20.59,
        longitude: 78.9,
        zoom: 4
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
    >
      <Marker longitude={80.27} latitude={13.08} color="red" />
      <Popup longitude={80.27} latitude={13.08}
        anchor="left"
        // closeButton={true}
        // closeOnClick={true}
        // onClose={() => setShowPopup(false)}
        >
        You are here
      </Popup>
    </Map>
    </div>
  );
}

export default App;
