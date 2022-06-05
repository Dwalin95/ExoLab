//import logo from './logo.svg'; //importo il logo di react
//import './App.css'; //file di stile .css che andranno ad assegnare le varie caratteristiche del sito
import Navbar from "./components/navbar";
import Card from "./components/card";
import React, {Component} from "react";
import Califormia from './Immagini_esercizio/Califormia.jpg'
import cal2 from './Immagini_esercizio/cal2.jpg'
import cal3 from './Immagini_esercizio/cal3.jpg'
import cal4 from './Immagini_esercizio/cal4.jpg'
import cal5 from './Immagini_esercizio/cal5.jpg'
import cal6 from './Immagini_esercizio/cal6.jpg'
  // App() { //sto dichiarando una funzione di nome App, ha solo una dichiarazionne di return; questa funzione rappresenta un componente REACT
  //i ocmponenti react sono delle porzioni di codice riutilizzabili, che svolgono delle operazioni ed avere anche una propria memoria,
  // un componente può essere una barra di navigazione, una card ecc..
  //una volta defiunito il componente va esportato con la parola expot, che vediamo in fondo.
  class App extends Component {
state = { 
  cards: [
    {id: 0, nome: "California", prezzo: 4.20, immagine: Califormia, quantità: 0},
    {id: 1, nome: "Dragon", prezzo: 5.60, immagine: cal2, quantità: 0},
    {id: 2, nome: "Bomber", prezzo: 10.99, immagine: cal3, quantità: 0},
    {id: 3, nome: "Bis", prezzo: 11.99, immagine: cal4, quantità: 0},
    {id: 4, nome: "Darth Vader", prezzo: 6.66, immagine: cal5},
    {id: 5, nome: "Obi Wan", prezzo: 5.55, immagine: cal6, quantità: 0}
  
  ]
}

//funzione che si occupa della cancellazione

delete = cardId => {
  const cards=this.state.cards.filter(card => card.id !== cardId);
  //quando aggiorniamo lo state di react si fa unicamente con il setState
  this.setState({cards})
}
increment = card => {
  const cards = [...this.state.cards];
  const id = cards.indexOf(card);
  cards[id] = {...card};
  cards[id].quantità++;
  this.setState({cards});
}

  render(){
  return (
<>
<Navbar/>
<div className="container">
<h1>Cosa desideri ordinare?</h1>
<hr />
<div className="row">
{this.state.cards.map(card => (
<Card 
key={card.id}
onIncrement={this.increment}
onDelete={this.delete}
card={card} />
))}
</div>
</div>
</>
  );
}
  }

export default App;
