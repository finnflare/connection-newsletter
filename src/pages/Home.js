import React from 'react'
import projectStyles from './Home.module.css'
import styles from './Home.module.css'
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/updates");
  }

  return (
    <div className={styles['container']}>
      <div className={styles['i-phone141']}>
        <div className={styles['frame2']}>
          <div className={styles['frame4']}>
            <span
              className={` ${styles['text']} ${projectStyles['poppins-h2']} `}
            >
              <span>CONNECTION</span>
            </span>
            <span className={styles['text2']}>
              CARE IS BEST WHEN CONNECTED
            </span>
          </div>
          <div className={styles['frame3']} onClick={handleClick}>
            <span className={styles['text3']}>SIGN UP FOR OUR NEWSLETTER</span>
          </div>
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/31c86d2f-c72c-40c7-a590-390d25ffa484/554a9290-cce3-49b6-8725-51a8b93bd101?org_if_sml=152985"
          alt=""
          className={styles['picture1']}
        />
      </div>
    </div>
  )
}

export default Home;