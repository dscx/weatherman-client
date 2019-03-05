import React from "react";
import { Container, Row } from "reactstrap";
import ListItem from "./listItem";

export default class List extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.data.map(item => {
            return <ListItem key={item.id} item={item} />;
          })}
        </Row>
      </Container>
    );
  }
}
