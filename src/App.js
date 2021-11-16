import "./styles.css";
import React, { Component } from "react";

import DisplayName from "./components/DisplayName/DisplayName"
  
class App extends Component {
    state = {
        firstName: "Reggie",
        lastName: "White"
    };
    render() {
        return (
        <div className="App">
            <h1>Display Name Worksheet 1</h1>
            <DisplayName 
                firstName={this.state.firstName} 
                lastName={this.state.lastname} 
            />
        </div>
        );
    }  
}

export default App;