import styled from '@emotion/styled';
export const HomePageStyle = styled.div`
  .App-logo {
    animation: spin infinite 5s linear;
  }
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .loader {
    position: fixed;
    bottom: 10%;
    left: 45%;
    border: 16px solid #f3f3f300;
    border-top: 16px solid #3498db;
    border-bottom: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
  .row {
    color: #fff;
  }
`;
