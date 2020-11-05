import React from 'react'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'

const ActivityList = (props) => {
  const { activities } = props

  return (
    <>
    <h2 className="card-grid-title">{props.title} activities</h2>
      <div className="card-grid" id="grid">
      { activities.map(activity => (
        <div key={activity.id}>
          <LazyLoad height={400} throttle={500}>
            <Link href="/activity/[id]" as={`/activity/${activity.id}`}>
              <a className="nounderline">
                <div className="card">
                  <img className="card-image" src={`https://res.cloudinary.com/jakepeg/image/upload/q_auto,f_auto,c_fill,h_250,w_350/v1593005651/${activity.image}`} alt={activity.name} />
                  <div className="card-content">
                    <h2>{activity.name}</h2>
                    <div className="card-footer">
                      <div className="age-range">{'age ' + activity.ageFrom + ' - ' + activity.ageTo}</div>
                      <div className="location">{activity.category} - <span className={activity.medium}>{activity.medium}</span></div>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </LazyLoad>
        </div>
          )
        )
      }
      </div>
      <style jsx>{`

        .nounderline {
          text-decoration: none;
        }

        .card-grid-title {
          font-size: 2rem;
          font-family: 'Paytone One', sans-serif;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0em;
          color: #ffffff;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, 350px);
          justify-content: space-between;
          grid-row-gap: 40px;
          margin-top: 30px;
          margin-bottom: 30px;
        }

        .card {
          width: 350px;
          height: 340px;
          background: #fff;
          box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12);
          transition: 0.3s;
          cursor: pointer;
        }

        .card :hover {
          box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12);
        }

        .card-image {
          width: 350px;
          height: 250px;
        }

        .card-content {
          padding: 0 20px;
          display: block;
        }
        
        .card-footer {
          display: flex;
          margin-top: -7px;
          color: #0b334d;
        }

        .location {
          margin-left: auto;
        }

        .close {
          margin-bottom: -150px;
        }

        .Website {
          color: Teal;
        }

        .App {
          color: Navy;
        }

        .Youtube {
          color: FireBrick;
        }

        .Podcast {
          color: DarkMagenta;
        }

        .Livestream {
          color: DarkSlateBlue;
        }

        @media (max-width: 1130px) {
          .card-grid {
            grid-template-columns: repeat(2, 350px);
            justify-content: space-around;
          }
        }

        @media (max-width: 992px) {

        }

        @media (max-width: 768px) {
          .card-grid {
            grid-template-columns: repeat(1, 350px);
            justify-content: space-around;
          }

          .card-grid-title {
            font-size: 1.8rem;
            text-align: center;
          }
        }

      `}</style>
    </>
  )
}

export default ActivityList