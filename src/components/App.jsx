import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App(props) {
  props = contacts;
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        tel="+123 456 789"
        email="b@beyonce.com"
      />
    </div>
  );
}

export default App;
