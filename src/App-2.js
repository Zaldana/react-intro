import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export class App extends Component {
  state = {
    postArray: [
      {
        id: uuidv4(),
        body: "Lol",
      },
      {
        id: uuidv4(),
        body: "hehe",
      },
      {
        id: uuidv4(),
        body: "haha",
      },
    ],
    post: "",
    isError: false,
    errorMessage: "",
  };

  handleShowPostArray = () => (
    <ul>
      {this.state.postArray.map(({ body, id }) => (
        <li key={id}>{body}<button onClick={() => this.handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );

  handleDelete = (id) => {
    const newPostArray = this.state.postArray.filter((item) => item.id !== id);

    this.setState({
      postArray: newPostArray,
    });
  };

  handleInputChange = (event) => {
    // if (event.target.value.length > 0) {
    //   this.setState({
    //     isError: false,
    //     errorMessage: "",
    //   });
    // }
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        if (this.state.post.length > 0) {
          this.setState({
            isError: false,
            errorMessage: "",
          });
        }
      }
    );
  };

  handlePostSubmit = (event) => {
    
    console.log("post", this.state.post);
    console.log(" postarray", this.state.postArray);

    event.preventDefault();

    if (this.state.post.length === 0) {
      
      this.setState({
        isError: true,
        errorMessage: "Sorry, you cannot submit an empty field",
      });
    
    } else if (this.state.postArray.map((item) => item.body).indexOf(this.state.post) > -1) {

      this.setState({
        isError: true,
        errorMessage: "Sorry, you cannot submit duplicate",
      });
    
    } else {
      
      let newArray = [
        ...this.state.postArray,
        { id: uuidv4(), body: this.state.post },
      ];

      this.setState({
        postArray: newArray,
        post: "",
      });
    
    }
  };

  /*
    1. after a successful submit the input should get cleared
    2. if the input is empty and a user tried to submit, it should show up an error message "Cannot submit an empty field"
    3. as soon as there value in the input field the error message is cleared
    4. using css make the bullet points go away
  */

  render() {
    const { post, isError, errorMessage } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.handlePostSubmit}>
          <input name="post" value={post} onChange={this.handleInputChange} />
          <button>Submit</button>
        </form>
        {isError ? <span style={{ color: "red" }}>{errorMessage}</span> : ""}
        {this.handleShowPostArray()}
      </div>
    );
  }
}

export default App;
