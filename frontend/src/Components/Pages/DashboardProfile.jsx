import React from 'react';
import Layout from './Layout/Layout';
import Profile from '../Dashboard/Profile/Profile';
import UseDocumentTitle from '../utils/useDocumentTitle/UseDocumentTitle';

const DashboardProfile = () => {
    UseDocumentTitle("Profile")
    return (
        <Layout>
            <Profile />
        </Layout>
    )
}

export default DashboardProfile