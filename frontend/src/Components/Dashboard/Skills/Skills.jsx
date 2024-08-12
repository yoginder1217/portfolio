import React from 'react';
import { Link } from 'react-router-dom'
import './skills.css'; // Import custom CSS
import SearchElement from '../../utils/SearchElement';

const Skills = () => {
    
    return (
        <div className='edit-skills-container'>
            <h3 className='edit-skills-title'>Edit Skills</h3>

            <div className='skills-table-container'>
                <div>
                    <div className='skills-header'>
                        <Link to="/skill/add">
                            <span className='add-skill-button'>
                                <i className='bx bx-book-add mr-1'></i>
                                Add Skill
                            </span>
                        </Link>
                        <SearchElement />
                    </div>
                    <div className="skills-card">
                        <table className='skills-table'>
                            <thead className='skills-table-head'>
                                <tr>
                                    
                                        <th className='skills-table-header-cell'>
                                            <p
                                                variant="small"
                                                className="skills-table-header-text"
                                            >
                                                Header
                                            </p>
                                        </th>
                                </tr>
                            </thead>

                            <tbody>
                                
                                    <tr>
                                        <td colSpan="5">
                                            <h4 className='no-skills-message'>You have not set any skills.</h4>
                                        </td>
                                    </tr>
                                

                                
                                    <tr>
                                        <td colSpan="5">
                                            <h4 className='no-skills-message'>Skill not found.</h4>
                                        </td>
                                    </tr>
                                

                                    <tr className='skills-table-row'>
                                        <td className='skills-table-cell'>
                                            <p variant="small" className="skills-table-text">
                                                Name
                                            </p>
                                        </td>

                                        <td className='skills-table-cell'>
                                            <p variant="small" className="skills-table-text">
                                            123
                                            </p>
                                        </td>

                                        <td className='skills-table-cell'>
                                            <p variant="small" className="skills-table-text">
                                                Skill name
                                            </p>
                                        </td>

                                        <td className='skills-table-cell'>
                                            <p variant="small" className="skills-table-level-text">
                                                Skill Level
                                            </p>
                                        </td>

                                        <td className='skills-table-actions'>
                                            <Link to='update' className='edit-skill-link'>
                                                <div content="Edit">
                                                    <span variant='text' color='red'>
                                                        <i className='bx bx-edit-alt text-green-500 md:text-xl text-lg'></i>
                                                    </span>
                                                </div>
                                            </Link>

                                            <div content="Delete">
                                                <span variant='text' color='red'>
                                                    <i className='bx bx-trash text-red-800 md:text-xl text-lg'></i>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
