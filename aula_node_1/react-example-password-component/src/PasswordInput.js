import React from "react";
import "./PasswordInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };
  }

  toggleShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { showPassword } = this.state;
    return (
      <div className="password-input-container">
        <div className="password-input-inner">
          <input
            className="password-input"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={this.props.value}
            onChange={this.props.onChange}
          />
          <button onClick={this.toggleShowPassword}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </button>
        </div>
      </div>
    );
  }
}

export default PasswordInput;
