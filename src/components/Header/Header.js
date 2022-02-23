//  styles
import { HeaderStyled, Logo } from "./styles";
//  images
import logo from "assets/logo.png";

const Header = ({ height }) => {
  return (
    <HeaderStyled height={height}>
      <Logo src={logo} alt="logo" />
    </HeaderStyled>
  );
};

export default Header;
