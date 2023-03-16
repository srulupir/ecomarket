import React from "react"
import styles from './checkbox.module.scss'

export const Checkbox3 = () => {
    return (
        <div className={styles.checkbox}>
            <span>
                <p className={styles.chooseType}>Брэнд</p>
                <form>
                      <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            H&M
                        </label>
                    </div>
                     <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            P&B
                        </label>
                    </div>
                      <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Adidas
                        </label>
                    </div>
                      <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Nike
                        </label>
                    </div>
                      <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Reebok
                        </label>
                    </div>

                </form>
            </span>
        </div>
    )
}
