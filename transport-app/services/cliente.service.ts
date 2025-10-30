import { apiClient } from '@/lib/api-client';

export interface ClienteDTO {
  id?: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  senha?: string;
  matricula?: string;
  instituicao?: string;
  curso?: string;
}

export const clienteService = {
  listarTodos: async (): Promise<ClienteDTO[]> => {
    const response = await apiClient.get('/clientes');
    return response.data;
  },

  buscarPorId: async (id: number): Promise<ClienteDTO> => {
    const response = await apiClient.get(`/clientes/${id}`);
    return response.data;
  },

  criar: async (cliente: ClienteDTO): Promise<ClienteDTO> => {
    const response = await apiClient.post('/clientes', cliente);
    return response.data;
  },

  atualizar: async (id: number, cliente: ClienteDTO): Promise<ClienteDTO> => {
    const response = await apiClient.put(`/clientes/${id}`, cliente);
    return response.data;
  },

  deletar: async (id: number): Promise<void> => {
    await apiClient.delete(`/clientes/${id}`);
  },
};

