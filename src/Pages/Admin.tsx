import styled from 'styled-components';
import Catalog from './Catalog';
import type { AppProps } from '../../type/index';
import ModalCreate from './ModalCreate';
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
  loading,
  setLoading,
}: AppProps) {
  return (
    isAuth && (
      <div>
        {isOpenModal && (
          <ModalCreate
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
            loading={loading}
            setLoading={setLoading}
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
            loading={loading}
            setLoading={setLoading}
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
            loading={loading}
            setLoading={setLoading}
          />
        </StyledBaseField>
      </div>
    )
  );
}
