//  styles
import { Arrow, Button, TextButton } from "./styles";

const ButtonArrow = ({text}) => {
  return (
    <Button>
      <TextButton>{text}</TextButton>
      <Arrow />
    </Button>
  );
};

export default ButtonArrow;
