import styled from 'styled-components';
import type { ModalOpen } from 'type';
import ButtonClose from './ButtonClose';

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(145deg, #f0f0f0, #ffffff);
  border: 1px solid #ddd;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 320px;
  margin: 30px auto;
  position: relative;
  transition: transform 0.3s ease;
  overflow-y: scroll;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: #333;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 4px;
    color: #555;
  }

  p {
    font-size: 1rem;
    margin: 4px 0;
    color: #666;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 12px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
`;
export default function CardView({
  isOpenModal,
  cardView,
  setCardView,
  setIsOpenModal,
}: ModalOpen) {
  return (
    <>
      <StyledField>
        <h1>Card</h1>
        <h2>{cardView?.name}</h2>
        <p>{cardView?.description}</p>
        <p>Price: {cardView?.price}</p>
        <img
          src={cardView?.img[0]}
          alt={cardView?.name}
          style={{ width: '100%' }}
        />
        <ButtonClose
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      </StyledField>
    </>
  );
}
