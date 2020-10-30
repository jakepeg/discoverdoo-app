import React from 'react';
import Link from 'next/link';
import { CATEGORY_INFO } from '../actions';

const CategoryButtons = () => {

  return (
    <div className="category-buttons contain">

      { CATEGORY_INFO.map(category => (
        <div key={category.title}>
          <Link href="/activities/[id]" as={`/activities/${category.title}`}>
            <a className="category-button">
              <div className="category-icon">
                <img src={`https://res.cloudinary.com/jakepeg/image/upload/${category.icon}`} alt={category.tagline} />
              </div>
              <h3>{category.title}</h3>
            </a>
          </Link>
        </div>
          )
        )
      }
      
      <style jsx>{`
      
        .category-buttons {
          display: grid;
          margin-top: 100px;
          cursor: pointer;
        }

        .category-button {
          width: 140px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
        }

        .category-button h3 {
          color: #0b334d;
          font-size: 1rem;
          font-weight: 600;
          margin: 15px 0;
        }

        .category-icon {
          width: 100px;
          height: 100px;
          background-color: #ffffff;
          border: 3px solid #0b334d;
          border-radius: 50px;
          padding: 7px;
        }

        .category-icon img {
          width: 70px;
          height: 70px;
          transition: 0.3s;
          margin: 5px;
        }

        .category-button:hover > .category-icon img {
          width: 100px;
          height: 100px;
          margin-left: -10px;
          margin-top: -10px;
        }

        /* for phones only */
        @media (max-width: 768px) {
          .category-buttons {
            grid-template-columns: repeat(3, 140px);
            justify-content: space-evenly;
          }
        }

        /* for-tablet-portrait-up */
        @media (min-width: 769px) {
          .category-buttons {
            grid-template-columns: repeat(3, 140px);
            justify-content: space-evenly;
          }
        }

        /* for-tablet-landscape-up */
        @media (min-width: 900px) {
          .category-buttons {
            grid-template-columns: repeat(6, 140px);
            justify-content: space-between;
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

export default CategoryButtons