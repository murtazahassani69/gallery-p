import React from 'react'

const  Modal = ({selectedImg, selectedImg }) =>{
   c handleClick = (e) => {
        selectedImg(null);
    }
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic" />
            
        </div>
    )
}

export default Modal
