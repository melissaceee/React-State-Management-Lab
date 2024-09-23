import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ];
  
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter])
      setMoney([money - fighter.price])
      setTotalAgility(totalAgility + fighter.agility)
      setTotalStrength(totalStrength + fighter.strength)
    } else {
      console.log("Not enough money")
    }
  }

  const handleRemoveFighter = (fighterToRemove) => {
    setTeam(team.filter((fighter) => fighter.name !== fighterToRemove.name))
    setMoney(money + fighterToRemove.price)
    setTotalAgility(totalAgility - fighterToRemove.agility)
    setTotalStrength(totalStrength - fighterToRemove.strength)
  }

  return (
    <div className="App">
      <h1>Zombie Apocolypse Team</h1>
      <p>Money: ${money}</p>
      <h2>Fighters Available</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <p>Name: {fighter.name}</p>
            <p>Price: ${fighter.price}</p>
            <p>Agility: {fighter.agility}</p>
            <p>Strength: {fighter.strength}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
      <h2>Your Team!</h2>
      {team.length === 0 ? (
        <p>Make Your Selections</p>
      ) : (
        <ul>
          {team.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt={fighter.name} />
              <p>Name: {fighter.name}</p>
              <p>Price: ${fighter.price}</p>
              <p>Agility: {fighter.agility}</p>
              <p>Strength: {fighter.strength}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
             </li> 
          ))}
        </ul>
      )}
    <div>
      <h3> Total Team Agility: {totalAgility}</h3>
      <h3>Total Team Strength: {totalStrength}</h3>
    </div>
   </div>  
  )
} 



export default App