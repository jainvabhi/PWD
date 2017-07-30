import React from 'react';
import PropTypes from 'prop-types';

const BotCard = ({...props}) => (
  <div className="chatbot-card">
    <div className="chatbot-card-body">
      <h3 className="chatbot-title">{props.audioText}</h3>
    </div>
  </div>
  
);

BotCard.propTypes = {
  audioText: PropTypes.string,
};

export default BotCard;
