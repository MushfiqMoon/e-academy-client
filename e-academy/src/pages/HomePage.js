import React from 'react'
import toast from 'react-hot-toast';

const HomePage = () => {



    const notify = () => toast.success('Successfully created!');


    return (
        <>
            <button onClick={notify}>Make me a toast</button>

            
        </>
    )
}

export default HomePage