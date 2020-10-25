import React, {useEffect, useState} from 'react';
import {styles} from '../components/ui/styles';
//import {loadClient} from '../components/ui/utils';

const News = props => {
    
    // useEffect(() => {
    //     console.log('>>> LOAD CLIENT');

    //     loadClient();
    // }, [])

    return (
        <div style={styles.news}>
            News
        </div>
    )
}

export default News;