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

    // render = () =>
    //     <h6 className="bg-primary text-white text-center p-2 m-1">
    //         <table>
    //             <tr className="bg-primary text-white text-center p-2 m-1">
    //                 Number is {count % 2 === 0 ? "even" : "odd"}
    //             </tr>
    //             <tr className="bg-primary text-center">
    //                 Number func is { isEven() }
    //             </tr>
    //             <tr className="bg-primary text-center">
    //                 Number constructor func is { this.isEven(this.state.count) }
    //             </tr>
    //             <tr>
    //                 <button className="btn btn-info m-2" onClick={this.handleBtnClk}>
    //                 </button>
    //             </tr>
    //         </table>
    //     </h6>

    // render = () =>
    //     <div className="container-fluid p-4">
    //         <div className="row bg-info text-white p-2">
    //             <div className="col font-weight-bold">Value</div>
    //             <div className="col-6 font-weight-bold">IsEven</div>
    //         </div>
    //         <div className="row bg-light p-2 border">
    //             <div className="col">{this.state.count}</div>
    //             <div className="col-6">{this.isEven(this.state.count)}</div>
    //         </div>
    //         <div className="row">
    //             <div className="col">
    //                 <button className="btn btn-info m-2" onClick={this.handleBtnClk}>
    //                     Click me
    //                 </button>
    //             </div>
    //         </div>
    //     </div>

    render = () =>
        <div className="m-2">
            <div className="form-group ">
                <label>Name:</label>
                <input className="form-control"/>
            </div>
            <div className="form-group">
                <label>City:</label>
                <input className="form-control" />
            </div>
        </div>
};
