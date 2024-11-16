import styled from 'styled-components';

export const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #111B21;
  height: 59px;
  padding: 10px 16px;

  span {
    font-size: 22px;
    font-weight: 500;
  }
`;

export const Messages = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #0F4F4F;
  gap: 10px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  gap: 5px;
  height: 67px;
  background-color: #111B21;
`;

export const TextArea = styled.textarea`
  flex: 1;
  border: 0;
  outline: none;
  padding: 8px;
  background-color: transparent;
  color: var(--tertiary-color);
  font-size: 16px;
  resize: none;
  min-height: 40px;
  overflow-y: auto;
`;