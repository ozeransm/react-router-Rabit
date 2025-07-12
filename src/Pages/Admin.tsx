import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
type Inputs = {
  name: string;
  price: string;
  description: string;
};

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
        {/* register your input into the hook by invoking the "register" function */}
        <input {...register('name', { required: true })} placeholder="Name" />
        {errors.name && <span>This field name is required</span>}
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('price', { required: true })} placeholder="Price" />
        {/* errors will return when field validation fails  */}
        {errors.price && <span>This field price is required</span>}
        <textarea
          {...register('description', { required: true })}
          placeholder="Description"
          rows={5}
        />
        {errors.description && <span>This field description is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
}
