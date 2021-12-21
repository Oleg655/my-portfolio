import React from "react";
import style from './Work.module.css';

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                <button>Смотреть</button>
            </div>
                <div>{props.name}</div>
                <div>{props.description}</div>
        </div>
    );
}

export default Work;