import MyForm from '../Components/MyForm';
import Card from '../Components/Card';
import styled from 'styled-components';
import type { AppProps, Product } from 'type';

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const StyledModal = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  padding: 32px;
  width: 90%;
  max-width: 720px;
  max-height: 90vh; /* 🔥 Фіксована висота */
  overflow-y: auto; /* 🔥 Прокрутка */
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* 🔒 Приховати скролбар в Chrome, але залишити функціональність */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;

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

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledDeleteButton = styled.button`
  align-self: center;
  padding: 10px 24px;
  background-color: #ff4d4f;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d9363e;
  }
`;
export default function Modal({
  products,
  card,
  rows,
  url,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
}: AppProps) {
  function handleClose() {
    setIsOpenModal(false);
  }
  async function handleDel() {
    await fetch(`http://${url}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: card.id }),
    });
    const response = await fetch(`http://${url}/all`, {
      method: 'GET',
    });
    const product = await response.json();
    const initialData = product.initialData.map((el: Product) => {
      const { id, name, price, description, img } = el;
      return { id, name, price, description, img };
    });
    setCard({
      id: '',
      name: '',
      description: '',
      price: '',
      img: '',
    });
    setProductState(initialData);
    setIsOpenModal(false);
  }
  return (
    <StyledOverlay>
      <StyledModal>
        <StyledButtonClose onClick={handleClose}>×</StyledButtonClose>

        <Card product={card} />

        <StyledFormWrapper>
          <MyForm
            products={products}
            card={card}
            rows={rows}
            setCard={setCard}
            setProductState={setProductState}
            setIsOpenModal={setIsOpenModal}
            isOpenModal={isOpenModal}
            url={url}
            endPoint="admin"
          />
          <StyledDeleteButton onClick={handleDel}>
            🗑 Delete Card
          </StyledDeleteButton>
        </StyledFormWrapper>
      </StyledModal>
    </StyledOverlay>
  );
}
