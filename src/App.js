import React from 'react';
import Navbar from './components/Navbar';
import EmployeesTable from './components/EmployeesTable';
import employees from './utils/Employees';

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  // receive callback from Navbar and setSearchTerm
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  // search employee and return search results
  const searchedEmployees = employees.filter(result => {
    const searchBylastName = result.lastName.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByfirstName = result.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByTitle = result.title.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByPhone = result.phone.toLowerCase().includes(searchTerm.toLowerCase());
    const searchByEmail = result.email.toLowerCase().includes(searchTerm.toLowerCase());
    return searchBylastName || searchByfirstName || searchByTitle || searchByPhone || searchByEmail;
  })

  // sorts table by request
  const handleSort = request => {
    if (request === 'firstName') {
      employees.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1)
      // sorted employees by ascending firstName
      return employees
    } 

    else if (request === 'lastName') {
      employees.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
      return employees
    } 

    else if (request === 'email') {
      employees.sort((a, b) => (a.email > b.email) ? 1 : -1)
      return employees
    } 

    else if (request === 'phone') {
      employees.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
      return employees
    } 
    
    else {
      employees.sort((a, b) => (a.id > b.id) ? 1 : -1)
      return employees
    } 
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} search={searchTerm} />
      <EmployeesTable employees={searchedEmployees} click={handleSort}/>
    </div>
  )
};

export default App;
