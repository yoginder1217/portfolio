import React from 'react'
import Layout from './Layout/Layout';
import DashboardPage from '../Dashboard/DashboardPage/DashboardPage';
import UseDocumentTitle from "../utils/useDocumentTitle/UseDocumentTitle";

const Dashboard = () => {
    UseDocumentTitle("Dashboard")
    return (
        <Layout>
            <DashboardPage />
        </Layout>
    )
}

export default Dashboard