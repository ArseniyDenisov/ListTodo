import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

const token = localStorage.getItem('token');

const swaggerOptions = {
  url: 'https://todo-list.edu-playground.ru/api/v1/auth/signin',
  dom_id: '#swagger-ui',
  presets: [SwaggerUI.presets.apis],
  requestInterceptor: (req) => {
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  }
};

SwaggerUI(swaggerOptions);
