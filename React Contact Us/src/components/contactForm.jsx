import React from "react";
import styles from "./contactForm.module.css";
import Button from "./Button/Button";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
           <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
        <Button text="VIA CALL" icon={<MdCall />} />
        </div>
        <Button
        isOutline={true}
        text="VIA EMAIL FORM" icon={<MdEmail />} />


      <form>
      <div className={styles.form_controller}>
        <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      </div>
      <div className={styles.form_controller}>
        <label htmlFor="name">Email</label>
      <input type="email" name="email" />
      </div>
      <div className={styles.form_controller}>
        <label htmlFor="name">Text</label>
      <textarea name="text" rows="8" />
      </div>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "12px"
      }}>
        <Button
        text="SUBMIT" />
      </div>
      </form>
   </div>
      <div className={styles.contact_image}>
        <img src="\images\Service 24_7-pana 1.svg" alt="contact image" />
      </div>
    </section> 
  );
};

export default ContactForm;
