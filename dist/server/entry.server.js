import * as jsxRuntime from "react/jsx-runtime";
import { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, Outlet, useNavigate, Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styledComponents from 'styled-components';
const styled = styledComponents.default;
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Grid, Autoplay } from "swiper/modules";
import { useForm } from "react-hook-form";
import ReactSpinners from 'react-spinners';
const { ClockLoader } = ReactSpinners;
import { useJwt } from "react-jwt";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const swiper = "";
const grid = "";
const scrollbar = "";
const CardWrapper = styled.div.withConfig({
  displayName: "Card__CardWrapper",
  componentId: "sc-h41vf0-0"
})(["max-width:340px;background:#fff;border-radius:16px;padding:16px;margin:12px auto;box-shadow:0 8px 16px rgba(0,0,0,0.1);transition:transform 0.2s ease,box-shadow 0.3s ease;&:hover{transform:translateY(-4px);box-shadow:0 12px 24px rgba(0,0,0,0.15);}"]);
const StyledImg$1 = styled.img.withConfig({
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
    /* @__PURE__ */ jsx(StyledImg$1, { src: product.img[0], alt: product.name }),
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
const StyledBaseField$4 = styled("div").withConfig({
  displayName: "Cards__StyledBaseField",
  componentId: "sc-in0nuh-0"
})(["width:100%;max-width:1200px;margin:0 auto;padding:1rem;box-sizing:border-box;.swiper{width:100%;height:auto;}.swiper-slide{display:flex;justify-content:center;align-items:center;height:100%;}.swiper-scrollbar{margin-top:8px;}"]);
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
      img: [""]
    };
    setCard(newCard);
    setIsOpenModal(true);
  }
  return /* @__PURE__ */ jsx(StyledBaseField$4, { children: /* @__PURE__ */ jsx(Swiper, { scrollbar: {
    hide: true
  }, modules: [Scrollbar, Grid], spaceBetween: 10, slidesPerView: slidePreView, grid: {
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
const StyledBaseField$3 = styled("div").withConfig({
  displayName: "Catalog__StyledBaseField",
  componentId: "sc-lby759-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;"]);
function Catalog({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
  isAuth,
  setAuth,
  token,
  isExpired,
  loading,
  setLoading,
  setErrorRegistration
}) {
  return /* @__PURE__ */ jsxs(StyledBaseField$3, { children: [
    /* @__PURE__ */ jsx("h2", { children: "Catalog" }),
    /* @__PURE__ */ jsx(Cards, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url: "", endPoint: "", isAuth, setAuth, token, isExpired, loading, setLoading, setErrorRegistration })
  ] });
}
const StyledOverlaySpiner$1 = styled.div.withConfig({
  displayName: "MyForm__StyledOverlaySpiner",
  componentId: "sc-1ycmc8g-0"
})(["position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:9999;"]);
const StyledForm$1 = styled("form").withConfig({
  displayName: "MyForm__StyledForm",
  componentId: "sc-1ycmc8g-1"
})(["margin:30px;align-items:center;border:1px solid lightblue;border-radius:10px;padding:20px;display:flex;justify-content:center;flex-wrap:wrap;@media (min-width:480px){padding:40px;}@media (min-width:600px){width:500px;}"]);
const StyledFormField = styled("input").withConfig({
  displayName: "MyForm__StyledFormField",
  componentId: "sc-1ycmc8g-2"
})(["margin:5px;width:150px;@media (max-width:480px){width:200px;display:block;}"]);
const StyledFormTextArea = styled("textarea").withConfig({
  displayName: "MyForm__StyledFormTextArea",
  componentId: "sc-1ycmc8g-3"
})(["display:block;margin:5px;width:200px;@media (min-width:480px){width:320px;}"]);
const StyledButton$1 = styled("input").withConfig({
  displayName: "MyForm__StyledButton",
  componentId: "sc-1ycmc8g-4"
})(["width:150px;margin:10px;display:block;"]);
const StyledFormFile = styled("input").withConfig({
  displayName: "MyForm__StyledFormFile",
  componentId: "sc-1ycmc8g-5"
})(["margin:10px;display:block;"]);
const StyledNameForm = styled.h2.withConfig({
  displayName: "MyForm__StyledNameForm",
  componentId: "sc-1ycmc8g-6"
})(["margin:0;padding:0;"]);
const StyledBaseForm = styled.div.withConfig({
  displayName: "MyForm__StyledBaseForm",
  componentId: "sc-1ycmc8g-7"
})(["margin:25px;padding:10px;"]);
function MyForm({
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
  url: url2,
  endPoint: endPoint2,
  loading,
  setLoading
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
    setLoading(true);
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
    await fetch(`${url2}/${endPoint2}`, {
      method: "POST",
      body: formData
    });
    const response = await fetch(`${url2}/all`, {
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
    setLoading(false);
    setProductState(initialData);
    reset();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !loading || /* @__PURE__ */ jsx(StyledOverlaySpiner$1, { children: /* @__PURE__ */ jsx(ClockLoader, { color: "#1eec4b", cssOverride: {}, loading, size: 70, speedMultiplier: 2 }) }),
    /* @__PURE__ */ jsxs(StyledBaseForm, { children: [
      endPoint2 === "upload" ? /* @__PURE__ */ jsx(StyledNameForm, { children: "Create new card" }) : /* @__PURE__ */ jsx(StyledNameForm, { children: "Update card" }),
      /* @__PURE__ */ jsxs(StyledForm$1, { onSubmit: handleSubmit(onSubmit), children: [
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
        endPoint2 === "upload" ? /* @__PURE__ */ jsx(StyledFormFile, { type: "file", name: "files", accept: ".jpg", multiple: true }) : "",
        errors.description && /* @__PURE__ */ jsx("span", { children: "This field description is required" }),
        /* @__PURE__ */ jsx(StyledButton$1, { type: "submit" })
      ] })
    ] })
  ] });
}
const pathSvg = "/assets/icon-56ad9de6.svg";
const StyledButtonClose = styled.button.withConfig({
  displayName: "ButtonClose__StyledButtonClose",
  componentId: "sc-12icmn2-0"
})(["position:absolute;top:7px;right:7px;font-size:24px;fill:#999;background:none;border:none;cursor:pointer;transition:color 0.2s;"]);
const StyledSvg$1 = styled.svg.withConfig({
  displayName: "ButtonClose__StyledSvg",
  componentId: "sc-12icmn2-1"
})(["width:24px;height:24px;&:hover{fill:#464545;}"]);
function ButtonClose({
  setIsOpenModal
}) {
  function handleClose() {
    setIsOpenModal(false);
  }
  return /* @__PURE__ */ jsx(StyledButtonClose, { onClick: handleClose, children: /* @__PURE__ */ jsx(StyledSvg$1, { children: /* @__PURE__ */ jsx("use", { xlinkHref: pathSvg + "#icon-button-close" }) }) });
}
const StyledOverlaySpiner = styled.div.withConfig({
  displayName: "ModalCreate__StyledOverlaySpiner",
  componentId: "sc-fgugp0-0"
})(["position:fixed;inset:0;background:rgba(0,0,0,0.288);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:9999;"]);
const StyledOverlay$2 = styled.div.withConfig({
  displayName: "ModalCreate__StyledOverlay",
  componentId: "sc-fgugp0-1"
})(["position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:9998;"]);
const StyledModal = styled.div.withConfig({
  displayName: "ModalCreate__StyledModal",
  componentId: "sc-fgugp0-2"
})(["background:#ffffff;border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,0.2);padding:32px;width:90%;max-width:720px;max-height:90vh;overflow-y:auto;position:relative;display:flex;flex-direction:column;gap:24px;animation:fadeIn 0.3s ease-in-out;@keyframes fadeIn{from{opacity:0;transform:scale(0.95);}to{opacity:1;transform:scale(1);}}&::-webkit-scrollbar{width:8px;}&::-webkit-scrollbar-thumb{background:#ccc;border-radius:4px;}"]);
const StyledFormWrapper = styled.div.withConfig({
  displayName: "ModalCreate__StyledFormWrapper",
  componentId: "sc-fgugp0-3"
})(["margin:40px;display:flex;flex-direction:column;align-items:center;gap:20px;"]);
const StyledDeleteButton$1 = styled.button.withConfig({
  displayName: "ModalCreate__StyledDeleteButton",
  componentId: "sc-fgugp0-4"
})(["align-self:center;padding:10px 24px;background-color:#ff4d4f;border:none;border-radius:8px;color:white;font-weight:bold;font-size:16px;cursor:pointer;transition:background-color 0.2s;&:hover{background-color:#d9363e;}"]);
const SwiperContainer = styled.div.withConfig({
  displayName: "ModalCreate__SwiperContainer",
  componentId: "sc-fgugp0-5"
})(["margin:30px;width:100%;max-width:720px;height:300px;margin:0 auto;.swiper-slide{display:flex;justify-content:center;align-items:center;}.swiper-slide img{width:70%;height:70%;object-fit:contain;}"]);
const SrtyledDivImg = styled.div.withConfig({
  displayName: "ModalCreate__SrtyledDivImg",
  componentId: "sc-fgugp0-6"
})(["width:100%;height:auto;margin-bottom:15px;"]);
const StyledImg = styled.img.withConfig({
  displayName: "ModalCreate__StyledImg",
  componentId: "sc-fgugp0-7"
})(["width:100%;border-radius:12px;display:block;margin-bottom:12px;"]);
const StyledInput$1 = styled.input.withConfig({
  displayName: "ModalCreate__StyledInput",
  componentId: "sc-fgugp0-8"
})(["display:block;"]);
const StyledInputButton = styled.input.withConfig({
  displayName: "ModalCreate__StyledInputButton",
  componentId: "sc-fgugp0-9"
})(["display:block;margin:30px;"]);
const StyledFieldButton = styled.div.withConfig({
  displayName: "ModalCreate__StyledFieldButton",
  componentId: "sc-fgugp0-10"
})(["display:flex;flex-wrap:wrap;justify-content:start;"]);
function ModalCreate({
  products,
  card,
  rows,
  url: url2,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
  isAuth,
  token,
  setAuth,
  isExpired,
  loading,
  setLoading,
  setErrorRegistration
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
    setLoading(true);
    let newImg = [...card.img];
    for (let i = 0; i < data.deletePhotos.length; i++) {
      if (+data.deletePhotos[i] === +data.selectedPhoto)
        continue;
      await fetch(`${url2}/upload/cloudinary`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          img: card.img[+data.deletePhotos[i]]
        })
      });
      newImg[+data.deletePhotos[i]] = "";
    }
    newImg = [newImg[+data.selectedPhoto], ...newImg.filter((_, i) => i !== +data.selectedPhoto)];
    newImg = newImg.filter((item) => item && item.trim());
    const formData = new FormData();
    formData.append("id", card.id);
    formData.append("name", card.name);
    formData.append("price", card.price);
    formData.append("description", card.description);
    formData.append("img", newImg.join(","));
    await fetch(`${url2}/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: card.id,
        name: card.name,
        price: card.price,
        description: card.description,
        img: newImg
      })
    });
    await addPictures(formData);
    const response = await fetch(`${url2}/all`, {
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
    setLoading(false);
    setCard(initialData.find((el) => el.id === card.id));
    setProductState(initialData);
    reset();
  };
  async function addPictures(formData) {
    const filesInput = document.querySelector('input[name="files"]');
    if (filesInput == null ? void 0 : filesInput.files) {
      Array.from(filesInput.files).forEach((file) => {
        formData.append("files", file);
      });
    }
    if (!(filesInput == null ? void 0 : filesInput.files) || filesInput.files.length === 0) {
      console.warn("Файли не вибрано — запит не буде надіслано");
      return formData;
    }
    await fetch(`${url2}/upload/${card.id}`, {
      method: "POST",
      body: formData
    });
    const response = await fetch(`${url2}/all`, {
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
    return formData;
  }
  async function handleDel() {
    setLoading(true);
    await fetch(`${url2}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: card.id
      })
    });
    const response = await fetch(`${url2}/all`, {
      method: "GET"
    });
    if (!response.ok) {
      const text = await response.text();
      console.error("Сервер повернув помилку:", response.status, text);
      return;
    }
    let product;
    try {
      product = await response.json();
    } catch (e) {
      console.error("Не вдалося розпарсити JSON:", e);
      return;
    }
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
      img: []
    });
    setLoading(false);
    setProductState(initialData);
    setIsOpenModal(false);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !loading || /* @__PURE__ */ jsx(StyledOverlaySpiner, { children: /* @__PURE__ */ jsx(ClockLoader, { color: "#1eec4b", cssOverride: {}, loading, size: 70, speedMultiplier: 2 }) }),
    /* @__PURE__ */ jsx(StyledOverlay$2, { children: /* @__PURE__ */ jsxs(StyledModal, { children: [
      /* @__PURE__ */ jsx(ButtonClose, { setIsOpenModal, isOpenModal }),
      /* @__PURE__ */ jsx(Card, { product: card }),
      /* @__PURE__ */ jsx(SwiperContainer, { children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
        /* @__PURE__ */ jsx(Swiper, { scrollbar: {
          hide: true,
          draggable: true
        }, modules: [Scrollbar, Grid, Autoplay], autoplay: {
          delay: 2500,
          disableOnInteraction: true
        }, slidesPerView: 3, spaceBetween: 20, grid: {
          rows: 1,
          fill: "row"
        }, children: card.img.map((src, idx) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs(SrtyledDivImg, { children: [
          /* @__PURE__ */ jsxs("label", { children: [
            /* @__PURE__ */ jsx(StyledInput$1, { type: "checkbox", value: idx, ...register("deletePhotos") }),
            "Delete Photo"
          ] }),
          /* @__PURE__ */ jsx(StyledImg, { src, alt: card.name }),
          /* @__PURE__ */ jsxs("label", { children: [
            /* @__PURE__ */ jsx(StyledInput$1, { type: "radio", value: idx, defaultChecked: idx === 0, ...register("selectedPhoto") }),
            idx === 0 && "General Photo"
          ] })
        ] }) }, idx)) }),
        /* @__PURE__ */ jsxs(StyledFieldButton, { children: [
          /* @__PURE__ */ jsx(StyledInputButton, { type: "file", name: "files", accept: ".jpg", multiple: true }),
          /* @__PURE__ */ jsx(StyledInputButton, { type: "submit", value: "Changed" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(StyledFormWrapper, { children: [
        /* @__PURE__ */ jsx(MyForm, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url: url2, endPoint: "admin", isAuth, setAuth, token, isExpired, loading, setLoading, setErrorRegistration }),
        /* @__PURE__ */ jsx(StyledDeleteButton$1, { onClick: handleDel, children: "🗑 Delete Card" })
      ] })
    ] }) })
  ] });
}
const endPoint = "upload";
const StyledBaseField$2 = styled("div").withConfig({
  displayName: "Admin__StyledBaseField",
  componentId: "sc-1rnwr9c-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
function Admin({
  products,
  card,
  rows,
  url: url2,
  setCard,
  setProductState,
  setIsOpenModal,
  isOpenModal,
  setAuth,
  isAuth,
  token,
  isExpired,
  loading,
  setLoading,
  setErrorRegistration
}) {
  return isAuth && /* @__PURE__ */ jsxs("div", { children: [
    isOpenModal && /* @__PURE__ */ jsx(ModalCreate, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url: url2, endPoint, setAuth, isAuth, token, isExpired, loading, setLoading, setErrorRegistration }),
    /* @__PURE__ */ jsxs(StyledBaseField$2, { children: [
      /* @__PURE__ */ jsx("h2", { children: "Administrator" }),
      /* @__PURE__ */ jsx(Catalog, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url: url2, endPoint, setAuth, isAuth, token, isExpired, loading, setLoading, setErrorRegistration }),
      /* @__PURE__ */ jsx(MyForm, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url: url2, endPoint, setAuth, isAuth, token, isExpired, loading, setLoading, setErrorRegistration })
    ] })
  ] });
}
const StyledField$1 = styled.div.withConfig({
  displayName: "CardView__StyledField",
  componentId: "sc-ver2da-0"
})(["display:flex;flex-direction:column;align-items:center;background:linear-gradient(145deg,#f0f0f0,#ffffff);border:1px solid #ddd;padding:24px;border-radius:12px;box-shadow:0 8px 16px rgba(0,0,0,0.1);width:320px;margin:30px auto;position:relative;transition:transform 0.3s ease;overflow-y:scroll;&:hover{transform:translateY(-4px);box-shadow:0 12px 24px rgba(0,0,0,0.15);}h1{font-size:1.5rem;margin-bottom:8px;color:#333;}h2{font-size:1.2rem;margin-bottom:4px;color:#555;}p{font-size:1rem;margin:4px 0;color:#666;}img{width:100%;height:auto;border-radius:8px;margin-top:12px;object-fit:cover;box-shadow:0 4px 8px rgba(0,0,0,0.05);}"]);
function CardView({
  isOpenModal,
  cardView,
  setCardView,
  setIsOpenModal
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(StyledField$1, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Card" }),
    /* @__PURE__ */ jsx("h2", { children: cardView == null ? void 0 : cardView.name }),
    /* @__PURE__ */ jsx("p", { children: cardView == null ? void 0 : cardView.description }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Price: ",
      cardView == null ? void 0 : cardView.price
    ] }),
    /* @__PURE__ */ jsx("img", { src: cardView == null ? void 0 : cardView.img[0], alt: cardView == null ? void 0 : cardView.name, style: {
      width: "100%"
    } }),
    /* @__PURE__ */ jsx(ButtonClose, { isOpenModal, setIsOpenModal })
  ] }) });
}
const StyledOverlay$1 = styled.div.withConfig({
  displayName: "ModalView__StyledOverlay",
  componentId: "sc-r0zy7f-0"
})(["position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:9998;"]);
function ModalView({
  isOpenModal,
  cardView,
  setCardView,
  setIsOpenModal
}) {
  return /* @__PURE__ */ jsx(StyledOverlay$1, { children: /* @__PURE__ */ jsx(CardView, { isOpenModal, cardView, setCardView, setIsOpenModal }) });
}
const StyledGenField = styled.div.withConfig({
  displayName: "Home__StyledGenField",
  componentId: "sc-rf26ej-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
const StyledBaseField$1 = styled.div.withConfig({
  displayName: "Home__StyledBaseField",
  componentId: "sc-rf26ej-1"
})(["width:100%;max-width:1200px;margin:0 auto;padding:1rem;box-sizing:border-box;.swiper{width:100%;height:auto;}.swiper-slide{display:flex;justify-content:center;align-items:center;height:100%;}.swiper-scrollbar{margin-top:8px;}"]);
function Home({
  products,
  rows
}) {
  const [isOpenModalView, setIsOpenModalView] = useState(false);
  const [cardView, setCardview] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    img: []
  });
  function handleViewCard(id) {
    const product = products.find((p) => p.id === id);
    if (product) {
      setCardview(product);
    }
    setIsOpenModalView(true);
  }
  let row = 5;
  let slidePreView = 2;
  switch (rows) {
    case 3:
      slidePreView = 1;
      row = 5;
      break;
    case 2:
      slidePreView = 3;
      row = 3;
      break;
    case 1:
      slidePreView = 5;
      row = 5;
      break;
    default:
      slidePreView = 1;
  }
  return /* @__PURE__ */ jsxs(StyledGenField, { children: [
    !isOpenModalView || /* @__PURE__ */ jsx(ModalView, { isOpenModal: isOpenModalView, setIsOpenModal: setIsOpenModalView, cardView, setCardView: setCardview }),
    /* @__PURE__ */ jsx("h2", { children: "Home" }),
    /* @__PURE__ */ jsx(StyledBaseField$1, { children: /* @__PURE__ */ jsx(Swiper, { scrollbar: {
      hide: true,
      draggable: true
    }, modules: [Scrollbar, Grid, Autoplay], autoplay: {
      delay: 2500,
      disableOnInteraction: true
    }, slidesPerView: slidePreView, spaceBetween: 20, grid: {
      rows: row,
      fill: "row"
    }, children: products.map((p) => /* @__PURE__ */ jsx(SwiperSlide, { onClick: () => handleViewCard(p.id), children: /* @__PURE__ */ jsx(Card, { product: {
      id: p.id ?? "",
      name: p.name ?? "",
      description: p.description ?? "",
      price: p.price ?? "",
      img: p.img ?? ""
    } }) }, p.id)) }) })
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
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/login", children: "Login" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/admin", children: "Admin" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/orders", children: "Orders" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contacts", children: "Contacts" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/nothing-here", children: "Nothing Here" }) })
    ] }) }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const keyIcon = "/assets/Copilot_20250803_110344-af9a649f.png";
const ReactToastify = "";
const StyledOverlay = styled.div.withConfig({
  displayName: "UsersForm__StyledOverlay",
  componentId: "sc-w5oi9h-0"
})(["position:fixed;inset:0;background:rgba(0,0,0,0.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:9999;"]);
const StyledBase = styled.div.withConfig({
  displayName: "UsersForm__StyledBase",
  componentId: "sc-w5oi9h-1"
})(["display:flex;flex-direction:column;align-items:center;min-height:100vh;padding-top:20px;"]);
const StyledButton = styled.input.withConfig({
  displayName: "UsersForm__StyledButton",
  componentId: "sc-w5oi9h-2"
})(["align-self:center;padding:10px 24px;width:150px;height:40px;background-color:#007bff;border:none;border-radius:8px;color:white;font-weight:bold;font-size:14px;cursor:pointer;transition:background-color 0.3s ease;&:hover{background-color:#0056b3;}"]);
const StyledDeleteButton = styled.button.withConfig({
  displayName: "UsersForm__StyledDeleteButton",
  componentId: "sc-w5oi9h-3"
})(["align-self:center;padding:10px 24px;width:150px;height:40px;background-color:#ff4d4f;border:none;border-radius:8px;color:white;font-weight:bold;font-size:14px;cursor:pointer;transition:background-color 0.3s ease;&:hover{background-color:#d9363e;}"]);
const StyledForm = styled.form.withConfig({
  displayName: "UsersForm__StyledForm",
  componentId: "sc-w5oi9h-4"
})(["position:relative;display:flex;flex-direction:column;gap:16px;padding:32px;border:1px solid #ccc;border-radius:12px;background-color:#f9f9f9;box-shadow:0 4px 12px rgba(0,0,0,0.1);width:300px;"]);
const StyledInput = styled.input.withConfig({
  displayName: "UsersForm__StyledInput",
  componentId: "sc-w5oi9h-5"
})(["width:95%;padding:10px;font-size:14px;border:1px solid #aaa;border-radius:8px;"]);
const StyledSpan = styled.span.withConfig({
  displayName: "UsersForm__StyledSpan",
  componentId: "sc-w5oi9h-6"
})(["font-size:12px;color:red;"]);
const StyledDiv = styled.div.withConfig({
  displayName: "UsersForm__StyledDiv",
  componentId: "sc-w5oi9h-7"
})(["position:relative;width:100%;"]);
const StyledSelect = styled.select.withConfig({
  displayName: "UsersForm__StyledSelect",
  componentId: "sc-w5oi9h-8"
})(["width:95%;padding:10px;font-size:14px;border:1px solid #aaa;border-radius:8px;background-color:white;color:black;"]);
function UsersForm({
  url: url2,
  endPoint: endPoint2,
  isAuth,
  isExpired,
  token,
  loading,
  isRegistration,
  setRegistration,
  setErrorRegistration,
  setAuth
}) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    watch,
    formState: {
      errors
    }
  } = useForm();
  const onSubmit = async (data) => {
    if (isRegistration) {
      setRegistration == null ? void 0 : setRegistration(false);
      try {
        const result = await fetch(`${url2}/${endPoint2}/root/10`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: data.login,
            password: data.password,
            description: data.descriptionUser,
            email: data.email,
            role: data.role
          })
        });
        const res = await result.json();
        res.auth ? setErrorRegistration(3) : setErrorRegistration(0);
      } catch (err) {
        console.log("error", err);
      }
    }
    if (data.login === "root") {
      try {
        const result = await fetch(`${url2}/${endPoint2}/root/1`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: data.login,
            password: data.password,
            description: data.descriptionUser,
            email: data.email,
            role: data.role
          })
        });
        const res = await result.json();
        res.auth ? setRegistration == null ? void 0 : setRegistration(true) : setRegistration == null ? void 0 : setRegistration(false);
        res.auth ? setErrorRegistration(1) : setErrorRegistration(2);
      } catch (err) {
        console.log("error", err);
      }
    } else {
      try {
        const result = await fetch(`${url2}/${endPoint2}/root/20`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: data.login,
            password: data.password,
            description: data.descriptionUser,
            email: data.email,
            role: data.role
          })
        });
        const res = await result.json();
        res.auth ? setErrorRegistration(4) : setErrorRegistration(2);
        localStorage.setItem("token", res.token);
        setAuth(isExpired);
        res.auth && navigate("/admin");
      } catch (err) {
        console.log("error", err);
      }
    }
    reset();
  };
  async function handleDel() {
    try {
      const result = await fetch(`${url2}/${endPoint2}/${getValues("login")}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pass: getValues("password")
        })
      });
      const res = await result.json();
      res.auth ? setErrorRegistration(5) : setErrorRegistration(2);
    } catch (err) {
      console.log("error", err);
    }
    reset();
  }
  return /* @__PURE__ */ jsxs(StyledBase, { children: [
    !loading || /* @__PURE__ */ jsx(StyledOverlay, { children: /* @__PURE__ */ jsx(ClockLoader, { color: "#1eec4b", cssOverride: {}, loading, size: 70, speedMultiplier: 2 }) }),
    !isRegistration || /* @__PURE__ */ jsx("h3", { children: "Create or delete user " }),
    /* @__PURE__ */ jsxs(StyledForm, { onSubmit: handleSubmit(onSubmit), children: [
      !isRegistration || /* @__PURE__ */ jsx(ButtonClose, { setIsOpenModal: () => setRegistration == null ? void 0 : setRegistration(false), isOpenModal: isRegistration }),
      /* @__PURE__ */ jsx(StyledInput, { ...register("login", {
        required: true
      }), type: "login", placeholder: "login" }),
      errors.login && /* @__PURE__ */ jsx("span", { children: "This field is required" }),
      /* @__PURE__ */ jsxs(StyledDiv, { children: [
        /* @__PURE__ */ jsx(StyledInput, { ...register("password", {
          required: true
        }), type: showPassword ? "text" : "password", name: "password", placeholder: "Password" }),
        /* @__PURE__ */ jsx(StyledSpan, { onClick: () => setShowPassword(!showPassword), style: {
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          fontSize: "24px"
        }, children: !showPassword ? "🙈" : "👁️" })
      ] }),
      errors.password && /* @__PURE__ */ jsx("span", { children: "This field is required" }),
      !isRegistration || /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(StyledInput, { ...register("email", {
          required: true
        }), type: "email", placeholder: "email" }),
        errors.email && /* @__PURE__ */ jsx("span", { children: "This field is required" }),
        /* @__PURE__ */ jsx(StyledInput, { ...register("descriptionUser", {
          required: true
        }), type: "text", placeholder: "description" }),
        errors.descriptionUser && /* @__PURE__ */ jsx("span", { children: "This field is required" }),
        /* @__PURE__ */ jsx("label", { htmlFor: "role", children: "Select role" }),
        /* @__PURE__ */ jsxs(StyledSelect, { id: "role", name: "role", children: [
          /* @__PURE__ */ jsx("option", { value: "root", children: "Root" }),
          /* @__PURE__ */ jsx("option", { value: "admin", children: "Admin" }),
          /* @__PURE__ */ jsx("option", { value: "user", children: "User" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(StyledButton, { type: "submit", value: !isRegistration ? "Send" : "Create User" }),
      !isRegistration || /* @__PURE__ */ jsx(StyledDeleteButton, { type: "button", onClick: handleDel, value: "delete", children: "🗑 Delete Card" })
    ] })
  ] });
}
const StyledBaseField = styled.div.withConfig({
  displayName: "Login__StyledBaseField",
  componentId: "sc-49vdt4-0"
})(["display:flex;flex-direction:column;align-items:center;min-height:100vh;padding-top:20px;"]);
const StaticBackground = styled.div.withConfig({
  displayName: "Login__StaticBackground",
  componentId: "sc-49vdt4-1"
})(["position:absolute;width:100vw;height:100vh;background-image:url(", ");background-repeat:repeat;background-size:450px;z-index:-1;"], keyIcon);
function Login({
  url: url2,
  endPoint: endPoint2,
  products,
  card,
  rows,
  setCard,
  setProductState,
  setIsOpenModal,
  setAuth,
  isOpenModal,
  isAuth,
  token,
  isExpired,
  loading,
  isRegistration,
  setRegistration,
  setLoading,
  setErrorRegistration
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(StaticBackground, {}),
    /* @__PURE__ */ jsxs(StyledBaseField, { children: [
      /* @__PURE__ */ jsx("h2", { children: "Login" }),
      /* @__PURE__ */ jsx(UsersForm, { products, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url: url2, endPoint: "users", isAuth, setAuth, token, isExpired, loading, setLoading, setErrorRegistration, isRegistration, setRegistration })
    ] })
  ] });
}
const StyledField = styled.div.withConfig({
  displayName: "OpenClosedCard__StyledField",
  componentId: "sc-139pxkg-0"
})(["position:fixed;top:60px;right:10px;width:60px;height:60px;display:flex;align-items:center;justify-content:center;background-color:whitesmoke;border:2px solid #ccc;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.2);cursor:pointer;transition:box-shadow 0.3s ease;z-index:1;&:hover{box-shadow:0 4px 12px rgba(0,0,0,0.3);}"]);
const StyledSvg = styled.svg.withConfig({
  displayName: "OpenClosedCard__StyledSvg",
  componentId: "sc-139pxkg-1"
})(["width:32px;"]);
function OpenClosedCard({
  isOpenModal,
  setIsOpenModal,
  cardView,
  setCardView
}) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx(StyledField, { children: isOpenModal ? /* @__PURE__ */ jsx(StyledSvg, { style: {
    fill: "#1eec4b"
  }, onClick: () => {
    setIsOpenModal == null ? void 0 : setIsOpenModal(false);
    navigate("/login");
  }, children: /* @__PURE__ */ jsx("use", { xlinkHref: pathSvg + "#icon-lock-open" }) }) : /* @__PURE__ */ jsx(StyledSvg, { style: {
    fill: "red"
  }, onClick: () => navigate("/login"), children: /* @__PURE__ */ jsx("use", { xlinkHref: pathSvg + "#icon-lock-closed" }) }) });
}
const url = "https://soft-rabit.onrender.com";
function App({
  products
}) {
  const [productState, setProductState] = useState(products);
  const [rows, setRows] = useState(2);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState({
    id: "",
    email: "",
    name: "",
    role: "",
    description: "",
    token: ""
  });
  const {
    decodedToken,
    isExpired
  } = useJwt(token.token);
  const [isAuth, setAuth] = useState(isExpired);
  const [isRegistration, setRegistration] = useState(false);
  const [errorRegistration, setErrorRegistration] = useState(0);
  const [card, setCard] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    img: []
  });
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHydrated(true);
      setProductState(products);
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken({
          ...token,
          token: storedToken
        });
      }
    }
  }, [products]);
  useEffect(() => {
    if (!isAuth) {
      setToken({
        id: "",
        email: "",
        name: "",
        role: "",
        description: "",
        token: ""
      });
      localStorage.removeItem("token");
    }
  }, [isAuth]);
  useEffect(() => {
    switch (errorRegistration) {
      case 1:
        toast.success("Login or Password correct!");
        break;
      case 2:
        toast.error("Login or Password incorrect!");
        break;
      case 3:
        toast.success("New user created!");
        break;
      case 4:
        toast.info("Login successful");
        break;
      case 5:
        toast.info("user deleted");
        break;
    }
  }, [errorRegistration]);
  useEffect(() => {
    const fetchUser = async () => {
      if (decodedToken) {
        try {
          const response = await fetch(`${url}/users/${decodedToken.id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const userData = await response.json();
          delete userData.user.password;
          setToken((prevToken) => ({
            ...prevToken,
            ...userData.user
          }));
          setAuth(!isExpired);
        } catch (error) {
          console.error("error", error);
        }
      } else {
        console.warn("cant decoding token");
        setAuth(false);
      }
    };
    fetchUser();
  }, [decodedToken, isExpired]);
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
    /* @__PURE__ */ jsx(ToastContainer, {}),
    /* @__PURE__ */ jsx(OpenClosedCard, { isOpenModal: isAuth, setIsOpenModal: setAuth, cardView: card, setCardView: setCard }),
    /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { path: "/", element: /* @__PURE__ */ jsx(Layout, {}), children: [
      /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(Home, { products: productState, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url, endPoint: "", isAuth, setAuth, token: token.token, isExpired, loading, setLoading, setErrorRegistration }) }),
      /* @__PURE__ */ jsx(Route, { path: "login", element: /* @__PURE__ */ jsx(Login, { products: productState, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url, endPoint: "users", isAuth, setAuth, token: token.token, isExpired, loading, setLoading, setErrorRegistration, isRegistration, setRegistration }) }),
      /* @__PURE__ */ jsx(Route, { path: "admin", element: /* @__PURE__ */ jsx(Admin, { products: productState, card, rows, setCard, setProductState, setIsOpenModal, isOpenModal, url, endPoint: "", isAuth, setAuth, token: token.token, isExpired, loading, setLoading, setErrorRegistration }) }),
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
