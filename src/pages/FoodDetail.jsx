import { useParams, Link } from 'react-router-dom'

const FoodDetail = () => {
  const { id } = useParams()

  return (
    <div>
      <img 
        src={`https://picsum.photos/200/200?random=${id}`} 
        alt="음식 메뉴 이미지"/>

      <Link to="/">
        돌아가기
      </Link>
    </div>
  )
}

export default FoodDetail