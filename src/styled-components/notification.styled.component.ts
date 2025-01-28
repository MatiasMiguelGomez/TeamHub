import styled from 'styled-components';

export const ButtonFav = styled.div`
  position: relative;
`;

export const Notification = styled.div`
  position: absolute;
  right: 3px;
  top: 5px;
  z-index: 2;
  border-radius: 100%;
  background-color: red;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    font-size: 10px;
    color: white;
    font-weight: bold;
  }
`;
