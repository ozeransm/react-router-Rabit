import styled from 'styled-components';
import type { AppProps } from 'type';
import keyIcon from '../../img/Copilot_20250803_110344.png';
import UsersForm from '../Components/UsersForm';
const StyledBaseField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 20px;
`;

const StaticBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${keyIcon});
  background-repeat: repeat;
  background-size: 450px;
  z-index: -1;
`;
export default function Login({
  url,
  endPoint,
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  setAuth,
  isOpenModal,
  isAuth,
  token,
  isExpired,
  loading,
  setLoading,
}: AppProps) {
  return (
    <>
      <StaticBackground />

      <StyledBaseField>
        <h2>Login</h2>
        <UsersForm
          products={products}
          card={card}
          rows={rows}
          setCard={setCard}
          setProductState={setProductState}
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
          url={url}
          endPoint="users"
          isAuth={isAuth}
          setAuth={setAuth}
          token={token}
          isExpired={isExpired}
          loading={loading}
          setLoading={setLoading}
        />
      </StyledBaseField>
    </>
  );
}
