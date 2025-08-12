import styled from 'styled-components';
import Catalog from './Catalog';
import type { AppProps } from '../../type/index';
import Modal from './Modal';
import MyForm from '../Components/MyForm';
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
  url,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
  setAuth,
  isAuth,
  token,
  isExpired,
}: AppProps) {
  return (
    isAuth && (
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
            setAuth={setAuth}
            isAuth={isAuth}
            token={token}
            isExpired={isExpired}
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
            setAuth={setAuth}
            isAuth={isAuth}
            token={token}
            isExpired={isExpired}
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
            setAuth={setAuth}
            isAuth={isAuth}
            token={token}
            isExpired={isExpired}
          />
        </StyledBaseField>
      </div>
    )
  );
}
