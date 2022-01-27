import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import "./Footer.css";
import './Home.css';
import Footer from "./Footer";

const Home = () => {
    return (
      <Fragment>
        <div className="up">
          <nav className="h3">
            <NavLink
              className="heada"
              activeStyle={{ color: "red" }}
              to="/home"
            >
              HOME
            </NavLink>
            <NavLink className="heada" to="/store">
              STORE
            </NavLink>
            <NavLink className="heada" to="/about">
              ABOUT
            </NavLink>
            <NavLink className="heada" to="/contact-us">
              CONTACT-US
            </NavLink>
          </nav>
        </div>
        <div className="downHome">
          <h1 className="h1">The Generics</h1>
          <button type="button" class="btn btn-outline-dark album">
            Get Our Latest Album
          </button>
          <div>
            <button type="button" class="btn btn-outline-dark play">
              <i class="fas fa-play"></i>
            </button>
          </div>
        </div>
        <div className="data">
          <div className="container">
            <div className="d-flex justify-content-center tours">TOURS</div>
            <div className="row">
              <div className="col">Jul 16</div>
              <div className="col">DETROIT, MI</div>
              <div className="col">DTE ENERGY MUSIC THEATRE</div>
              <div className="col">
                <button className="btn btn-primary pur">Purchase</button>
              </div>
            </div>
            <div className="row">
              <div className="col">Jul 19</div>
              <div className="col">DETROIT, MI</div>
              <div className="col">DTE ENERGY MUSIC THEATRE</div>
              <div className="col">
                <button className="btn btn-primary pur">Purchase</button>
              </div>
            </div>
            <div className="row">
              <div className="col">Jul 22</div>
              <div className="col">DETROIT, MI</div>
              <div className="col">DTE ENERGY MUSIC THEATRE</div>
              <div className="col">
                <button className="btn btn-primary pur">Purchase</button>
              </div>
            </div>
            <div className="row">
              <div className="col">Jul 29</div>
              <div className="col">DETROIT, MI</div>
              <div className="col">DTE ENERGY MUSIC THEATRE</div>
              <div className="col">
                <button className="btn btn-primary pur">Purchase</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
};

export default Home;