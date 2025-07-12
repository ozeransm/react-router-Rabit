import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
type Inputs = {
  name: string;
  price: string;
  description: string;
};
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
`;
const StyledFormTextArea = styled.textarea`
`;
const StyledButton = styled.input`
display: block;
`;

export default function Admin() {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h2>Administrator</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        {/* register your input into the hook by invoking the "register" function */}
        <StyledFormField {...register('name', { required: true })} placeholder="Name" />
        {errors.name && <span>This field name is required</span>}
        {/* include validation with required or other standard HTML validation rules */}
        <StyledFormField {...register('price', { required: true })} placeholder="Price" />
        {/* errors will return when field validation fails  */}
        {errors.price && <span>This field price is required</span>}
        </div>
        <StyledFormTextArea
          {...register('description', { required: true })}
          placeholder="Description"
          rows={5}
        />
        {errors.description && <span>This field description is required</span>}
        <StyledButton type="submit" />
      </form>
    </div>
  );
}
