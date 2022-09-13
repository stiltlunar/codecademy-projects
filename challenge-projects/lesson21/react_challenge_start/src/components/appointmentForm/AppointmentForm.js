import React from "react";
import ContactPicker from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} />
      <input type='date' name='date' value={date} min={getTodayString} onChange={e => setDate(e.target.value)} />
      <input type='time' name='time' value={time} onChange={e => setTime(e.target.value)} />
      <ContactPicker contacts={contacts} handleChange={setContact} />
      <input type='submit' value='submit' />
    </form>
  );
};
