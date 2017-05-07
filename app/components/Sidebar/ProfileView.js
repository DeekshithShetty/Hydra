import React, {Component} from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';

import ProfilePic from './profile_pic.jpg';
import StyledLink from './StyledLink';

const ProfileViewWrapper = styled.div`
    padding: 0.5em;
    border-bottom: 1px solid #AAA;
`;

const CircularProfileImage = styled.img`
    height: 120px;
    width: 120px;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
`;

const UserName = styled.div`
    padding: 0.5em;
    text-align:center;
    color: #DDD;
`;

class ProfileView extends Component {
  render () {
    return (
      <ProfileViewWrapper>
        <CircularProfileImage src={ ProfilePic } />
        <UserName>Deekshith</UserName>
      </ProfileViewWrapper>
    )
  }
}

export default ProfileView;
