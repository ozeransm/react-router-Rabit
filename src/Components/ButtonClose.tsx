import styled from 'styled-components';
import type { AppProps } from 'type';
const StyledButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 24px;
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;
export default function ButtonClose({ setIsOpenModal }: AppProps) {
  function handleClose() {
    setIsOpenModal(false);
  }
  return <StyledButtonClose onClick={handleClose}>×</StyledButtonClose>;
}
