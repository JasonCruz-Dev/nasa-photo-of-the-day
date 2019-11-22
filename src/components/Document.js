import React from "react";

const Document = ({ hdurl, title, text, date }) => {
  return (
    <div className='header'>
      <h1>Nasa Photo Of The Day:</h1>
      <div className='space-Container'>
        <img src={hdurl} alt='spacePhoto' />
        <div className='innertext'>
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
export default Document;
// completed - finished
