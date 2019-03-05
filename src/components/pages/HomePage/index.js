import React from "react";
import { SearchBar } from "./searchbar";
import List from "./list";
import { Card, CardText, CardHeader } from "reactstrap";
import { getWeather } from "../../../api/api";

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  _getWeather = async (coords) => {
    const { data } = await getWeather(coords)
    this.setState({
      data: data.consolidated_weather
    })
  }

  render() {
    return (
      <div>
        <CardHeader className={"text-center"}>
          <SearchBar getWeather={this._getWeather} />
        </CardHeader>
        <Card body className={"text-center"}>
          <List data={this.state.data} />
        </Card>
      </div>
    );
  }
}

export default HomePage;
