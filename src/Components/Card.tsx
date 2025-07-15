import styled from 'styled-components';
import type { AppProp } from '../../type/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid } from 'swiper/modules';

const StyledImg = styled.img`
  width: 320px;
  display: block;
  margin: 0;
  padding: 0;
  @media (max-width: 480px) {
    width: 220px;
  }

  /*@media (max-width: 768px) {
    width: 520px;
  }

  @media (max-width: 1024px) {
    width: 620px;
  } */
`;
export default function Card({ products, rows }: AppProp) {
  console.log('esghflgsfgsdlkhfkshafklhsdk', rows);
  return (
    <Swiper
      modules={[Grid]}
      spaceBetween={10}
      slidesPerView={2}
      grid={{
        rows: 2,
        fill: 'row',
      }}
    >
      {products.map((el) => (
        <SwiperSlide key={el.id}>
          <p>{el.name}</p>
          <p>{el.price}</p>
          <StyledImg src={el.img} alt={el.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
