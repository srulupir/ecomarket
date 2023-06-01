import React, {useState} from "react"
import styles from './checkbox.module.scss'

export const Checkbox2 = () => {
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const handleSelectAll = () => {
        setIsCheckedAll(!isCheckedAll);
        setIsChecked1(!isCheckedAll);
        setIsChecked2(!isCheckedAll);
        setIsChecked3(!isCheckedAll);
    }

    const handleCheckbox1Change = () => {
        setIsChecked1(!isChecked1);
    };

    const handleCheckbox2Change = () => {
        setIsChecked2(!isChecked2);
    };

    const handleCheckbox3Change = () => {
        setIsChecked3(!isChecked3);
    };

    return (
        <div className={styles.checkbox}>
            <span>
                <p className={styles.chooseType}>Тип товара</p>
                <form>
                      <div className={styles.form_group}>
                        <label>
                            <input onClick={handleSelectAll} type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Выбрать все
                        </label>
                    </div>
                     <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" checked={isChecked1} onChange={() => setIsChecked1(!isChecked1)} className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Одежда
                        </label>
                    </div>
                       <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" checked={isChecked2} onChange={() => setIsChecked2(!isChecked2)} className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Обувь
                        </label>
                    </div>
                       <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" checked={isChecked3} onChange={() => setIsChecked3(!isChecked3)} className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Аксессуары
                        </label>
                    </div>
                </form>
            </span>
        </div>
    )
}
