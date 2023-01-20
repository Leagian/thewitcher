import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import CharactersCard from './CharactersCard'

const Characters = props => {
  const [charactersInfo, setCharactersInfos] = useState([])
  // const { regionId } = useParams()

  useEffect(() => {
    fetch('http://localhost:4242/')
      .then(res => res.json())
      .then(res => console.log(res) || setCharactersInfos(res))
  }, [])

  return (
    <>
      <div className='charac-global'>
        {charactersInfo
          .filter(
            CharacterFilterRegion =>
              CharacterFilterRegion.region === props.characterRegion
          )

          .map(CharacterMap => (
            <CharactersCard
              key={CharacterMap.id}
              image={CharacterMap.image}
              name={CharacterMap.name}
              description={CharacterMap.description}
            />
          ))}
      </div>
    </>
  )
}

export default Characters
