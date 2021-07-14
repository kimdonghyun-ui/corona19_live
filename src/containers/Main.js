import React from 'react';
import Layout from '../components/Layout';
import Today from '../components/Today';
import Paper2 from '../components/Paper2';

const Main = () => {
    return (
        <Layout>
            <Paper2><Today /></Paper2>
        </Layout>
    );
};

export default Main;