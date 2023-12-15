import React, {useState} from 'react'
import './style.css';


export const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge =()=>{
    const birthdateObj = new Date(birthdate);
    const currentDate = new Date();

    if(isNaN(birthdateObj.getTime())) {
      alert('Please enter a valid birthdate !');
      return;
    }

    const ageInMillis = currentDate - birthdateObj;
    const ageInYears = Math.floor(ageInMillis / (365.25 * 24  * 60 * 60 * 1000));
    setAge (ageInYears);
  }

  const resetForm = ()=>{
    setBirthdate('');
    setAge(null);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();

  }
  return (
    <div>
      <form className="ageform" onSubmit={handleSubmit}>
        <h1>Age Calculator !</h1>
        <div>
          <label>Enter your Birth Date : </label><br />
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div className="btn">
          <button onClick={calculateAge}>Calculate Age</button>
          <button className="reset" onClick={resetForm}>Reset</button>
        </div>
        {age !== null && (
          <div className="result-container">
            <p>Your age is : {age} years</p>
          </div>
        )}
      </form>
    </div>
  );
}
