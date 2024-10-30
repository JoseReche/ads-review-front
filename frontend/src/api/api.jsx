import axios from 'axios';

//Criando a conexão do axios para o front conectar com o back
const api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000, //mata a requisição se passar do tempo em mili segundos
})

api.interceptors.request.use(
    (config) =>{
        //Adicionar o token do usuário na requisição
        const token = localStorage.getItem('token');
        if(token){
            //passa o Token no autorization 
            config.headers.Authorization = token;
        }
        return config;
    }
)

//Exportando a conexão para ser utilizada em outros componentes
export default api;