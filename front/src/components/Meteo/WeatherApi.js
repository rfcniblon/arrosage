import React from "react";
import LinearProgress from '@mui/material/LinearProgress';

const WeatherApi = props => {

	//coloration de la progressbar suivant le taux d'humidite du sol
	const colorProgress = () => {
		if (props.humiSol && props.humiSol) {
			switch (true) {
				case (props.humiSol >= 1 && props.humiSol <= 33):
					return <LinearProgress variant="determinate" value={props.humiSol} color="warning" />
				case (props.humiSol >= 34 && props.humiSol <= 66):
					return <LinearProgress variant="determinate" value={props.humiSol} color="error" />
				case (props.humiSol >= 67 && props.humiSol <= 100):
					return <LinearProgress variant="determinate" value={props.humiSol} color="success" />
				default:
			}
		}
	}

	return (
		<div className="weather__info">
			{props.humiSol && <p className="weather__key"> Humidité du sol :
				<span className="weather__value"> {props.humiSol} </span>
				<span >{colorProgress()}</span>
			</p>
			}

			{props.taskvalue1 && <p className="weather__key"> Température :
				<span className="weather__value"> {props.taskvalue1} C° </span>
			</p>
			}

			{props.taskvalue2 && <p className="weather__key"> Humidité :
				<span className="weather__value"> {props.taskvalue2} % </span>
			</p>
			}

			{props.error && <p className="weather__error">{props.error}</p>}
		</div>
	);
}
export default WeatherApi;