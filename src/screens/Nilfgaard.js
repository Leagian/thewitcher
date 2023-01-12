import {
  NilfgaardRegionHistory,
  NilfgaardRegionHistory1,
  NilfgaardRegionHistory2,
  NilfgaardRegionHistory3
} from '../components/NilfgaardHistory'

const Nilfgaard = () => {
  return (
    <div className='Nilfgaard'>
      <NilfgaardRegionHistory />
      <NilfgaardRegionHistory1 />
      <NilfgaardRegionHistory2 />
      <NilfgaardRegionHistory3 />
    </div>
  )
}

export default Nilfgaard
