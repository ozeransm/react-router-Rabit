import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import { Autoplay, Grid, Scrollbar } from 'swiper/modules';
import type { MyOrder } from 'type';
const StyledImg = styled.img`
  width: 250px;
  border-radius: 12px;
  display: block;
  margin-bottom: 12px;
`;
const OrderContainer = styled.div`
  max-width: 254px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const OrderItem = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: #333;

  span {
    font-weight: bold;
    color: #555;
  }
`;
export default function OrderView({
  id,
  name,
  email,
  price,
  quantity,
  description,
  id_product,
  products,
}: MyOrder) {
  const matchedProduct = products?.find((p) => p.id === id_product);
  return (
    <OrderContainer key={id_product}>
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
        <OrderItem>
          <span>Name:</span> {name}
        </OrderItem>
        <OrderItem>
          <span>Email:</span> {email}
        </OrderItem>
        <OrderItem>
          <span>Price:</span> ${price}
        </OrderItem>
        <OrderItem>
          <span>Quantity:</span> {quantity}
        </OrderItem>
        <OrderItem>
          <span>Description:</span> {description}
        </OrderItem>
        <OrderItem>
          <span>Product ID:</span> {id_product}
        </OrderItem>
        {matchedProduct?.img.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <StyledImg src={imgUrl} alt={'Photo' + index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </OrderContainer>
  );
}
