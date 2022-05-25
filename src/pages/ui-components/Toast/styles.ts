const styles = `
.Toastify__toast-container {
  z-index: 9999;
  -webkit-transform: translate3d(0, 0, 9999px);
  position: fixed;
  box-sizing: border-box;
}

.Toastify__toast {
  position: relative;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  overflow: hidden;
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

.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
}

@media only screen and (max-width : 480px) {
  .Toastify__toast {
    margin-bottom: 0;
    border-radius: 0;
  }

  .Toastify__toast-container {
    width: 100vw;
    padding: 0;
    left: 0;
    margin: 0;
  }
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
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
`;

export default styles;
