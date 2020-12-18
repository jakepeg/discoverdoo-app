import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

const Share = (props) => {
  return (
    <>
    <div className="share">
      <p className="share-title">Share {props.activityName}</p>
      <FacebookShareButton
        className="social-icons-small"
        url={`https://www.discoverdoo.com/activity/${props.activityId}`}
        quote={`Check out ${props.activityName} on DiscoverDoo`}
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton
        className="social-icons-small"
        url={`https://www.discoverdoo.com/activity/${props.activityId}`}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <EmailShareButton
        className="social-icons-small"
        url={`https://www.discoverdoo.com/activity/${props.activityId}`}
        openwindow="true"
        subject={`${props.activityName} on DiscoverDoo`}
        body={`Check out ${props.activityName} on DiscoverDoo`}
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
    </div>

    <style jsx>{`

      .share {
        display: flex;
        justify-content: flex-end;
        margin-top: 0px;
      }

      .share-title {
        color: #0097A7;
        margin: 10px 0;
      }

      @media (max-width: 992px) {

      }

      @media (max-width: 768px) {

      }

    `}</style>
  </>
  )
}

export default Share