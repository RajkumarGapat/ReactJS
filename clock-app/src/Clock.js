import React, { useState, useEffect } from "react";
import "./Clock.css";
const Clock = ({ country, timezone, onClose }) => {
const [time, setTime] = useState(
new Date().toLocaleTimeString([], {
hour: "2-digit",
minute: "2-digit",
second: "2-digit",
})
);
useEffect(() => {
const interval = setInterval(() => {
setTime(
new Date().toLocaleTimeString([], {
hour: "2-digit",
minute: "2-digit",
second: "2-digit",
timeZone: timezone,
})
);
}, 1000);
return () => clearInterval(interval);
}, [timezone]);
const handleButtonClick = () => {

onClose(timezone);
};
const hours = new Date().getHours();
const ampm = hours >= 12 ? "PM" : "AM";
const backgroundColor = ampm === "AM" ? "lightblue" : "lightpink";
return (
<div className="clock" style={{ backgroundColor }}>
<div className="country">{country}</div>
<div className="time">{time}</div>
<button className="close" onClick={handleButtonClick}>
Close
</button>
</div>
);
};
const Clockapk = () => {
const [clocks, setClocks] = useState([
{
country: "Local",
timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
},
{ country: "New York", timezone: "America/New_York" },
{ country: "London", timezone: "Europe/London" },
{ country: "Tokyo", timezone: "Asia/Tokyo" },
]);
const handleCloseClock = (timezone) => {
const updatedClocks = clocks.filter((clock) => clock.timezone !==
timezone);
setClocks(updatedClocks);
};
return (
<div className="apk">
{clocks.map(({ country, timezone }) => (
<Clock
key={timezone}
country={country}
timezone={timezone}
onClose={handleCloseClock}
/>
))}
</div>
);
};

export default Clockapk;