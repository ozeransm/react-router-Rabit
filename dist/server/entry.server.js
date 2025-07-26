import * as jsxRuntime from "react/jsx-runtime";
import { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import styledComponents from 'styled-components';
const styled = styledComponents.default;
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { useForm } from "react-hook-form";
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const swiper = "";
const grid = "";
const CardWrapper = styled.div.withConfig({
  displayName: "Card__CardWrapper",
  componentId: "sc-h41vf0-0"
})(["max-width:340px;background:#fff;border-radius:16px;padding:16px;margin:12px auto;box-shadow:0 8px 16px rgba(0,0,0,0.1);transition:transform 0.2s ease,box-shadow 0.3s ease;&:hover{transform:translateY(-4px);box-shadow:0 12px 24px rgba(0,0,0,0.15);}"]);
const StyledImg = styled.img.withConfig({
  displayName: "Card__StyledImg",
  componentId: "sc-h41vf0-1"
})(["width:100%;border-radius:12px;display:block;margin-bottom:12px;"]);
const ProductId = styled.p.withConfig({
  displayName: "Card__ProductId",
  componentId: "sc-h41vf0-2"
})(["font-size:0.8rem;color:#888;margin:4px 0;"]);
const ProductName = styled.p.withConfig({
  displayName: "Card__ProductName",
  componentId: "sc-h41vf0-3"
})(["font-size:1.2rem;font-weight:600;color:#333;margin:4px 0;"]);
const ProductPrice = styled.p.withConfig({
  displayName: "Card__ProductPrice",
  componentId: "sc-h41vf0-4"
})(["font-size:1.1rem;font-weight:bold;color:#007b55;margin:4px 0 12px 0;"]);
function Card({
  product
}) {
  return /* @__PURE__ */ jsxs(CardWrapper, { children: [
    /* @__PURE__ */ jsx(StyledImg, { src: product.img, alt: product.name }),
    /* @__PURE__ */ jsxs(ProductId, { children: [
      "ID: ",
      product.id
    ] }),
    /* @__PURE__ */ jsx(ProductName, { children: product.name }),
    /* @__PURE__ */ jsxs(ProductPrice, { children: [
      "$",
      product.price
    ] })
  ] });
}
const StyledBaseField$2 = styled("div").withConfig({
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
  return /* @__PURE__ */ jsx(StyledBaseField$2, { children: /* @__PURE__ */ jsx(Swiper, { modules: [Grid], spaceBetween: 10, slidesPerView: slidePreView, grid: {
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
const StyledBaseField$1 = styled("div").withConfig({
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
  return /* @__PURE__ */ jsxs(StyledBaseField$1, { children: [
    /* @__PURE__ */ jsx("h2", { children: "Catalog" }),
    /* @__PURE__ */ jsx(Cards, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url: "", endPoint: "" })
  ] });
}
const StyledForm = styled("form").withConfig({
  displayName: "MyForm__StyledForm",
  componentId: "sc-1ycmc8g-0"
})(["margin:30px;align-items:center;border:1px solid lightblue;border-radius:10px;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;@media (min-width:480px){padding:40px;}@media (min-width:600px){width:500px;}"]);
const StyledFormField = styled("input").withConfig({
  displayName: "MyForm__StyledFormField",
  componentId: "sc-1ycmc8g-1"
})(["margin:5px;width:150px;@media (max-width:480px){width:200px;display:block;}"]);
const StyledFormTextArea = styled("textarea").withConfig({
  displayName: "MyForm__StyledFormTextArea",
  componentId: "sc-1ycmc8g-2"
})(["margin:5px;width:200px;@media (min-width:480px){width:320px;}"]);
const StyledButton = styled("input").withConfig({
  displayName: "MyForm__StyledButton",
  componentId: "sc-1ycmc8g-3"
})(["margin:10px;display:block;"]);
const StyledFormFile = styled("input").withConfig({
  displayName: "MyForm__StyledFormFile",
  componentId: "sc-1ycmc8g-4"
})(["margin:10px;display:block;"]);
function MyForm({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
  url: url2,
  endPoint: endPoint2
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
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("id", card.id);
    setCard({
      id: card.id,
      name: data.name,
      description: data.description,
      price: data.price,
      img: card.img
    });
    const filesInput = document.querySelector('input[name="files"]');
    if (filesInput == null ? void 0 : filesInput.files) {
      Array.from(filesInput.files).forEach((file) => {
        formData.append("files", file);
      });
    }
    await fetch(`https://${url2}/${endPoint2}`, {
      method: "POST",
      body: formData
    });
    const response = await fetch(`https://${url2}/all`, {
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
    endPoint2 === "upload" ? /* @__PURE__ */ jsx("h2", { children: "Create new card" }) : /* @__PURE__ */ jsx("h2", { children: "Update card" }),
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
  ] });
}
const StyledOverlay = styled.div.withConfig({
  displayName: "Modal__StyledOverlay",
  componentId: "sc-1pc8fcs-0"
})(["position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:9999;"]);
const StyledModal = styled.div.withConfig({
  displayName: "Modal__StyledModal",
  componentId: "sc-1pc8fcs-1"
})(["background:#ffffff;border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,0.2);padding:32px;width:90%;max-width:720px;max-height:90vh;overflow-y:auto;position:relative;display:flex;flex-direction:column;gap:24px;animation:fadeIn 0.3s ease-in-out;@keyframes fadeIn{from{opacity:0;transform:scale(0.95);}to{opacity:1;transform:scale(1);}}&::-webkit-scrollbar{width:8px;}&::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px;}"]);
const StyledButtonClose = styled.button.withConfig({
  displayName: "Modal__StyledButtonClose",
  componentId: "sc-1pc8fcs-2"
})(["position:absolute;top:16px;right:20px;font-size:24px;color:#999;background:none;border:none;cursor:pointer;transition:color 0.2s;&:hover{color:#333;}"]);
const StyledFormWrapper = styled.div.withConfig({
  displayName: "Modal__StyledFormWrapper",
  componentId: "sc-1pc8fcs-3"
})(["display:flex;flex-direction:column;gap:20px;"]);
const StyledDeleteButton = styled.button.withConfig({
  displayName: "Modal__StyledDeleteButton",
  componentId: "sc-1pc8fcs-4"
})(["align-self:center;padding:10px 24px;background-color:#ff4d4f;border:none;border-radius:8px;color:white;font-weight:bold;font-size:16px;cursor:pointer;transition:background-color 0.2s;&:hover{background-color:#d9363e;}"]);
function Modal({
  products,
  card,
  rows,
  url: url2,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal
}) {
  function handleClose() {
    setIsOpenModal(false);
  }
  async function handleDel() {
    await fetch(`http://${url2}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: card.id
      })
    });
    const response = await fetch(`http://${url2}/all`, {
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
    setCard({
      id: "",
      name: "",
      description: "",
      price: "",
      img: ""
    });
    setProductState(initialData);
    setIsOpenModal(false);
  }
  return /* @__PURE__ */ jsx(StyledOverlay, { children: /* @__PURE__ */ jsxs(StyledModal, { children: [
    /* @__PURE__ */ jsx(StyledButtonClose, { onClick: handleClose, children: "×" }),
    /* @__PURE__ */ jsx(Card, { product: card }),
    /* @__PURE__ */ jsxs(StyledFormWrapper, { children: [
      /* @__PURE__ */ jsx(MyForm, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url: url2, endPoint: "admin" }),
      /* @__PURE__ */ jsx(StyledDeleteButton, { onClick: handleDel, children: "🗑 Delete Card" })
    ] })
  ] }) });
}
const url = "react-router-rabit.onrender.com";
const endPoint = "upload";
const StyledBaseField = styled("div").withConfig({
  displayName: "Admin__StyledBaseField",
  componentId: "sc-1rnwr9c-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
function Admin({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    isOpenModal && /* @__PURE__ */ jsx(Modal, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url, endPoint }),
    /* @__PURE__ */ jsxs(StyledBaseField, { children: [
      /* @__PURE__ */ jsx("h2", { children: "Administrator" }),
      /* @__PURE__ */ jsx(Catalog, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url, endPoint }),
      /* @__PURE__ */ jsx(MyForm, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url, endPoint })
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
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setProductState(products);
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
  if (!hydrated)
    return null;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Server Rendering Example" }),
    /* @__PURE__ */ jsx("p", { children: "If you check out the HTML source of this page, you'll notice that it already contains the HTML markup of the app that was sent from the server!" }),
    /* @__PURE__ */ jsx("p", { children: "This is great for search engines that need to index this page. It's also great for users because server-rendered pages tend to load more quickly on mobile devices and over slow networks." }),
    /* @__PURE__ */ jsx("p", { children: "Another thing to notice is that when you click one of the links below and navigate to a different URL, then hit the refresh button on your browser, the server is able to generate the HTML markup for that page as well because you're using React Router on the server. This creates a seamless experience both for your users navigating around your site and for developers on your team who get to use the same routing library in both places." }),
    /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { path: "/", element: /* @__PURE__ */ jsx(Layout, {}), children: [
      /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(Home, { products: productState }) }),
      /* @__PURE__ */ jsx(Route, { path: "admin", element: /* @__PURE__ */ jsx(Admin, { products: productState, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url: "", endPoint: "" }) }),
      /* @__PURE__ */ jsx(Route, { path: "orders", element: /* @__PURE__ */ jsx(Orders, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "contacts", element: /* @__PURE__ */ jsx(Contacts, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NoMatch, {}) })
    ] }) })
  ] });
}
function render(url2, products) {
  const sheet = new ServerStyleSheet();
  try {
    const html = ReactDOMServer.renderToString(/* @__PURE__ */ jsx(StyleSheetManager, { sheet: sheet.instance, children: /* @__PURE__ */ jsx(StaticRouter, { location: url2, children: /* @__PURE__ */ jsx(App, { products }) }) }));
    const styleTags = sheet.getStyleTags();
    return {
      html,
      styleTags
    };
  } finally {
    sheet.seal();
  }
}
export {
  render
};
