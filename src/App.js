
import { Component, Fragment } from 'react';
import './App.css';
import ItemCard from './Components/ItemCard';
import SecondItemCard from './Components/SecondItemCard';
import CounterDZ from './Components/CounterDz';
//import Counter from './Components/Counter/Index';
//import Card from './Components/Card/Index';
//import Clock from './Components/Clock';
//import Calendar from './Components/Calendar';




    const card = {
      name: 'Pasta',
      price: '1.98 euro',
      imgSrc: 'https://images.immediate.co.uk/production/volatile/sites/30/2021/04/Pasta-alla-vodka-f1d2e1c.jpg?resize=960,872?quality=90&resize=556,505'
    };
    
    const card2 = {
      imgSrc: '#',
      h3: 'Create an account',
      h2: 'Create/login to an existing account to get started',
      p: 'An account is created with your email and a desired password'
    }
    
  export default class App extends Component {
  
    
  render() {
    return (
      <>
        <ItemCard item={card}/>
        <SecondItemCard item={card2}/>
        <CounterDZ />

        {/*<Counter step={5}/>
        <Clock />
        <Calendar />*/}
      </>
    )
  }
}





