import React from "react";
import "./StudentMark.css";
const StudentMarkTable = () => {
return (
<>
<div id="my-div">
<h2>Student Marks</h2>
</div>
<table id="Student-Mark-table">
<thead>
<colgroup id="my-col"></colgroup>
<tr>
<th bgcolor="lightsalmon">Roll.No</th>
<th bgcolor="lightsalmon">Name</th>
<th bgcolor="lightsalmon">Physics</th>
<th bgcolor="lightsalmon">Chemistry</th>
<th bgcolor="lightsalmon">Mathematics</th>
<th bgcolor="lightsalmon">English</th>
<th bgcolor="lightsalmon">CS</th>
<th bgcolor="lightsalmon">Mark Obtained</th>
<th bgcolor="lightsalmon">Total Mark</th>
</tr>
</thead>
<tbody>
<tr>
<td bgcolor="#dddddd">01</td>
<td bgcolor="Green">Raj</td>
<td bgcolor="#dddddd">80</td>
<td bgcolor="#dddddd">90</td>
<td bgcolor="#dddddd">85</td>
<td bgcolor="#dddddd">75</td>
<td bgcolor="#dddddd">91</td>
<td bgcolor="lawngreen">421</td>


<td bgcolor="aqua">500</td>
</tr>
<tr>
<td bgcolor="white">02</td>
<td bgcolor="Green">Rohit</td>
<td>70</td>
<td>90</td>
<td>95</td>
<td>85</td>
<td>61</td>
<td bgcolor="lawngreen">401</td>
<td bgcolor="aqua">500</td>
</tr>
<tr>
<td bgcolor="#dddddd">03</td>
<td bgcolor="Green">Sushant</td>
<td bgcolor="#dddddd">60</td>
<td bgcolor="#dddddd">80</td>
<td bgcolor="#dddddd">95</td>
<td bgcolor="#dddddd">55</td>
<td bgcolor="#dddddd">81</td>
<td bgcolor="lawngreen">371</td>
<td bgcolor="aqua">500</td>
</tr>
<tr>
<td>04</td>
<td bgcolor="Green">Sumit</td>
<td>50</td>
<td>87</td>
<td>65</td>
<td>85</td>
<td>90</td>
<td bgcolor="lawngreen">377</td>
<td bgcolor="aqua">500</td>
</tr>
<tr>
<td bgcolor="#dddddd">05</td>
<td bgcolor="Green">Viraj</td>
<td bgcolor="#dddddd">95</td>
<td bgcolor="#dddddd">84</td>
<td bgcolor="#dddddd">69</td>
<td bgcolor="#dddddd">54</td>
<td bgcolor="#dddddd">90</td>
<td bgcolor="lawngreen">392</td>


<td bgcolor="aqua">500</td>
</tr>
</tbody>
</table>
</>
);
};
export default StudentMarkTable;