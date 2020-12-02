import logo from './logo.svg';
import './App.css';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Hinoarashi'};
    this.state = {count: 0};
  }

  // ポケモンメソッドを定義
  pokemon(name){
    this.setState({name:name});
  }

  // カウントアップメソッドを定義
  countUp(){
    this.setState({count:this.state.count + 1});
  }

  // カウントダウンメソッドを定義
  countDawn(){
    this.setState({count:this.state.count - 1});
  }

  render() {
    return (
    	<div className="App-center">
        <h1 className="App-text-color-red">【 MiL.inc React Tutorial 】</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Q1.ポケモンゲットだぜ</h1>
    	  <h2>I choose you! {this.state.name}！</h2>
        <button onClick={() => {this.pokemon('Pikatyuu')}}>Pikatyuu</button>
        <button onClick={() => {this.pokemon('Hinoarashi')}}>Hinoarashi</button>

        <h1>Q2.カウントアップ・ダウン</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => {this.countUp()}}>+</button>
        <button onClick={() => {this.countDawn()}}>-</button>
      </div>
    );
  }
}

export default App;
