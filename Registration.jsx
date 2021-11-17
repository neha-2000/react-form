import React, { useState, useEffect } from 'react'
import {
    useHistory,
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import UseForm from './UseForm';
import validate from '../validateinfo';


// This is in new branch jwtstartup

function Registration({ submitForm }) {

    const { handleChange, values, handleSubmit, errors } = UseForm(validate);

    return (
        <div className="container login-container">
            <div className="row">
                <div className="row d-flex justify-content-center">
                    <div className=" col-sm-6 login-form-1">
                        <h3>New Registration </h3>
                        <form>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    required
                                /> {errors.firstname && <p style={{ color: "red" }}>{errors.firstname}</p>}<br />

                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    name="lastname"
                                    placeholder="Last Name"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    required
                                />{errors.lastname && <p style={{ color: "red" }}>{errors.lastname}</p>}<br />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Your Email *"
                                    value={values.email}
                                    required
                                    onChange={handleChange} />{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}<br />
                            </div>

                            <div className="form-group">
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    value={values.password}
                                    placeholder="Your Password *"
                                    required
                                    onChange={handleChange} />{errors.password && <p style={{ color: "red" }}>{errors.password}</p>}<br />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    className="form-control"
                                    name="mpassword"
                                    value={values.password2}
                                    placeholder="Confirm  Password *"
                                    required
                                    onChange={handleChange} />{errors.password2 && <p style={{ color: "red" }}>{errors.password2}</p>}<br />
                            </div>
                            <div className="form-group">
                                <input type="submit"
                                    onClick={handleSubmit}
                                    className="btnSubmit"
                                    value="Register" /><br /><br />
                            </div>
                            <span className="form-input-login">
                                Already have an account ? Login <Link to='/'>Here</Link>
                            </span>


                        </form>
                    </div>

                </div>
                </div>
                </div>



                )
}

                export default Registration
