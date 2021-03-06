import React from 'react';
import {motion } from 'framer-motion'
import useFirestore from './hooks/useFirestore.js';

const ImageGride = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images')
    console.log(docs);
    return (
        <div className="img-grid">
            { docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                layout
                whileHover={{opacity: 1}}
                    onClick={() => setSelectedImg(doc.url)} >
                <motion.img src={doc.url} alt="uploaded pc" >
                    />
                </motion.img>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGride
