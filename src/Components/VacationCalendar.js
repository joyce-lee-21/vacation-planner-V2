import React from "react";

export default function VacationCalendar() {
  return (
    <div className="calendar-container">
      <table>
          <thead>
              <tr>
                  <th colSpan="1">Sunday</th>
                  <th colSpan="1">Monday</th>
                  <th colSpan="1">Tuesday</th>
                  <th colSpan="1">Wednesday</th>
                  <th colSpan="1">Thursday</th>
                  <th colSpan="1">Friday</th>
                  <th colSpan="1">Saturday</th>
              </tr>
          </thead>
          {/* Below should be dynamic to a conditional function*/}
          <tbody>
              <tr className="calendar-week-row">
                <td>
                  <div className="calendar-date-box">
                    <p>20</p>
                  </div>
                </td>
                <td>
                  <div className="calendar-date-box">
                    21
                  </div>
                </td>
                <td>
                  <div className="calendar-date-box">
                    22
                  </div>
                </td>
                <td>
                  <div className="calendar-date-box">
                    23
                  </div>
                </td>
                <td>
                  <div className="calendar-date-box">
                    24
                  </div>
                </td>
                <td>
                  <div className="calendar-date-box">
                    25
                  </div>
                </td>
                <td>
                  <div className="calendar-date-box">
                    26
                  </div>
                </td>
              </tr>
          </tbody>
      </table>
      <h2></h2>
    </div>
  )
}