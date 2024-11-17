import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.isSeen === false
      ? "var(--unseen-color)"
      : props.isSelected
        ? "var(--selected-color)"
        : "var(--bg-color)"};
  height: 80px;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  border-bottom: 0.5px solid #202C33;
  border-left: ${props =>
    props.status === 'online'
      ? "5px solid var(--online-color)"
      : "5px solid var(--offline-color)"};

  >div {
    width: 100%;
    max-width: 400px;

    span {
      font: var(--text-info);
      color: var(--color-gray-500);
    }
  }

  &:hover {
    background-color: ${props =>
    props.isSeen === false
      ? "var(--unseen-hover-color)"
      : props.isSelected
        ? "var(--selected-color)"
        : "var(--hover-color)"};
  }
`;

export const LastMessageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  span, p {
    font: var(--text-sm);
  }

  p {
    white-space: nowrap;       
    overflow: hidden;         
    text-overflow: ellipsis;
  }
`;