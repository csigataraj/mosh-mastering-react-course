import React, { Component } from "react";

class Like extends Component {
  state = { liked: false };

  handleClick() {
    const liked = this.state.liked ? false : true;
    this.setState({ liked });
  }

  render() {
    // debugger;
    return (
      <i
        onClick={() => this.handleClick()}
        className={`fa fa-${this.state.liked ? "heart" : "heart-o"} mr-4`}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
