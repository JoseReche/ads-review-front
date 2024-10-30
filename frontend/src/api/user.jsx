import api from "./api";
//User sera um objeto que será igual a {"name":"","email":"","senha":""}
export const createUser = async(user) => {
    const response = await api.post('/api/v1/user',user)
    return response.data
}
export const loginUser = async(email,senha) => {
    const response = await api.post('/api/v1/login',{email,senha})
    return response.data
}
export const getContext = async() => {
    const response = await api.get('/api/v1/user/context') 
    return response.data
}
export const udateUser = async(id,user) => {
    const response = await api.put(`/api/v1/user/${id}`,user) 
    return response.data
}
export const deleteUser = async(id) => { 
    return await api.delete(`/api/v1/user/${id}`)
}