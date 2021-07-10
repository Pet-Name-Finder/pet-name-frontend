import React, { Component } from 'react';
import './Pack.css';
import data from '../../Data/Names';
import packData from '../../Data/Pack';
import { useParams, withRouter } from 'react-router-dom';

class Pack extends Component {
    constructor() {
        super();
        this.state = {
            pack: {},
            names: data.names,
            currentName: 0,
            votingDone: false
        }
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        const setPack = packData.packs.find(pack => pack.id === id);
        this.setState({ pack: setPack});
    }

    upVote = (e) => {
        this.showNextName();
        //add upvoted names to both the packs liked names and the current users liked names
    }

    downVote = (e) => {
        this.showNextName();
    }

    showNextName = () => {
        if (this.state.names.length > this.state.currentName + 1) {
            this.setState({ currentName: this.state.currentName + 1 })
        } 
        if (this.state.names.length === this.state.currentName + 1) {
            this.setState({ votingDone: true})
        }
    }

    render() {
        return (
            <main className="pack">
                {!this.state.votingDone && <section className="vote-block"><button onClick={() => this.downVote()}>Down Vote!</button>
                <section>
                    <p>{this.state.names[this.state.currentName].name}</p>
                </section>
                <button onClick={() => this.upVote()}>Up Vote!</button></section> }
                {this.state.votingDone && <p>Voting finished!</p>}
            </main>
        );
    }
}

export default withRouter(Pack);