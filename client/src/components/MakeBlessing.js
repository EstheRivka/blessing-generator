import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { sendBlessingDataToServer } from '../services/apiService';

import '../App.css'

const MakeBlessing = () => {

  const navigate = useNavigate();

 

  const [formData, setFormData] = useState({

    age:0,

    length:'קצר',

    gender: 'זכר',

    nameReceiver: '',

    nameGiver: '',

    atmosphere: '',

    event: ''

  });

 

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setFormData((prevData) => ({

      ...prevData,

      [name]: value

    }));

  };

 

  const navigateToBlessing = async () => {

    const blessingData = { ...formData };

 

    try {

      const serverResponse = await sendBlessingDataToServer(blessingData);

      console.log('Server Response:', serverResponse);

      const data={parameters:blessingData, blessingList:serverResponse}//לשלוח את זה במקום blessingData

      navigate('/blessing', { state: { data: data } });

    }

    catch (error) {

      console.error('Error:', error.message);

    }

  };

  return (

    <div>

      <h2>אז איך זה עובד?</h2>

      <h2>מכניסים ערכים לפי פרמטרים ייעודיים ומקבלים ברכה מושקעת!!</h2>

 

      <div>

        <label htmlFor="input1">גיל מקבל הברכה:</label><br></br><input

          type="text"

          id="input1"

          name="age"

          value={formData.age}

          onChange={handleInputChange}

        /><br></br><br></br>

      </div>

 

      <div>

        <label htmlFor="select">מין מקבל הברכה:</label>

        <select

          id="select"

          name="gender"

          value={formData.gender}

          onChange={handleInputChange}

        >

          <option>זכר</option>

          <option>נקבה</option>

        </select><br></br>

 

        
      </div><br></br>

 

      <div>

        <label htmlFor="input2">שם מקבל הברכה:</label><br></br>

        <input

          type="text"

          id="input2"

          name="nameReceiver"

          value={formData.nameReceiver}

          onChange={handleInputChange}

        /><br></br>

      </div>

 

      <div>

        <label htmlFor="input3">שם נותן הברכה:</label><br></br>

        <input

          type="text"

          id="input3"

          name="nameGiver"

          value={formData.nameGiver}

          onChange={handleInputChange}

        /><br></br>

      </div><br></br>

 

      <div>

        <label htmlFor="select1">האוירה הרצויה לברכה:</label><br></br>

        <select

          id="select1"

          name="atmosphere"

          value={formData.atmosphere}

          onChange={handleInputChange}

        >

          <option>משעשע</option>

          <option>מרגש</option>

          <option>משמח</option>

          <option>אוהב</option>

          <option>מעריך</option>

        </select>

      </div>

 

      <div>

        <label htmlFor="length">  אורך הברכה:</label><br></br>

        <select

          id="length"

          name="length"

          value={formData.length}

          onChange={handleInputChange}

        >

          <option>קצר</option>

          <option>בינוני</option>

          <option>ארוך</option>

        </select>

      </div>

 

      <div>

        <label htmlFor="select2">האירוע שעבורו מיועדת הברכה:</label><br></br>

        <select

          id="select2"

          name="event"

          value={formData.event}

          onChange={handleInputChange}

        >

          <option>יום הולדת</option>

          <option>חלאקה</option>

          <option>בר מצווה</option>

          <option>בת מצווה</option>

          <option>חתונה</option>

          <option>הבעת תודה</option>

        </select>

      </div><br></br><br></br>

 

      <button onClick={navigateToBlessing}>ליצירת ברכה מתאימה🎁</button>

    </div>

  );

};

 

export default MakeBlessing;

 

 