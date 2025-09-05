import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import { Autoplay, Grid, Scrollbar } from 'swiper/modules';
import Card from '../Components/Card';
import type { AppProps, Product } from 'type';
import styled from 'styled-components';
import ModalView from './ModalView';
import { useState } from 'react';
const StyledGenField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBaseField = styled.div`
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

export default function Home({ products, rows, url }: AppProps) {
  const [isOpenModalView, setIsOpenModalView] = useState(false);
  const [cardView, setCardview] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    price: '',
    img: [],
  });
  function handleViewCard(id: number) {
    const product = products.find((p) => p.id === id);
    if (product) {
      setCardview(product);
    }
    setIsOpenModalView(true);
  }
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
    <StyledGenField>
      {!isOpenModalView || (
        <ModalView
          isOpenModal={isOpenModalView}
          setIsOpenModal={setIsOpenModalView}
          cardView={cardView}
          setCardView={setCardview}
          isAuth={false}
          setAuth={() => {}}
          url={url}
        />
      )}
      <h2>Home</h2>
      <StyledBaseField>
        <Swiper
          scrollbar={{
            hide: true,
            draggable: true,
          }}
          modules={[Scrollbar, Grid, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          slidesPerView={slidePreView}
          spaceBetween={20}
          grid={{
            rows: row,
            fill: 'row',
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id} onClick={() => handleViewCard(p.id)}>
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
    </StyledGenField>
  );
}
