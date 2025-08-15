import styled from 'styled-components';
import type { ModalOpen } from 'type';
import pathSvg from '../../img/icon.svg';
const StyledField = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  border: 2px solid #ccc;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  z-index: 9999;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;
const StyledSvg = styled.svg`
  width: 32px;
`;
export default function OpenClosedCard({
  isOpenModal,
  setIsOpenModal,
  cardView,
  setCardView,
}: ModalOpen) {
  return (
    <StyledField>
      {isOpenModal ? (
        <StyledSvg style={{ fill: '#1eec4b' }}>
          <use xlinkHref={pathSvg+'#icon-lock-open'} />
        </StyledSvg>
      ) : (
        <StyledSvg style={{ fill: 'red' }}>
          <use xlinkHref={pathSvg+'#icon-lock-closed'} />
        </StyledSvg>
      )}
    </StyledField>
  );
}
