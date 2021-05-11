
import {
    Container,
    Row,
    Col,
    Table,
} from 'reactstrap';
const CustomTable = ({ todoList }) => {

    console.log(todoList);

   
    let todosMap = todoList.map((todos, index) => {
        return (
            <tr key={index}>
                <td>{todos.id}</td>
                <td>{todos.title}</td>
            </tr>
        )
    });

    return (
        <Container>
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

    )
}

export default CustomTable;