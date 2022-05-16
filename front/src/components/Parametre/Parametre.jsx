import React, { useState } from 'react';
import Meteo from '../Meteo/Meteo';
import Navbar from '../Navbar/Navbar';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MeteoApi from '../Meteo/MeteoApi';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';

const Parametre = () => {
  const [checked, setIsChecked] = useState(true);
  const [checked1, setIsChecked1] = useState(false);

  const IsCheck = () => {
    setIsChecked(!checked);
    setIsChecked1(!checked1);
  }

  const IsCheck1 = () => {
    setIsChecked(!checked);
    setIsChecked1(!checked1);
  }
  return (
    <div className="container-fluid">
      <Navbar />
      <section className='mt70'>
        <div>
          <div>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label" color="">Choisir le type de récupération de données </FormLabel>
              <FormGroup>
                <FormControlLabel control={<Checkbox checked={checked} />} onClick={IsCheck} label="Site Météo" />
                <FormControlLabel control={<Checkbox checked={checked1} />}  onClick={IsCheck1} label="Appareil Personnel"/>
              </FormGroup>
            </FormControl>
          </div>
          {checked ? <Meteo /> : <MeteoApi />}
        </div>
      </section>
    </div>
  );
};

export default Parametre;
