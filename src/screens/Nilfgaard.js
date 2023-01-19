import {
  NilfgaardRegionHistory,
  NilfgaardRegionHistory1,
  NilfgaardRegionHistory2,
  NilfgaardRegionHistory3
} from '../components/NilfgaardHistory'

const Nilfgaard = () => {
  return (
    <>
      <div className='Nilfgaard'>
        <NilfgaardRegionHistory />
        <NilfgaardRegionHistory1 />
        <NilfgaardRegionHistory2 />
        <NilfgaardRegionHistory3 />
      </div>
      {/* <div className='CharactersComponents'>
        <Characters />
      </div> */}
    </>
  )
}

export default Nilfgaard
