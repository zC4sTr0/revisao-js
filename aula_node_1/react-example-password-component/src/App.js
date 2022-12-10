import PasswordInput from "./PasswordInput";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "password123",
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div>
        <PasswordInput
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
      </div>
    );
  }
}
export default App;
