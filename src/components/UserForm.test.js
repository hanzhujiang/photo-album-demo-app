import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserForm from './UserForm';

jest.mock('axios');

describe('UserForm Component', () => {
  it('submit user info', async () => {

    // Mocking axios.post
    axios.post.mockResolvedValue({ data: {"name":"Alan","email":"Alan@alan.com","phone":"12345"} });

    render(<UserForm />);
    
    // Input manipulation
    fireEvent.change(screen.getByTestId('user-name'), {
      target: { value: 'Alan' },
    });
    fireEvent.change(screen.getByTestId('user-email'), {
      target: { value: 'Alan@example.com' },
    });
    fireEvent.change(screen.getByTestId('user-phone'), {
      target: { value: '12345' },
    });

    // Form submission
    fireEvent.click(screen.getByText('Submit'));

    // Waiting for axios.post to be called
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users', {
        name: 'Alan',
        email: 'Alan@example.com',
        phone: '12345'
      });
    });
  });
});