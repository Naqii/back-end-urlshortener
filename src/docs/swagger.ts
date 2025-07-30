import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: 'v0.0.1',
    title: 'Dokumentasi API Url Shortener',
    description: 'Dokumentasi API Url Shortener',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local Server',
    },
    {
      url: 'https://byhq.in',
      description: 'Deploy Server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    schemas: {
      ShortenUrlRequest: {
        originalUrl: 'https://contohurlpanjang/dowo/banget',
        customAlias: 'url pendek',
      },
    },
  },
};

const outputFile = './swagger_output.json';

const endpointsFile = ['../routes/url'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFile, doc);
