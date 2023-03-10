import React from 'react';
import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contactsForm}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                </form>
                <button className={style.button}
                        onClick={() => alert("Ну напиши мне")}>Отправить
                </button>
            </div>
        </div>
    );
};