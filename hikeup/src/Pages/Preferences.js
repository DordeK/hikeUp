import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/prefrences.css'
function Preferences() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [stayDuration, setStayDuration] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [hikingDuration, setHikingDuration] = useState('');
  const [trailType, setTrailType] = useState('');
  const [questType, setQuestType] = useState('');

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      age,
      location,
      stayDuration,
      difficulty,
      hikingDuration,
      trailType,
      questType,
    };

    console.log(formData);

    // save data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    // redirect to home page
    history('/home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>

      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
      </label>

      <label>
        Current Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </label>

      <label>
        Duration of Stay( In days ):
        <input type="number" value={stayDuration} onChange={(e) => setStayDuration(e.target.value)} required />
      </label>

      <label>
        Difficulty:
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required>
          <option value="">Select...</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      <label>
        Hiking Duration( in hours ):
        <input type="number" value={hikingDuration} onChange={(e) => setHikingDuration(e.target.value)} required />
      </label>

      <label>
        Type of Trail:
        <select value={trailType} onChange={(e) => setTrailType(e.target.value)} required>
          <option value="">Select...</option>
          <option value="coastal">Coastal</option>
          <option value="forest">Forest</option>
          <option value="mountain">Mountain</option>
          <option value="city">City</option>
          <option value="village">Village/Rural</option>
        </select>
      </label>

      <label>
        Type of Quests:
        <input type="text" value={questType} onChange={(e) => setQuestType(e.target.value)} required />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Preferences;
