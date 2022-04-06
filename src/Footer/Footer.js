import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Title from "../common/components/title/Title";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title text={'Oleg Savin'}/>
                <div className={style.iconBlock}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div>2021 Все права защищены</div>
            </div>
        </div>
    );
}

export default Footer