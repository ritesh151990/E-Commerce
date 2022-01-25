import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import './About.css';

const About = () => {
    return (
      <Fragment className="apage">
        {/* <Header /> */}
        <div className="container">
          <div className="d-flex justify-content-center about">About</div>
          <div className="row">
            <div className="col">
              <img src="" alt="About" />
            </div>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est. Amet justo donec enim diam
                vulputate. Mauris commodo quis imperdiet massa tincidunt nunc
                pulvinar sapien et. Purus in massa tempor nec. Metus dictum at
                tempor commodo ullamcorper a lacus vestibulum. Maecenas accumsan
                lacus vel facilisis volutpat est velit egestas dui. Ultrices in
                iaculis nunc sed augue lacus viverra vitae. Neque sodales ut
                etiam sit. At tempor commodo ullamcorper a lacus vestibulum.
                Maecenas sed enim ut sem viverra aliquet eget sit. Tellus id
                interdum velit laoreet id donec. Ac feugiat sed lectus
                vestibulum mattis. Pharetra pharetra massa massa ultricies. Cras
                sed felis eget velit aliquet sagittis id consectetur purus.
                Ultrices sagittis orci a scelerisque purus. Morbi tristique
                senectus et netus et malesuada.
              </p>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </Fragment>
    );
};

export default About;