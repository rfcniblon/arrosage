import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Form = props => {

	const test = () => {
		alert("envoi les info en bdd");
	}

	return (
		<Box
			component="form"
			sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
			noValidate
			autoComplete="off"
			onSubmit={props.getWeather}
		>

			<TextField id="" name="city" label="Ville" variant="standard" />
			<TextField id="" name="country" label="Pays" variant="standard" />
			<Button type="submit" variant="outlined">Tester </Button>
			<Button variant="outlined" onClick={test}>Enregistrer </Button>

		</Box>
	)
};

export default Form;
