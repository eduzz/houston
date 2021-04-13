import React from 'react';

import './styles.css';

interface IProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const Card = ({ title, description, image, url }: IProps) => (
  <a className='card' href={url}>
    <div className='card__image'>
      <img src={image} title={title} alt={description} />
    </div>
    <div className='card__infos'>
      <h2 className='card__title'>{title}</h2>
      <p className='card__description'>{description}</p>
    </div>
  </a>
);

export default Card;
