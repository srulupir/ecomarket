import React, { useState } from "react";
import styles from "../index.module.sass";
import {Field, Form, Formik} from "formik";
import * as yup from "yup";


interface AuthPartnersProps {
    onFormSwitch: (formName: string) => void;
}
export const AuthPartners = ({onFormSwitch}:AuthPartnersProps) => {
    const validationSchema = yup.object({
        phone: yup.string().required(),
        password: yup.string().required(),
    })
    return (
        <div className={styles.firstBlock}>
            <h3>Вход</h3>

            <Formik
                initialValues={{
                    company: '',
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values)=>{
                    console.log(values)}
                }
            >
                {({errors}) => (
                    <Form>
                        <label htmlFor="company"></label>
                        <Field className={styles.input1} id="company" name="company" placeholder="Наименование организации"/>
                        {/*{errors.phone && <div>{errors.phone}</div>}*/}

                        <label htmlFor="email"></label>
                        <Field className={styles.input3} id="email" name="email" placeholder="Email"/>
                        {/*{errors.phone && <div>{errors.phone}</div>}*/}

                        <label htmlFor="password"></label>
                        <Field className={styles.input2} id="password" name="password" placeholder="Пароль"/>
                        {/*{errors.password && <div>{errors.password}</div>}*/}
                    </Form>
                )}
            </Formik>
            <div className={styles.text}>
                <button className={styles.btn_green}>Получить код</button>
            </div>
            <div className={styles.text}>
                <button className={styles.green} onClick={()=> onFormSwitch('auth')}>Я уже зарегестрировался(-ась)</button>
            </div>

            <button className={styles.btn_gray} onClick={()=> onFormSwitch('authPartners')}>Вход для партнеров</button>
        </div>
    )

}