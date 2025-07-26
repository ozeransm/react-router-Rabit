import styled from 'styled-components';
import Catalog from './Catalog';
import type { Product, AppProps, Inputs } from '../../type/index';
import Modal from './Modal';
import MyForm from '../Components/MyForm';
const url = import.meta.env.VITE_API_URL;
const endPoint = 'upload';
const StyledBaseField = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Admin({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
}: AppProps) {
  return (
    <div>
      {isOpenModal && (
        <Modal
          products={products}
          card={card}
          rows={rows}
          setCard={setCard}
          setProductState={setProductState}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
          url={url}
          endPoint={endPoint}
        />
      )}
      <StyledBaseField>
        <h2>Administrator</h2>
        <Catalog
          products={products}
          card={card}
          rows={rows}
          setCard={setCard}
          setProductState={setProductState}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
          url={url}
          endPoint={endPoint}
        />
        <MyForm
          products={products}
          card={card}
          rows={rows}
          setCard={setCard}
          setProductState={setProductState}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
          url={url}
          endPoint={endPoint}
        />
      </StyledBaseField>
    </div>
  );
}
