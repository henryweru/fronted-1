import React from 'react';
import video from './video 1.mp4';

const Home = () => {
  return (
    <div className="video-container">
      <video className="video" src={video} muted loop autoPlay>
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div className="overlay">
        <h1>Welcome to our Website</h1>
        <p>Discover a world of health and wellness</p>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default Home;
