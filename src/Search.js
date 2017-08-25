import React, { Component } from 'react';
import ShowList from './ShowList';
import ChangeAll from './ChangeAll';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      action: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.changeAllActions = this.changeAllActions.bind(this);
  }

  handleDelete(item) {
    var list = this.state.toDoList;
    list.splice(item, 1);
    console.log(list);
    this.setState(function() {
      return {
        toDoList: list
      };
    });
  }

  handleChange(item) {
    this.setState(function() {
      return {
        action: item
      };
    });
  }

  handleInput(event) {
    event.preventDefault();
    if (this.state.action !== '') {
      this.setState(function() {
        return {
          toDoList: this.state.toDoList.concat(this.state.action),
          action: ''
        };
      });
    }
  }

  changeAllActions(newAction) {
    console.log(newAction);
    var newList = this.state.toDoList.map(item => {
      return (item = newAction);
    });
    console.log(this.state.toDoList);
    this.setState(() => {
      return {
        toDoList: newList
      };
    });
    console.log(this.state.toDoList);
  }

  componentDidMount() {
    this.setState(() => {
      return {
        toDoList: ['hi', 'hello there']
      };
    });
  }

  render() {
    return (
      <div className="container">
        <form className="col-md-8 col-md-offset-4 form" onSubmit={this.handleInput} style={{ marginBottom: '50px' }}>
          <input
            className="col-md-4"
            type="text"
            value={this.state.action}
            onChange={event => this.handleChange(event.target.value)}
            style={{ marginRight: '5px' }}
          />
          <button className="btn btn-sm btn-primary-outline">add to list</button>
        </form>
        <ShowList deleteItem={this.handleDelete} list={this.state.toDoList} />
        <ChangeAll changeItAll={this.changeAllActions} />
      </div>
    );
  }
}

export default Search;
