import { Routes, Route } from 'react-router-dom';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import Orders from './Pages/Orders';
import Contacts from './Pages/Contacts';
import NoMatch from './Pages/NoMatch';
import Layout from './Pages/Layout';
import { useEffect, useState } from 'react';
import type { CardProducts, Products } from '../type/index';
import styled from 'styled-components';

const Test = styled('div')`
  color: red;
`;
export default function App({ products }: Products) {
  const [productState, setProductState] = useState(products);
  const [rows, setRows] = useState(2);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [card, setCard] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    img: '',
  });
  
  // useEffect(() => {


  //   function handleResize() {
  //     const width = window.innerWidth;
  //     if (width < 480) {
  //       setRows(4);
  //     } else if (width < 768) {
  //       setRows(3);
  //     } else if (width < 1024) {
  //       setRows(2);
  //     } else setRows(1);
  //   }

  //   handleResize();
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  const [hydrated, setHydrated] = useState(false);

useEffect(() => {
  setHydrated(true);
}, []);

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
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
if (!hydrated) return null;
  return (
    <div>
      <h1>Server Rendering Example</h1>

      <p>
        If you check out the HTML source of this page, you'll notice that it
        already contains the HTML markup of the app that was sent from the
        server!
      </p>

      <p>
        This is great for search engines that need to index this page. It's also
        great for users because server-rendered pages tend to load more quickly
        on mobile devices and over slow networks.
      </p>

      <p>
        Another thing to notice is that when you click one of the links below
        and navigate to a different URL, then hit the refresh button on your
        browser, the server is able to generate the HTML markup for that page as
        well because you're using React Router on the server. This creates a
        seamless experience both for your users navigating around your site and
        for developers on your team who get to use the same routing library in
        both places.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
            <Test>dfsdfsdfsdfsd</Test>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home products={products} />} />
          <Route
            path="admin"
            element={
              <Admin
                products={products}
                card={card}
                rows={rows}
                setCard={setCard}
                setProductState={setProductState}
                setIsOpenModal={setIsOpenModal}
                isOpenModal={isOpenModal}
              />
            }
          />
          <Route path="orders" element={<Orders />} />
          <Route path="contacts" element={<Contacts />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
