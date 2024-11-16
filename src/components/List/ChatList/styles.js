import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-color);
  height: 100%;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 12px;
  height: 49px;
  background-color: var(--bg-color);

  div {
    display: flex;
    align-items: center;
    background-color: var(--secondary-bg-color);
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
    color: var(--color-gray-500);
    font: var(--text-sm);
}
`;

export const List = styled.div``;

export const ChatCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isSelected === true ? "var(--selected-color)" : "var(--bg-color)")};
  height: 72px;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  border-bottom: 0.5px solid #202C33;
  border-left: ${props => (props.isSelected === true ? "5px solid #00AF9C" : "none")};

  &:hover {
    background-color: ${props => (props.isSelected === true ? "var(--selected-color)" : "var(--hover-color)")};
  }
`;

export const LastMessageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  span, p {
    font: var(--text-sm);
  }
`;
