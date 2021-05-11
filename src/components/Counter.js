import React, { Component } from 'react';
import CustomNavbar from './Navbar';
import NavbarTable from './navbarTable'
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


    render() {



        return <div>

            <NavbarTable />

        </div >
    }



}

export default Counter