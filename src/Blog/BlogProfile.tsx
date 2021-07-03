import React from 'react';

const BlogProfile: React.FC = () => {
  return (
    <div className="blog-profile ps-3 pt-4">
      <img className="profile-picture w-100" alt="Profile picture of Matti" src="/profile_picture.jpg"></img>
      <h5 className="mt-3">Matti Leinonen</h5>
      <p className="">
        Tässä blogissa kirjoittelen kaikenlaisista
        kiinnostuksenkohteistani ja ajatuksistani.
      </p>
    </div>
  );
};

export default BlogProfile;