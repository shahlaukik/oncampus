import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/homepage/Homepage";
import LoginSignUp from "./Pages/Login";
import SignUpPage from "./Pages/SignUpPage";
import OtpPage from "./Pages/OtpPage";
import SignUpForm from "./Pages/SignUp_form";
import Dashboard from "./Pages/Dashboard";
import BuySell from "./Pages/Buy_sell";
import LostFound from "./Pages/Lost_found";

import NotFound from "./Components/NotFound/NotFound";

//
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductDetails from "./Pages/ProductDetails_buySell";
import LostFoundItemDetails from "./Pages/ProductDetails_lostFound";
import AddItem from "./Pages/Additems_lostFound";
import Requirement from "./Pages/Requirement";
import EditMyRequirement from "./Pages/Edit_MyRequirement";
import EditMyBuySellItems from "./Pages/Edit_MyBuySellItems";
import EditMyLostFoundItems from "./Pages/Edit_MyLostFoundItems";
import SideBar from "./Components/SideAppbarr/SideBar";
import VerifyEmailPage from "./Pages/VerifyEmailPage";
import ResetPassword from "./Pages/ResetPassword";
import LostFoundResponses from "./Pages/LostFoundResponses";
import Messenger from "./Pages/Messenger";
import EditProfile from "./Pages/Edit_Profile";
import ProfilePage from "./Components/profile/ProfilePage";
import ChangePassword from "./Pages/Change_Password";

const theme = createTheme({
    palette: {
        secondary: {
            main: "#FFFF00",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/loginSignUp" element={<LoginSignUp />} />
                        <Route path="/signUp" element={<SignUpPage />} />
                        <Route path="/otpPage" element={<OtpPage />} />
                        <Route path="/signUpForm" element={<SignUpForm />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/buySell" element={<BuySell />} />
                        <Route path="/lostFound" element={<LostFound />} />

                        {/*  */}
                        <Route path="/requirements" element={<Requirement />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/resetPassword" element={<ResetPassword />} />
                        <Route path="/editProfile" element={<EditProfile />} />
                        <Route path="/verifyEmail" element={<VerifyEmailPage />} />
                        <Route path="/changePassword" element={<ChangePassword />} />
                        <Route path="/editMyRequirement" element={<EditMyRequirement />} />
                        <Route path="/editMyBuySellItems" element={<EditMyBuySellItems />} />
                        <Route path="/lostItem/:id" element={<LostFoundItemDetails />} />
                        <Route path="/lostItem/addItem" element={<AddItem />} />
                        <Route path="/sidebar/*" element={<SideBar />} />
                        {/* <Route path="/sidebar/*" element={<h1>hi</h1>} /> */}
                        <Route path="/editLostFoundItems/:id" element={<EditMyLostFoundItems />} />
                        <Route path="/chatRoom" element={<Messenger />} />
                        <Route path="/responses" element={<LostFoundResponses />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
