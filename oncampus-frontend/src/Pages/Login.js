import "../Components/LoginSignUp/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { signInWithEmail } from "../redux/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import { resetErrorMessage } from "../redux/actions/authActions";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LoginSignUp = () => {
    const [loading, setLoading] = useState(false);

    const responseStatusCode = useSelector(
        (state) => state.auth.loginStatusCode
    );
    const loginWithEmailResponse = useSelector(
        (state) => state.auth.loginWithEmailResponse
    );
    const errorMessage = useSelector((state) => state.auth.errorMessage);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    //ErrorMessage
    var Message;

    //user-login-verification
    if (loginWithEmailResponse.data) {
        dispatch(resetErrorMessage);
        if (loginWithEmailResponse.data.user_token) {
            localStorage.setItem("jwt", loginWithEmailResponse.data.user_token);
            navigate("/dashboard");
        }
    } else if (responseStatusCode === 200) {
        dispatch(resetErrorMessage);
        navigate("/otpPage", {
            state: { Email: email, verification: "EMAIL_VERIFICATION" },
        });
    } else if (errorMessage) {
        Message = errorMessage;
        // setLoading(false);
    }

    useEffect(() => {
        setLoading(false);
        if (Message === "Invalid Credentials")
            setTimeout(() => {
                setLoading(false);
            }, 3000);
    }, [Message]);

    const handleSubmitSignIn = () => {
        setLoading(true);
        dispatch(signInWithEmail(email, password));
    };

    const handleClick = () => {
        dispatch(resetErrorMessage);
        navigate("/signUp");
    };

    return (
        <>
            <div className="body">
                <div className="container " id="container">
                    <button
                        onClick={handleClick}
                        className="mobile_view_signUp"
                    >
                        Sign up
                    </button>
                    <div>
                        <div className="signin-form form2">
                            <h1 className="h1">SIGN IN</h1>
                            <div>
                                <input
                                    style={{ marginTop: "40px" }}
                                    className="signin-email input"
                                    type="email"
                                    name="email"
                                    placeholder="&#xf0e0;  Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    className="signin-password input"
                                    type="password"
                                    name="password"
                                    placeholder="&#xf023;  Password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>

                            <LoadingButton
                                style={{
                                    width: "18rem",
                                    color: "black",
                                    background: "#00000000",
                                    border: "2px solid black",
                                    borderRadius: "15px",
                                    margin: "20px",
                                    height: "2.8rem",
                                    fontFamily: "Inter,sans-serif",
                                    fontWeight: "700",
                                }}
                                className="submit button"
                                onClick={handleSubmitSignIn}
                                endIcon={<ArrowForwardIosIcon />}
                                loading={loading}
                                loadingPosition="end"
                                variant="contained"
                            >
                                Sign In
                            </LoadingButton>

                            <p style={{ color: "black" }}>{Message}</p>
                            <Link
                                style={{
                                    fontSize: "18px",
                                    marginTop: "2rem",
                                    fontWeight: "700",
                                }}
                                to="/verifyEmail"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="overlay2">
                    <div className="overlay-panel ">
                        <p className="p">Don't have an account? Signup</p>
                        <button
                            onClick={handleClick}
                            style={{
                                width: "18rem",
                                color: "white",
                                background: "black",
                                borderRadius: "15px",
                                margin: "20px",
                                height: "2.8rem",
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "700",
                            }}
                            className="ghost button"
                            id="signUp"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* // </div> */}
        </>
    );
};

export default LoginSignUp;
