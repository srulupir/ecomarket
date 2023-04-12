import React, {FC, useState} from "react";
import styles from "./header.module.scss"
import logo from '../../assets/logo.png'
import locationIcon from '../../assets/locationIcon.png'
import profileImage from '../../assets/profileImage.png'
import priceIcon from '../../assets/Frame 3.png'
import {NavLink} from "react-router-dom";
import cn from "classnames"
import {Modal} from "../Modal";

export const Header:FC = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.leftside}>
                    <img className={styles.logo} src={logo} alt="logo" />
                    <ul className={styles.list}>
                        <nav className={styles.navList}>
                            <li><button className={styles.btn}>Главная</button></li>
                            <li><button className={styles.btn}>Пункты сбора</button></li>
                            <li><NavLink to="/ecomarket" className={({isActive}) => cn(styles.isActiveLink)}>
                                <button className={styles.btn}>ЭкоМаркет</button>
                            </NavLink></li>

                            <li><button className={styles.btn}>О сервисе</button></li>
                        </nav>

                    </ul>
                </div>

                <div className={styles.userInfo}>
                    <div className={styles.location}>
                        <img className={styles.locationIcon} src={locationIcon} alt="location icon" />
                        <p className={styles.discription}>Казань</p>
                    </div>
                    <div className={styles.price}>
                        <img className={styles.priceIcon} src={priceIcon} alt="price icon" />
                        <p className={styles.discription}>1000</p>
                    </div>
                    <div className={styles.user}>
                        <Modal visible={visible} onClose={() => setVisible(false)} />
                        <button className={styles.user} onClick={() => setVisible(true)}>
                            <img className={styles.profileImage} src={profileImage} alt="profile image" />
                            <p className={styles.discription}>Алексей</p>
                        </button>

                    </div>
                </div>
            </div>
            <hr className={styles.hr}/>
        </div>
    )
}