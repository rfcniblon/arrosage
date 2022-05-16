import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const FormApi = props => {
	const [data,setData]= useState([]);

const test1 = ()=>{
	alert("envoi en bdd")

          fetch("xx.xx.xx.xx")
          .then((res) => res.json())
          .then((res) => setData( res )); 
		  console.log(data);
}

	return (
		<Box
			component="form"
			sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
			noValidate
			autoComplete="off"
			onSubmit={props.getWeather}
		>

			<TextField id="" name="ip" label="Adresse ip de l'appareil" variant="standard" placeholder='exemple: 192.168.2.45'/>
			<TextField id="" name="port" label="Port de l'appareil" variant="standard" placeholder='exemple: 8021'/>

			<TextField id="" name="commandeOn" label="Commande allumage" variant="standard" placeholder='exemple: /control?cmd=GPIO,5,1'/>
			<TextField id="" name="commandeOff" label="Commande extinction" variant="standard" placeholder='exemple: /control?cmd=GPIO,5,0'/>

			<Button type="submit" variant="outlined">Tester </Button>
			<Button variant="outlined" onClick={test1}>Enregistrer </Button>
			{/* <label htmlFor="ip">Renseigner l'ip de l'equipement </label>
          <input type="text" name='ip' id='id' placeholder='exemple:  http://192.168.2.45' />
          <div>
            <label htmlFor="commandeOn">Renseigner la commande On</label>
            <input type="text" name='cmdOn' placeholder='exemple: /control?cmd=GPIO,5,1' />
          </div>
          <div>
            <label htmlFor="commandeOn">Renseigner la commande Off</label>
            <input type="text" name='cmdOff' placeholder='exemple: /control?cmd=GPIO,5,0' />
          </div> */}
		</Box>
	);
}
export default FormApi;