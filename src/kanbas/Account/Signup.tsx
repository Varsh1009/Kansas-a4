import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="wd-signup-screen" className="p-4">
            <h3>Sign up</h3>
            <input 
                placeholder="username" 
                className="form-control mb-2" 
            />
            <input 
                placeholder="password" 
                type="password" 
                className="form-control mb-2" 
            />
            <input 
                placeholder="verify password" 
                type="password" 
                className="form-control mb-3" 
            />
            <Link 
                to="/Kanbas/Account/Profile" 
                className="btn btn-primary w-100 mb-2"
            >
                Sign up
            </Link>
            <Link 
                to="/Kanbas/Account/Signin" 
                className="text-decoration-none"
            >
                Sign in
            </Link>
        </div>
    );
}
