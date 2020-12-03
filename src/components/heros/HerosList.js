import React from 'react';
import { getHerosByPublisher } from '../../selectors/getHerosByPublisher';
import HeroCard from './HeroCard';



const HerosList = ({publisher}) => {

  const heros = getHerosByPublisher(publisher);

  return(
    <div className="card-columns">
      {
        heros.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  );
}

export default HerosList;