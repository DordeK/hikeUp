import React from 'react';
import '../Styles/Leaderboard.css';

function Leaderboard() {
  return (
    <div className="leaderboard">
      <header>
        <h1>🏆 Leaderboard 🏆</h1>
      </header>
      <main>
        <ul>
          <li>🥇 John Doe: 5000 points 🎉</li>
          <li>🥈 Jane Smith: 4500 points 🚀</li>
          <li>🥉 Emily Johnson: 4000 points 🏞️</li>
          <li>4️⃣ Billy Bob: 3500 points 🥾</li>
          <li>5️⃣ Susan Q: 3000 points 🌲</li>
        </ul>
      </main>
    </div>
  );
}

export default Leaderboard;
