import React from "react";
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Title from "../common/components/title/Title";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={style.form}>
                    <input className={style.formControl} type="text" placeholder={'Name'}/>
                    <input className={style.formControl} type="text" placeholder={'Email'}/>
                    <textarea className={style.formControl} name="" id="" cols="10" rows="5"></textarea>
                </form>
                <button className={style.formBtn}>Send</button>
            </div>
        </div>
    );
}

export default Contacts