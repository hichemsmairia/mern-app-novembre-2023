// AddUser.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from '../styles/AddUser.module.css';
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
function UpdateUser() {
    const [user, setUser] = useState(null);
    const { id } = useParams()
    // id yousel lel page hedhi ! 
    const handleGetUserData = () => {
        axios.get(`http://localhost:5000/api/users/get_user/${id}`).then(result => {
            setUser(result.data)
        })
    };
    //id = user._id
    const handleUpdateUser = () => {
        axios.put(`http://localhost:5000/api/users/update_user/${id}`, user).then(() => {
            toast.success('utilisateur mis a jour avec succes ! ')
        })
    }

    useEffect(() => {
        handleGetUserData()
    }, [])

    return (
        <div className={styles.addUserContainer}>
            <ToastContainer />
            <h2>mettre a jour</h2>
            <label>
                nom <input value={user?.nom} type="text" className={styles.inputStyle} onChange={e => setUser({ ...user, nom: e.target.value })} />
            </label>
            <br />
            <label>
                prenom <input value={user?.prenom} type="text" className={styles.inputStyle} onChange={e => setUser({ ...user, prenom: e.target.value })} />
            </label>
            <br />
            <label>
                email <input value={user?.email} type="text" className={styles.inputStyle} onChange={e => setUser({ ...user, email: e.target.value })} />
            </label>
            <br />
            <label>
                tel <input value={user?.tel} type="text" className={styles.inputStyle} onChange={e => setUser({ ...user, tel: e.target.value })} />
            </label>
            <br />
            <label>
                cin <input type="number" value={user?.cin} className={styles.inputStyle} onChange={e => setUser({ ...user, cin: e.target.value })} />
            </label>
            <br />
            <button className={styles.updateButton} onClick={handleUpdateUser}>mettre a jour </button>
        </div>
    );
}

export default UpdateUser;
