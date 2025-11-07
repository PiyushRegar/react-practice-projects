import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import styles from "./Button.module.css";

import React from 'react'

const Button = (props) => {

const {isOutline, icon, text} = props;

  return (
    <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
        </button>
  )
}

export default Button