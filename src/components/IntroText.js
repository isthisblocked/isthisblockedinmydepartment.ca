import React from 'react'
// import { Link } from 'gatsby'
import styles from '../styles/sass.module.scss'

class IntroText extends React.Component {
  render() {
    return (
      <div className={styles.introText}>
        <p>
          Public servants need modern tools in order to work effectively in the
          21st century. In many Canadian federal departments, access to many
          online tools is blocked by corporate firewalls or bandwidth
          restrictions.
        </p>

        {this.props.descriptionVisible && (
          <>
            <p>
              The 2014{' '}
              <a
                href="https://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=27122#cha5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Policy on Acceptable Network and Device Use
              </a>{' '}
              (PANDU) states that public servants should have “open access to
              the Internet including Government of Canada and external Web 2.0
              tools and services”, to support enhanced communication and
              collaboration, and to improve productivity and program and service
              delivery.
            </p>
            <p>
              In June 2018, the federal Treasury Board{' '}
              <a
                href="http://www.tbs-sct.gc.ca/pol/doc-eng.aspx?id=32588#cha5"
                target="_blank"
                rel="noopener noreferrer"
              >
                released an IT Policy Implementation Notice
              </a>{' '}
              re-iterating the importance of providing access to these tools,
              saying that “open access to modern tools is essential to
              transforming how public servants work and serve Canadians”. It
              instructs departments to reconfigure their web filtering rules to
              be open by default to the Internet, aside from limited exceptions
              (websites that support criminal behaviour or other activities that
              violate government policies or operations).
            </p>

            <p>
              This website provides an overview of which online tools are
              available in what departments, and which are blocked. In many
              cases, these tools are only available on request, which can be
              time-consuming and difficult to obtain.{' '}
            </p>

            <p>
              Over time, we hope that departments who are currently blocking
              access to these tools update their policies and firewall
              restrictions, to make access to these open by default. Doing so is
              a key part of empowering their public servants to be effective,
              collaborative, and connected in the modern digital world.
            </p>

            <p>
              This site is an{' '}
              <a
                href="http://ottawacivictech.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ottawa Civic Tech
              </a>{' '}
              volunteer project. It is not affiliated with the Government of
              Canada.
            </p>
          </>
        )}

        {this.props.hideToggle !== true && (
          <p>
            <a href="#" onClick={this.props.toggleDescription}>
              {this.props.descriptionVisible ? 'Read less' : 'Read more'}
            </a>
          </p>
        )}
      </div>
    )
  }
}

export default IntroText
