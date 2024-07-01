// src/services/NoteService.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // URL của backend
  headers: {
    'Content-type': 'application/json',
  },
});

export default {
  getAll() {
    return apiClient.get('/notes');
  },

  get(id) {
    return apiClient.get(`/notes/${id}`);
  },

  create(data) {
    return apiClient.post('/notes', data);
  },

  update(id, data) {
    return apiClient.put(`/notes/${id}`, data);
  },

  delete(id) {
    return apiClient.delete(`/notes/${id}`);
  },
};
