import styled from 'styled-components';
import type { AppProp } from '../../type/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid } from 'swiper/modules';
const StyledBaseField = styled.div`
 border: 1px solid lightblue;
  border-radius: 10px;
  padding: 40px;
`;
const StyledImg = styled.img`
  width: 200px;
  display: block;
  margin: 0;
  padding: 0;
  border-radius: 10px;
  @media (min-width: 480px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 250px;
  }

  @media (min-width: 1024px) {
    width: 420px;
  } 
`;
export default function Card({ products, rows }: AppProp) {
  
  let row = 1;
  let slidePreView = 1;
  let direction: 'horizontal' | 'vertical' = 'horizontal';
  switch(rows){
    case 3: slidePreView = 1;row=3;direction = 'vertical';
    break;
    case 2: slidePreView = 1;row=2;direction='horizontal';
    break;
    case 1: slidePreView = 3;row=1;direction='horizontal';
    break;
    default: slidePreView = 1;direction='horizontal';
  }
  console.log(row, slidePreView)
  return (
    <StyledBaseField>
    <Swiper
    
      // direction={direction}
      modules={[Grid]}
      spaceBetween={10}
      slidesPerView={slidePreView}
      grid={{
        rows: row,
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
    </StyledBaseField>
  );
}
