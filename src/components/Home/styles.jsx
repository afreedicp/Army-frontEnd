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
  .valueContainer {
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 10px;
    padding: 20px;
    max-height: 90vh;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 4px;
      height: 159px;
    }

    &::-webkit-scrollbar-track {
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: #e6e9f0;
    }
  }
  .styledModal {
    padding: 10px;
  }
  .rowClass {
    border: 1px dashed #5fa16d;
    width: 220px;
    padding: 10px 15px;
    height: 70px;
    font-size: 20px;
    text-transform: capitalize;
    color: #5fa16d;
  }
  .title {
    color: #5f88a1;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .description {
    max-width: 200px;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #5fa16d;
  }
`;
