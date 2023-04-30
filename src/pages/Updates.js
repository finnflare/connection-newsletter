import { useState } from 'react'
import styles from './Home.module.css'
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Updates = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    if (validateEmail(email)) {
        addDoc(collection(db, "interested-people"), {
            email: email
        });
        navigate("/thanks");
    }
    else {
        // Need to implement a way to notify if the email address is invalid
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className={styles['container']}>
      <div className={styles['i-phone141']}>
        <div className={styles['frame5']}>
          <div className={styles['frame4']}>
            <span className={styles['text2']}>
              ENTER YOUR EMAIL TO RECEIVE UPDATES ABOUT CONNECTION
            </span>
          </div>
          <input className={styles["input"]} placeholder="email" value={email} onChange={(text) => setEmail(text.target.value)}/>
          <div className={styles['frame3']} type="submit" onClick={handleSignUp}>
            <span className={styles['text3']}>SUBMIT</span>
          </div>
        </div>
        <img
          src={require("./connection.jpg")}
          alt=""
          className={styles['logo']}
        />
      </div>
    </div>
  )
}

export default Updates;