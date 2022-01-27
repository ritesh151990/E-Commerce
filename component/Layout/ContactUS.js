import { Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import "./About.css";
import "./Footer.css";
import Footer from "./Footer";

const ContactUS = () => {
        const nameRef = useRef("");
        const mailRef = useRef("");
        const phnoRef = useRef("");

        const contacts = {
          name: nameRef.current.value,
          email: mailRef.current.value,
          phno: phnoRef.current.value,
        };

    async function contactHandler() {
      const response = await fetch(
        "https://e-commerce-3c6d9-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(contacts),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data.name);
    }

  return (
    <Fragment className="apage">
      <div className="up">
        <nav className="h3">
          <NavLink className="heada" to="/home">
            HOME
          </NavLink>
          <NavLink className="heada" to="/store">
            STORE
          </NavLink>
          <NavLink className="heada"  to="/about">
            ABOUT
          </NavLink>
          <NavLink className="heada" activeStyle={{ color: "red" }} to="/contact-us">
            CONTACT-US
          </NavLink>
        </nav>
      </div>
      <div className="down">
        <h1 className="h1">The Generics</h1>
      </div>
      <div className="d-flex justify-content-center about">ContactUs</div>
      <form onSubmit={contactHandler}>
        <label htmlFor="name">NAME</label>
        <input type="text" ref={nameRef} />
        <label htmlFor="e-mail">E-MAIL</label>
        <input type="mail" ref={mailRef} />
        <label htmlFor="phno">PHno</label>
        <input type="number" ref={phnoRef} />
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </Fragment>
  );
};

export default ContactUS;
