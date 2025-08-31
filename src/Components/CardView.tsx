import styled from 'styled-components';
import type { ModalOpen } from 'type';
import ButtonClose from './ButtonClose';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import { Autoplay, Grid, Scrollbar } from 'swiper/modules';
const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(145deg, #f0f0f0, #ffffff);
  border: 1px solid #ddd;
  padding: 30px 15px 60px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 320px;
  margin: 30px auto;
  position: relative;
  transition: transform 0.3s ease;
  overflow-y: scroll;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  } 

  h1 { 
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: #333;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 4px;
    color: #555;
  }

  p {
    font-size: 1rem;
    margin: 4px 0;
    color: #666;
  }

`;
const StyledImg = styled.img`
  width: 100%;
  border-radius: 12px;
  display: block;
  margin-bottom: 12px;
`;
export default function CardView({
  isOpenModal,
  cardView,
  setCardView,
  setIsOpenModal,
}: ModalOpen) {
  return (
    <StyledField>
      <div style={{ position: 'relative', width: '95%' }}>
       <h1>Card</h1>
        <Swiper
          scrollbar={{
            hide: true,
            draggable: true,
          }}
          modules={[Scrollbar, Grid, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          slidesPerView={1}
          spaceBetween={20}
          grid={{
            rows: 1,
            fill: 'row',
          }}
        >
        

        {cardView?.img.map((imgUrl, index) => (
         
            <SwiperSlide key={'modalHome'+index}> 
              <StyledImg src={imgUrl} alt={"Photo"+index} />
            </SwiperSlide>
           
        ))}

        </Swiper>
        </div> 
        <h2>{cardView?.name}</h2>
        <p>{cardView?.description}</p>
        <p>Price: {cardView?.price}</p>
        <ButtonClose
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          isAuth={false}
          setAuth={() => {}}
        />
        
      </StyledField>
    
  );
}
