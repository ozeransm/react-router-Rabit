import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { MyToken, Product, Products } from '../type/index';
import { ToastContainer, toast } from 'react-toastify';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Contacts from './Pages/Contacts';
import NoMatch from './Pages/NoMatch';
import Layout from './Pages/Layout';
import Login from './Pages/Login';
import OpenClosedCard from './Components/OpenClosedCard';

const url = import.meta.env.VITE_API_URL;

export default function App({ products }: Products) {
  const [productState, setProductState] = useState(products);
  const [rows, setRows] = useState(2);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<MyToken>({
    id: 0,
    email: '',
    name: '',
    role: '',
    description: '',
    token: '',
    orders: [],
  });

  const [isAuth, setAuth] = useState(false);
  const [isAuthU, setAuthU] = useState(false);
  const [isRegistration, setRegistration] = useState(false);
  const [errorRegistration, setErrorRegistration] = useState(0);
  const [card, setCard] = useState<Product>({
    id: 0,
    name: '',
    description: '',
    price: '',
    img: [],
  });
  const [hydrated, setHydrated] = useState(false);
  const fetchOrders = async () => {
    try {
      const response = await fetch(`${url}/order`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const orders = await response.json();
      setToken((prevToken) => ({
        ...prevToken,
        orders: orders.orders || [],
      }));
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  const getIdFromToken = (token: string): number | null => {
    try {
      const payloadBase64 = token.split('.')[1];
      const payloadJson = atob(payloadBase64);
      const payload = JSON.parse(payloadJson);
      return payload.id || null;
    } catch (error) {
      console.error('error decoding token', error);
      return null;
    }
  };
  const fetchUser = async () => {
    if (token.token) {
      try {
        const response = await fetch(
          `${url}/users/${getIdFromToken(token.token)}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const userData = await response.json();
        delete userData.user.password;

        setToken((prevToken) => ({
          ...prevToken,
          ...userData.user,
        }));

        fetchOrders();
      } catch (error) {
        console.error('error', error);
      }
    } else {
      console.warn('cant decoding token');
      setAuth(false);
      localStorage.removeItem('isAuth');
      setAuthU(false);
    }
  };
  // Гідратація та отримання токена
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHydrated(true);
      setProductState(products);
    }
  }, [products]);

  // Error registration
  useEffect(() => {
    switch (errorRegistration) {
      case 1:
        toast.success('Login or Password correct!');
        break;
      case 2:
        toast.error('Login or Password incorrect!');
        break;
      case 3:
        toast.success('New user created!');
        break;
      case 4:
        toast.info('Login successful');
        break;
      case 5:
        toast.info('user deleted');
        break;
      default:
        break;
    }
  }, [errorRegistration]);

  useEffect(() => {
    fetchUser();
  }, [token.token]);

  // Адаптивна кількість рядків
  useEffect(() => {
    const isAuthLocal = localStorage.getItem('isAuth');
    const storedToken = localStorage.getItem('token');
    if (storedToken)
      setToken((prevToken) => ({
        ...prevToken,
        token: storedToken,
      }));
    if (isAuthLocal === 'true') setAuth(true);
    else setAuth(false);
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
      <ToastContainer />
      <OpenClosedCard
        isOpenModal={isAuth}
        setIsOpenModal={setAuth}
        cardView={card}
        setCardView={setCard}
        isAuthU={isAuthU}
        setAuthU={setAuthU}
        setToken={setToken}
        isAuth={isAuth}
        setAuth={setAuth}
      />
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
                token={token}
                setToken={setToken}
                loading={loading}
                setLoading={setLoading}
                setErrorRegistration={setErrorRegistration}
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
                token={token}
                setToken={setToken}
                loading={loading}
                setLoading={setLoading}
                setErrorRegistration={setErrorRegistration}
                isRegistration={isRegistration}
                setRegistration={setRegistration}
                setAuthU={setAuthU}
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
                token={token}
                setToken={setToken}
                loading={loading}
                setLoading={setLoading}
                setErrorRegistration={setErrorRegistration}
              />
            }
          />
          <Route
            path="orders"
            element={
              <Orders
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
                isAuthU={isAuthU}
                setAuth={setAuth}
                token={token}
                setToken={setToken}
                loading={loading}
                setLoading={setLoading}
                setErrorRegistration={setErrorRegistration}
              />
            }
          />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
