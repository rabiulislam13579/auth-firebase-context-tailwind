import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
     
    const {user , createUser}=useContext(AuthContext);
   


    const handleRegisterForm=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const  password=event.target.password.value;
        console.log(name , email , password)
        
        createUser(email,password)
        .then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser)

        })
    }





    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegisterForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='ml-5 mt-0'><small>already have an account ? please <Link className='text-blue-800 underline' to="/login">go to Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default Register;