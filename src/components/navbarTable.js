import React, { Component } from 'react';

import CustomTable from './customTable'
import CustomNavbar from './Navbar'



class NavbarTable extends Component {


    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isLoading :false

        }
    }



    handleClick = () => {
        this.setState({
            isLoading :true
        })
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    todos: [data],
                    isLoading :false


                })
            })
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


    render() {

        let {isLoading,todos} = this.state


        return <div>

            <CustomNavbar buttonHandleClick={this.handleClick} isLoading = {isLoading} />
            <CustomTable todoList={todos} />

        </div>
    }



}

export default NavbarTable