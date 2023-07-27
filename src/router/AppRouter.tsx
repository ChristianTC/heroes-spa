import { Navigate, Route, Routes } from "react-router-dom"
import { MarvelPage, DcPage } from "../heroes"
import { Navbar } from '../ui';
import { LoginPage } from '../auth';

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Navigate to={'/marvel'} />} />
        <Route path="/*" element={<Navigate to={'/marvel'} />} />

      </Routes>
    </>
  )
}

export default AppRouter