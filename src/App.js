import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/dark.jpg'

class App extends Component{
  // constructor(){
  //   super();
  //   this.state = { displayBio : false };

  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }



 state = { displayBio : false };

 toggleDisplayBio = () => {
   this.setState({ displayBio : !this.state.displayBio });
 }
  render() {
    return (
      <div>
        <img src={profile} alt='profile pic' className='dark'/>
        <h1>Hello</h1>
        <p>My name is Kushagra</p>
        <p>I'm a frontEnd developer</p> 
      {
          this.state.displayBio ? (
            <div>
              <p>visible if true</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ): (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
      }

      <hr />
      <Projects />

      <hr />
      <SocialProfiles />

      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('div',null,'Does this works now ?'));
  }
}

export default App; 
