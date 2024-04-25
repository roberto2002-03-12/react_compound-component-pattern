import { BrowserRouter, Route, NavLink, Routes, Navigate } from 'react-router-dom';
import logo from '../assets/react.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink to={'/home'} className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/about'} className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/users'} className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
            <li>
              <NavLink to={'/shopping'} className={({ isActive }) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/home' element={<h1>Home</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/users' element={<h1>Users</h1>} />
          <Route path='/shopping' element={ <ShoppingPage /> } />

          <Route path='/*' element={<Navigate to={'/home'} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
