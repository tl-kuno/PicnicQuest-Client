
const isDevelopment = process.env.NODE_ENV === 'development';

export const config = {
    baseURL: isDevelopment 
    ? 'http://localhost:5000'
    : 'https://picnicquest-server.onrender.com',
    
    apiTimeout: isDevelopment ? 5000 : 10000,
};
