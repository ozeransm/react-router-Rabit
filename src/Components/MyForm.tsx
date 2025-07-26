import { useForm, type SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import type { AppProps, Inputs, Product } from 'type';

const StyledForm = styled('form')`
  margin: 30px;
  align-items: center;
  border: 1px solid lightblue;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 480px) {
    padding: 40px;
  }

  @media (min-width: 600px) {
    width: 500px;
  }
`;

const StyledFormField = styled('input')`
  margin: 5px;
  width: 150px;
  @media (max-width: 480px) {
    width: 200px;
    display: block;
  }
`;
const StyledFormTextArea = styled('textarea')`
  margin: 5px;
  width: 200px;
  @media (min-width: 480px) {
    width: 320px;
  }
`;
const StyledButton = styled('input')`
  margin: 10px;
  display: block;
`;
const StyledFormFile = styled('input')`
  margin: 10px;
  display: block;
`;

export default function MyForm({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
  url,
  endPoint,
}: AppProps) {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('description', data.description);
    formData.append('id', card.id);
    setCard({
      id: card.id,
      name: data.name,
      description: data.description,
      price: data.price,
      img: card.img,
    });
    const filesInput = document.querySelector<HTMLInputElement>(
      'input[name="files"]'
    );
    if (filesInput?.files) {
      Array.from(filesInput.files).forEach((file) => {
        formData.append('files', file);
      });
    }
    // надсилаємо на бекенд
    await fetch(`https://${url}/${endPoint}`, {
      method: 'POST',
      body: formData,
    });
    const response = await fetch(`https://${url}/all`, {
      method: 'GET',
    });
    const product = await response.json();
    const initialData = product.initialData.map((el: Product) => {
      const { id, name, price, description, img } = el;
      return { id, name, price, description, img };
    });

    setProductState(initialData);
    reset();
  };
  return (
    <div>
      {endPoint === 'upload' ? <h2>Create new card</h2> : <h2>Update card</h2>}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* register your input into the hook by invoking the "register" function */}
          <StyledFormField
            {...register('name', { required: true })}
            placeholder="Name"
          />
          {errors.name && <span>This field name is required</span>}
          {/* include validation with required or other standard HTML validation rules */}
          <StyledFormField
            {...register('price', { required: true })}
            placeholder="Price"
          />
          {/* errors will return when field validation fails  */}
          {errors.price && <span>This field price is required</span>}
        </div>
        <StyledFormTextArea
          {...register('description', { required: true })}
          placeholder="Description"
          rows={5}
        />
        <StyledFormFile type="file" name="files" accept=".jpg" multiple />
        {errors.description && <span>This field description is required</span>}
        <StyledButton type="submit" />
      </StyledForm>
    </div>
  );
}
