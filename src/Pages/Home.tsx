import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Card from '../Components/Card';
import { Grid, Scrollbar } from 'swiper/modules';
import 'swiper/css/grid';
import type { AppProps } from 'type';
import styled from 'styled-components';
const StyledBaseField = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; /* центрування */
  padding: 1rem;
  box-sizing: border-box;

  .swiper {
    width: 100%;
    height: auto;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .swiper-scrollbar {
    margin-top: 8px;
  }
`;
export default function Home({ products, rows }: AppProps) {
  let row = 5;
  let slidePreView = 2;
  switch (rows) {
    case 3:
      slidePreView = 1;
      row = 5;
      break;
    case 2:
      slidePreView = 3;
      row = 3;
      break;
    case 1:
      slidePreView = 5;
      row = 5;
      break;
    default:
      slidePreView = 1;
  }
  return (
    <div>
      <h2>Home</h2>
      <StyledBaseField>
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar, Grid]}
          slidesPerView={slidePreView}
          spaceBetween={20}
          grid={{
            rows: row,
            fill: 'row',
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <Card
                product={{
                  id: p.id ?? '',
                  name: p.name ?? '',
                  description: p.description ?? '',
                  price: p.price ?? '',
                  img: p.img ?? '',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledBaseField>
    </div>
  );
}
