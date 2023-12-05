import { Btn } from "./IconButton.styled";

export const IconButton = ({ children, onClick, ...allyProps }) => (
    <Btn type="button" className="IconButton" onClick={onClick} {...allyProps}>
      {children}
    </Btn>
  );
  
  IconButton.defaultProps = {
    onClick: () => null,
    children: null,
  };