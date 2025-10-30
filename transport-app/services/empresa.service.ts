import { apiClient } from '@/lib/api-client';

export interface EmpresaDTO {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  senha?: string;
  cnpj: string;
  razaoSocial: string;
}

export const empresaService = {
  listarTodos: async (): Promise<EmpresaDTO[]> => {
    const response = await apiClient.get('/empresas');
    return response.data;
  },

  buscarPorId: async (id: number): Promise<EmpresaDTO> => {
    const response = await apiClient.get(`/empresas/${id}`);
    return response.data;
  },

  criar: async (empresa: EmpresaDTO): Promise<EmpresaDTO> => {
    const response = await apiClient.post('/empresas', empresa);
    return response.data;
  },

  atualizar: async (id: number, empresa: EmpresaDTO): Promise<EmpresaDTO> => {
    const response = await apiClient.put(`/empresas/${id}`, empresa);
    return response.data;
  },

  deletar: async (id: number): Promise<void> => {
    await apiClient.delete(`/empresas/${id}`);
  },
};

