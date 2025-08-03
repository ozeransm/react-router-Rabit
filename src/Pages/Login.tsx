import { useForm, type SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import type { AppProps, Inputs } from 'type';
import keyIcon from '../../img/Copilot_20250803_110344.png';
import { useState } from 'react';

const StyledBaseField = styled.div`
  display: flex;
  flex-direction: column; /* Зміна на колонку */
  align-items: center;
  min-height: 100vh;
  padding-top: 40px; /* Відступ згори */

  h2 {
    font-size: 24px;
    margin-bottom: 24px;
    text-align: center;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 300px;
  }

  input {
    width: 95%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #aaa;
    border-radius: 8px;
  }

  span {
    font-size: 12px;
    color: red;
  }
`;
const StyledButton = styled.input`
  padding: 10px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const StaticBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${keyIcon});
  background-repeat: repeat;
  background-size: 450px;
  z-index: -1;
`;
export default function Login({ url, endPoint }: AppProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    
    const response = await fetch(`${url}/${endPoint}`, {
      method: 'GET',
    });
    const users = await response.json();
    console.log('ksadfjhskdjfh', data.login, data.password, users);
  };
  return (
    <>
      <StaticBackground />

      <StyledBaseField>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('login', { required: true })}
            type="login"
            placeholder="login"
          />
          {errors.login && <span>This field is required</span>}

          <div style={{ position: 'relative', width: '100%' }}>
            <input
              {...register('password', { required: true })}
              type={showPassword ? 'text' : 'password'}
              name="password"
              // autoComplete="off"
              placeholder="Password"
            />
            <span
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
            </span>
          </div>
          {errors.password && <span>This field is required</span>}

          <StyledButton type="submit" />
        </form>
      </StyledBaseField>
    </>
  );
}
