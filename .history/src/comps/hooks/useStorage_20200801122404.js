import React, {useState, useEffect} from 'react'
import { projectStorage, projectFirestore, timestamp } from '../../firbase/config'

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images');




        storageRef.put(file).on('state_changed', (snap) => {
        let precentage = (snap.bytesTransFerred / snap.totalBytes) * 100;
        setProgress(precentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            cosnt createdAt
            collectionRef.add({ url, createdAt });
            setUrl(url);

            setUrl(url);
        })

    }, [file]);
    return { progress, url, error};
}
export default  useStorage;