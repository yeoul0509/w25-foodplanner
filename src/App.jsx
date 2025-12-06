import { Routes, Route } from 'react-router-dom'
import FoodList from './pages/FoodList.jsx'
import FoodDetail from './pages/FoodDetail.jsx'

const foods = [
  {
    "title": "ThighBurger",
    "calorie": 594,
    "carbohydrate": 60,
    "protein": 28,
    "fat": 27,
    "manual": "The one and only premium handmade burger with a whole spicy thigh patty topped with sliced onions, zesty pickles, fresh lettuce and secret burger sauce dressing all on a toasted sesame seed bun."
  },
  {
    "title": "BigMac",
    "calorie": 563,
    "carbohydrate": 44,
    "protein": 25,
    "fat": 33,
    "manual": "맥도날드의 대표 버거로 두 장의 비프 패티가 특징."
  },
  {
    "title": "QuarterPounderCheese",
    "calorie": 520,
    "carbohydrate": 42,
    "protein": 30,
    "fat": 27,
    "manual": "도톰한 쿼터파운드 비프 패티와 치즈가 조화로운 버거."
 },
]

function App() {
  return (
    <Routes>
      <Route path="/" element={<FoodList foods={foods} />} />
      <Route path="/food/:id" element={<FoodDetail foods={foods} />} />
    </Routes>
  )
}

export default App
