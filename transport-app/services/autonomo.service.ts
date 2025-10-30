import { apiClient } from '@/lib/api-client';

export interface AutonomoDTO {
  id?: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  senha?: string;
  cnh: string;
  categoriaCnh: string;
  ear?: boolean;
}

export const autonomoService = {
  listarTodos: async (): Promise<AutonomoDTO[]> => {
    const response = await apiClient.get('/autonomos');
    return response.data;
  },

  buscarPorId: async (id: number): Promise<AutonomoDTO> => {
    const response = await apiClient.get(`/autonomos/${id}`);
    return response.data;
  },

  criar: async (autonomo: AutonomoDTO): Promise<AutonomoDTO> => {
    const response = await apiClient.post('/autonomos', autonomo);
    return response.data;
  },

  atualizar: async (id: number, autonomo: AutonomoDTO): Promise<AutonomoDTO> => {
    const response = await apiClient.put(`/autonomos/${id}`, autonomo);
    return response.data;
  },

  deletar: async (id: number): Promise<void> => {
    await apiClient.delete(`/autonomos/${id}`);
  },
};

