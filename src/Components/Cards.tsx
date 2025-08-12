import styled from 'styled-components';
import type { AppProps, Product } from '../../type/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/scrollbar';
import { Grid, Scrollbar } from 'swiper/modules';
import Card from './Card';
const StyledBaseField = styled('div')`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
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

export default function Cards({
  products,
  card,
  rows,
  setCard,
  setIsOpenModal,
  isOpenModal,
}: AppProps) {
  let row = 3;
  let slidePreView = 1;
  switch (rows) {
    case 3:
      slidePreView = 1;
      row = 3;
      break;
    case 2:
      slidePreView = 2;
      row = 2;
      break;
    case 1:
      slidePreView = 3;
      row = 1;
      break;
    default:
      slidePreView = 1;
  }

  function handleModal(id: string) {
    const newCard = products.find((el) => el.id === id) ?? {
      id: '',
      name: '',
      description: '',
      price: '',
      img: [''],
    };
    setCard(newCard);
    setIsOpenModal(true);
  }

  return (
    <StyledBaseField>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar, Grid]}
        spaceBetween={10}
        slidesPerView={slidePreView}
        grid={{
          rows: row,
          fill: 'row',
        }}
      >
        {products.map((el) => (
          <SwiperSlide key={el.id} onClick={() => handleModal(el.id)}>
            <Card
              product={{
                id: el.id ?? '',
                name: el.name ?? '',
                description: el.description ?? '',
                price: el.price ?? '',
                img: el.img ?? '',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledBaseField>
  );
}
