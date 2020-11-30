# prg_react

Create React Appのインストールはnode.jsがインストールされている環境で以下のコマンドを入力することでインストールできます。

npm install -g create-react-app
インストール後はターミナルを再起動するか以下のコマンドを入力することでcreate-react-appコマンドが利用できるようになります。

exec $SHELL -l
インストールが完了したらプロジェクトを作成したいフォルダ上で以下のコマンドでReactプロジェクトを作成します。

create-react-app プロジェクト名
たとえば「my-app」というプロジェクトを作成したい場合は以下のようなコマンドを入力します。

create-react-app my-app
my-app フォルダ内には以下のようなファイルが配置されています。

「Happy hacking!」と表示されたら「Create React App」のインストールは成功です。

my-app
├── node_modules/
├── package.json
├── public/
├── README.md
├── src/
└── yarn.lock(環境によってはない)

srcフォルダにはソースコードが配置されており、実際の開発はこの中のファイルを編集していきます。

src/App.js を確認すると以下のようになっており、Appコンポーネントが作成さているのが確認できます。

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div classname="App">
        <header classname="App-header">
          <img src="{logo}" classname="App-logo" alt="logo">
          <h1 classname="App-title">Welcome to React</h1>
        </header>
        <p classname="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
 
export default App;
Create React Appの利用方法
以下のコマンドでプロジェクトフォルダに移動して、

cd my-app
以下のコマンドでCreate React Appを起動します。

npm start
