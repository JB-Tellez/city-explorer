function Weather(props) {

  return (
    props.weather.map((day, index) => (
      <div key={index}>
        <p>day: {day.date}</p>
        <p>description: {day.description}</p>
      </div>
    ))
  );
}


export default Weather;
