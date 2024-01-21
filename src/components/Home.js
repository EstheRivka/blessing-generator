
import React from 'react';

import { useNavigate } from 'react-router-dom';

import '../App.css'

const MakeBlessing = () => {

  const navigate = useNavigate();

 

  const navigateToBlessing = () => {

    navigate('/makeBlessing');

  };

 

  return (

    <div>

      <h1>ברוכים הבאים</h1>

      <h2>כאן תוכלו ליצור בקלות ברכה לכל אירוע</h2>

     

      <button onClick={navigateToBlessing}>להתחלה</button>

    </div>

  );

};

 

export default MakeBlessing;