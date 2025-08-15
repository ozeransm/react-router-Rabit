import type { AppProps } from '../../type/index';
import styled from 'styled-components';
import Cards from '../Components/Cards';

const StyledBaseField = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export default function Catalog({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
  isAuth,
  setAuth,
  token,
  isExpired,
  loading,
  setLoading,
  setErrorRegistration,
}: AppProps) {
  return (
    <StyledBaseField>
      <h2>Catalog</h2>
      <Cards
        products={products}
        card={card}
        rows={rows}
        setCard={setCard}
        setProductState={setProductState}
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
        url=""
        endPoint=""
        isAuth={isAuth}
        setAuth={setAuth}
        token={token}
        isExpired={isExpired}
        loading={loading}
        setLoading={setLoading}
        setErrorRegistration={setErrorRegistration}
      />
    </StyledBaseField>
  );
}
