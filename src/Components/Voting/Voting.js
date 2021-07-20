import React, { Component } from "react";
import './Voting.css';
import data from "../../Data/Names";
//import packData from '../../Data/Pack';
import { withRouter } from "react-router-dom";
import pawThumb from "./pawthumb.png";

import { withApollo } from "react-apollo";
import { getPetNamesQuery } from '../../Queries/queries';

class Voting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: null,
            currentName: 0,
            votingDone: false,
        };
    }

    componentDidMount() {
        this.setVoteNames();
    }

    setVoteNames = async() => {
        try{
            const names = await this.props.client.query({
                query: getPetNamesQuery,
                variables: {email: this.props.email.email}
            })
            console.log("im here")
            if(names){
                console.log(names.data.user.userUnviewedNames);
                this.setState({ names: names.data.user.userUnviewedNames });
            }
        } catch (e) {
            console.log(e);
        }
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
                                {this.state.names && this.state.names[this.state.currentName].name}
                                {!this.state.names && "Loading Names"}
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

export default withApollo(Voting);