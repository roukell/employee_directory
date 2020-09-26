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
    const sortBylastName = result.lastName.toLowerCase().includes(searchTerm.toLowerCase());
    const sortByfirstName = result.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    const sortByTitle = result.title.toLowerCase().includes(searchTerm.toLowerCase());
    const sortByPhone = result.phone.toLowerCase().includes(searchTerm.toLowerCase());
    const sortByEmail = result.email.toLowerCase().includes(searchTerm.toLowerCase());
    return sortBylastName || sortByfirstName || sortByTitle || sortByPhone || sortByEmail;
  })

  return (
    <div>
      <Navbar onSearch={handleSearch} search={searchTerm} />
      <EmployeesTable employees={searchedEmployees} />
    </div>
  )
};

export default App;
