import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
    faEllipsisV,
    faCheckCircle,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return ( <
        div className = "mb-3" >
        <
        div className = "module-form" >
        <
        button onClick = {
            () => dispatch(addModule({...module, course: courseId })) } >
        Add <
        /button>  <
        button onClick = {
            () => dispatch(updateModule(module)) } > Update < /button> <
        input value = { module.name }
        onChange = {
            (e) =>
            dispatch(setModule({...module, name: e.target.value }))
        }
        />  <
        textarea value = { module.description }
        onChange = {
            (e) =>
            dispatch(setModule({...module, description: e.target.value }))
        }
        />  <
        /div>  {
            modules
                .filter((module) => module.course === courseId)
                .map((module, index) => ( <
                    React.Fragment key = { index } >
                    <
                    ul className = "list-group module-groups" >
                    <
                    li className = "list-group-item list-group-item-secondary" >
                    <
                    FontAwesomeIcon icon = { faEllipsisV }
                    className = "ellipse-color" / >
                    <
                    FontAwesomeIcon icon = { faEllipsisV }
                    className = "ellipse-color icon-space2" /
                    >
                    <
                    FontAwesomeIcon icon = { faCaretDown }
                    className = "icon-space2" / > { module.name } <
                    button onClick = {
                        () => dispatch(setModule(module)) } >
                    Edit <
                    /button>  <
                    button onClick = {
                        () => dispatch(deleteModule(module._id)) } >
                    Delete <
                    /button>  <
                    div className = "float-end" >
                    <
                    div className = "btn-group" >
                    <
                    FontAwesomeIcon icon = { faCheckCircle }
                    className = "text-success icon-space dropdown-toggle" /
                    >
                    <
                    ul className = "dropdown-menu" > < /ul>  <
                    /div>  <
                    FontAwesomeIcon icon = { faPlus }
                    className = "icon-space ellipse-color" /
                    >
                    <
                    FontAwesomeIcon icon = { faEllipsisV }
                    className = "ellipse-color" /
                    >
                    <
                    /div>  <
                    /li>  <
                    li className = "list-group-item left-border-line" >
                    <
                    FontAwesomeIcon icon = { faEllipsisV }
                    className = "ellipse-color" / >
                    <
                    FontAwesomeIcon icon = { faEllipsisV }
                    className = "ellipse-color icon-space-head" /
                    > { module.description } <
                    i className = "ellipse-color float-end " >

                    <
                    FontAwesomeIcon icon = { faEllipsisV }
                    /> <
                    /i> <
                    i className = "text-success float-end icon-space" >

                    <
                    FontAwesomeIcon icon = { faCheckCircle }
                    /> <
                    /i> <
                    /li>  <
                    /ul>  <
                    /React.Fragment>
                ))
        } <
        /div>
    );
}

export default ModuleList;