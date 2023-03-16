import React from "react"
import styles from './checkbox.module.scss'

export const Checkbox2 = () => {
    return (
        <div className={styles.checkbox}>
            <span>
                <p className={styles.chooseType}>Тип товара</p>
                <form>
                      <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Выбрать все
                        </label>
                    </div>
                     <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Одежда
                        </label>
                    </div>
                       <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Обувь
                        </label>
                    </div>
                       <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Аксессуары
                        </label>
                    </div>
                </form>
            </span>
        </div>
    )
}
