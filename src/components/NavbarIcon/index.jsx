import React from 'react';
import { useSelector } from 'react-redux';

export default function NavbarIcon() {
  const userProfile = useSelector((state) => state.userData?.userProfile);
  return (
    <>
      {
  userProfile?.images?.length > 0
    ? (
      <>
        {' '}
        <img src={userProfile?.images[0]?.url} alt="user" />
        {' '}
        <p className="user-name">
          {' '}
          {userProfile?.display_name?.toUpperCase()}
          {' '}
        </p>
        {' '}
      </>
    )
    : (
      <p className="user-profile-text">
        {' '}
        { userProfile?.display_name?.toUpperCase() }
        {' '}
      </p>
    )
}
    </>
  );
}
