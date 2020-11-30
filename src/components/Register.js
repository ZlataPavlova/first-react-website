import React from 'react';
import SignIn from './SignIn';
import './Register.css';
import './SignIn.css';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      country: '',
      login: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name)
    console.log(value)
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    console.log(this.state.firstName)
    alert('Отправленное имя: ' + ' ' +  this.state.firstName + ' ' + 'Отправленная фамилия: ' + ' ' + this.state.lastName + ' ' +'Страна проживания: ' + ' ' +this.state.country + ' ' +'Введен логин: ' + ' ' + this.state.login    );
   
    event.preventDefault();
  }

  render() {

    return (
      <div className='register'>
        <h1 className='register__title'>Registration</h1>
        
        <form className='register__form' onSubmit={this.handleSubmit}>
          <input type="text" className='register__name' placeholder="First name" name="firstName" value= {this.state.firstName} onChange={this.handleChange}  required />
          <input type="text" className='register__name' placeholder="Last name" name="lastName" value= {this.state.lastName} onChange={this.handleChange} required />
          <input type="text" className='register__name' placeholder="Country" name="country" value= {this.state.country} onChange={this.handleChange} required />
          <input type="text" className='register__name' placeholder="Enter a login" name="login" value= {this.state.login} onChange={this.handleChange} required />
          <input type="password" className='register__name' placeholder="Enter a password" name="password" value= {this.state.password} onChange={this.handleChange} required />
          <input type="password" className='register__name' placeholder="Confirm a password" required />
          <input type="submit" className='register__entrance-button button' value="Register" />
        </form>
        
      </div>
    );
  }
}
export default Register;