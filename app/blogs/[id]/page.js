import blogs from '@/app/data/blogs'
import React from 'react'

export const generateStaticParams = () => {
    return blogs.map((blog) => ({
        id: blog.id
    }))
}
const singleBlog = ({ params }) => {
    const { id } = params
    const blog = blogs.find((blog) => blog.id === id)
    const { title, description } = blog
    return (
        <div className='p-5'>
            <h1 className='text-2xl bold'>{title}</h1>
            <p className='text-lg '>{description}</p>
        </div>
    )
}

export default singleBlog