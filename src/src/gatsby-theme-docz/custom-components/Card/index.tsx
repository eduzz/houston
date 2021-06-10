import './styles.css';

import React from 'react';

import { useDocs, Link } from 'docz';

interface IProps {
  title: string;
  description: string;
  image: string;
  docName: string;
}

const Card = ({ title, description, image, docName }: IProps) => {
  const docs = useDocs();

  const docPage = docs.find(d => d.name.toLowerCase() === docName.toLowerCase());

  return (
    <Link className='card' to={docPage.route}>
      <div className='card__image'>
        <img src={image} title={title} alt={description} />
      </div>
      <div className='card__infos'>
        <h2 className='card__title'>{title}</h2>
        <p className='card__description'>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
