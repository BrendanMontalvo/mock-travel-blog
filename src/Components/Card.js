import React from "react"
export default function Card(props) {
    return (
        <div className="card">
        <span className="origin--location">{props.location}</span>
            <button className="gray" onClick={event => window.location.href=props.googleMapsUrl}>View on Google Maps</button>
            <h1 className="location--title">{props.title}</h1>
            <img 
                src={props.imageUrl} 
                className="card--image" 
            />
            <div className="card--stats">
            </div>
            <p className="card--title">{props.dates}</p>
            <span className="bold">{props.description}</span>
        </div>
    )
}
