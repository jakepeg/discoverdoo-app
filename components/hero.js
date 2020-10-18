import React from 'react';

const Hero = () => {

  return (
    <div className="hero">
      <div className="contain hero-section">
        <div className="hero-copy">
          <h1>Discover online experiences <br />for kids</h1>
          {/* <p className="value-prop">
            Value Proposition
          </p> */}

        </div>
        <div className="hero-image">
          <img className="image" src={`https://res.cloudinary.com/jakepeg/image/upload/v1602843000/zen_nnifka.png`} alt="kids doing activities" />
        </div>
      </div>

      <style jsx>{`
        .hero {
          background-color: #0b334d;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 50% 50%;
          height: 440px;
        }

        .hero-copy h1 {
          color: #ffffff;
          letter-spacing: 2px;
          font-weight: 600;
          font-family: Verdana, Geneva, sans-serif;
        }

        .image {
          width: 100%;
        }

        .hero-image {
          max-width: 800px;
        }

        .value-prop {
          font-size: 1.3rem;
          line-height: 1.3;
          padding: 0 50px 0 0;
          color: #ffffff;
        }

        /* for phones only */
        @media (max-width: 599px) {
          .hero-section {
            margin: 0;
            grid-template-columns: 100%;
            height: 280px;
          }

          .hero-image {
            display: none;
          }

          .hero-copy {
            max-width: 100%;
            margin-top: 40px;
          }

          .hero-copy h1 {
            line-height: 40px;
            font-size: 2rem;
            text-align: center;
          }

        }

        /* for-tablet-portrait-up */
        @media (min-width: 600px) {

          .hero-section {
            height: 300px;
          }

          .hero-copy h1 {
            line-height: 40px;
            font-size: 1.8rem;
          }

          .hero-copy {
            max-width: 100%;
            margin-top: 40px;
          }

        }

        /* for-tablet-landscape-up */
        @media (min-width: 900px) {

          .hero-section {
            height: 440px;
          }

          .hero-image {
            display: block;
          }

          .hero-copy {
            margin-top: 80px;
          }

          .hero-copy h1 {
            line-height: 55px;
            font-size: 2.6rem;
          }

        }

        /* for-desktop-up */
        @media (min-width: 1200px) {
        }

        /* for-large-desktop-up */
        @media (min-width: 1800px) {
        }
      `}</style>
    </div>
  );
}

export default Hero