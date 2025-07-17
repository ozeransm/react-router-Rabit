import Card from '../Components/Card';
import type { AppProp } from '../../type/index';
import styled from 'styled-components';

const StyledBaseField = styled.div`
  width: 90%;
`;

export default function Catalog({
  products,
  rows,
  setIsOpenModal,
  isOpenModal,
}: AppProp) {
  return (
    <StyledBaseField>
      <h2>Catalog</h2>
      <Card
        products={products}
        rows={rows}
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
      />
    </StyledBaseField>
  );
}
