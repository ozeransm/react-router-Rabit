import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import type { AppProps, Inputs } from 'type';
const StyledBase = styled.div`
  display: flex;
  flex-direction: column; /* Зміна на колонку */
  align-items: center;
  min-height: 100vh;
  padding-top: 40px; /* Відступ згори */
`;
const StyledButton = styled.input`
  align-self: center;
  padding: 10px 24px;
  width: 150px;
  height: 40px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }  
`;
const StyledDeleteButton = styled.button`
  align-self: center;
  padding: 10px 24px;
  width: 150px;
  height: 40px;
 background-color: #ff4d4f;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d9363e;
  }  
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
`;
const StyledInput = styled.input`
  width: 95%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #aaa;
  border-radius: 8px;
`;
const StyledSpan = styled.span`
  font-size: 12px;
  color: red;
`;
const StyledDiv = styled.div`
  position: relative;
  width: 100%;
`;
const StyledSelect = styled.select`
  width: 95%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #aaa;
  border-radius: 8px;
  background-color: white;
  color: black;
`;
export default function UsersForm({ url, endPoint }: AppProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistration, setRegistrtion]=useState(false);

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log('kjhfekwhekjfhwkjhfkjw', data.login);
    data.login==='root' ? setRegistrtion(true) : setRegistrtion(false);
  };
  function handleDel(){
    console.log("sjkdfhkjashkdjhaskjd");
  }
  return (
    <StyledBase>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          {...register('login', { required: true })}
          type="login"
          placeholder="login"
        />
        {errors.login && <span>This field is required</span>}

        <StyledDiv>
          <StyledInput
            {...register('password', { required: true })}
            type={showPassword ? 'text' : 'password'}
            name="password"
            // autoComplete="off"
            placeholder="Password"
          />
          <StyledSpan
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              fontSize: '24px',
            }}
          >
            {!showPassword ? '🙈' : '👁️'}
          </StyledSpan>
        </StyledDiv>
        {errors.password && <span>This field is required</span>}
        {!isRegistration || (
        <>
        <StyledInput
          {...register('email', { required: true })}
          type="email"
          placeholder="email"
        />
        {errors.login && <span>This field is required</span>}
        <StyledInput
          {...register('descriptionUser', { required: true })}
          type="text"
          placeholder="description"
        />
        {errors.login && <span>This field is required</span>}
        
         <label htmlFor="role">Select role</label>
            <StyledSelect id="role" name="role">
            <option value="root">Root</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            </StyledSelect>
        </>
        )}
        <StyledButton type="submit" value={!isRegistration ? "Send" : "Create User"}/>
        {!isRegistration || (<StyledDeleteButton onClick={handleDel} >🗑 Delete Card</StyledDeleteButton>)}
        </StyledForm>
    </StyledBase>
  );
}
