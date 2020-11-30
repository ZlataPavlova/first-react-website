import React from 'react';
import Register from './Register';

import './SignIn.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isActive: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    console.log(this.state.isActive)
    return (
      <div className='main'>
        {this.state.isActive ? (
            <Register />
          ):(
              <div className='sign-in'>
              <h1 className='sign-in__title'>Log in!</h1>
              <form onSubmit={this.handleSubmit} className='sign-in__form'>
                <input type="text" className='sign-in__name' value={this.state.value} onChange={this.handleChange} placeholder="Enter a login, email, phone" required />
                <input type="submit" className='sign-in__entrance-button button' value="Log In" />
                <input type="submit" className='sign-in__register-button button' value="Sign Up" onClick={this.handleClick} />
              </form>
            </div>
          )}

      </div>

    );
  }

}
export default SignIn;