import React, { Component } from 'react';
import CustomNavbar from './Navbar';


import { Container, Row, Col, Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { List } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';



class Counter extends Component {


    constructor(props) {
        super(props);
        this.state = {

            formData: '',
            name: '',
            todos: []

        }

    }



    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    todos: data,

                })
            })
    }
    componentDidUpdate(preProps, preState) {



    }

    // inputChangeHandle = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.setState({

    //         formData: this.state.name
    //     })
    // }

    render() {

        let { todos } = this.state
        let todosMap = todos.map((todos, index) => {
            return (
                <tr key={index}>
                    <td>{todos.id}</td>
                    <td>{todos.title}</td>
                </tr>
            )
        });

        return <div>


            <CustomNavbar />
            <Container>

                {/* <Row>
                    <Form onSubmit={this.handleSubmit}>
                        <Col md="4">
                            <FormGroup>
                                <Label for="name">Name - {this.state.formData}</Label>
                                <Input type="text" value={this.state.name} onChange={this.inputChangeHandle} name="name" id="name" placeholder="Name" />
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Button color="primary">Save</Button>
                            </FormGroup>

                        </Col>
                    </Form>
                </Row>
                <br /> */}
                <Row>
                    <Col md="12">
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Title</th>
                                </tr>

                            </thead>
                            <tbody>
                                {todosMap}
                            </tbody>
                        </Table>


                    </Col>
                </Row>

            </Container>



        </div >
    }



}

export default Counter