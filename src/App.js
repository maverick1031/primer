//import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}


const count = 4;

function isEven(){
    return count % 2 === 0 ? "even" : "odd";
}

export default class App extends Component {

    constructor(prop){
        super(prop)
        this.state = {
            count : 5
        }
    }

    isEven(val){
        return val % 2 === 0 ? "even" : "odd"
    }

    handleBtnClk = () => this.setState({count : this.state.count + 1})

    render = () =>
        <h4 className="bg-primary text-white text-center p-2 m-1">
            <tr className="bg-primary text-white text-center p-2 m-1">
                Number is {count % 2 === 0 ? "even" : "odd"}
            </tr>
            <tr className="bg-primary text-center">
                Number func is { isEven() }
            </tr>
            <tr className="bg-primary text-center">
                Number constructor func is { this.isEven(this.state.count) }
            </tr>
            <tr>
                <button className="btn btn-info m-2" onClick={this.handleBtnClk}>
                </button>
            </tr>
        </h4>
};
