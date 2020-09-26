import React from "react";
import { Table } from 'react-bootstrap';

const EmployeesTable = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => {
          return (
            <tr key={employee.id}>
              <td><img src={employee.picture} alt="employee_picture"></img></td>
              <td>{employee.title}</td>
              <td>{employee.firstName} {employee.lastName}</td>
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
