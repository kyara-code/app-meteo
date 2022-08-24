import React, { Component } from "react";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import styles from "./form-cap.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faWater,
  faWind,
  faTemperatureThreeQuarters,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

// const styles = require("./form-cap.module.css");

// creazione della componente

type MyProps = { onClose: () => void };
type MyState = { value: string; displayingResults: boolean };

var longitude: string = "";
var latitude: string = "";
const APP_ID: string = "159a07d0a04aa89e1eaa44174dd4bd12";

var weatherObj: any;

export default class FormCap extends Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = { value: "", displayingResults: false };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  submit(event) {
    alert("CAP code was inserted: " + this.state.value);
    event.preventDefault();

    const apiUrl: string = "https://api.zippopotam.us/it/" + this.state.value;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        longitude = (+res.places[0].longitude).toFixed(2).toString();
        latitude = (+res.places[0].latitude).toFixed(2).toString();

        // WEATHER FORECAST (qui perché potrei avere problemi di asincronicità mettendo la
        // seconda chiamata all'esterno)
        const apiUrlWeather =
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&appid=" +
          APP_ID +
          "&units=metric";

        fetch(apiUrlWeather)
          .then((res) => res.json())
          .then((res) => {
            weatherObj = res;
            this.setState({ displayingResults: true });
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  render() {
    if (this.state.displayingResults) {
      return (
        <div className={styles.form}>
          <div className={styles.closeIcon}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={this.props.onClose}
              style={{ cursor: "pointer", fontSize: "1.3em" }}
            />
          </div>
          <h1>{weatherObj.weather[0].main}</h1>
          <h3>{weatherObj.weather[0].description}</h3>
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> in {weatherObj.name}
          </p>
          <p>
            <FontAwesomeIcon icon={faTemperatureThreeQuarters} /> temperature:{" "}
            {weatherObj.main.temp}°C (perceived: {weatherObj.main.feels_like}°C)
            <br />
            <FontAwesomeIcon icon={faWater} /> humidity:{" "}
            {weatherObj.main.humidity}%
            <br />
            <FontAwesomeIcon icon={faWind} /> wind: {weatherObj.wind.speed} m/s
          </p>
        </div>
      );
    } else {
      return (
        <div className={styles.form}>
          <div className={styles.closeIcon}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={this.props.onClose}
              style={{ cursor: "pointer", fontSize: "1.3em" }}
            />
          </div>
          <form onSubmit={this.submit}>
            <TextField
              label="CAP"
              variant="filled"
              placeholder="ex. 53100"
              value={this.state.value}
              onChange={this.handleChange}
              required
              error={this.state.value === ""}
              helperText={this.state.value === "" ? "CAP is required" : ""}
            ></TextField>
            <Button
              type="submit"
              color="secondary"
              variant="outlined"
              onClick={this.submit}
            >
              Submit
            </Button>
          </form>
        </div>
      );
    }
  }
}
