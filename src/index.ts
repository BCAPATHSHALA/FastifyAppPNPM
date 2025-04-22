import Fastify from 'fastify';

const app = Fastify({
  logger: true,
});
const PORT = 3000;

app.get('/', async (request, reply) => {
  reply.type('application/json').code(200);
  return {
    message: 'Hello, Fastify!',
    timestamp: new Date().toISOString(),
  };
});

const startFastify = async () => {
  try {
    await app.listen({
      port: PORT,
    });
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startFastify();
