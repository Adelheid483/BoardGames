import React from "react";
import {Component} from "react";

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            games: []
        }
    }

    getGames = async() => {
        let resp = await fetch("https://localhost:44366/api/games", { method: "GET" })

        let resJson = await resp.json();

        this.setState({
            games: resJson
        })
    }

    render() {
        const ga = this.state.games.map((item: any, index: any) => <li key={index}>{item.name}</li>)

        return (
            <div>
                <button onClick={this.getGames}>Load</button>
                <ul>{ga}</ul>
            </div>
        );
    }
}

export default App;