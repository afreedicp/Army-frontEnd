import styled from '@emotion/styled';
export const CreateThoughtsStyle = styled.div`
  .textfield {
    max-width: 100%;
  }
  .textArea {
    width: 95%;
    height: 200px;
    text-align: center;
    font-size: 20px;
  }
  .field {
    margin: 30px 0;
    max-width: 100%;
    font-size: 16px;
  }
  .small-field {
    display: flex;
    justify-content: center;
  }
  .input {
    text-align: center;
    height: 40px;
    width: 95%;
  }
  .small-input {
    height: 40px;
    width: 65%;
  }
  .saveButtonDiv {
    position: absolute;
    bottom: 15px;
    right: 48px;
    .saveButton {
      width: 180px;
      border-radius: 12px;
      border: none;
      height: 50px;
      :hover {
        border: 1px solid #000;
      }
    }
  }
`;
