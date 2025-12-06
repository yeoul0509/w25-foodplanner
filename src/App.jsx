import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import FoodList from './pages/FoodList.jsx'
import FoodDetail from './pages/FoodDetail.jsx'
import { getFoodList } from './api/foodApi'


function App() {
  return (
    <Routes>
      <Route path="/" element={<FoodList foods={foods} />} />
      <Route path="/food/:id" element={<FoodDetail foods={foods} />} />
    </Routes>
  )
}

export default App
