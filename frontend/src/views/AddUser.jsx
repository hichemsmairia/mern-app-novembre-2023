import axios from 'axios';
import React, { useState } from 'react';
import styles from '../styles/AddUser.module.css'; 

function AddUser() {
    const [user, setUser] = useState(null);

    const handleAdd = () => {
        axios.post('http://localhost:5000/api/users/add_user', user);
    };

    return (
        <div className={styles.addUserContainer}> {/* Use the CSS class */}
            <label>
                nom <input type="text" onChange={e => setUser({ ...user, nom: e.target.value })} />
            </label>
            <br />
            <label>
                prenom <input type="text" onChange={e => setUser({ ...user, prenom: e.target.value })} />
            </label>
            <br />
            <label>
                email <input type="text" onChange={e => setUser({ ...user, email: e.target.value })} />
            </label>
            <br />
            <label>
                tel <input type="text" onChange={e => setUser({ ...user, tel: e.target.value })} />
            </label>
            <br />
            <label>
                cin <input type="number" onChange={e => setUser({ ...user, cin: e.target.value })} />
            </label>
            <br />
            <button onClick={handleAdd}>ajouter</button>
        </div>
    );
}

export default AddUser;
