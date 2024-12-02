import "./App.css";
import { puppyList } from "./data";
import { useState } from "react";


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {}
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className="app-container">
      <div className="puppy-list">
        <h1>Puppy Friends</h1>
        {puppies.map((puppy) => (
          <p
            className={`puppy-item ${featPupId === puppy.id ? "active" : ""}`}
            onClick={() => setFeatPupId(puppy.id)}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        ))}
      </div>

      {featPupId && (
        <div className="info-box">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>
              <strong>Age:</strong> {featuredPup.age}
            </li>
            <li>
              <strong>Email:</strong> {featuredPup.email}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
