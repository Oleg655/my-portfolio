import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.greeting}>
                    <span className={style.description}>Hi there</span>
                    <h1>I am Oleg</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
