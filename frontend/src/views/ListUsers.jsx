import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../styles/ListUsers.module.css';
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
function ListUsers() {
    const [users, setUsers] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5000/api/users/get_all_users')
            .then(result => setUsers(result.data))
    }, [users]);

    const handleDelete = id => {
        axios.delete(`http://localhost:5000/api/users/delete_user/${id}`).then(() => {
            toast.warn('utilisateur supprime !')
        })
    }

    return (
        <div className={styles.listUsersContainer}>
            <ToastContainer />
            <h1>ListUsers</h1>
            {users && users.length > 0 ? users.map((user, index) => (
                <div key={index} className={styles.userCard}>
                    <ul className={styles.userDetails}>
                        <li><span className={styles.spanText}>Nom:</span> {user.nom}</li>
                        <li> <span className={styles.spanText}>Prénom:</span>  {user.prenom}</li>
                        <li><span className={styles.spanText}>Email: </span> {user.email}</li>
                        <li><span className={styles.spanText}>CIN: </span> {user.cin}</li>
                        <li> <span className={styles.spanText}>Téléphone:</span>  {user.tel}</li>
                    </ul>
                    <button onClick={() => navigate(`update/${user._id}`)} >update</button>
                    <button onClick={() => handleDelete(user._id)} >supprimer</button>
                </div>
            )) : <h1>Le tableau est vide</h1>}
        </div>
    );
}

export default ListUsers;