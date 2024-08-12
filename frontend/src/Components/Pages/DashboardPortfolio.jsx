import React from 'react'
import Layout from './Layout/Layout';
import Portfolio from '../Dashboard/Portfolio/Portfolio';
import UseDocumentTitle from '../utils/useDocumentTitle/UseDocumentTitle';

const DashboardPortfolio = () => {
    UseDocumentTitle("Portfolio")
    return (
        <Layout>
            <Portfolio />
        </Layout>
    )
}

export default DashboardPortfolio;