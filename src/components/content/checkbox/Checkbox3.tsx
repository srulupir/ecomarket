import React, {useState} from "react"
import styles from './checkbox.module.scss'

export const Checkbox3 = () => {
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);

    const handleSelectAll = () => {
        setIsCheckedAll(!isCheckedAll);
        setIsChecked1(!isCheckedAll);
        setIsChecked2(!isCheckedAll);
        setIsChecked3(!isCheckedAll);
        setIsChecked4(!isCheckedAll);
        setIsChecked5(!isCheckedAll);
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

    const handleCheckbox4Change = () => {
        setIsChecked4(!isChecked4);
    };

    const handleCheckbox5Change = () => {
        setIsChecked5(!isChecked5);
    };
    return (
        <div className={styles.checkbox}>
            <span>
                <p className={styles.chooseType}>Брэнд</p>
                <div className={styles.form_group}>
                        <label>
                            <input onClick={handleSelectAll} type="checkbox" className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Выбрать все
                        </label>
                </div>
                <form className={styles.scroll}>
                    <div className={styles.scroll_content}>
                         <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" checked={isChecked1} onChange={() => setIsChecked1(!isChecked1)}  className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            H&M
                        </label>
                    </div>
                     <div className={styles.form_group}>
                        <label>
                            <input type="checkbox"checked={isChecked2} onChange={() => setIsChecked2(!isChecked2)}  className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            P&B
                        </label>
                    </div>
                      <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" checked={isChecked3} onChange={() => setIsChecked3(!isChecked3)}  className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Adidas
                        </label>
                    </div>
                      <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" checked={isChecked4} onChange={() => setIsChecked4(!isChecked4)}  className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Nike
                        </label>
                    </div>
                      <div className={styles.form_group}>
                        <label>
                            <input type="checkbox" checked={isChecked5} onChange={() => setIsChecked5(!isChecked5)}  className={styles.real_checkbox}/>
                            <span className={styles.custom_checkbox}></span>
                            Reebok
                        </label>
                    </div>
                    </div>


                </form>
            </span>
        </div>
    )
}
