import React from 'react';
import {Project} from "./project/Project";
import style from './Projects.module.css'
import styleContainer from "../common/styles/Container.module.css";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    <Project title={"Google"}
                             description={"knsbkval  sdgsd sdfLKSDNFLN ALSKNFALKDLVLKLlknlkvkl  aslkfjlaffj s kSJDFKJ  SDFJ ASDD F"}
                             url={"https://www.google.com/?&bih=975&biw=1920&rlz=1C1GCEA_enBY1037BY1037&hl=ru"}/>
                    <Project title={"Yandex"}
                             description={"knsbkval  adfa adsfg adfg  adfg  SDFJ ASDD F"}
                             url={"https://yandex.by/"}/>
                    <Project title={"Rambler"}
                             description={"knsbkval  Counter ALSdfgsVLKLlknl sdfg51684 aslkfjlaffj s kSJDFKJ  SDFJ ASDD F"}
                             url={"https://www.rambler.ru/"}/>
                </div>
            </div>
        </div>
    );
};