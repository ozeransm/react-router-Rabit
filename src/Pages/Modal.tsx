import Card from '../Components/Card';
import styled from 'styled-components';
import type { AppProps } from 'type';

const StyledBaseField = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  padding: 20px;
  background-color: whitesmoke;
  border: 1px solid lightblue;
  border-radius: 10px;
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const StyledButtonClose = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  color: #555555;
  transition: color 0.2s ease;
`;

export default function Modal({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
}: AppProps) {
  function handleClose() {
    setIsOpenModal(false);
  }
  return (
    <StyledOverlay>
      <StyledBaseField>
        <StyledButtonClose onClick={handleClose}>x</StyledButtonClose>
        <Card product={card} />
      </StyledBaseField>
    </StyledOverlay>
  );
}
