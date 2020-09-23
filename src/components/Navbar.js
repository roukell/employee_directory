import React from 'react';
import { Navbar, Form, Button, FormControl } from 'react-bootstrap';

function Navbars() {
    return (
        <Navbar className="bg-light justify-content-between">
        <Navbar.Brand href="#">Employee Directory</Navbar.Brand>
        <Form inline>
        <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
        <Button type="submit">Submit</Button>
        </Form>
        </Navbar>
    )
}

export default Navbars;