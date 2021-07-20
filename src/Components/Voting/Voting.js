import React, { Component } from "react";
import './Voting.css';
import data from "../../Data/Names";
import { withRouter } from "react-router-dom";
import pawThumb from "./pawthumb.png";
import pawThumbDown from "./pawthumbdown.png";

import { withApollo } from "react-apollo";
import { getPetNamesQuery } from '../../Queries/queries';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { property } from "lodash";

class Voting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: null,
            currentName: 0,
            votingDone: false,
            error: "Loading"
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
            this.setState({error: "Something went wrong"})
        }
    }

    checkVote = (currentName) => {
        if (this.state.names.length >= currentName + 1) {
            this.setState({ votingDone: false });
        }
    };

    upVote = (e) => {
        this.props.addVoteUser(this.state.names[this.state.currentName]);
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
                            src={pawThumbDown}
                            alt="Thumbs Down Paw"
                            className="down-paw"
                            onClick={() => this.downVote()}
                        ></img>
                        <section>
                            <TransitionGroup>
                                <CSSTransition
                                timeout={500}
                                classNames="fade"
                                key={this.state.currentName}
                                >
                                    <p className="current-name">
                                        {this.state.names && this.state.names[this.state.currentName].name}
                                        {!this.state.names && this.state.error}
                                    </p>
                                </CSSTransition>
                            </TransitionGroup>
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