import React  from 'react'

const UploadForm = () => {
   const changeHandler = (e) => {
       const [files, setFile] = useState(nu)
       let selected = e.target.files[0];
       console.log(selected);
   }
        return (
            <form>
                <input type="file" onChange={changeHandler} />
            </form>
        )
    }
export default UploadForm