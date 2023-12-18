// AddUser.js
import axios from 'axios';
import React, { useState } from 'react';
import styles from '../styles/AddUser.module.css';
import { toast, ToastContainer } from 'react-toastify'
function AddUser() {
    const [user, setUser] = useState(null);

    const handleAdd = () => {
        axios.post('http://localhost:5000/api/users/add_user', user)
            .then(() => {
                toast.success("user ajouté avec suuces ! ")
            }).catch(() => {
                toast.error('quelque chose va pas correctement ! ')
            })
    };

    return (
        <div className={styles.addUserContainer}> {/* Use the CSS class */}
            <ToastContainer />
            <label>
                nom <input type="text" className={styles.inputStyle} onChange={e => setUser({ ...user, nom: e.target.value })} />
            </label>
            <br />
            <label>
                prenom <input type="text" className={styles.inputStyle} onChange={e => setUser({ ...user, prenom: e.target.value })} />
            </label>
            <br />
            <label>
                email <input type="text" className={styles.inputStyle} onChange={e => setUser({ ...user, email: e.target.value })} />
            </label>
            <br />
            <label>
                tel <input type="text" className={styles.inputStyle} onChange={e => setUser({ ...user, tel: e.target.value })} />
            </label>
            <br />
            <label>
                cin <input type="number" className={styles.inputStyle} onChange={e => setUser({ ...user, cin: e.target.value })} />
            </label>
            <br />
            <button className={styles.btnStyle} onClick={handleAdd}>ajouter</button>
        </div>
    );
}

export default AddUser;
