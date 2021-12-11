import Axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

export const CheckToken = (token) => Axios.get(`${baseUrl}/api/checktoken`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const createUser = (user, token) => Axios.post(
  `${baseUrl}/api/users/create`,
  {
    username: user.username,
    status: user.status,
    profil: user.profil,
    password: user.password,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);
export const Login = (user) => Axios.post(`${baseUrl}/api/login`, {
  username: user.username,
  password: user.password,
});

export const deleteUser = (token, id) => Axios.delete(`${baseUrl}/api/users/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const UpdateUser = (user, token) => Axios.patch(
  `${baseUrl}/api/users/${user.id}`,
  {
    status: user.status,
    profil: user.profil,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);
export const getAllUsers = (token) => Axios.get(`${baseUrl}/api/users`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getClientData = (token, id) => Axios.get(`${baseUrl}/api/clients/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const AddClient = (token, client) => Axios.post(
  `${baseUrl}/api/clients/create`,
  {
    nom: client.nom,
    nomArabe: client.nomArabe,
    adresse: client.adresse,
    adresseArabe: client.adresseArabe,
    cin: client.cin,
    email: client.email,
    code: client.code,
    telephone1: client.telephone1,
    telephone2: client.telephone2,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);
export const UpdateClient = (token, client) => Axios.patch(
  `${baseUrl}/api/clients/${client.id}`,
  {
    nom: client.nom,
    nomArabe: client.nomArabe,
    adresse: client.adresse,
    adresseArabe: client.adresseArabe,
    cin: client.cin,
    email: client.email,
    code: client.code,
    telephone1: client.telephone1,
    telephone2: client.telephone2,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);
export const getAllClients = (token) => Axios.get(`${baseUrl}/api/clients`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getHistoryMonths = (token) => Axios.get(`${baseUrl}/api/history/months`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getHistoryByMonth = (token, month, year) => Axios.get(`${baseUrl}/api/history/${month}/${year}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const createProject = (token, project) => Axios.post(`${baseUrl}/api/projects/create`, project, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const UpdateProject = (token, project) => Axios.patch(`${baseUrl}/api/projects/${project.id}`, project, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getProject = (token, id) => Axios.get(`${baseUrl}/api/projects/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getAllProjects = (token) => Axios.get(`${baseUrl}/api/projects`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getAllProviders = (token) => Axios.get(`${baseUrl}/api/providers`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const AddProvider = (token, provider) => Axios.post(`${baseUrl}/api/providers/create`, provider, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const UpdateProvider = (token, provider) => Axios.patch(`${baseUrl}/api/providers/${provider.id}`, provider, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getProvider = (token, id) => Axios.get(`${baseUrl}/api/providers/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getAppartements = (token, projectID) => Axios.get(`${baseUrl}/api/appartements/project/${projectID}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const addAppartment = (token, appartement) => Axios.post(`${baseUrl}/api/appartements/create`, appartement, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
export const UpdateAppartement = (token, appartement, id) => Axios.patch(`${baseUrl}/api/appartements/${id}`, appartement, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
