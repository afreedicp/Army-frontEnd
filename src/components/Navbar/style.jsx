import styled from '@emotion/styled';
export const NavbarStyle = styled.div`
  .navbarStyle {
    position: sticky;
    top: 30px;
    max-width: 100vw;
    width: 100%;
    height: 80px;
    background: rgba(69, 11, 37, 0.49);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    border: 1px solid rgba(69, 11, 37, 0.26);
  }
  .Navbutton {
    position: absolute;
    top: 20px;
    color: #fff;
    left: 10px;
    :hover {
      backgroundcolor: #000;
      color: #000;
      bordercolor: #0062cc;
      boxshadow: none;
    }
  }
  .hoverClass {
    animation: App-logo-spin 1 0.2s linear;
    animation-fill-mode: forwards;
  }
  .reverseHoverClass {
    animation: App-logo-spinReturn 1 0.2s linear;
    animation-fill-mode: forwards;
  }
  @keyframes App-logo-spin {
    from {
      left: 10px;
    }
    to {
      left: 90%;
    }
  }
  @keyframes App-logo-spinReturn {
    from {
      left: 90%;
    }
    to {
      left: 10px;
    }
  }
`;
