import React, { Component } from "react";
import { createNeighbor } from "./store/actions/neighborActions";
import { connect } from "react-redux";
import "./App.css";
const purpleStyle = {
  padding: "12px",
  backgroundColor: "purple",
  border: "2px solid black",
  placeholderColor: "red",
  color: "white",
  margin: "6px"
};

class NeighborManager extends Component {
  constructor() {
    super();
    this.state = {
      newNeighbor: {}
    };
  }

  render() {
    console.log(this.props.neighbors);
    return (
      <div className="App">
        <header className="App-header">
          {this.renderNeighborAdder()}
          <hr width="300" />
          <span>
            {this.props.neighbors && this.props.neighbors.length
              ? this.props.neighbors.map((neighbor, index) => {
                  return (
                    <div key={`${neighbor.name}-${index}`}>
                      <div
                        style={{
                          display: "inline-block",
                          marginTop: "40px",
                          position: "relative"
                        }}
                      >
                        <img alt={neighbor.name} src={neighbor.picture} />
                        <b
                          style={{
                            position: "relative",
                            zIndex: 20,
                            left: "-100px",
                            userSelect: "none",
                            top: "16px",
                            backgroundColor: "wheat",
                            width: "100px",
                            color: "black",
                            fontSize: "16px",
                            display: "inline-block",
                            marginBottom: "6px",
                            overflow: "hidden"
                          }}
                        >
                          {neighbor.name}
                        </b>
                      </div>
                      {(index + 1) % 3 === 0 ? <br /> : ""}
                    </div>
                  );
                })
              : "No Neighbors"}
          </span>
        </header>
      </div>
    );
  }

  addNeighbor = () => {
    const { newNeighbor } = this.state;
    const neighbor = {
      ...newNeighbor,
      picture: `https://api.adorable.io/avatars/100/${newNeighbor.name.trim()}`
    };
    this.props.createNeighbor(neighbor);
  };

  //   mapDispatch
  renderNeighborAdder = () => {
    const { newNeighbor } = this.state;
    return (
      <span>
        Add a neighbor:
        <input
          style={purpleStyle}
          type="text"
          placeholder="Enter a neighbor Name..."
          onChange={e =>
            this.setState({
              newNeighbor: {
                ...newNeighbor,
                name: e.currentTarget.value
              }
            })
          }
          value={this.state.newNeighbor.name}
        />
        {newNeighbor.name && newNeighbor.name.trim().length ? (
          <button onClick={this.addNeighbor} style={purpleStyle}>
            + Add Neighbor
          </button>
        ) : (
          ""
        )}
      </span>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    createNeighbor: neighbor => dispatch(createNeighbor(neighbor))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(NeighborManager);
