import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const FormItem = styled.div`
width: 210px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
`;


const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;


const UserForm = () => {
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        userData
      );
      console.log('Response from server:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <h2>Create a New User</h2>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <label>Name:</label>
          <Input
            type="text"
            name="name"
            data-testid="user-name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </FormItem>
        <FormItem>
          <label>Email:</label>
          <Input
            type="email"
            name="email"
            data-testid="user-email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </FormItem>
        <FormItem>
          <label>Phone:</label>
          <Input
            type="tel"
            name="phone"
            data-testid="user-phone"
            value={userData.phone}
            onChange={handleChange}
            required
          />
        </FormItem>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default UserForm;