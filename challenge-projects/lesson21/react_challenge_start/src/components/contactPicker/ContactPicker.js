import React from "react";

export default function ContactPicker({ contacts, handleChange }) {
  return (
    <select onChange={handleChange}>
      <option value='None' key='default'>None</option>
      {contacts.map((element, i) => {
        return <option value={element.name} key={i}>{element.name}</option>
      })}
    </select>
  );
};
