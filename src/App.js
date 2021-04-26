import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <section class="contain">
    <div className="form-container" >
      <form className='register-form' onSubmit={handleSubmit}>

        {submitted && valid ? <div class="success-message">Success! Thank you for registering</div>: null}
        <input 
        onChange = {handleFirstNameInputChange}
        value= {values.firstName}
        className = "form-field"
        placeholder="first-name"
        name= "firstName"/>
        <br/> 
        {submitted && !values.firstName ? <span>Please enter a first name</span>: null}
        <br/>
        
        <input 
        onChange = {handleLastNameInputChange}
        value= {values.lastName}
        className = "form-field"
        placeholder="last-name"
        name= "lastName" />
        <br/> 
        {submitted && !values.lastName ? <span>Please enter a last name</span>: null}
        <br/>
        
        <input 
        onChange = {handleEmailInputChange}
        className = "form-field"
        placeholder="email"
        name= "email" />
        <br/> 
        {submitted && !values.email ? <span>Please enter an email address</span>: null}
        <br/>

        <button type="submit" value="Submit">Submit</button>

      </form>
      
    </div>
    </section>
  );
}

export default App;
