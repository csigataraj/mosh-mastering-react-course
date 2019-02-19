import React, { Component } from "react";

class Counter extends Component {
  componentWillUnmount() {
    window.alert(`Counter #${this.props.counter.id} has been deleted`);
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => {
              this.props.onIncrement(this.props.counter);
            }}
            className="btn btn-secondary btn-sm ml-4"
          >
            +
          </button>
          <button
            onClick={() => {
              this.props.onDecrement(this.props.counter);
            }}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => {
              this.props.onDelete(this.props.counter.id);
            }}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
