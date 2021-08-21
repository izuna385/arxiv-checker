import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './Paper.css';

const Paper = ({ paperData }) => {
    return (
        // <div className="paper-container">
        //     <div className="paper">
        //         <h1>{paperData.title}</h1>                   
        //         <h4>Abstract: {paperData.summary}</h4>
        //         <h4>Task: {paperData.task}</h4>
        //         <h4>Unique NE: {paperData.ne}</h4>
        //     </div>
        // </div>
        <div class='box7'>
            <Card>
                <Card.Body>
                <Card.Title>{paperData.title}</Card.Title>
                <Card.Text>
                    Abstract: {paperData.summary}
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Task: {paperData.task}</small>
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Unique NE: {paperData.ne.map((data) => <Button variant="outline-primary">{data}</Button>)}</small>
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Paper;