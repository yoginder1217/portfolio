import React from 'react'

const BlogItems = ({ item }) => {
  return (
    <div className='blog__card' key={item.id}>
        <img src={item.image} alt='' className='blog__img' />
        <h3 className='blog__title'>{item.title}</h3>
        <a href='#blog' className='blog__button'>
            Demo <i className='bx bx-right-arrow-alt blog__button-icon'></i>
        </a>
        
    </div>
  )
}

export default BlogItems
