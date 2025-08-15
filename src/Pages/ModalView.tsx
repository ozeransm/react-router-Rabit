import CardView from '../Components/CardView';
import styled from 'styled-components';
import type { ModalOpen } from 'type';

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
`;

export default function ModalView({
  isOpenModal,
  cardView,
  setCardView,
  setIsOpenModal,
}: ModalOpen) {
  return (
    <StyledOverlay>
      <CardView
        isOpenModal={isOpenModal}
        cardView={cardView}
        setCardView={setCardView}
        setIsOpenModal={setIsOpenModal}
      />
    </StyledOverlay>
  );
}
