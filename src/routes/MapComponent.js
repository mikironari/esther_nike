/*global kakao*/
import React, {Component} from "react";
import styled from "styled-components";

class MapContent extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=	fd53fd65103f9052f7557389eb1ab141&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7
        };

        const map = new window.kakao.maps.Map(container, options);
    
      });
    };
  }

  render() {
    return <MapContents id="Mymap"></MapContents>
  }
}

const MapContents = styled.div`
  width: 100%;
  height: 100%;
`;

export default MapContent;

// import {GoogleMap, LoadScriptNext, MarkerF} from '@react-google-maps/api'
// import {useMemo} from 'react'
// import styled from 'styled-components'

// function MapComponent() {
//   const center = useMemo(() => ({lat: 12.345, lng: 678.910}), [])

//   return (
//     <Wrapper>
//       <LoadScriptNext googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
//         <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
//           <MarkerF position={center} icon={{url: '/images/icons/map_marker.svg', scale: 5}} />
//         </GoogleMap>
//       </LoadScriptNext>
//     </Wrapper>
//   )
// }
// export default MapComponent

// const Wrapper = styled.div`
//   .map-container {
//     width: 100%;
//     height: 270px;
//   }
// `