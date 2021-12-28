import axiosInstance from '../axios';

export const getClient = (token, id) => axiosInstance.get(`/api/clients/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const addClient = (client, token) => axiosInstance.post(`/api/clients/create`, {
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

export const updateClient = (client, token) => axiosInstance.patch(`/api/clients/${client.id}`, {
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

export const getClients = (token) => axiosInstance.get(`/api/clients`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});