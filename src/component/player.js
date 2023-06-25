import React from 'react';

function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
    const cardStyle = {
        width: '18rem',
        height: '40rem',
        marginBottom: '20px',
        marginRight: '20px',
        backgroundColor: 'gray', 
        borderRadius: '5px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '10px'
      };
    
      const imageStyle = {
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '5px'
      };
    
      return (
        <div style={cardStyle}>
          <img src={imageUrl} alt={name} style={imageStyle} />
          <h3>{name}</h3>
          <p>
            Team: {team}
            <br />
            Nationality: {nationality}
            <br />
            Jersey Number: {jerseyNumber}
            <br />
            Age: {age}
          </p>
        </div>
      );
    }

Player.defaultProps = {
    name: 'Unknown Player',
    team: 'Unknown Team',
    nationality: 'Unknown Nationality',
    jerseyNumber: 0,
    age: 0,
    imageUrl: 'default-image-url.jpg'
  };

export default Player;