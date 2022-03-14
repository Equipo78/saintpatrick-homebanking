<<<<<<< Updated upstream
import BackgroundLogin from "components/BackgroundLogin"
import Header from "components/Header"
import LoginContainer from "components/LoginContainer"
import { Wrapper } from "GlobalStyle"
=======
//  hooks
import useMediaQuery from "hooks/useMediaQuery";
import { useEffect, useState } from "react";
//  components
import BackgroundLogin from "components/BackgroundLogin";
import LoginContainer from "components/LoginContainer";
import Header from "components/Header/Header";
import Loader from "components/Loader/Loader";
//  styles
import { GridLogin, Wrapper } from "GlobalStyle";
>>>>>>> Stashed changes

const Login = () => {
  const [firstPage, setFirstPage] = useState(true);
  const [loader, setLoader] = useState(true);

  const isMobile = useMediaQuery("(max-width: 920px)");
  console.log(isMobile, firstPage);

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setFirstPage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, [loader]);

  return (
    <Wrapper>
<<<<<<< Updated upstream
      <Header />
      <LoginContainer />
      <BackgroundLogin />
=======
      <Header height="4.4rem" />
      <GridLogin>
        {loader ? (
          <Loader />
        ) : (
          <>
            {!isMobile && (
              <>
                <BackgroundLogin />
                <LoginContainer />
              </>
            )}
            {isMobile & firstPage ? <BackgroundLogin /> : <LoginContainer />}
          </>
        )}
      </GridLogin>
>>>>>>> Stashed changes
    </Wrapper>
  )
}

export default Login