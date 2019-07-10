import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import Tabbar from './Tabbar';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

class comp extends Component {
  constructor(props) {
    super(props);
    console.log("The props:",props);
  }
  render() {
    return (
      <div>
        <Tabbar></Tabbar> 
      </div>
    );     
  }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(comp);