import MyForm from '../Components/MyForm';
import Card from '../Components/Card';
import styled from 'styled-components';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { AppProps, Inputs, ModalOpen, Product } from 'type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import ButtonClose from '../Components/ButtonClose';
import { ClockLoader } from 'react-spinners';

const StyledOverlaySpiner = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.288);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
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
const StyledFieldButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;
export default function ModalCreate({
  products,
  card,
  rows,
  url,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
  isAuth,
  token,
  setAuth,
  setToken,
  loading,
  setLoading,
  setErrorRegistration,
  order,
  setOrder,
}: AppProps) {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    let newImg = [...card.img];
    for (let i = 0; i < data.deletePhotos.length; i++) {
      if (+data.deletePhotos[i] === +data.selectedPhoto) continue;
      await fetch(`${url}/upload/cloudinary`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          img: card.img[+data.deletePhotos[i]],
        }),
      });
      newImg[+data.deletePhotos[i]] = '';
    }
    newImg = [
      newImg[+data.selectedPhoto],
      ...newImg.filter((_, i) => i !== +data.selectedPhoto),
    ];
    newImg = newImg.filter((item) => item && item.trim());

    const formData = new FormData();
    formData.append('id', card.id.toString());
    formData.append('name', card.name);
    formData.append('price', card.price);
    formData.append('description', card.description);
    formData.append('img', newImg.join(','));

    await fetch(`${url}/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: card.id,
        name: card.name,
        price: card.price,
        description: card.description,
        img: newImg,
      }),
    });
    await addPictures(formData);

    const response = await fetch(`${url}/all`, {
      method: 'GET',
    });
    const product = await response.json();
    const initialData = product.initialData.map((el: Product) => {
      const { id, name, price, description, img } = el;

      return { id, name, price, description, img };
    });
    setLoading(false);
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

    setProductState(initialData);
    return formData;
  }

  async function handleDel() {
    setLoading(true);
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

    if (!response.ok) {
      const text = await response.text();
      console.error('Сервер повернув помилку:', response.status, text);
      return;
    }

    let product;
    try {
      product = await response.json();
    } catch (e) {
      console.error('Не вдалося розпарсити JSON:', e);
      return;
    }
    const initialData = product.initialData.map((el: Product) => {
      const { id, name, price, description, img } = el;
      return { id, name, price, description, img };
    });
    setCard({
      id: 0,
      name: '',
      description: '',
      price: '',
      img: [],
    });
    setLoading(false);
    setProductState(initialData);
    setIsOpenModal(false);
  }
  return (
    <>
      {!loading || (
        <StyledOverlaySpiner>
          <ClockLoader
            color="#1eec4b"
            cssOverride={{}}
            loading={loading}
            size={70}
            speedMultiplier={2}
          />
        </StyledOverlaySpiner>
      )}

      <StyledOverlay>
        <StyledModal>
          <ButtonClose
            setIsOpenModal={setIsOpenModal}
            isOpenModal={isOpenModal}
            isAuth={isAuth}
            setAuth={setAuth}
            order={order}
            setOrder={setOrder}
          />
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
                {card.img.map((src, idx) => (
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
              <StyledFieldButton>
                <StyledInputButton
                  type="file"
                  name="files"
                  accept=".jpg"
                  multiple
                />
                <StyledInputButton type="submit" value="Changed" />
              </StyledFieldButton>
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
              isAuth={isAuth}
              setAuth={setAuth}
              token={token}
              setToken={setToken}
              loading={loading}
              setLoading={setLoading}
              setErrorRegistration={setErrorRegistration}
              order={order}
              setOrder={setOrder}
            />
            <StyledDeleteButton onClick={handleDel}>
              🗑 Delete Card
            </StyledDeleteButton>
          </StyledFormWrapper>
        </StyledModal>
      </StyledOverlay>
    </>
  );
}
