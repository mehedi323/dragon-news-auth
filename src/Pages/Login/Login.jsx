import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const { SingInUser, SingInUserWithGoogle } = useContext(AuthContext) 
    const navigate = useNavigate();
    const location = useLocation();
    console.log('location in the Login page', location);
 
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        SingInUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state  ?  location?.state : '/' );
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGoogle = () => {
        SingInUserWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-2xl font-bold text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-3">Dont’t Have An Account ? <Link className="text-blue-700 font-bold" to='/register'>Register</Link></p>
                <p className="pb-4 text-center"><button onClick={handleGoogle} className="btn btn-ghost ">Google</button></p>
            </div>
        </div>
    );
};

export default Login;