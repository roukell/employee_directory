import React, { Component } from 'react';
import Navbar from './components/Navbar';
import EmployeesTable from './components/EmployeesTable';
import API from './utils/API';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    API.getUsers().then(data => {
      console.log(data.data.data)
      this.setState({ data: data.data.data });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <EmployeesTable employees={this.state.data} />
      </div>
    );
  }
}

export default App;
