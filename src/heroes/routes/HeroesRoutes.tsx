import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';
import { Navbar } from '../../ui'
import { Routes, Route, Navigate } from 'react-router-dom';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          
          <Route path="search" element={<SearchPage />} />
          <Route path="hero" element={<HeroPage />} />

          <Route path="/" element={<Navigate to={'/marvel'} />} />
          <Route path="/*" element={<Navigate to={'/marvel'} />} />

        </Routes>
      </div>
    </>
  )
}
