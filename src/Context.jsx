import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        nom: "john Doe",
        email: "g@g.g",
        tel: 888,
      },
      {
        id: 2,
        nom: "john Doe",
        email: "g@g.g",
        tel: 888,
      },
      {
        id: 3,
        nom: "john Doe",
        email: "g@g.g",
        tel: 888,
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
