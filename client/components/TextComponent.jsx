import React, { Component } from "react";
import PropTypes from "prop-types";

const Text = class TextComponent extends Component {
  render() {
    const { value } = this.props;
    return <div className="Text">{value}</div>;
  }
};
Text.propTypes = {
  value: PropTypes.string.isRequired
};

export default Text;
