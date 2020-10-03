import React,{Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
class App extends Component {
  constructor(){
    super();
    // this.state ={
    //   monsters: [
    //     {
    //       name: 'Hassan',
    //       id:'asc1'
    //     },
    //     {
    //       name: 'dell',
    //       id:'asc2'
    //     },
    //     {
    //       name: 'Markov',
    //       id:'asc3'
    //     }
    //   ]
    // };
    this.state ={
      monsters: [],
      searchField: ''
    };
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }
  
  render(){
    const { monsters, searchField }  = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <input type='search' placeholder='Search for monster' onChange={e => {this.setState({searchField:e.target.value}
         );
        
        }}/>
      <CardList monsters={filteredMonsters} />
      </div>
    )
      }}
      
      export default App;