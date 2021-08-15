import React, { Fragment, useEffect } from 'react';

// apis
import Paper from '../components/Paper';
import { fetchPapers } from '../apis/fetchPapers';

export const Papers = () => {

    useEffect(() => {
        fetchPapers()
        .then((data) =>
        console.log(data)
        )
    }, [])

    return (
        <Fragment>
            Paper一覧
        </Fragment>
    )
}

export default Papers;