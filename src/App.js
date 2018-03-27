import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import {skills} from './Skills/Skills';
import SkillList from './Skills/SkillList';
import Portfolio from './Portfolio/Portfolio';
import Features from './Features/Features';
import Footer from './Footer/Footer';
class App extends Component {
  constructor() {
    super()
    this.state={
      skills:skills,
      route:'home'
    }
  }

   onRouteChange = (route) => {
    this.setState({route:route});
  }

  render() {
    const route = this.state;

    return (
      <div className="App">
        <Header onRouteChange={this.onRouteChange}/>
       
        {this.state.route === 'home' 
        ?  <Body /> 
        :(
          this.state.route === 'portfolio' 
          ?  <Portfolio /> 
          :(this.state.route === 'skills' 
            ?  <SkillList skills={this.state.skills}/> 
            :this.state.route === 'features' 
              ?  <Features /> 
              : <Features /> 
            )
          )
      }
        <Footer />
      </div>
    );
  }
}

export default App;
