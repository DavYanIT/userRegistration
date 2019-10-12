import axios from 'axios';

const baseUrl = 'http://localhost:3070/api'

export function getUsers() {
  return axios.get(`${baseUrl}/users`);
}


export function getUser(userId) {
  return axios.get(`${baseUrl}/users/${userId}`);
}


export function updateUser(user) {
  return axios.put(`${baseUrl}/users`, user);
}


export function createUser(user) {
  return axios.post(`${baseUrl}/users`, user);
}


export function deleteUser(userId) {
  return axios.delete(`${baseUrl}/users/${userId}`);
}
