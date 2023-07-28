import { HeroCard } from '.'
import { getHeroesByPublisher } from '../helpers'

interface IHeroList {
  publisher: string,
}

export const HeroList = ({publisher}: IHeroList) => {
  
  const heroes = getHeroesByPublisher( publisher )

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />
      })}
    </div>
  )
}
