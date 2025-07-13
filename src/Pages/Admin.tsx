import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import Catalog from './Catalog';
const url = import.meta.env.VITE_API_URL;
type Inputs = {
  name: string;
  price: string;
  description: string;
};
type Product = {
  id: string;
  name: string;
  price: string;
  description: string;
  img: string;
};

type AppProps = {
  products: Product[];
  setProductState: React.Dispatch<React.SetStateAction<Product[]>>;
};
const StyledBaseField = styled.div`
  display: flex;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const StyledFormDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const StyledFormField = styled.input`
  margin: 5px;
  width: 150px;
`;
const StyledFormTextArea = styled.textarea`
  margin: 5px;
  width: 320px;
`;
const StyledButton = styled.input`
  margin: 10px;
  display: block;
`;
const StyledFormFile = styled.input`
  margin: 10px;
  display: block;
`;

export default function Admin({ products, setProductState }: AppProps) {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('description', data.description);

    const filesInput = document.querySelector<HTMLInputElement>(
      'input[name="files"]'
    );
    if (filesInput?.files) {
      Array.from(filesInput.files).forEach((file) => {
        formData.append('files', file);
      });
    }

    // надсилаємо на бекенд
    await fetch(`http://${url}/upload`, {
      method: 'POST',
      body: formData,
    });
    const response = await fetch(`http://${url}/all`, {
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
      <h2>Administrator</h2>
      <StyledBaseField>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          {errors.description && (
            <span>This field description is required</span>
          )}
          <StyledButton type="submit" />
        </form>
        <Catalog products={products} />
      </StyledBaseField>
    </div>
  );
}
