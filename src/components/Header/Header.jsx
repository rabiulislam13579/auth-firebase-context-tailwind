import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const {user , logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(()=>{

        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className='mr-8 ml-4' to="/">Home</Link>
                {
                    user&& <><Link className='mr-8 ml-4' to="/order">Order</Link>
                    <Link className='mr-8 ml-4' to="/profile">Profile</Link></>
                }
                <Link className='mr-8' to="/register">Register</Link>
                <Link className='mr-8' to="/login">Log In</Link>
                {user? 
                <><span>{user.email}</span> 
                <button onClick={handleLogOut} className="btn btn-active">Sign out</button></> :
                <Link to="/login">log in</Link>

                }
            </div>
           
        </div>
    );
};

export default Header;