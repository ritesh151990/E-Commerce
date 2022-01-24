import './Footer.css';

const Footer = props => {
    return (
      <section className="foot">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="footh1">The Generics</h1>
            </div>
            <div className="col">
              <a className="foot-a" href="https://www.youtube.com/">
                <i class="fab fa-youtube fa-2x"></i>
              </a>
              <a className="foot-a" href="https://www.spotify.com/">
                <i class="fab fa-spotify fa-2x"></i>
              </a>
              <a className="foot-a" href="https://www.facebook.com/">
                <i class="fab fa-facebook fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Footer;