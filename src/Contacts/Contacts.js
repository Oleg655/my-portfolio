import React from "react";
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={styleContainer.naming}>Contacts</h2>
                <form className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Contacts