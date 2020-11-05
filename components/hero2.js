import React from 'react';
import { CATEGORY_INFO } from '../actions';

const Hero2 = (props) => {

  const titleg = props.title
  const filtered = CATEGORY_INFO.filter(a=>a.title===titleg)
  const tag = filtered[0].tagline
  const img = filtered[0].image

  return (
    <div className="hero">
      <div className="contain hero-section">
        <div className="hero-copy">
          <h1>Discover online<br />{tag}<br />activities for kids</h1>
        </div>
        <div className="hero-image">
          <img className="image" src={`https://res.cloudinary.com/jakepeg/image/upload/${img}`} alt={tag} />
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
          letter-spacing: 4px;
        }

        .image {
          width: 550px;
          position: absolute;
          right: 0;
          bottom: -50px;
        }

        .hero-image {
          max-width: 800px;
          position: relative;
        }

        .value-prop {
          font-size: 1.3rem;
          line-height: 1.3;
          padding: 0 50px 0 0;
          color: #ffffff;
        }

        /* for phones only */
        @media (max-width: 768px) {
          .hero-section {
            margin: 0;
            grid-template-columns: 100%;
            height: 250px;
          }

          .hero-image {
            display: none;
          }

          .hero-copy {
            max-width: 100%;
            margin-top: 40px;
          }

          .hero-copy h1 {
            line-height: 45px;
            font-size: 2rem;
            text-align: center;
          }

        }

        /* for-tablet-portrait-up */
        @media (min-width: 769px) {

          .hero-section {
            height: 300px;
          }

          .hero-copy h1 {
            line-height: 40px;
            font-size: 2rem;
          }

          .hero-copy {
            max-width: 100%;
            margin-top: 40px;
          }

          .image {
            width: 400px;
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

          .image {
            width: 550px;
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

export default Hero2