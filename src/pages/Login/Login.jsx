import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {
    const { signIn } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass)
        signIn(email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }
    return (


        <form onSubmit={handleSubmit} className="my-8 rounded-xl">
            <div style={{ boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)", }} className="px-10 py-14  border  w-11/12 mx-auto rounded-lg" >
                <div className="flex flex-col items-center leading-[50px] justify-center">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
                        </div>
                    </div>
                    <h2 className="text-4xl text-center font-bold text-[#0060af] mt-4">Hey, Good to see you!</h2>
                    <p>Log in to get going with our recruitment process! </p>
                </div>
                <hr className="my-4 border" />
                <div className="space-y-5">
                    <h2 className="text-2xl font-semibold">Email Address</h2>
                    <input type="text" placeholder="Type here" name="email" className="input input-bordered  input-lg w-full " />
                    <h2 className="text-2xl font-semibold">Password</h2>
                    <input type="password" placeholder="Type here" name="pass" className="input input-bordered input-lg w-full " />
                </div>


                <input className="color-[#fff] text-2xl text-white w-full mt-4 bg-[#0060AF] h-14 text-center rounded-md" type="submit" value="Submit" />
                <Link>
                    <h2 className="text-center my-8 text-2xl text-[#0060af] underline font-semibold">Forgot Password</h2>
                </Link>
                <h2 className="text-center font-serif text-xs">If You Are New Here <Link className="text-red-400" to='/signup'>Please SignUp</Link></h2>
            </div>

        </form>



    );
};

export default Login;