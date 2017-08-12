import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';

import ProfilePic from './profile_pic.jpg';
import StyledLink from './StyledLink';

const ProfileViewWrapper = styled.div`
    padding: 0.5em;
`;

const CircularProfileImage = styled.img`
    height: 120px;
    width: 120px;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
`;

const UserName = styled.div`
    padding: 0.8em;
    text-align:center;
    color: #BBB;
`;

const ProfileView = ({ signedInUsername }) => {

  return (
    <ProfileViewWrapper>
      <CircularProfileImage src={ ProfilePic } />
      <UserName>{signedInUsername}</UserName>
    </ProfileViewWrapper>
  )
}

ProfileView.propTypes = {
  signedInUsername: PropTypes.string.isRequired,
}

export default ProfileView;
