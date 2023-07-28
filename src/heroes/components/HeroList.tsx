import { getHeroesByPublisher } from '../helpers'

interface IHeroList {
  publisher: string,
}

export const HeroList = ({publisher}: IHeroList) => {
  
  const heroes = getHeroesByPublisher( publisher )

  return (
    <ul>
      {heroes.map((hero) => {
        return <li key={hero.id}>{hero.superhero}</li>
      })}
    </ul>
  )
}
