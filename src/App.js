import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Hinoarashi'};
  }

  // handleClickメソッドを定義
  handleClick(name){
    this.setState({name:name});
  }

  render() {
    return (
    	<div className="App-center">
        <img src={logo} className="App-logo" alt="logo" />
    	  <h1>I choose you! {this.state.name}！</h1>
    	  {/* onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換えてください*/}
        <button onClick={() => {this.handleClick('Pikatyuu')}}>
          Pikatyuu</button>

    	  {/* onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換えてください*/}
        <button onClick={() => {this.handleClick('Hinoarashi')}}>
        Hinoarashi</button>

      </div>
    );
  }
}

export default App;
