import type { AppProps } from '../../type/index';
import styled from 'styled-components';
import Cards from '../Components/Cards';

const StyledBaseField = styled('div')`
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
      />
    </StyledBaseField>
  );
}
