
import React from 'react';
import { useFormik } from 'formik';
import Card from './context';

function Login() {
    const formik = useFormik({
        initialValues:{
          emailField: '',
          paswField: '',
        },
    
        validate: values => {
          let errors = {};
          if(!values.emailField) errors.emailField = 'emailError';
          if(!values.paswField) errors.paswField = 'pswError';
          return errors;
             
        },
       
          onSubmit: values =>{
          alert("Login Successful!");
        }
    
      });
      return (
        <>
        <h1>LOGIN</h1><br/>
        <Card
        bgcolor="primary"
        txtcolor="white"
        header="Login Page"

        body={      
        
        <div className="login">
    
                <form onSubmit = {formik.handleSubmit}>
                
                <div className='email-login'>email</div> 
                <input name="emailField" type="text" onChange={formik.handleChange}
                value={formik.values.emailField}/>
                {formik.errors.emailField ? <div style={{color: 'red'}}>{formik.errors.emailField}</div>: ' Field required'}
            
                <div className='password-login'>password</div> 
                <input name="paswField" type="text" onChange={formik.handleChange}
                value={formik.values.paswField}/>
                {formik.errors.paswField ? <div style={{color: 'red'}}>{formik.errors.paswField}</div>: ' Field required'}
            
                <div className='submit-login'>submit</div> 
                <button type="submit">Submit</button>
          
        </form>      
            
        </div>
        
        }
        />
        </>
      );
    }

export default Login;


