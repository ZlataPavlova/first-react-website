import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import logo from './logo.svg';
import Message from './components/Message';
import SignIn from './components/SignIn';
import Contact from './components/Contact'
import './App.css';
import axios from 'axios';

const API = 'https://randomuser.me/api?results=10';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    axios.get(API)
      .then((res) => {

        this.setState({ userData: res.data.results });
      })
  }

  render() {
    const { userData } = this.state;

    return (
      <Router>
        <nav className='navigation'>
          <ul className='navigation-list'>
            <li>
              <Link to='/' className='navigation-link'> Home</Link>
            </li>
            <li>
              <Link to='/signIn' className='navigation-link'> Sign in</Link>
            </li>
            <li>
              <Link to='/contact' className='navigation-link'> Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/' exact>
            < div className="App" >
              {userData.map(({ name, picture, location, id }) => {
                return (
                  <Message
                    name={`${name.first} ${name.last}`}
                    logo={picture.thumbnail}
                    title={location.country}
                    text={location.city}
                    key={id.value}
                  />
                );
              })}
            </div>
          </Route>
          <Route path='/signIn'>
            <SignIn />
          </Route>
          <Route path='/contact'>
            < div className="App" >
              <Contact />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;