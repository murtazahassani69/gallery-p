import React from 'react'

const  Modal = ({selectedImg, selectedImg }) =>{
    return (
        <div className="backdrop" onClic>
            <img src={selectedImg} alt="enlarged pic" />
            
        </div>
    )
}

export default Modal
