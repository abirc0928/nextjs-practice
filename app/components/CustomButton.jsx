"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const CustomButton = ({ path, children }) => {
    const router = useRouter()

    const handleClink = () => {
        router.push(path)
    }

    return (
        <div>
            <button
                onClick={handleClink}
                className='bg-blue-800 rounded rounded-5 text-white px-3 py-2 mt-6'>
                {children}
            </button>
        </div>
    )
}

export default CustomButton
