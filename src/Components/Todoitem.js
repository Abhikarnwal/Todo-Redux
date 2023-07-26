/**
 * The Todoitem component displays the details of a specific todo item based on the id parameter from
 * the URL.
 * @returns The Todoitem component is returning a div element containing an h2 element with the text
 * "Todo Details" and an h3 element displaying the value of the id parameter obtained from the URL
 * using the useParams hook.
 */

import React from "react";
import { useParams } from "react-router-dom";

export default function Todoitem() {
  const { id } = useParams();

  return (
    <div>
      <h2>Todo Details</h2>
      <h3>{id}</h3>
    </div>
  );
}
