import React, { Component } from 'react';
import HomePageComponent from './components/HomePageComponent';
import PeoplePageComponent from './components/PeoplePageComponent';
import WorkPageComponent from './components/WorkPageComponent';
import LaunchPageComponent from './components/LaunchPageComponent';
import './App.css';

class App extends Component {

  onScrollClick(title) {
    // scroll to the right section
    console.log(`Clicked ${title}`);

    switch(title) {
      case 'launch something':
        this.homePage.scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case 'who we are':
        this.peoplePage.scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case 'what we do':
        this.workPage.scrollIntoView({ block: "start", behavior: "smooth" });
        break;
      case 'how we do it':
        this.launchPage.scrollIntoView({ block: "start", behavior: "smooth" });
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div ref = { (element) => {this.homePage = element;} }></div>
        <HomePageComponent onScrollClick = {title => this.onScrollClick(title)} />
        <div ref = { (element) => {this.peoplePage = element;} }></div>
        <PeoplePageComponent onScrollClick = {title => this.onScrollClick(title)} />
        <div ref = { (element) => {this.workPage = element;} }></div>
        <WorkPageComponent onScrollClick = {title => this.onScrollClick(title)} />
        <div ref = { (element) => {this.launchPage = element;} }></div>
        <LaunchPageComponent onScrollClick = {title => this.onScrollClick(title)} />
      </div>
    );
  }
}

export default App;
