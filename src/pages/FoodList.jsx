import { useState } from 'react'
import FoodCard from '../components/FoodCard.jsx'

export default function FoodList({ foods }) {
  const [keyword, setKeyword] = useState('')

  // 즐겨찾기 ID 목록 (LocalStorage)
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []

  // 검색 필터
  const filteredFoods = foods.filter(food =>
    food.title.toLowerCase().includes(keyword.toLowerCase())
  )

  // 즐겨찾기 / 일반 메뉴의 분리
  const favoriteFoods = filteredFoods.filter(food =>
    favorites.includes(food.id)
  )

  const normalFoods = filteredFoods.filter(food =>
    !favorites.includes(food.id)
  )

  return (
    <div className="p-6">

      {/* 검색 입력창 */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="음식 이름으로 검색..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* 검색 시 총 메뉴의 수 출력 */}
      <p className="text-sm text-gray-500 mb-6 text-center">
        검색 결과: {filteredFoods.length}개
      </p>

      {/* 즐겨찾기 섹션 (최상단 배치) */}
      {favoriteFoods.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-4">⭐ 즐겨찾기</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {favoriteFoods.map(food => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </>
      )}

      {/* 전체 음식(메뉴) */}
      <h2 className="text-xl font-bold mb-4">전체 음식</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {normalFoods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

      {/* 검색 결과 예외처리 */}
      {filteredFoods.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          검색 결과가 없습니다.
        </p>
      )}

    </div>
  )
}
