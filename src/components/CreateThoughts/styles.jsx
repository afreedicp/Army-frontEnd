import styled from '@emotion/styled';
export const CreateThoughtsStyle = styled.div`
  .textfield {
    max-width: 100%;
  }
  .textArea {
    background: #94e3a980;
    width: 95%;
    height: 200px;
    border-radius: 18px;
    text-align: center;
    font-size: 20px;
  }
  .field {
    margin: 20px 0;
    max-width: 100%;
    font-size: 16px;
  }
  .small-field {
    display: flex;
    justify-content: center;
  }
  .input {
    background: #76a7e380;
    border-radius: 8px;
    text-align: center;
    height: 40px;
    width: 95%;
  }
  .small-input {
    background: #76a7e380;
    border-radius: 8px;
    height: 40px;
    width: 65%;
  }
  .saveButtonDiv {
    position: absolute;
    bottom: 15px;
    right: 32px;
    .saveButton {
      width: 180px;
      border-radius: 12px;
      border: none;
      height: 50px;
      :hover {
        border: 1px solid #94e3a9;
      }
    }
  }
  .errorContainer {
    padding: 5px 0 0 20px;
    .ErrorText {
      color: #fff;
      font-size: 16px;
    }
  }
`;
