import React, { useState } from 'react';

const Water = () => {
  const [cupsDrunk, setCupsDrunk] = useState(0);
  const [stepsTaken, setStepsTaken] = useState(0);

  const handleCupsChange = (e) => {
    const cups = parseInt(e.target.value);
    setCupsDrunk(cups);
  };

  const handleStepsChange = (e) => {
    const steps = parseInt(e.target.value);
    setStepsTaken(steps);
  };

  return (
    <div>
      <h2>Water Tracker</h2>
      <div>
        <label htmlFor="cups">Cups of Water Drunk:</label>
        <input
          type="number"
          id="cups"
          value={cupsDrunk}
          onChange={handleCupsChange}
        />
      </div>
      <div>
        <label htmlFor="steps">Steps Taken:</label>
        <input
          type="number"
          id="steps"
          value={stepsTaken}
          onChange={handleStepsChange}
        />
      </div>
      <div>
        <p>Number of cups drunk: {cupsDrunk}</p>
        <p>Number of steps taken: {stepsTaken}</p>
      </div>
    </div>
  );
};

export default Water;
