import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopPage from './shop/ShopPage'
import SignInPage from './shop/SignInPage'
import SignUpPage from './shop/SignUpPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
