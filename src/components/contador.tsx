import React, { useState } from "react";
import styles from "./styles.module.css";

const Counter: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const handleClick = () => {
        setCounter(counter + 1);
    };

    const handleRest = () => {
        setCounter(0);
    };

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.displayButton}>{counter}</div>
                <div onClick={handleClick} className={styles.clickButton}>
                    Click!
                </div>
                <div onClick={handleRest} className={styles.clickButton}>
                    Reset
                </div>
            </div>
        </>
    );
};
export default Counter;
