import React from 'react';
import '../Styles/App.css';
import '../Styles/TrailButton.css';
import TrailButton from './TrailButton';  // Import the TrailButton component
import Geocache from '../Geocache'; // Adjust the path as needed


function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to HikeUP!</h1>
        <a href="/Leaderboard" className="leaderboard-link">View Leaderboard</a>
      </header>
      <main>
        <section className="achievements">
          <h2>Achievements</h2>
          <p>John Doe completed the 5K Mountain Challenge!</p>
          <p>Jane Smith discovered a new trail!</p>
          <p>Emily Johnson completed 50 hikes this year!</p>
        </section>
        <section>
  <h2>Discover Hiking Trails</h2>
  <p>Find the best trails based on your preferences and current location: </p>
  <Geocache />
</section>
        <section>
          <h2>Join the Hiking Community</h2>
          <p>Share your hikes and experiences and learn from fellow hikers.</p>
        </section>
      </main>
      <footer>
        <TrailButton />
        <p>Start your adventure with HikeUP today!</p>
      </footer>
    </div>
  );
}

export default HomePage;
