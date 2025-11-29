import React, { Suspense } from 'react'
import Posts from '../components/Posts'

export const metadata = {
    title: "Heavy",
    description: "Heavy",
};


const Heavy = () => {
    return (
        <div>
            <p className='text-xl'>Heavy</p>
            <Suspense fallback={<h1>Loading posts...</h1>}>
                <Posts />
            </Suspense>
            {/* <Posts /> */}

        </div>
    )
}

export default Heavy