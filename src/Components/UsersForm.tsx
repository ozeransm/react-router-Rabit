import { useState } from 'react';
import { set, useForm, type SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import type { AppProps, Inputs } from 'type';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { ClockLoader } from 'react-spinners';
import ButtonClose from './ButtonClose';
import IconEye from './IconEye';
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
const StyledBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 20px;
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
  position: relative;
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

export default function UsersForm({
  url,
  endPoint,
  isAuth,
  token,
  loading,
  isRegistration,
  setRegistration,
  setErrorRegistration,
  setAuth,
  setAuthU,
  setToken,
}: AppProps) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isRegistration) {
      setRegistration?.(false);
      console.log('data', data);
      try {
        const result = await fetch(`${url}/${endPoint}/root/10`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.login,
            password: data.password,
            description: data.descriptionUser,
            email: data.email,
            role: data.role,
          }),
        });
        const res = await result.json();
        res.auth ? setErrorRegistration(3) : setErrorRegistration(0);
      } catch (err) {
        console.log('error', err);
      }
    }

    if (data.login === 'root') {
      try {
        const result = await fetch(`${url}/${endPoint}/root/1`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.login,
            password: data.password,
            description: data.descriptionUser,
            email: data.email,
            role: data.role,
          }),
        });
        const res = await result.json();
        res.auth ? setRegistration?.(true) : setRegistration?.(false);
        res.auth ? setErrorRegistration(1) : setErrorRegistration(2);
      } catch (err) {
        console.log('error', err);
      }
    } else {
      try {
        const result = await fetch(`${url}/${endPoint}/root/20`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.login,
            password: data.password,
            description: data.descriptionUser,
            email: data.email,
            role: data.role,
          }),
        });
        const res = await result.json();
        res.auth ? setErrorRegistration(4) : setErrorRegistration(2);
        localStorage.setItem('token', res.token);
        setToken((prevToken) => ({
          ...prevToken,
          token: res.token,
        }));

        if (res.role === 'admin') {
          localStorage.setItem('isAuth', 'true');
          setAuth(true);
          setAuthU?.(false);
          navigate('/admin');
        } else if (res.role === 'user') {
          localStorage.setItem('isAuth', 'false');
          res.auth && navigate('/orders');
          setAuth(false);
          setAuthU?.(true);
        } else res.auth && navigate('/admin');
      } catch (err) {
        console.log('error', err);
      }
    }

    reset();
  };

  async function handleDel() {
    try {
      const result = await fetch(`${url}/${endPoint}/${getValues('login')}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pass: getValues('password') }),
      });
      const res = await result.json();
      res.auth ? setErrorRegistration(5) : setErrorRegistration(2);
    } catch (err) {
      console.log('error', err);
    }
    reset();
  }
  return (
    <StyledBase>
      {!loading || (
        <StyledOverlay>
          <ClockLoader
            color="#1eec4b"
            cssOverride={{}}
            loading={loading}
            size={70}
            speedMultiplier={2}
          />
        </StyledOverlay>
      )}
      {!isRegistration || <h3>Create or delete user </h3>}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {!isRegistration || (
          <ButtonClose
            setIsOpenModal={() => setRegistration?.(false)}
            isOpenModal={isRegistration}
            isAuth={isAuth}
            setAuth={setAuth}
          />
        )}
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
            {/* {!showPassword ? '🙈' : '👁️'} */}
            {!showPassword ? IconEye(true) : IconEye(false)}
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
            {errors.email && <span>This field is required</span>}
            <StyledInput
              {...register('descriptionUser', { required: true })}
              type="text"
              placeholder="description"
            />
            {errors.descriptionUser && <span>This field is required</span>}

            <label htmlFor="role">Select role</label>
            <StyledSelect id="role" {...register('role', { required: true })}>
              <option value="root">Root</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </StyledSelect>
          </>
        )}
        <StyledButton
          type="submit"
          value={!isRegistration ? 'Send' : 'Create User'}
        />
        {!isRegistration || (
          <StyledDeleteButton type="button" onClick={handleDel} value="delete">
            🗑 Delete Card
          </StyledDeleteButton>
        )}
      </StyledForm>
    </StyledBase>
  );
}
