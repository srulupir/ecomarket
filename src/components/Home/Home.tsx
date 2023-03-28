import React, {useState} from "react";
import {Modal} from "../Modal";

export const Home = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div>
            <Modal visible={visible} onClose={() => setVisible(false)} />
            <button onClick={() => setVisible(true)}>Show modal</button>
        </div>
    )
}
