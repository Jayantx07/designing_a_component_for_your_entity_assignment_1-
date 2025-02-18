import React from 'react';
// import './App.css';

export default function Usercard() {
  const profilePhoto = 'https://i.ebayimg.com/images/g/TgIAAOSwP4NmMXTg/s-l1200.png';
  const name = 'Kobe X I';
  const email = 'jayantkumawat@email.com';
  const phone = '91+ 925XXXX890';
  const address = '1234 Elm Street, Rajasthan, India';

  return (
    <div className="card">
      <img src={profilePhoto} alt="Profile" className="logo" />
      <div className="read-the-docs">
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </div>
    </div>
  );
}