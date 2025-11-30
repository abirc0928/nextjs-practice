import CustomButton from '@/app/components/CustomButton'
import React from 'react'

const settings = () => {
    return (
        <div className='p-10'>
            <h1>Settings</h1>
            <CustomButton path="/analytics">Go To Analystic</CustomButton>
        </div>

    )
}

export default settings
