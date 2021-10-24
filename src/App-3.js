import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";

export class App extends Component {
  
  //runs first
  state = {
    message: "...loading",
    backgroundColor: "orange",
    toggleShowMe: true,
  };

  //runs third
  componentDidMount() {

    setTimeout(() => {
      this.setState({
        message: "component did mount executed! so the message is changed",
        backgroundColor: "red"
      })
    }, 2000)
  }

  //runs componentDidUpdate gets called after set state
  componentDidUpdate(prevProps, prevState) {

    if (prevState.message !== this.state.message) {
      this.setState({
        message: "component did update executed! so the message is changed again",
        backgroundColor: "blue"
      })
    }

    //infinate loop!! because didUpdate runs after every setState
    // if (
    //   prevState.message === "component did mount executed! so the message is changed again"
    // ) {

    //   console.log("hello class");
    //   this.setState({ color: "pink"})
    // }

  }

  handleClickMe = () => {
    this.setState({
      message: "clicked",
    });
  };

  toggleShowMe = () => {

    this.setState((prevState) => {
      return {
        toggleShowMe: !prevState.toggleShowMe,
      }
    })
  }

  //second
  render() {

    return <div className="App"
      style={{ backgroundColor: this.state.backgroundColor }}>
      <h1>{this.state.message}</h1>
      <button onClick={this.handleClickMe}>Click Me</button>

      <hr />
      <div style={{ backgroundColor: "white" }}>
        {this.state.toggleShowMe ? <ShowMe /> : ""}
        <button onClick={this.toggleShowMe}>Toggle Me</button>
      </div>
    </div>
       
  }
}

class ShowMe extends Component {
  
  state = {
    showMeMessage: "Show me Component",
  };

  componentDidMount() {
    
    this.showMeSetTimeout = setTimeout(() => {

      this.setState({
        showMeMessage: "Set time out is executed!!!!!! Show me"
      });
    
    }, 3000)
  }

  componentWillUnmount() {
    console.log(97);
    clearTimeout(this.showMeSetTimeout)
  }

  render() {

    return <div>{this.state.showMeMessage}</div>

  }
}

export default App;