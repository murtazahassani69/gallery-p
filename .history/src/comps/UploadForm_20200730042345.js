import React  from 'react'

const UploadForm = () => {
            const changeHandler = (e) => {
            const [file, setFile] = useState(null);
            const types = ['image/png', 'image/jpeg'];
            let selected = e.target.files[0];
            //    console.log(selected);
            if(selected && types.includes(selected.typ)) {
            setFile(selected)
            }
    }
        return (
            <form>
                <input type="file" onChange={changeHandler} />
            </form>
        )
    }
export default UploadForm