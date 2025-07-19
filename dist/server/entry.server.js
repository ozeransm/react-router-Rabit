import * as jsxRuntime from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import { useForm } from "react-hook-form";
import styledComponents from 'styled-components';
const styled = styledComponents.default;
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const swiper = "";
const grid = "";
const StyledImg = styled("img").withConfig({
  displayName: "Card__StyledImg",
  componentId: "sc-h41vf0-0"
})(["width:220px;display:block;margin:0;padding:0;border-radius:10px;@media (min-width:480px){width:320px;}@media (min-width:768px){width:300px;}@media (min-width:1024px){width:260px;}"]);
function Card({
  product
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("p", { children: product.id }),
    /* @__PURE__ */ jsx("p", { children: product.name }),
    /* @__PURE__ */ jsx("p", { children: product.price }),
    /* @__PURE__ */ jsx(StyledImg, { src: product.img, alt: product.name })
  ] });
}
const StyledBaseField$3 = styled("div").withConfig({
  displayName: "Cards__StyledBaseField",
  componentId: "sc-in0nuh-0"
})(["border:1px solid lightblue;border-radius:10px;padding:40px;"]);
function Cards({
  products,
  card,
  rows,
  setCard,
  setIsOpenModal,
  isOpenModal
}) {
  let row = 3;
  let slidePreView = 1;
  switch (rows) {
    case 3:
      slidePreView = 1;
      row = 3;
      break;
    case 2:
      slidePreView = 2;
      row = 2;
      break;
    case 1:
      slidePreView = 3;
      row = 1;
      break;
    default:
      slidePreView = 1;
  }
  function handleModal(id) {
    const newCard = products.find((el) => el.id === id) ?? {
      id: "",
      name: "",
      description: "",
      price: "",
      img: ""
    };
    setCard(newCard);
    setIsOpenModal(true);
  }
  return /* @__PURE__ */ jsx(StyledBaseField$3, { children: /* @__PURE__ */ jsx(Swiper, { modules: [Grid], spaceBetween: 10, slidesPerView: slidePreView, grid: {
    rows: row,
    fill: "row"
  }, children: products.map((el) => /* @__PURE__ */ jsx(SwiperSlide, { onClick: () => handleModal(el.id), children: /* @__PURE__ */ jsx(Card, { product: {
    id: el.id ?? "",
    name: el.name ?? "",
    description: el.description ?? "",
    price: el.price ?? "",
    img: el.img ?? ""
  } }) }, el.id)) }) });
}
const StyledBaseField$2 = styled("div").withConfig({
  displayName: "Catalog__StyledBaseField",
  componentId: "sc-lby759-0"
})(["width:90%;"]);
function Catalog({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal
}) {
  return /* @__PURE__ */ jsxs(StyledBaseField$2, { children: [
    /* @__PURE__ */ jsx("h2", { children: "Catalog" }),
    /* @__PURE__ */ jsx(Cards, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal })
  ] });
}
const StyledBaseField$1 = styled("div").withConfig({
  displayName: "Modal__StyledBaseField",
  componentId: "sc-1pc8fcs-0"
})(["position:relative;width:80%;height:80%;padding:20px;background-color:whitesmoke;border:1px solid lightblue;border-radius:10px;"]);
const StyledOverlay = styled("div").withConfig({
  displayName: "Modal__StyledOverlay",
  componentId: "sc-1pc8fcs-1"
})(["position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:1000;"]);
const StyledButtonClose = styled("div").withConfig({
  displayName: "Modal__StyledButtonClose",
  componentId: "sc-1pc8fcs-2"
})(["position:absolute;top:12px;right:16px;font-size:18px;background:none;border:none;cursor:pointer;color:#555555;transition:color 0.2s ease;"]);
function Modal({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal
}) {
  function handleClose() {
    setIsOpenModal(false);
  }
  return /* @__PURE__ */ jsx(StyledOverlay, { children: /* @__PURE__ */ jsxs(StyledBaseField$1, { children: [
    /* @__PURE__ */ jsx(StyledButtonClose, { onClick: handleClose, children: "x" }),
    /* @__PURE__ */ jsx(Card, { product: card })
  ] }) });
}
const url = "localhost:3000";
const StyledBaseField = styled("div").withConfig({
  displayName: "Admin__StyledBaseField",
  componentId: "sc-1rnwr9c-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
const StyledForm = styled("form").withConfig({
  displayName: "Admin__StyledForm",
  componentId: "sc-1rnwr9c-1"
})(["margin:30px;align-items:center;border:1px solid lightblue;border-radius:10px;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;@media (min-width:480px){padding:40px;}@media (min-width:600px){width:500px;}"]);
const StyledFormField = styled("input").withConfig({
  displayName: "Admin__StyledFormField",
  componentId: "sc-1rnwr9c-2"
})(["margin:5px;width:150px;@media (max-width:480px){width:200px;display:block;}"]);
const StyledFormTextArea = styled("textarea").withConfig({
  displayName: "Admin__StyledFormTextArea",
  componentId: "sc-1rnwr9c-3"
})(["margin:5px;width:200px;@media (min-width:480px){width:320px;}"]);
const StyledButton = styled("input").withConfig({
  displayName: "Admin__StyledButton",
  componentId: "sc-1rnwr9c-4"
})(["margin:10px;display:block;"]);
const StyledFormFile = styled("input").withConfig({
  displayName: "Admin__StyledFormFile",
  componentId: "sc-1rnwr9c-5"
})(["margin:10px;display:block;"]);
function Admin({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal
}) {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    const filesInput = document.querySelector('input[name="files"]');
    if (filesInput == null ? void 0 : filesInput.files) {
      Array.from(filesInput.files).forEach((file) => {
        formData.append("files", file);
      });
    }
    await fetch(`http://${url}/upload`, {
      method: "POST",
      body: formData
    });
    const response = await fetch(`http://${url}/all`, {
      method: "GET"
    });
    const product = await response.json();
    const initialData = product.initialData.map((el) => {
      const {
        id,
        name,
        price,
        description,
        img
      } = el;
      return {
        id,
        name,
        price,
        description,
        img
      };
    });
    setProductState(initialData);
    reset();
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    isOpenModal && /* @__PURE__ */ jsx(Modal, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal }),
    /* @__PURE__ */ jsxs(StyledBaseField, { children: [
      /* @__PURE__ */ jsx("h2", { children: "Administrator" }),
      /* @__PURE__ */ jsx(Catalog, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal }),
      /* @__PURE__ */ jsx("h2", { children: "Create new card" }),
      /* @__PURE__ */ jsxs(StyledForm, { onSubmit: handleSubmit(onSubmit), children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(StyledFormField, { ...register("name", {
            required: true
          }), placeholder: "Name" }),
          errors.name && /* @__PURE__ */ jsx("span", { children: "This field name is required" }),
          /* @__PURE__ */ jsx(StyledFormField, { ...register("price", {
            required: true
          }), placeholder: "Price" }),
          errors.price && /* @__PURE__ */ jsx("span", { children: "This field price is required" })
        ] }),
        /* @__PURE__ */ jsx(StyledFormTextArea, { ...register("description", {
          required: true
        }), placeholder: "Description", rows: 5 }),
        /* @__PURE__ */ jsx(StyledFormFile, { type: "file", name: "files", accept: ".jpg", multiple: true }),
        errors.description && /* @__PURE__ */ jsx("span", { children: "This field description is required" }),
        /* @__PURE__ */ jsx(StyledButton, { type: "submit" })
      ] })
    ] })
  ] });
}
function Home({
  products
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Home" }),
    /* @__PURE__ */ jsx("div", { children: products.map((p) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h3", { children: [
        "Name: ",
        p.name
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "id: ",
        p.id
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Description: ",
        p.description
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Price: ",
        p.price
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "images: ",
        p.img
      ] })
    ] }, p.id)) })
  ] });
}
function Orders() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { children: "Orders" }) });
}
function Contacts() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h2", { children: "Contacts" }) });
}
function NoMatch() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "Nothing to see here!" }),
    /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Go to the home page" }) })
  ] });
}
function Layout() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/admin", children: "Admin" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/orders", children: "Orders" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contacts", children: "Contacts" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/nothing-here", children: "Nothing Here" }) })
    ] }) }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
function App({
  products
}) {
  const [productState, setProductState] = useState(products);
  const [rows, setRows] = useState(2);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [card, setCard] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    img: ""
  });
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 480) {
        setRows(4);
      } else if (width < 768) {
        setRows(3);
      } else if (width < 1024) {
        setRows(2);
      } else
        setRows(1);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Server Rendering Example" }),
    /* @__PURE__ */ jsx("p", { children: "If you check out the HTML source of this page, you'll notice that it already contains the HTML markup of the app that was sent from the server!" }),
    /* @__PURE__ */ jsx("p", { children: "This is great for search engines that need to index this page. It's also great for users because server-rendered pages tend to load more quickly on mobile devices and over slow networks." }),
    /* @__PURE__ */ jsx("p", { children: "Another thing to notice is that when you click one of the links below and navigate to a different URL, then hit the refresh button on your browser, the server is able to generate the HTML markup for that page as well because you're using React Router on the server. This creates a seamless experience both for your users navigating around your site and for developers on your team who get to use the same routing library in both places." }),
    /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { path: "/", element: /* @__PURE__ */ jsx(Layout, {}), children: [
      /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(Home, { products }) }),
      /* @__PURE__ */ jsx(Route, { path: "admin", element: /* @__PURE__ */ jsx(Admin, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal }) }),
      /* @__PURE__ */ jsx(Route, { path: "orders", element: /* @__PURE__ */ jsx(Orders, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "contacts", element: /* @__PURE__ */ jsx(Contacts, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NoMatch, {}) })
    ] }) })
  ] });
}
function render(url2, products) {
  return ReactDOMServer.renderToString(/* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: url2, children: /* @__PURE__ */ jsx(App, { products }) }) }));
}
export {
  render
};
