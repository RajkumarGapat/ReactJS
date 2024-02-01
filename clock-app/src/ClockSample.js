import React, { useState, useEffect } from "react";
import "./ClockStyle.css";
const Clock = ({ country, timezone }) => {
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
return (
<div className="clock">
<div className="country">{country}</div>
<div className="time">{time}</div>
</div>
);
};
const Clocks = () => {
const [clocks, setClocks] = useState([
{
country: "Local",
timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
},
{ country: "New York", timezone: "America/New_York" },
{ country: "London", timezone: "Europe/London" },
{ country: "Tokyo", timezone: "Asia/Tokyo" },
]);

return (
<div className="app">
{clocks.map(({ country, timezone }) => (
<Clock key={timezone} country={country} timezone={timezone} />
))}
</div>
);
};
export default Clocks;