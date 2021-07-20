import React, { Component } from "react";
import './Voting.css';
import data from "../../Data/Names";
//import packData from '../../Data/Pack';
import { withRouter } from "react-router-dom";
import pawThumb from "./pawthumb.png";

class Pack extends Component {
    constructor() {
        super();
        this.state = {
            names: data.names,
            currentName: 0,
            votingDone: false,
        };
    }

    componentDidMount() {
    }


    checkVote = (currentName) => {
        if (this.state.names.length >= currentName + 1) {
            this.setState({ votingDone: false });
        }
    };

    setCurrentName = (setPack) => {
        const memberIndex = setPack.members.findIndex(
            (memeber) => memeber.userId === this.props.user.id
        );
        this.checkVote(setPack.members[memberIndex].currentName);
        this.setState({ currentName: setPack.members[memberIndex].currentName });
    };

    upVote = (e) => {
        this.props.addVoteUser(this.state.names[this.state.currentName].name);
        this.showNextName();
    };

    downVote = (e) => {
        this.showNextName();
    };

    showNextName = () => {
        if (this.state.names.length > this.state.currentName + 1) {
            this.setState({ currentName: this.state.currentName + 1 });
        }
        if (this.state.names.length === this.state.currentName + 1) {
            this.setState({ votingDone: true });
        }
    };

    render() {
        return (
            <main className="pack">
                {!this.state.votingDone && (
                    <section className="vote-block">
                        <img
                            src={pawThumb}
                            alt="Thumbs Down Paw"
                            className="down-paw"
                            onClick={() => this.downVote()}
                        ></img>
                        <section>
                            <p className="current-name">
                                {this.state.names[this.state.currentName].name}
                            </p>
                        </section>
                        <img
                            src={pawThumb}
                            alt="Thumbs Up Paw"
                            className="up-paw"
                            onClick={() => this.upVote()}
                        ></img>
                    </section>
                )}
                {this.state.votingDone && <p className="voting-finished">Voting finished!</p>}
            </main>
        );
    }
}

export default withRouter(Pack);