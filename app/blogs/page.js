import React from 'react'
import blogs from '../data/blogs'
import BlogItem from '../components/BlogItem'
import Link from 'next/link'


const page = () => {
    return (
        <div className='p-5'>
            <h1 className='text-2xl bold '>Blog Item</h1>
            <div className='p-4 mt-5'>
                {blogs.map((item) =>
                    <Link key={item.id} href={`/blogs/${item.id}`}>
                        <BlogItem title={item.title}></BlogItem>
                    </Link>
                )}
            </div>

        </div>
    )
}

export default page