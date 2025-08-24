import styled from 'styled-components';
import type { ModalOpen } from 'type';
import pathSvg from '../../img/icon.svg';
import { useNavigate } from 'react-router-dom';
const StyledField = styled.div`
  position: fixed;
  top: 60px;
  right: 10px;
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
  z-index: 1;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;
const StyledSvg = styled.svg`
  width: 32px;
`;
export default function OpenClosedCard({
  isOpenModal,
  isAuthU,
  setAuthU,
  setIsOpenModal,
  setToken,
  cardView,
  setCardView,
  setAuth,
}: ModalOpen) {
  const navigate = useNavigate();
  return (
    <StyledField>
      {isOpenModal || isAuthU ? (
        <StyledSvg
          style={{ fill: '#1eec4b' }}
          onClick={() => {
            setIsOpenModal?.(false);
            setAuthU?.(false);
            setAuth?.(false);
            localStorage.setItem('isAuth', 'false');
            localStorage.removeItem('token');
            navigate('/login');
          }}
        >
          <use xlinkHref={pathSvg + '#icon-lock-open'} />
        </StyledSvg>
      ) : (
        <StyledSvg style={{ fill: 'red' }} onClick={() => navigate('/login')}>
          <use xlinkHref={pathSvg + '#icon-lock-closed'} />
        </StyledSvg>
      )}
    </StyledField>
  );
}
