import React from "react";
import Navbar from "../components/Navbar";

const TemperatureAndHumidityMonitorPage = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8080/api/arduino-data")
      .then((response) => response.json())
      .then((data) => setData(data.feeds));
  }, []);
  return (
    <>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              {" "}
              Temperature & Humidity Monitoring
            </h1>
            <p className="mb-5">Your Temperature is</p>
            <button className="btn btn-primary">31 degree celcius</button>
            <p className="mb-5">Your Humidity is</p>
            <button className="btn btn-primary">95%</button>
          </div>
        </div>
      </div>
      <footer />
    </>
  );
};

export default TemperatureAndHumidityMonitorPage;
