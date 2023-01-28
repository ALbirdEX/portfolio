import React from 'react';
import style from "./SocialNetwork.module.css"

export const SocialNetwork = (props) => {
    return (
        <div className={style.social}>
            {props.title}
        </div>
    );
};