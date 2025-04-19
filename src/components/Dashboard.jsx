import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// You would need to install react-icons
import { FaGamepad, FaCar, FaPuzzlePiece, FaRocket, FaChessKnight, FaFlag } from 'react-icons/fa';


export default function Dashboard() {
  const [hoveredGame, setHoveredGame] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const games = [
    {
      id: 1,
      name: 'Physics Car Simulation',
      path: '/car-sim',
      color: '#ff6b6b',
      icon: <FaCar />,
      description: 'Experience realistic car physics and challenging tracks.',
      popularity: 85
    },
    {
      id: 2,
      name: 'Space Explorer',
      path: '/space-explorer',
      color: '#5f27cd',
      icon: <FaRocket />,
      description: 'Navigate through an infinite universe of stars and planets.',
      popularity: 92
    },
    {
      id: 3,
      name: 'Puzzle Master',
      path: '/puzzle-master',
      color: '#16a085',
      icon: <FaPuzzlePiece />,
      description: 'Challenge your mind with increasingly difficult puzzles.',
      popularity: 78
    },
    {
      id: 4,
      name: 'Adventure Quest',
      path: '/adventure',
      color: '#f39c12',
      icon: <FaGamepad />,
      description: 'Embark on an epic journey through magical realms.',
      popularity: 88
    },
    {
      id: 5,
      name: 'Strategy Empire',
      path: '/strategy',
      color: '#3498db',
      icon: <FaChessKnight />,
      description: 'Build your empire and conquer new territories.',
      popularity: 81
    },
    {
      id: 6,
      name: 'Racing Legends',
      path: '/racing',
      color: '#e74c3c',
      icon: <FaFlag />,
      description: 'Compete in high-speed races on exotic tracks.',
      popularity: 94
    }
  ];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2 className="dashboard-title">Game Dashboard</h2>
        <h4 className="dashboard-subtitle">Select a game to begin your adventure</h4>
      </header>

      <div className="game-grid">
        {games.map((game, index) => (
          <Link
            to={game.path}
            key={game.id}
            className={`game-card ${isLoaded ? 'loaded' : ''}`}
            style={{ 
              animationDelay: `${index * 100}ms`,
              backgroundColor: game.color + '10',
              borderColor: game.color + '30'
            }}
            onMouseEnter={() => setHoveredGame(game.id)}
            onMouseLeave={() => setHoveredGame(null)}
          >
            <div 
              className="game-card-header" 
              style={{ backgroundColor: game.color }}
            >
              <div className="game-icon">
                {game.icon}
              </div>
              <div className="game-popularity">
                <span>{game.popularity}%</span>
              </div>
            </div>
            
            <div className="game-content">
              <h2 className="game-name">{game.name}</h2>
              <h4 className="game-description">{game.description}</h4>
            </div>

            <div className={`game-footer ${hoveredGame === game.id ? 'hovered' : ''}`}>
              <span className="play-button" style={{ backgroundColor: game.color }}>
                Play Now
              </span>
              <div 
                className="progress-bar-fill" 
                style={{ 
                  backgroundColor: game.color,
                  width: hoveredGame === game.id ? '100%' : '0%'
                }}
              ></div>
            </div>

            <div className="game-background-elements">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="background-circle"
                  style={{
                    backgroundColor: game.color,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    width: `${Math.random() * 60 + 20}px`,
                    height: `${Math.random() * 60 + 20}px`,
                    animationDuration: `${Math.random() * 10 + 5}s`
                  }}
                ></div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}