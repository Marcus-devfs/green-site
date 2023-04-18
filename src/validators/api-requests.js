import { api } from "../api/api"
import { useAppContext } from "../context/AppContext"

export const createUser = async (userData) => {
   try {
      const response = await api.post('/user', { userData })
      return response
   } catch (error) {
      return error
   }
}

export const deleteUser = async (id) => {
   try {
      const response = await api.delete(`/user/${id}`)
      return response
   } catch (error) {
      return error
   }
}

export const editeUser = async ({ id, userData }) => {
   try {
      const response = await api.patch(`/user/${id}`, { userData })
      return response
   } catch (error) {
      return error?.response
   }
}

export const resetPasswordUser = async ({ id, userData }) => {
   try {
      const response = await api.patch(`/user/newpassword/${id}`, { userData })
      return response
   } catch (error) {
      return error?.response
   }
}

export const createCompany = async (companyData) => {
   try {
      const response = await api.post('/company', { companyData })
      return response
   } catch (error) {
      return error
   }
}

export const deleteCompany = async (id) => {
   try {
      const response = await api.delete(`/company/${id}`)
      return response
   } catch (error) {
      return error
   }
}

export const editCompany = async ({ id, companyData }) => {
   try {
      const response = await api.patch(`/company/${id}`, { companyData })

      return response
   } catch (error) {
      return error
   }
}

export const uploadFile = async (data) => {

   const { formData, companyId = null, companyLogo } = data;

   let query = `?companyLogo=${companyLogo}`;

   if (companyId) query += `&companyId=${companyId}`;
   try {
      const response = await api.post(`/upload${query}`, formData, { headers: { 'Authorization': "bearer " + 'token' } })
      return response
   } catch (error) {
      return (error)
   }
}

export const deleteFile = async ({ fileId, companyId }) => {
   try {
      const response = await api.delete(`/upload/${fileId}?companyId=${companyId}`)
      return response
   } catch (error) {
      return error
   }
}

export const getFilesByCompany = async (companyId) => {
   try {
      const response = await api.get(`/files/${companyId}`)
      return response
   } catch (error) {
      return error
   }
}

export const getAllFiles = async () => {
   try {
      const response = await api.get(`/files`)
      return response
   } catch (error) {
      return error
   }
}

export const editPassword = async (id, userData) => {
   try {
      const response = await api.patch(`/user/password/${id}`, { userData })
      return response
   } catch (error) {
      return error
   }
}