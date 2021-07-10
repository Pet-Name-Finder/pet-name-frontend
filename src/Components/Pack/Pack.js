import React, { Component } from 'react';
import './Pack.css';
import data from '../../Data/Names';

class Pack extends Component {
    constructor() {
        super();
        this.state = {
            names: data.names,
            currentName: 0,
        }
    }

    upVote = (e) => {

        this.setState({ currentName: this.state.currentName + 1})
    }

    downVote = (e) => {
        this.setState({ currentName: this.state.currentName + 1 })
    }

    render() {
        return (
            <main className="pack">
                <button onClick={() => this.downVote()}>Down Vote!</button>
                <section>
                    <p>{this.state.names[this.state.currentName].name}</p>
                </section>
                <button onClick={() => this.upVote()}>Up Vote!</button>
            </main>
        );
    }
}

export default Pack;