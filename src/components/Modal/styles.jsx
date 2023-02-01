import styled from '@emotion/styled';

export const StyledModal = styled.div`
  @keyframes rightTransit {
    from {
      transform: translate(100%);
    }
    to {
      transform: translate(0px);
    }
  }

  @keyframes leftTransit {
    from {
      transform: translate(0);
    }
    to {
      transform: translate(100%);
    }
  }

  &.open-drawer {
    width: 100vw;
    min-height: 100vh;
    background: rgba(35, 42, 64, 0.4);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 4;
  }

  .drawer-container {
    position: fixed;
    left: 30%;
    width: 620px;
    top: 20%;
    background: rgba(69, 11, 37, 0.7);
    border-radius: 12px;
    height: 55%;
    transition: all 0.3s ease-in-out;
    padding: 24px 20px;
    z-index: 3;
    animation-duration: 0.3s;
    box-shadow: 0px 4px 16px 0px #26275833;
    max-width: 100%;
  }

  .closing.align-right {
    animation-duration: 0.3s;
    transform: translate(100%);
  }

  .closing.align-left {
    animation-duration: 0.3s;
    transform: translate(-100%);
  }

  .add-policy-form .fields {
    max-width: 100%;
  }
  .add-policy-form {
    max-width: 1000px;
    max-width: 100%;
  }
  .policy-form-container {
    justify-content: space-around;
  }

  @media screen and (max-width: 576px) {
    .drawer-container {
      width: 100vw;
    }
  }

  @media screen and (min-width: 576px) {
    .drawer-container {
      padding: 24px 32px 24px 48px;
    }
  }

  //   @media screen and (min-width: 1900px) {
  //     .drawer-container {
  //       padding: 35px 60px;
  //     }
  //   }
  //   @media screen and (min-width: 2800px) {
  //     .drawer-container {
  //       padding: 70px 120px;
  //     }
  //   }

  //   @media screen and (max-width: 1200px) {
  //     .fullwidth-container {
  //       width: 100%;
  //     }
  //   }
`;
