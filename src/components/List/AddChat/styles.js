import styled from 'styled-components';

export const modaStyle = {
  content: {
    border: 'none',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1050,
    position: 'relative',
    width: '448px',
    height: '188px',
    padding: '1.5rem',
    backgroundColor: '#3B4A54',
    borderRadius: '0.5rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  overlay: {
    zIndex: 1040,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: white;
  background-color: var(--secondary-bg-color);
  padding: 15px;
  border-radius: 5px;
  font: var(--text-md);
  color: var(--color-gray-600);
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  gap: 10px;
`;

export const Button = styled.button`
  font: var(--text-md);
  color: var(--color-gray-600);
  background-color: ${props => (props.buttonType === 'close' ? 'var(--close-color)' : 'var(--unseen-color)')};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.buttonType === 'close' ? 'var(--close-hover-color)' : 'var(--unseen-hover-color)')};
  }
`;