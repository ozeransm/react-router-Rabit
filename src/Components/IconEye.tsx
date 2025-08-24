import styled from 'styled-components';
import pathSvg from '../../img/icon.svg';
const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
  /* &:hover {
    fill: #464545;
  } */
`;
export default function IconEye(flag: boolean) {
  return (
    <StyledSvg>
      <use xlinkHref={pathSvg + (flag ? '#icon-eye-slash' : '#icon-eye')} />
    </StyledSvg>
  );
}
