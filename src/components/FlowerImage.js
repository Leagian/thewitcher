import Flower from '../assets/flower.png'

const FlowerImage = props => {
  return (
    <img src={Flower} alt='Flower' onClick={() => props.setShow(!props.show)} />
  )
}

export default FlowerImage
