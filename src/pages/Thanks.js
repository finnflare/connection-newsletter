import styles from './Home.module.css'
import projectStyles from './Home.module.css'
import { useNavigate } from "react-router-dom";

const Thanks = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className={styles['container']}>
      <div className={styles['i-phone141']}>
        <div className={styles['frame5']}>
            <div className={styles['frame4']}>
                <span
                className={` ${styles['text']} ${projectStyles['poppins-h2']} `}
                >
                <span>THANKS!</span>
                </span>
                <span className={styles['text2']}>
                YOU'LL HEAR FROM US SOON
                </span>
            </div>
            <div className={styles['frame3']} onClick={handleClick}>
            <span className={styles['text3']}>BACK TO HOME</span>
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

export default Thanks;