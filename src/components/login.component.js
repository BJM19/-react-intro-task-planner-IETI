import React, { Component } from "react";
export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-block" id="btn-2">Login</button>

            </form>
        );
    }
}