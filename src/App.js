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
  const handleSort = (request) => {
    console.log(request)
  }

  return (
    <div>
      <Navbar onSearch={handleSearch} search={searchTerm} />
      <EmployeesTable employees={searchedEmployees} click={handleSort}/>
    </div>
  )
};

export default App;
