import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listTasks = this.props.tasks;
    const allTasks = listTasks.map((item, index) => {
      return (
        <ListGroupItem onClick={() => this.props.delete(index)} key={index} className='button'>{item}</ListGroupItem>
      )
    });

    return (
      <ListGroup>
        {allTasks}
      </ListGroup>

    )
  }
}

export default List;
