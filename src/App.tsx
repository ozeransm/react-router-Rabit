import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Product, Products } from '../type/index';

import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Contacts from './Pages/Contacts';
import NoMatch from './Pages/NoMatch';
import Layout from './Pages/Layout';
import Login from './Pages/Login';
interface MyJwtPayload {
  id: string;
  exp: number;
}
import { useJwt } from 'react-jwt';

const url = import.meta.env.VITE_API_URL;

export default function App({ products }: Products) {
  const [productState, setProductState] = useState(products);
  const [rows, setRows] = useState(2);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState({
    id: '',
    email: '',
    name: '',
    role: '',
    description: '',
    token: '',
  });

  const { decodedToken, isExpired } = useJwt<MyJwtPayload>(token.token);
  const [isAuth, setAuth] = useState(isExpired);
  const [card, setCard] = useState<Product>({
    id: '',
    name: '',
    description: '',
    price: '',
    img: [],
  });
  const [hydrated, setHydrated] = useState(false);

  // Гідратація та отримання токена
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydrated(true);
      setProductState(products);
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        setToken({
          ...token,
          token: storedToken,
        });
      }
    }
  }, [products]);

  // Декодування токена при зміні
  useEffect(() => {
    const fetchUser = async () => {
      if (decodedToken) {
        try {
          const response = await fetch(`${url}/users/${decodedToken.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const userData = await response.json();

          setToken((prevToken) => ({
            ...prevToken,
            ...userData.user,
          }));
        } catch (error) {
          console.error('error', error);
        }
      } else {
        console.warn('cant decoding token');
      }
    };

    fetchUser();
  }, [decodedToken, isExpired]);

  // Адаптивна кількість рядків
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 480) {
        setRows(4);
      } else if (width < 768) {
        setRows(3);
      } else if (width < 1024) {
        setRows(2);
      } else {
        setRows(1);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!hydrated) return null;

  return (
    <div>
      <h1>Server Rendering Example</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                products={productState}
                card={card}
                rows={rows}
                setCard={setCard}
                setProductState={setProductState}
                setIsOpenModal={setIsOpenModal}
                isOpenModal={isOpenModal}
                url={url}
                endPoint=""
                isAuth={isAuth}
                setAuth={setAuth}
                token={token.token}
                isExpired={isExpired}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="login"
            element={
              <Login
                products={productState}
                card={card}
                rows={rows}
                setCard={setCard}
                setProductState={setProductState}
                setIsOpenModal={setIsOpenModal}
                isOpenModal={isOpenModal}
                url={url}
                endPoint="users"
                isAuth={isAuth}
                setAuth={setAuth}
                token={token.token}
                isExpired={isExpired}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="admin"
            element={
              <Admin
                products={productState}
                card={card}
                rows={rows}
                setCard={setCard}
                setProductState={setProductState}
                setIsOpenModal={setIsOpenModal}
                isOpenModal={isOpenModal}
                url={url}
                endPoint=""
                isAuth={isAuth}
                setAuth={setAuth}
                token={token.token}
                isExpired={isExpired}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route path="orders" element={<Orders />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
