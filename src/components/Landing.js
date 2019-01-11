import React from 'react';

const Landing = () => (
  <main role="main">
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-3 text-white">Turn the music up!</h1>
        <p className="text-white">Access your music library from anywhere</p>
        <p><a className="btn btn-secondary btn-lg" href="/library" role="button">Go to the library >></a></p>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="col-md-4 text-white text-center">
        <img className="music-note" src="music-note.png" alt="music note icon"></img>
        <h2>Choose your music</h2>
        <p>The world is full of music; why should you have to music that someone else chose?</p>
        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
      </div>
      <div className="col-md-4 text-white text-center">
        <img className="block-icon" src="cancel.png" alt="block icon"></img>
        <h2>Unlimited, streaming, ad-free</h2>
        <p>No arbitrary limits. No distractions.</p>
        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
      </div>
      <div className="col-md-4 text-white text-center">
        <img className="mobile-icon" src="iPhone.png" alt="mobile icon"></img>
        <h2>Mobile enabled</h2>
        <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
      </div>
    </div>
  </div>

  <footer className="container text-white">
      <p>©︎Music Station 2019</p>
  </footer>

  </main>
);

export default Landing;
