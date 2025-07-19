import styled from 'styled-components';
import type { AppProps } from '../../type/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid } from 'swiper/modules';
import Card from './Card';
const StyledBaseField = styled.div`
  border: 1px solid lightblue;
  border-radius: 10px;
  padding: 40px;
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
      img: '',
    };
    setCard(newCard);
    console.log(
      'hjjhvhcgxgdsfdz',
      id,
      products.find((el) => el.id === id),
      card
    );

    setIsOpenModal(true);
  }

  return (
    <StyledBaseField>
      <Swiper
        modules={[Grid]}
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
            {/* />
            {/* <p>{el.id}</p>
            <p>{el.name}</p>
            <p>{el.price}</p>
            <StyledImg src={el.img} alt={el.name} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledBaseField>
  );
}
