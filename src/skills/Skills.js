import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
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
