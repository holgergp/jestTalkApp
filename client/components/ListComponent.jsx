import React, { Component } from "react";
import PropTypes from "prop-types";
import Text from "./TextComponent.jsx";

const List = class ListComponent extends Component {
  render() {
    const { values } = this.props;
    const lis = values.map(elem => (
      <dt key={elem.toString()}>
        <Text value={elem} />
      </dt>
    ));
    return <dl>{lis}</dl>;
  }
};

List.PropTypes = { values: PropTypes.array.isRequired };
export default List;
