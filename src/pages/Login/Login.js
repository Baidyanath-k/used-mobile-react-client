import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { logIn, googleSignup } = useContext(AuthContext);//use authContext
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();//private rout and reload 
    const location = useLocation();//private rout and reload

    const from = location.state?.from?.pathname || "/";


    const handleLogin = data => {


        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setSuccess(true)
                setError('');
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                setSuccess('');
            })

    };
    const googleHandle = () => {
        googleSignup()
            .then(result => {
                const user = result.user;
                setSuccess(true)
                setError('');
                navigate('/');
                console.log(user);
            })
            .then(error => {
                console.error(error);
                setError(error.message);
                setSuccess('');
            })

    }
    return (
        <div className='w-96 m-auto my-40 shadow-2xl'>
            <div className="login-header">
                <h2 className='text-2xl font-bold text-center py-8'>Login</h2>
            </div>
            <form className='p-10' onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Your Email:</span>
                    </label>
                    <input
                        type="email"
                        {...register("email",
                            {
                                required: "Email Address is required",

                            }
                        )}
                        placeholder="Email"
                        name='email'
                        className="input input-bordered w-full max-w-xs text-xl" />

                    {errors.email && <p className='text-red-700' role="alert">{errors.email?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg">Your Password:</span>
                    </label>
                    <input
                        type="password"
                        name='password'
                        {...register("password",
                            {
                                required: "Please Enter valid Password",
                                minLength: { value: 6, message: "Password at least 6 Characters" }
                            }
                        )}
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs text-xl" />
                    {errors.password && <p className='text-red-700' role="alert">{errors.password?.message}</p>}
                </div>

                {
                    <>
                        <h2 className='text-red-700 font-bold'>{error && <span>Log In Error</span>}</h2>
                        <h2 className='text-green-700 font-bold'>{success && <span>Log In Success</span>}</h2>
                    </>
                }

                <input type="submit" value="Login" className='w-full py-3 btn mt-5' />
                <span className='font-bold text-sm mt-2 block'>New to Doctors Portal <Link to="/register" className='text-primary'>Create New Account</Link> </span>
            </form>
            <div className="google_button px-10">
                <h2 className='font-bold text-xl text-center mb-8'>OR</h2>
                <button className='w-full btn mb-10' onClick={googleHandle}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;