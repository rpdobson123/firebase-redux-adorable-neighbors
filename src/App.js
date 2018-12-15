import React, { Component } from "react";
import "./App.css";
import NeighborManager from "./NeighborManager";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
class App extends Component {
  render() {
    return <NeighborManager neighbors={this.props.neighbors} />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { neighbors: state.firestore.ordered.neighbors };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "neighbors" }])
)(App);
