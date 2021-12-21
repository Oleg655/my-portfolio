import React from "react";
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={styleContainer.naming}>Skills</h2>
                <div className={style.skills}>
                <Skill title={'JS'} description={'то текст-"рыба", часто используемый в печати и вэб-дизайне.' }/>
                <Skill title={'HTML & CSS'} description={'то текст-"рыба", часто используемый в печати и вэб-дизайне.'}/>
                <Skill title={'REACT'} description={'то текст-"рыба", часто используемый в печати и вэб-дизайне.' }/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
