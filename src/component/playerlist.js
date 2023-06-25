import React from 'react';
import Player from './player';
import players from './players';
import { Row, Col } from 'react-bootstrap';

function PlayersList() {
  const playerCardStyle = {
    marginRight: '20px',
    marginTop: '40px'
  };
  const nameStyle = {
    textAlign: 'center',
    textDecoration: 'underline'
  };
  return (
    
    <div>
      <h2 style={nameStyle}>Players List</h2>
      
      <Row>
        {players.map((player, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <div style={playerCardStyle}>
              <Player {...player} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PlayersList;