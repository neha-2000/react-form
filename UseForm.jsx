import React, { useState } from 'react'
import axios from 'axios';
import {
    useHistory,
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const UseForm = (validate) => {

    const [values, setValues] = useState(
        {

            firstname: '',
            lastname: '',
            password: '',
            mpassword: '',
            email: ''
        }
    )
    const [errors, setErrors] = useState({})
    // const [redirect, setRedirect] = useState(false)
    let redirect=false;
    const history = useHistory();

    // const username="purva@gmail.com";
    // const password="12345";
    // const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');


    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

        // setChecking(true)
    }

    function handleSubmit(e) {
        console.log("redirect should be false", redirect)

        e.preventDefault();

       axios.post(`http://localhost:8080/admin`, {
            // id:values.id,
            firstname: values.firstname,
            lastname: values.lastname,
            password: values.password,
            email: values.email,

        })
        .then(function (response) {
                console.log(response)
                redirect=true;
                if (redirect == true) {
                    console.log(redirect)
                    history.push(`/dashboard`)
                }
                

        })
        .catch(function (error) {
                console.log(console.error());
        });

        console.log("redirect", redirect);

      
        // console.log(values.firstname);
        // console.log(values.lastname);
        // console.log(values.password);
        // console.log(values.email);

        // history.push(`/dashboard`);
        

    }


    return { handleChange, values, handleSubmit, errors }
};



export default UseForm
