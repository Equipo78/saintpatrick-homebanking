import useMediaQuery from 'hooks/useMediaQuery'
import { useEffect, useState } from 'react'
import BackgroundLogin from 'components/BackgroundLogin/BackgroundLogin'
import LoginContainer from 'components/LoginContainer/LoginContainer'
import Header from 'components/Header/Header'
import Loader from 'components/Loader/Loader'
import { GridLogin, Wrapper } from 'GlobalStyle'

const Login = () => {
  const [firstPage, setFirstPage] = useState(true)
  const [loader, setLoader] = useState(true)

  const isMobile = useMediaQuery('(max-width: 798px)')

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setFirstPage(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isMobile])

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 500)
  }, [loader])

  return (
    <Wrapper>
      <Header height="4.4rem" />
      <GridLogin>
        {loader ? (
          <Loader />
        ) : (
          <>
            {!isMobile && <BackgroundLogin />}
            {isMobile & firstPage ? <BackgroundLogin /> : <LoginContainer />}
          </>
        )}
      </GridLogin>
    </Wrapper>
  )
}

export default Login
