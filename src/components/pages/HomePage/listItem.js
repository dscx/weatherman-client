import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardHeader,
  CardFooter,
  Col
} from "reactstrap";
import Moment from "react-moment";

export default class ListItem extends React.Component {
  render() {
    const { city, item } = this.props;
    return (
      <Col style={styles.main}>
        <CardHeader>
          <Moment format="MM/DD" date={item.applicable_date} />
        </CardHeader>
        <Card body className="text-center">
          <CardTitle>{city}</CardTitle>
          <CardText style={styles.cardText}>
            {item.weather_state_name}
            <br />
            <img
              style={styles.weatherIcon}
              src={`https://www.metaweather.com/static/img/weather/${
                item.weather_state_abbr
              }.svg`}
            />
            <br />
            {Number(item.min_temp.toFixed(1))}° -{" "}
            {Number(item.max_temp.toFixed(1))}°
          </CardText>
        </Card>
        <CardFooter>
          {item.wind_direction_compass} winds at{" "}
          {Number(item.wind_speed.toFixed(1))} mph
        </CardFooter>
      </Col>
    );
  }
}

const styles = {
  main: {
    maxWidth: 200
  },
  weatherIcon: {
    height: 50
  }
};
