import {
  KaedwenRegionHistory,
  KaedwenRegionHistory1,
  KaedwenRegionHistory2,
  KaedwenRegionHistory3
} from '../components/KaedwenHistory'

const Kaedwen = () => {
  return (
    <>
      <div className='Kaedwen'>
        <KaedwenRegionHistory />
        <KaedwenRegionHistory1 />
        <KaedwenRegionHistory2 />
        <KaedwenRegionHistory3 />
      </div>
    </>
  )
}

export default Kaedwen
