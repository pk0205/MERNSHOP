import React from 'react';

const Stars = ({ value, curr, color }) => {
  return (
    <span>
      <i
        style={{ color }}
        className={
          value >= curr
            ? 'fas fa-star'
            : value >= curr - 0.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      ></i>
    </span>
  );
};

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <Stars value={value} curr={1} color={color} />
      <Stars value={value} curr={2} color={color} />
      <Stars value={value} curr={3} color={color} />
      <Stars value={value} curr={4} color={color} />
      <Stars value={value} curr={5} color={color} />
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = { color: '#f8e825' };

export default Rating;
