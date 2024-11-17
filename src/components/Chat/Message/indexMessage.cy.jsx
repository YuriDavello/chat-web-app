import Message from './index'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

describe('Message Status', () => {
  const mockStore = configureStore({
    reducer: {
      authenticate: () => ({
        currentUser: { id: 'testUserId' }
      })
    }
  });

  it('displays single tick (BiCheck) when message is sent', () => {
    const sentMessage = {
      content: 'Hello',
      createdAt: '2024-01-20T10:30:00',
      sender: 'testUserId',
      status: 'sent'
    };

    cy.mount(
      <Provider store={mockStore}>
        <Message message={sentMessage} />
      </Provider>
    );
    cy.get('svg')
      .should('exist')
      .and('have.attr', 'color', '#888')
      .and('have.attr', 'width', '22')
    cy.get('[data-testid="bi-check"]').should('exist')
  });

  it('displays grey double tick (BiCheckDouble) when message is delivered', () => {
    const deliveredMessage = {
      content: 'Hello',
      createdAt: '2024-01-20T10:30:00',
      sender: 'testUserId',
      status: 'delivered'
    };

    cy.mount(
      <Provider store={mockStore}>
        <Message message={deliveredMessage} />
      </Provider>
    );
    cy.get('svg')
      .should('exist')
      .and('have.attr', 'color', '#888')
      .and('have.attr', 'width', '22')
    cy.get('[data-testid="bi-check-double"]').should('exist')
  });

  it('displays green double tick (BiCheckDouble) when message is read', () => {
    const readMessage = {
      content: 'Hello',
      createdAt: '2024-01-20T10:30:00',
      sender: 'testUserId',
      status: 'read'
    };

    cy.mount(
      <Provider store={mockStore}>
        <Message message={readMessage} />
      </Provider>
    );
    cy.get('svg')
      .should('exist')
      .and('have.attr', 'color', '#25D366')
      .and('have.attr', 'width', '22')
    cy.get('[data-testid="bi-check-double"]').should('exist')
  });
});
