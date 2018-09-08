import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../../assets/css/map.css';


const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class MyMapComponent extends Component {

    static defaultProps = {
        center: { lat: 41.01420, lng: -74.006774 },
        zoom: 12
    };


    render() {
        return (
            <div className='google-map'>
                <GoogleMapReact
                    defaultCenter={ this.props.center }
                    defaultZoom={ this.props.zoom }
                    // apiKey={"AIzaSyBcFWYlKe66cpgbBaJ46G_IVTVf8NJk5TI"}
                    bootstrapURLKeys={{key: "AIzaSyBcFWYlKe66cpgbBaJ46G_IVTVf8NJk5TI"}}
                >
                    <AnyReactComponent
                        lat={ 41.01420 }
                        lng={ -74.006774 }
                        text={ "River Vale, NJ" }
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default MyMapComponent;
