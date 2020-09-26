import React from "react";
import { Table, Button } from 'react-bootstrap';

const EmployeesTable = (props) => {

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th><Button onClick={() => props.click('id')}>ID</Button></th>
          <th>Image</th>
          <th>Title</th>
          <th><Button onClick={() => props.click('firstName')}>First Name</Button></th>
          <th><Button onClick={() => props.click('lastName')}>Last Name</Button></th>
          <th><Button onClick={() => props.click('email')}>Email</Button></th>
          <th><Button onClick={() => props.click('phone')}>Phone</Button></th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => {
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
