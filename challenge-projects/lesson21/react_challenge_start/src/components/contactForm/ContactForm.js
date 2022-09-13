import React from "react";

export default function ContactForm({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={name} onChange={e => setName(e.target.value)} />
      <input type='tel' name='phone' value={phone} pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}' onChange={e => setPhone(e.target.value)} />
      <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
      <input type='submit' value='submit' />
    </form>
  );
};
