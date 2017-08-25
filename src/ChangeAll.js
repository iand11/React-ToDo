import React, { Component } from 'react';

class ChangeAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeTo: ''
    };
  }

  handleChange(term) {
    this.setState(() => {
      return {
        changeTo: term
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.changeItAll.bind(null);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.changeTo} onChange={event => this.handleChange(event.target.value)} />
        <button onClick={this.props.changeItAll.bind(null, this.state.changeTo)} className="btn btn-primary">
          change all
        </button>
      </div>
    );
  }
}

export default ChangeAll;
