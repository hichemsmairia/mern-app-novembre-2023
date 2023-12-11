import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../styles/ListUsers.module.css'; 

function ListUsers() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/users/get_all_users')
            .then(result => setUsers(result.data))
    }, []);

    return (
        <div className={styles.listUsersContainer}> {/* Use the CSS class */}
            <h1>ListUsers</h1>
            {users && users.length > 0 ? users.map((el, index) => (
                <ul key={index}> {/* Add a unique key to the list */}
                    <li>{el.nom}</li>
                    <li>{el.prenom}</li>
                    <li>{el.email}</li>
                    <li>{el.cin}</li>
                    <li>{el.tel}</li>
                </ul>
            )) : <h1>le tableau est vide </h1>}
        </div>
    );
}

export default ListUsers;
