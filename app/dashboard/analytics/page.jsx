import CustomButton from '@/app/components/CustomButton'
import React from 'react'
export const metadata = {
  title: "Analytics",
  description: "Analytics",
};


const analyticsPage = () => {
    return (
        <div className='p-5'>
            <p>Analytics Page</p>
            <CustomButton path="/dashboard/setting">Go To Settings</CustomButton>
        </div>
    )
}

export default analyticsPage