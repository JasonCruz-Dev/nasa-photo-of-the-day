import React, { useState, useEffect } from "react";
import axios from "axios";
import Document from "./Document";

export default function NasaApi() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=xyzrNoTV9bVGXmB7oG1e5dlWslbTB7VRUQUBNExZ")
      .then(nasa => {
        console.log(nasa);
        setNasa(nasa.data);
      })
      .catch(error => {
        console.log("Failed to Fetch Data", error);
      });
  }, []);
  console.log(nasa);

  return (
    <div className='space'>
      {<Document date={nasa.date} text={nasa.explanation} hdurl={nasa.hdurl} title={nasa.title} />}
    </div>
  );
}
