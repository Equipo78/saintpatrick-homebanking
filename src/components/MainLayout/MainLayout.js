import Header from '../Header/Header'
import Main from '../Main/Main'
import NavBar from '../NavBar/NavBar'

import { MainLayoutGrid } from './styles'

const MainLayout = ({ page }) => {
  return (
    <MainLayoutGrid>
      <Header />
      <NavBar />
      <Main page={page} />
    </MainLayoutGrid>
  )
}

export default MainLayout
