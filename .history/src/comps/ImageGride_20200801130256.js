import React from 'react'
import useFireStore from './hooks/uSEfIREsTORE.JS';

const ImageGride = () => {
    const { docs } = useFireStore('images')
    console.log(docs);
    return (
        <div>
            <useFireStore />
        </div>
    )
}

export default ImageGride
