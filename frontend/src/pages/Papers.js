import React, { Fragment, useEffect, useState } from 'react';

// apis
import Paper from '../components/Paper';
import { fetchPapers } from '../apis/fetchPapers';

export const Papers = () => {

    const[allPapersData, setAllPapersData] = useState([]);

    useEffect(() => {
        fetchPapers()
        .then(data => setAllPapersData(data.papers))
    }, [])

    return (
        <Fragment>
            {console.log(allPapersData)}
            <ul>
                {allPapersData.map((data) => (
                    <Paper paperData={data}/>
                ))}
            </ul>
        </Fragment>
    )
}

export default Papers;