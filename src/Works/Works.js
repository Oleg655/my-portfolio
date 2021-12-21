import React from "react";
import style from './Works.module.css';
import Work from "./Work/Work";
import styleContainer from '../common/styles/Container.module.css';

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={styleContainer.naming}>My works</h2>
                <div className={style.works}>
                    <Work name={'name'} description={'description'}/>
                    <Work name={'name'} description={'description'}/>
                </div>
            </div>
        </div>
    );
}

export default Works