import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(50, 50, 50, 0.9); 
  padding: 20px;

  border-radius: 10px;
`;

export const Input = styled.input`
  padding: 12px;
  
  border: 0;
  outline: none;

  background-color: white;
  border-radius: 8px;

  font-size: 14px;
`;

export const Button = styled.button`
  padding: 0 16px;
  
  border: 0;
  outline: none;

  background-color: black;
  color: white;
  font-size: 14px;

  border-radius: 8px;
  cursor: pointer;
`;
