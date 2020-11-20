import Link from 'next/link'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

const Footer = () => {
  return (
    <footer>

    <div className="footer-content">

      <h3>Websites, Apps, Podcasts, Live Streams and Youtube Channels to keep kids active</h3>

      <h4>Share DiscoverDoo</h4>

      <FacebookShareButton
              className="social-icons"
              url="https://www.discoverdoo.com"
              quote="Check out DiscoverDoo, a currated list of Websites, Apps and Youtube Channels to keep kids active"
            >
              <FacebookIcon size={48} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
              className="social-icons"
              url="https://www.discoverdoo.com"
            >
              <TwitterIcon size={48} round={true} />
            </TwitterShareButton>
            <EmailShareButton
              className="social-icons"
              url="https://www.discoverdoo.com"
              openwindow="true"
              subject="DiscoverDoo"
              body="Check out DiscoverDoo, a currated list of Websites, Apps and Youtube Channels to keep kids active"
            >
              <EmailIcon size={48} round={true} />
            </EmailShareButton>

            <p className="email-link"><a href="mailto:hello@discoverdoo.com">hello@discoverdoo.com</a></p>
    </div>

    <style jsx>{`

      footer {
        height: 340px;
        width: 100%;
        background-color: #0b334d;
        background-image: url("https://res.cloudinary.com/jakepeg/image/upload/v1605858493/doo-logo-white_oidwyv.svg");
        text-align: center;
      }

      .footer-content {
        padding: 30px 50px;
      }

      @media (max-width: 992px) {
        .footer-content {
          padding: 40px;
        }
      }

      @media (max-width: 768px) {
        footer {
          height: 460px;
        }

        .footer-content {
          padding: 60px;
        }
      }

    `}</style>
  </footer>
  )
}

export default Footer