import styled from 'styled-components';

export const Container = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  height: auto;
  padding: 3px 20px;
  
  background-color: #1F2623;

  &>div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
  }
`;

export const UserStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

export const Messages = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow: auto;

  padding: 20px 50px;

  background-color: #0F4F4F;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  padding-inline: 15px;
  height: auto;

  background-color: #1F2623;
`;

export const Input = styled.input`
  flex: 1;

  padding: 20px;

  border: 0;
  outline: none;

  background-color: transparent;
  color: var(--tertiary-color);

  font-size: 16px;
`;