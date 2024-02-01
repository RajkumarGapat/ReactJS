import React, { useState } from "react";

const ClockDropdown = () => {
  const [selectedTimeZones, setSelectedTimeZones] = useState([]);
  const [availableTimeZones, setAvailableTimeZones] = useState([
    { id: 1, name: "India", offset: "UTC+05:30 (IST)" },
    { id: 2, name: "New York", offset: "-04:00" },
    { id: 3, name: "London", offset: "+01:00" },
    { id: 4, name: "Tokyo", offset: "+09:00" },
    { id: 5, name: "Singapore", offset: "UTC+08:00 (SST)" },
    { id: 6, name: "Switzerland", offset: "UTC+01:00 (CET)" },
    { id: 7, name: "United Arab Emirates", offset: "UTC+04:00" },
    { id: 8, name: "Argentina", offset: "UTC−03:00 (ART)" },
  ]);
  const [selectedTimeZone, setSelectedTimeZone] = useState("");

  const handleTimeZoneSelect = (event) => {
    setSelectedTimeZone(event.target.value);
  };

  const handleAddTimeZone = () => {
    const timeZoneToAdd = availableTimeZones.find(
      (timeZone) => timeZone.name === selectedTimeZone
    );

    if (timeZoneToAdd && !selectedTimeZones.includes(timeZoneToAdd)) {
      setSelectedTimeZones((prevTimeZones) => [
        ...prevTimeZones,
        timeZoneToAdd,
      ]);
    }
  };

  return (
    <div>
      <h1>React Clock App</h1>
      <div>
        <label htmlFor="timeZoneSelect">Select a time zone: </label>
        <select
          id="timeZoneSelect"
          value={selectedTimeZone}
          onChange={handleTimeZoneSelect}
        >
          <option value="">-- Select a time zone --</option>
          {availableTimeZones.map((timeZone) => (
            <option key={timeZone.id} value={timeZone.name}>
              {timeZone.name}
            </option>
          ))}
        </select>
        <button onClick={handleAddTimeZone}>Add</button>
      </div>
      <div>
        <h2>Selected Time Zones:</h2>
        <ol>
          {selectedTimeZones.map((timeZone) => (
            <li key={timeZone.id}>
              {timeZone.name} (GMT {timeZone.offset})
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ClockDropdown;