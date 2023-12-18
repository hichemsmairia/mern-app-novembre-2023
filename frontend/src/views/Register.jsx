import React, { useState } from 'react';
import styles from '../styles/Login.module.css';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/register', user).then(result => {
            console.log(result.data)
            if (result.data.msg) {
                toast.success(result.data.msg)
            } if (result.data.error) {
                toast.error(result.data.error)
            }
        })

    };

    return (
        <div className={styles['login-container']}>
            <ToastContainer />
            <div className={styles['login-image']}>

                <img src="https://www.allen.ac.in/ace2324/assets/images/register.png" alt="Side" />
            </div>
            <div className={styles['login-form']}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles['form-group']}>
                        <label>Nom:</label>
                        <input
                            type="text"
                            onChange={e => setUser({ ...user, name: e.target.value })}
                            required
                        />


                        <label>Email:</label>
                        <input
                            type="email"
                            onChange={e => setUser({ ...user, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label>Password:</label>
                        <input
                            type="password"
                            onChange={e => setUser({ ...user, password: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
