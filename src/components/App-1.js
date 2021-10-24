import React, { Component } from 'react'
import Message from './components/Message'
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      toggleMe: false,
      email: "",
      firstName: "",
      lastName: "",
      list: [
        {
          id: 1,
          item: "bear",
        },
        {
          id: 2,
          item: "tiger",
        },
        {
          id: 3,
          item: "lion",
        },
      ]
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  toggleMe = () => {
    //   this.setState({
    //     toggleMe: !this.state.toggleMe,
    //   });
    // };
    this.setState((prevState) => {
      return {
        toggleMe: !prevState.toggleMe
      }
    })
  };
    
    
  //add function to change state
  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  //subtract function to change state
  subtract = () => {
    this.setState({
      count: this.state.count - 1,
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleClickMe = () => {
    console.log(this.state);
  };

  handleSecondFormSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  handleSecondFormOnChange = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  showAnimalList = () => {
    return (
      <ul>
        {this.state.list.map(({ item, id }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    )
  };

  render() {
    return (
      // <div className="App"> css method 1
      // <div style={styles.appDiv}> css method 2
      <div style={{ textAlign: "center" }}>
        <Message
          name="class"
          message="how is your day going?"
          num={this.state.count}
        />
        <hr />
        <div>
          Count: {this.state.count}
          <div>
            <button onClick={this.add}>+</button>
            <button onClick={this.subtract}>-</button>
          </div>
          <hr />
          <div style={{
            height: 50,
            backgroundColor: this.state.toggleMe ?
              "blue" : "red",
          }}>
            <button onClick={this.toggleMe}>Toggle Me</button>
          </div>
        </div>
        <hr />
        <div>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <br />
          {this.state.email}
        </div>
        <hr />
        <div>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <br />
          {this.state.email}
        </div>
        <hr />
        <form onSubmit={this.handleOnSubmit}>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
          <button>Submit</button>
        </form>
        <hr />
        <input
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
        />
        <button onClick={this.handleClickMe}>Click Me</button>
        <hr />
        <form onSubmit={this.handleSecondFormSubmit}>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleSecondFormOnChange}
          />
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleSecondFormOnChange}
          />
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleSecondFormOnChange}
          />
          <button>Form 2 Submit</button>
        </form>
        <hr />

        <ul>
          {this.state.list.map((animal, index) => {
            return <li key={index}>{animal.item}</li>
          })}
        </ul>

        {/* deconstructed object method with key*/}
        <ul>
          {this.state.list.map(({ item, id }) => {
            return <li key={id}>{item}</li>
          })}
        </ul>

        <ul>
          {this.state.list.map(({ item, id }) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
        {this.showAnimalList()}
      </div>
    );
  }
}

//css method 2
// const styles = {
//   appDiv: {
//     textAlign: "center",
//   },
// }

export default App;
