import styled from 'styled-components';
import type { ModalOpen } from 'type';
import pathSvg from '../../img/icon.svg';
const StyledButtonClose = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  font-size: 24px;
  fill: #999;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;
`;
const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
  &:hover {
    fill: #464545;
  }
`;

export default function ButtonClose({ setIsOpenModal }: ModalOpen) {
  function handleClose() {
    setIsOpenModal(false);
  }
  return (
    <StyledButtonClose onClick={handleClose}>
      {/* × */}
      <StyledSvg>
        <use xlinkHref={pathSvg + '#icon-button-close'} />
      </StyledSvg>
    </StyledButtonClose>
  );
}
