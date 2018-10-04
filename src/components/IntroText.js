import React from 'react'
import { Link } from 'gatsby'
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

        <p>
          <a href="#">Read More</a>
        </p>

        {/* <p>
          The 2014 Policy on Acceptable Network and Device Use (PANDU) states
          that, …. In June, the federal Treasury Board released an IT Policy
          Implementation Notice re-iterating the importance of providing access
          to these tools, saying….
        </p>

        <p>
          This website provides an overview of which online tools are available
          in what departments, and which are blocked. In many cases, these tools
          are only available on request, which can be time-consuming and
          difficult to obtain.{' '}
        </p>

        <p>
          Over time, we hope that departments who are currently blocking access
          to these tools update their policies and firewall restrictions, to
          make access to these open by default. Doing so is a key part of
          empowering their public servants to be effective, collaborative, and
          connected in the modern digital world.
        </p>

        <p>
          This site is an Ottawa Civic Tech volunteer project. It is not
          affiliated with the Government of Canada.
        </p> */}
      </div>
    )
  }
}

export default IntroText
