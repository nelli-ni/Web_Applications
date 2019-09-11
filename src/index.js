import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Grid() {
  return (
    <div id="board">
      <h1 align="center">Tic Tac Toe</h1>
      <table>
        <tr>
          <td>
            <button
              type="button"
              onClick={myFunction}
              className="cell"
              id="cell00"
            />
          </td>
          <td>
            <button type="button" class="cell" id="cell01" />
          </td>
          <td>
            <button type="button" class="cell" id="cell02" />
          </td>
          <td>
            <button type="button" class="cell" id="cell03" />
          </td>
          <td>
            <button type="button" class="cell" id="cell04" />
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" class="cell" id="cell10" />
          </td>
          <td>
            <button type="button" class="cell" id="cell11" />
          </td>
          <td>
            <button type="button" class="cell" id="cell12" />
          </td>
          <td>
            <button type="button" class="cell" id="cell13" />
          </td>
          <td>
            <button type="button" class="cell" id="cell14" />
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" class="cell" id="cell20" />
          </td>
          <td>
            <button type="button" class="cell" id="cell21" />
          </td>
          <td>
            <button type="button" class="cell" id="cell22" />
          </td>
          <td>
            <button type="button" class="cell" id="cell23" />
          </td>
          <td>
            <button type="button" class="cell" id="cell24" />
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" class="cell" id="cell30" />
          </td>
          <td>
            <button type="button" class="cell" id="cell31" />
          </td>
          <td>
            <button type="button" class="cell" id="cell32" />
          </td>
          <td>
            <button type="button" class="cell" id="cell33" />
          </td>
          <td>
            <button type="button" class="cell" id="cell34" />
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" class="cell" id="cell00" />
          </td>
          <td>
            <button type="button" class="cell" id="cell01" />
          </td>
          <td>
            <button type="button" class="cell" id="cell02" />
          </td>
          <td>
            <button type="button" class="cell" id="cell03" />
          </td>
          <td>
            <button type="button" class="cell" id="cell04" />
          </td>
        </tr>
      </table>
    </div>
  );
}

function myFunction() {
  document.getElementById("cell00").innerHTML = "X";
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Grid />, rootElement);
