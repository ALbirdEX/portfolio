import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Я  тфэыалп дэЛдcvbsfg  adfgadf g 5165191 arg asлатпдт ы"}/>
                    <Skill title={"TS"} description={"Я дяьчтд  дэЛдлатпдт ы"}/>
                    <Skill title={"React"} description={"Я дяьчтд тфэыалп  ы"}/>
                </div>
            </div>
        </div>
    );
};