import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111B21;
  height: 100%;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 12px;
  height: 49px;
  background-color: #111B21;

  div {
    display: flex;
    align-items: center;
    background-color: #202C33;
    gap: 20px;
    border-radius: 5px;
    flex: 1;
    padding: 5px;
  }

  input {
    background-color: transparent;
    outline: none;
    border: none;
    flex: 1;
    color: white;
}
`;

export const List = styled.div``;

export const ChatCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isSelected === true ? "#2A3942" : "#111B21")};
  height: 72px;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  border-bottom: 0.5px solid #202C33;
  border-left: ${props => (props.isSelected === true ? "5px solid #00AF9C" : "none")};

  &:hover {
    background-color: #1A262D;
  }
`;

export const LastMessageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;
