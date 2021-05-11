import { Button } from 'reactstrap';

const CountButton = ({ handleClick, value, operation }) => {


    return (

        <Button color="danger" onClick={() => handleClick(value)}>{operation}</Button>
    )
}

export default CountButton;