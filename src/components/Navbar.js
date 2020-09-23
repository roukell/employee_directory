import React from 'react';
import { Navbar, Form, Button, FormControl } from 'react-bootstrap';

function Navbars(props) {
    return (
        <Navbar className="bg-light justify-content-between">
            <Navbar.Brand href="#">Employee Directory</Navbar.Brand>
            <Form inline>
                <FormControl
                    name="term"
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    value={props.search}
                    onChange={props.handleInputChange}
                    id="term"
                />
                <Button type="submit" onClick={props.handleFormSubmit}>Submit</Button>
            </Form>
        </Navbar>
    )
}

export default Navbars;