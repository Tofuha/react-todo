import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Label, Panel } from 'react-bootstrap';
import Input from './components/input';
import List from './components/list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      list: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleSubmit(event) {
    this.setState({
      userInput: '',
      list: [...this.state.list, this.state.userInput]
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });

  }

  handleDelete(thing) {
    let filteredList = this.state.list.filter((item, index) => {
      return (
        index !== thing
      );
    });

    this.setState({
      list: filteredList
    });

  }



  render() {
    const styles = {height: '550px', width: '550px', marginTop: '5em'};

    return (
      <div className='container'>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <h1>
                <Label>
                  To-Do List
                </Label>
              </h1>
              <hr />
              <Input handleSubmit={this.handleSubmit} value={this.state.userInput} handleChange={this.handleChange}/>

            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} md={8}>
              <hr />
              <div>
                <Panel bsStyle="primary">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">
                      Tasks <em style={{fontSize: '10px'}}>(Click to remove.)</em>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                    <List tasks={this.state.list} delete={this.handleDelete}/>
                  </Panel.Body>
                </Panel>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
