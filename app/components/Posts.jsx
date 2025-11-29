import React from 'react'
import { resolve } from 'styled-jsx/css'
const featchPosts = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })

    return "Here are my posts"
}
const Posts = async () => {
    const posts = await featchPosts()
    return (
        <p>
           {posts}
        </p>
    )
}

export default Posts