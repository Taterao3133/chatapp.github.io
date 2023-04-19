
import Add from "../img/addAvatar.png";
import {Link }from 'react-router-dom';

const Register = () => { 

  
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat-app</span>
        <span className="title">Register...</span>
        <form >
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button  ><Link to='/Home' style={{color:'white', textDecoration:'none'}}>Sign Up</Link></button>
         
        </form>
        <p>
           Do You have an account? <Link to="/login" >Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
