const API_BASE = 'https://randomuser.me/api/?results=50&seed=fm2023';

export const getUsers = async (page) =>
  await fetch(`${API_BASE}&page=${page}`).then(res => res.json());
