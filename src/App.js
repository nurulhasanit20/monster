import React,{Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters: [
        {
          name: 'Hassan',
          id:'asc1'
        },
        {
          name: 'dell',
          id:'asc2'
        },
        {
          name: 'Markov',
          id:'asc3'
        }
      ]
    };
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }
  
  render(){
    return(
      <div className="App">
      <CardList name='Nurul'>
      <h1>Nurul</h1>
      {this.state.monsters.map(monster => (
        <h1 key={monster.id}>{monster.name}</h1>
        ))}
        </CardList>
        </div>
        )}
      }
      
      export default App;
      