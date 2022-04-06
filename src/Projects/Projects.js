import React from "react";
import style from './Projects.module.scss';
import Project from "./Project/Project";
import Title from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.css';
import todoImage from '../assets/image/todolist.jpg'
import socialImage from '../assets/image/social-network.jpg'

function Projects() {
    const todoList = {
        backgroundImage: `url(${todoImage})`,
    }
    const social = {
        backgroundImage: `url(${socialImage})`,
    }


    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project style={todoList} name={'todolist'} description={'descriptionzxcsdvfvvvvvvvvvvvvvddcc cccccccccccccccccccc'}/>
                    <Project style={social} name={'social network'} description={'description'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects