import React from "react";

const StatisticLine = ({ text, value }) => (
  <table>
    <tbody>
      <tr>
        <td width="70">{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  </table>
);

export default StatisticLine;
