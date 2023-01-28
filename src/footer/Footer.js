import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";
import {SocialNetwork} from "./socialNetwork/SocialNetwork";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={` ${styleContainer.container} ${style.footerContainer}`}>
                <div className={style.fullName}>Адександр Тетерюков</div>
                <div className={style.socialNetworks}>
                    <SocialNetwork title={"Vk"}/>
                    <SocialNetwork title={"face"}/>
                    <SocialNetwork title={"telega"}/>
                    <SocialNetwork title={"insta"}/>
                </div>
                <div>2023 Все прова защищены</div>
            </div>
        </div>
    );
};