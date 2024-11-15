import styled from 'styled-components'
import '../../global.css'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  flex: 1;
  padding: 10px;

  width: 100%;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;

export const SearchBar = styled.input`
  flex: 1;

  border: 0;
  border-radius: 8px;

  background-color: var(--primary-color);
  color: var(--tertiary-color);
  outline: none;

  padding: 10px;

  font-size: 14px;
`;

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  overflow: auto;

  height: 100%;
`;