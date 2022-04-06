import React from "react";
import style from './Project.module.scss';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a className={style.btn}>Смотреть</a>
            </div>
            <div className={style.info}>
                <h3 className={style.title}>{props.name}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;