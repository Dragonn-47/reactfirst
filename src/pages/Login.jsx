import { useForm } from "react-hook-form";
import "./Login.css";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("user data", data);
        alert("Registration Successful");
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

                <h2>User Registration</h2>

                <div>
                    <label>Name:</label><br />
                    <input
                        type="text"
                        {...register("name", {
                            required: "Name is required"
                        })}
                    />
                    <p style={{ color: "red" }}>
                        {errors.name?.message}
                    </p>
                </div>

                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email format",
                            },
                        })}
                    />
                    <p style={{ color: "red" }}>
                        {errors.email?.message}
                    </p>
                </div>

                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required"
                        })}
                    />
                    <p style={{ color: "red" }}>
                        {errors.password?.message}
                    </p>
                </div>

                <button type="submit" className="login-btn">
                    Register
                </button>

            </form>
        </div>
    );
}

export default Login;