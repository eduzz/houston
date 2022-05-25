/* eslint-disable max-lines */
const styles = `
.Toastify__toast-container {
  z-index: 9999;
  -webkit-transform: translate3d(0, 0, 9999px);
  position: fixed;
  box-sizing: border-box;
  color: #fff;
}
@media only screen and (max-width : 480px) {
  .Toastify__toast-container {
    width: 100vw;
    padding: 0;
    left: 0;
    margin: 0;
  }
  .Toastify__toast-container--top-left, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right {
    top: 0;
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left, .Toastify__toast-container--bottom-center, .Toastify__toast-container--bottom-right {
    bottom: 0;
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: 0;
    left: initial;
  }
}
.Toastify__toast {
  position: relative;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
  font-family: sans-serif;
  cursor: pointer;
  direction: ltr;
}
.Toastify__toast-body {
  margin: auto 0;
  -ms-flex: 1 1 auto;
      flex: 1 1 auto;
}
.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.7s;
}
@media only screen and (max-width : 480px) {
  .Toastify__toast {
    margin-bottom: 0;
    border-radius: 0;
  }
}
.Toastify__close-button {
  color: #fff;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  -ms-flex-item-align: start;
      align-self: flex-start;
}
.Toastify__close-button--default {
  color: #000;
  opacity: 0.3;
}
.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}
.Toastify__close-button:hover, .Toastify__close-button:focus {
  opacity: 1;
}
@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, 0, 0);
  }
}
.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}
.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
}
`;

export default styles;
