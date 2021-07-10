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

    render() {
        return (
            <main className="pack">
                <button>Down Vote!</button>
                <section>
                    <p>{this.state.names[this.state.currentName].name}</p>
                </section>
                <button>Up Vote!</button>
            </main>
        );
    }
}

export default Pack;