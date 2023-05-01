import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const LogIn = () => {

    const {signIn}=useContext(AuthContext);



    const handleForm=event=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(email , password)

        signIn(email,password)
        .then((result)=>{
            const loggedUser=result.user;
            console.log(loggedUser)
        })
        .catch((error)=>{
            console.log(error)
        })
    }





    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please LogIn</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleForm} className="card-body mb-0">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-semibold text-blue-900">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='ml-5 mt-0'><small>are you first time here ? please <Link className='text-blue-800 underline' to="/register">go to register</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;