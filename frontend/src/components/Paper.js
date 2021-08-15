const Paper = ({ paperData }) => {
    return (
        <div className="paper-container">
            <div className="paper">
                <h1>{paperData.title}</h1>                   
                <h4>Abstract: {paperData.summary}</h4>
                <h4>Task: {paperData.task}</h4>
                <h4>Unique NE: {paperData.ne}</h4>
            </div>

        </div>
    );
};

export default Paper;