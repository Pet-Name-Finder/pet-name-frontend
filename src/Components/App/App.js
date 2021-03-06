import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Voting from "../Voting/Voting";
import LikedNames from "../LikedNames/LikedNames";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "./App.css";
import { withApollo } from "react-apollo";
import { getUserQuery } from "../../Queries/queries";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      likedNames: [],
      usersPacks: [],
      loggedIn: false,
      appearHome: true,
    };
  }

  setUser = (user) => {
    this.setState({ currentUser: user });
    this.setState({ likedNames: user.userLikedNames });
    this.setState({ loggedIn: true });
  };

  logoutUser = () => {
    this.setState({ currentUser: null });
    this.setState({ likedNames: [] });
    this.setState({ usersPacks: [] });
    this.setState({ loggedIn: false });
  };

  addUpVotted = (name) => {
    console.log(name);
    const nameFound = this.state.currentUser.userLikedNames.find(
      (userName) => name === userName
    );
    if (!nameFound) {
      this.state.currentUser.userLikedNames.push(name);
    }
  };

  updateCurrentName = (packId) => {
    const updatedPacks = this.state.allPacks.map((pack) => {
      if (pack.id === packId) {
        pack.members.map((member) => {
          if (member.userId === this.state.currentUser.id) {
            member.currentName = member.currentName + 1;
          }
          return member;
        });
      }
      return pack;
    });
    this.setState({ allPacks: updatedPacks });
  };

  checkUser = async (typedEmail) => {
    try {
      const test = await this.props.client.query({
        query: getUserQuery,
        variables: { email: typedEmail },
      });
      if (test.data.user) {
        this.setUser(test.data.user);
      }
    } catch (e) {
      alert("Sorry no account found!");
    }
  };

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome,
    });
  };

  renderSwitch = () => {
    const { currentUser, likedNames, appearHome } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            if (currentUser) {
              return <Home />;
            } else {
              return (
                <Login setUser={this.setUser} checkUser={this.checkUser} />
              );
            }
          }}
        />
        <Route
          path="/voting"
          render={() => {
            return (
              <CSSTransition
                in={appearHome}
                appear={true}
                timeout={500}
                classNames="fade"
              >
                <Voting addVoteUser={this.addUpVotted} email={currentUser} />
              </CSSTransition>
            );
          }}
        />
        <Route
          path="/liked-names"
          render={() => {
            return (
              <CSSTransition
                in={appearHome}
                appear={true}
                timeout={500}
                classNames="fade"
              >
                <LikedNames likedNames={likedNames} />
              </CSSTransition>
            );
          }}
        />
        <Route
          path="*"
          render={() => {
            return <NotFoundPage />;
          }}
        />
      </Switch>
    );
  };

  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn} logoutUser={this.logoutUser} />
        <div className="app-container">{this.renderSwitch()}</div>
      </div>
    );
  }
}

export default withApollo(App);
