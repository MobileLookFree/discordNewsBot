import React from 'react';
import './Footer.css';

import VKIcon from './SocialIcons/VKIcon/VKIcon';
import TwitterIcon from './SocialIcons/TwitterIcon/TwitterIcon';
import FBIcon from './SocialIcons/FBIcon/FBIcon';
import LinkedInIcon from './SocialIcons/LinkedInIcon/LinkedInIcon';
import GitHubIcon from './SocialIcons/GitHubIcon/GitHubIcon';
import DiscordBotsIcon from './SocialIcons/DiscordBotsIcon/DiscordBotsIcon';

const Footer = (props) => {
  return (
    <div className='footer'>
      <div className='social-icons'>
        <VKIcon title={props.text.iconsTitle.vk} />
        <TwitterIcon title={props.text.iconsTitle.twitter} />
        <FBIcon title={props.text.iconsTitle.facebook} />
        <LinkedInIcon title={props.text.iconsTitle.linkedIn} />
        <GitHubIcon title={props.text.iconsTitle.github} />
        <DiscordBotsIcon title={props.text.iconsTitle.discord} />
      </div>
      <div className='copyright'>
        {props.text.copyright}
        <pre> </pre>
        <a href='mailto:mobilelookfree@gmail.com'>mobilelookfree@gmail.com</a>
      </div>
    </div>
  );
};

export default Footer;
