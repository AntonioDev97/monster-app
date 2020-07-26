import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import './App.css';
import { Search } from './components/search/search.component';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      monsters: [], 
      search: ""
    };
  }
  async componentDidMount() {
    try {
      const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
      this.setState({monsters: data});
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  }

  render() {
    const Filter = this.state.monsters.filter(m => m.name.toLowerCase().includes(this.state.search.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster React App</h1>
        <Search handleChange={this.handleChange}/>
        <CardList monsters={Filter}></CardList>
      </div>
    );
  }
}

export default App;
