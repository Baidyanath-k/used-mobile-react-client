import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle } from "react-icons/fa";


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleSignup } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate()


    const handleRegister = data => {

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                setError('');
                setSuccess(true)
                toast('User created successfully.');
                console.log(user);

                // user name sate
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        userInformationSaveDatabase(data.name, data.email);
                        navigate('/')
                    })
                    .catch(error => console.log(error))

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                setSuccess(false);
            })
    }
    const googleHandle = () => {
        googleSignup()
            .then(result => {
                const user = result.user;
                setSuccess(true)
                toast('User created successfully.');
                navigate('/');
                console.log(user);
            })
            .then(error => {
                console.error(error)
            })

    }

    const userInformationSaveDatabase = (name, email) => {
        const user = { name, email };
        fetch('https://ass-12-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // setCreatedUserEmail(email)//jwt
                console.log(data)
            })
    }
    return (
        <div className='w-96 m-auto my-8 shadow-2xl'>
            <div className="register-header">
                <h2 className='text-2xl font-bold text-center pt-5'>Sign Up</h2>
            </div>
            <form className='p-10' onSubmit={handleSubmit(handleRegister)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name:</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" {...register("name", { required: "Your name is required" })} />
                    {errors.name && <p className='text-red-900' role="alert">{errors.name?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email:</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" {...register("email", { required: "Your email is required" })} />
                    {errors.email && <p className='text-red-900' role="alert">{errors.email?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password:</span>
                    </label>

                    <input
                        type="password"
                        name='password'
                        placeholder="password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("password",
                            {
                                required: "Your password is required",
                                minLength: { value: 6, message: "At least 6 Characters" },
                                pattern: { value: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/, message: "Password must be strong" }
                            }
                        )}
                    />
                    {errors.password && <p className='text-red-900' role="alert">{errors.password?.message}</p>}
                </div>

                {
                    <>
                        <h2 className='text-red-700'>{error}</h2>
                        <h2 className='text-green-700'>{success && <span>User create succesfully</span>}</h2>
                    </>
                }

                <input type="submit" className='btn w-full mt-8' value="Sign Up" />

                <h2 className='font-bold'>Already Join Used Mobile?<Link className='text-primary' to="/login"> Log In</Link></h2>

            </form>
            <div className="google px-10">
                <h2 className='text-2xl font-bold text-center'>or</h2>
                <button className='btn w-full my-5' onClick={googleHandle}> <FaGoogle className='mr-5'></FaGoogle> Continue With Google</button>
            </div>
        </div>
    );
};

export default Register;