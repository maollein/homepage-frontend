import React from 'react';

const BlogProfile: React.FC = () => {
  return (
    <div className="blog-profile pt-4">
      <img className="profile-picture pl-3 w-100" src="/profile_picture.jpg"></img>
      <h5 className="pl-3 mt-3">Matti Leinonen</h5>
      <p className="pl-3">
        Tässä blogissa kirjoittelen kaikenlaisista
        kiinnostuksenkohteistani ja ajatuksistani.
      </p>
    </div>
  );
};

export default BlogProfile;