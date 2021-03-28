import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./input.css";

// Material UI Styling
const btnStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: "10px 10px",
  },
  label: {
    textTransform: "capitalize",
  },
});

const databtnStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .10)",
    margin: "10px 10px",
  },
  label: {
    textTransform: "capitalize",
  },
});

export default function UserInput({getAll, getCurrent}) {
  // Material UI styles
  const btnclass = btnStyles();
  const databtnclass = databtnStyles();

  // Creating State for user input for zipcode
  const [input, setInput] = useState("")

  return (
    <div className="postal-div">
      <h1>Weather App</h1> <br />
      <div className="input-div">
        <input
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            className="zip-input"
        ></input>
      </div>
      <br />
      <div style={{ display: "flex", width: "100%" }}>
        <Button
            onClick={()=>getCurrent(input)}
            classes={{
                root: btnclass.root,
                label: btnclass.label,
            }}
        >
          Get Current Weather
        </Button>
        <Button
        onClick={()=>getAll(input)}
          classes={{
            root: databtnclass.root,
            label: databtnclass.label,
          }}
        >
          Get All Data
        </Button>
      </div>
    </div>
  );
}
