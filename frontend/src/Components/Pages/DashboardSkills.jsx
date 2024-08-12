import React from 'react'
import Layout from './Layout/Layout';
import Skills from '../Dashboard/Skills/Skills'
import UseDocumentTitle from '../utils/useDocumentTitle/UseDocumentTitle';

const DashboardSkills = () => {
    UseDocumentTitle("Skill")
    return (
        <Layout>
            <Skills />
        </Layout>
    )
}

export default DashboardSkills