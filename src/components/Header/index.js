import { HeaderStyled, Logo } from "./styles";
import logo from "assets/logo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo src={logo} alt="logo" />
    </HeaderStyled>
  );
};

export default Header;
