import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from './Remotely.module.css'

export const Remotely = () => {
    return (
        <div className={style.remotelyBlock}>
            <div className={`${styleContainer.container} ${style.remotelyContainer}`}>
                <h3>Рассматриваю вариант удаленной работы</h3>
                <button onClick={() => alert("My Gmail")}>Нанять меня</button>
            </div>
        </div>
    );
};