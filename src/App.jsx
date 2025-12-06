import { Routes, Route } from 'react-router-dom'
//import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import FoodList from './pages/FoodList.jsx'
import FoodDetail from './pages/FoodDetail.jsx'
import { getFoodList } from './api/foodApi'


function App() {
  const { data: foods, isLoading, isError, error } = useQuery({
    queryKey: ['foods'],
    queryFn: getFoodList
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }
  
  return (
    <Routes>
      <Route path="/" element={<FoodList foods={foods} />} />
      <Route path="/food/:id" element={<FoodDetail foods={foods} />} />
    </Routes>
  )
}

export default App
