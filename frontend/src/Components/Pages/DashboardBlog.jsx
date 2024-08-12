import React from 'react'
import Layout from './Layout/Layout';
import Blog from '../Dashboard/Blog/Blog';
import UseDocumentTitle from '../utils/useDocumentTitle/UseDocumentTitle';

const DashboardBlog = () => {
    UseDocumentTitle("Blog")
    return (
        <Layout>
            <Blog />
        </Layout>
    )
}

export default DashboardBlog;