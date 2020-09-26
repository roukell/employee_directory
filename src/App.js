import React from 'react';
import Navbar from './components/Navbar';
import EmployeesTable from './components/EmployeesTable';
// import API from './utils/API';


const App = () => {
  // employees data
  const employees = [
    {
      id: 1,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
      firstName: 'Bulbasaur',
      lastName: 'Lake',
      title: 'mr',
      phone: '0400 987 654',
      email: 'bulb.lake@gmail.com',
    },
    {
      id: 2,
      picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
      firstName: 'Squirtle',
      lastName: 'Walke',
      title: 'mr',
      phone: '0412 345 678',
      email: 'Squirtle@gmail.com',
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState('');


  const handleSearch = event => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  const searchedEmployees = employees.filter(result => {
    return result.lastName.toLowerCase().includes(searchTerm.toLowerCase());
  })

  return (
    <div>
      <Navbar onSearch={handleSearch} search={searchTerm} />
      <EmployeesTable employees={searchedEmployees} />
    </div>
  )
};

export default App;
