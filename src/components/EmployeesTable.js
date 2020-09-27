import React from "react";
import { Table, Button } from 'react-bootstrap';

// added useSortableData to set key & direction and return array of objects 
const useSortableData = (employees, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...employees];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [employees, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { employees: sortedItems, requestSort, sortConfig };
};

// EmployeesTable returns the table
const EmployeesTable = (props) => {
  const { employees, requestSort, sortConfig } = useSortableData(props.employees);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th><Button 
          onClick={() => requestSort('id')}
          className={getClassNamesFor('id')}
          >ID</Button></th>
          <th>Image</th>
          <th>Title</th>
          <th><Button 
          onClick={() => requestSort('firstName')}
          className={getClassNamesFor('firstName')}
          >First Name</Button></th>
          <th><Button 
          onClick={() => requestSort('lastName')}
          className={getClassNamesFor('lastName')}
          >Last Name</Button></th>
          <th><Button 
          onClick={() => requestSort('email')}
          className={getClassNamesFor('email')}
          >Email</Button></th>
          <th><Button 
          onClick={() => requestSort('phone')}
          className={getClassNamesFor('phone')}
          >Phone</Button></th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => {
          return (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td><img src={employee.picture} alt="employee_picture"></img></td>
              <td>{employee.title}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default EmployeesTable;
