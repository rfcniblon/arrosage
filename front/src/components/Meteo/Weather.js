import React from "react";

//const Weather = props => (

const Weather = (props) => {

	const Water = () => {
		console.log(props.description)
		if (props.description && props.description) {
			switch (props.description) {
				case "broken clouds":
					return <span className="weather__value"> Nuages brisés </span>
				case "scattered clouds":
					return <span className="weather__value"> Nuages dispersés </span>
				case "few clouds":
					return <span className="weather__value">Quelques nuages</span>
				case "overcast clouds":
						return <span className="weather__value">Nuages couverts</span>
						case "light rain":
							return <span className="weather__value">Pluies légères</span>
				case "clear sky":
					return <span className="weather__value"> Ciel claire </span>




				

				default:
			}
		}
	}

	return (

		<div className="weather__info">
			{props.city && props.country && <p className="weather__key"> Ville :
				<span className="weather__value"> {props.city}, {props.country}</span> </p>}

			{props.temperature && <p className="weather__key"> Temperature :
				<span className="weather__value"> {props.temperature} C°</span></p>}

			{props.humidity && <p className="weather__key"> Humidity:
				<span className="weather__value"> {props.humidity} %</span></p>}

			{props.description && <p className="weather__key"> Conditions :
				{/* <span className="weather__value"> {props.description} </span>  */}
				{Water()}</p>}
			{props.pressure && <p className="weather__key"> Pression atmospherique :
				<span className="weather__value"> {props.pressure} Mbar</span></p>}

			{props.speed && <p className="weather__key"> Vitesse du vent :
				<span className="weather__value"> {props.speed} Km/h</span>	</p>}
				
			{props.error && <p className="weather__error">{props.error}</p>}
		</div>
	)
}

export default Weather;