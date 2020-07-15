import React, {Component} from "react";
import ReactDOM from "react-dom";
import Message from "./Message";
import Counter from "./Counter";

class HelloMessage extends Component {
  state = {
    messages: ["hellno", "it's me"],
};
  
generateMessage = () => {
  this.setState(({ messages }) => ({ messages: [...messages, "this is fine"] }));
}


  render() {
    const {  messages } = this.state;
    const { name } = this.props;

      return (
        <div>
          <Message name/>
          <p>Hello {name}!</p>
          <ul>
            {messages.map((message, index) => (
              <li key={index}>{message} </li>
            ))}
          </ul>
          <button onClick={this.generateMessage} >add word</button>
          <Counter />
        </div>
      );
    }
  }
  const element = document.getElementById('root')
  
  ReactDOM.render(
    <HelloMessage/>, element);