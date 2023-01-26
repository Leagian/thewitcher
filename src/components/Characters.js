import axios from 'axios'
import { useEffect, useState } from 'react'

import CharactersCard from './CharactersCard'

const Characters = props => {
  const [charactersInfo, setCharactersInfos] = useState([])
  // const { regionId } = useParams()

  useEffect(() => {
    axios
      .get('http://localhost:4242/')
      .then(res => setCharactersInfos(res.data))
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
