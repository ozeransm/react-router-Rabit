import MyForm from '../Components/MyForm';
import Card from '../Components/Card';
import styled from 'styled-components';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { AppProps, Inputs, Product } from 'type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import type { ReactEventHandler } from 'react';
const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const StyledModal = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  padding: 32px;
  width: 90%;
  max-width: 720px;
  max-height: 90vh; /* 🔥 Фіксована висота */
  overflow-y: auto; /* 🔥 Прокрутка */
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* 🔒 Приховати скролбар в Chrome, але залишити функціональність */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }
`;

const StyledButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 24px;
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;

const StyledFormWrapper = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledDeleteButton = styled.button`
  align-self: center;
  padding: 10px 24px;
  background-color: #ff4d4f;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d9363e;
  }
`;
const SwiperContainer = styled.div`
  margin: 30px;
  width: 100%;
  max-width: 720px;
  height: 300px; /* або інша висота */
  margin: 0 auto;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    width: 70%;
    height: 70%;
    object-fit: contain; /* або cover, залежно від бажаного вигляду */
  }
`;
const SrtyledDivImg = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
`;
const StyledImg = styled.img`
  width: 100%;
  border-radius: 12px;
  display: block;
  margin-bottom: 12px;
`;
const StyledInput = styled.input`
  display: block;
`;
const StyledInputButton = styled.input`
  display: block;
  margin: 30px;
`;
export default function Modal({
  products,
  card,
  rows,
  url,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
}: AppProps) {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let newImg = [...card.img.split(',')];
    for (let i = 0; i < data.deletePhotos.length; i++) {
      if (+data.deletePhotos[i] === +data.selectedPhoto) continue;
      newImg[+data.deletePhotos[i]] = '';
    }
    newImg = [
      newImg[+data.selectedPhoto],
      ...newImg.filter((_, i) => i !== +data.selectedPhoto),
    ];
    newImg = newImg.filter((item) => item && item.trim());

    const formData = new FormData();
    formData.append('id', card.id);
    formData.append('name', card.name);
    formData.append('price', card.price);
    formData.append('description', card.description);
    formData.append('img', newImg.join(','));

    await addPictures(formData);

    await fetch(`${url}/admin`, {
      method: 'POST',
      body: formData,
    });

    const response = await fetch(`${url}/all`, {
      method: 'GET',
    });
    const product = await response.json();
    const initialData = product.initialData.map((el: Product) => {
      const { id, name, price, description, img } = el;

      return { id, name, price, description, img };
    });

    setCard(initialData.find((el: Product) => el.id === card.id));
    setProductState(initialData);
    reset();
  };

  async function addPictures(formData: FormData): Promise<FormData> {
    const filesInput = document.querySelector<HTMLInputElement>(
      'input[name="files"]'
    );
    if (filesInput?.files) {
      Array.from(filesInput.files).forEach((file) => {
        formData.append('files', file);
      });
    }
    if (!filesInput?.files || filesInput.files.length === 0) {
      console.warn('Файли не вибрано — запит не буде надіслано');
      return formData; // або return null, якщо хочеш
    }

    // надсилаємо на бекенд
    await fetch(`${url}/upload/${card.id}`, {
      method: 'PATCH',
      body: formData,
    });
    const response = await fetch(`${url}/all`, {
      method: 'GET',
    });
    const product = await response.json();
    const initialData = product.initialData.map((el: Product) => {
      const { id, name, price, description, img } = el;

      return { id, name, price, description, img };
    });

    setProductState(initialData);
    return formData;
  }

  function handleClose() {
    setIsOpenModal(false);
  }
  async function handleDel() {
    await fetch(`${url}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: card.id }),
    });
    const response = await fetch(`${url}/all`, {
      method: 'GET',
    });
    const product = await response.json();
    const initialData = product.initialData.map((el: Product) => {
      const { id, name, price, description, img } = el;
      return { id, name, price, description, img };
    });
    setCard({
      id: '',
      name: '',
      description: '',
      price: '',
      img: '',
    });
    setProductState(initialData);
    setIsOpenModal(false);
  }
  return (
    <StyledOverlay>
      <StyledModal>
        <StyledButtonClose onClick={handleClose}>×</StyledButtonClose>

        <Card product={card} />
        <SwiperContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Swiper
              scrollbar={{
                hide: true,
                draggable: true,
              }}
              modules={[Scrollbar, Grid, Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: true }}
              slidesPerView={3}
              spaceBetween={20}
              grid={{
                rows: 1,
                fill: 'row',
              }}
            >
              {card.img.split(',').map((src, idx) => (
                <SwiperSlide key={idx}>
                  <SrtyledDivImg>
                    <label>
                      <StyledInput
                        type="checkbox"
                        value={idx}
                        {...register('deletePhotos')}
                      />
                      Delete Photo
                    </label>
                    <StyledImg src={src} alt={card.name} />
                    <label>
                      <StyledInput
                        type="radio"
                        value={idx}
                        defaultChecked={idx === 0}
                        {...register('selectedPhoto')}
                      />
                      {idx === 0 && 'General Photo'}
                    </label>
                  </SrtyledDivImg>
                </SwiperSlide>
              ))}
            </Swiper>
            <input type="file" name="files" accept=".jpg" multiple />
            <StyledInputButton type="submit" value="Changed" />
          </form>
        </SwiperContainer>
        <StyledFormWrapper>
          <MyForm
            products={products}
            card={card}
            rows={rows}
            setCard={setCard}
            setProductState={setProductState}
            setIsOpenModal={setIsOpenModal}
            isOpenModal={isOpenModal}
            url={url}
            endPoint="admin"
          />
          <StyledDeleteButton onClick={handleDel}>
            🗑 Delete Card
          </StyledDeleteButton>
        </StyledFormWrapper>
      </StyledModal>
    </StyledOverlay>
  );
}
