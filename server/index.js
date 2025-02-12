import path from "node:path";
import "dotenv/config";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import bcrypt from "bcrypt";
import { simpleGit } from 'simple-git';
const PASSWORD_HASH = process.env.ENCRYPTED_PASSWORD;
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const fastify = Fastify();

fastify.register(fastifyStatic, {
    root: path.join(import.meta.dirname, 'public'),
    prefix: '/public/'
})
fastify.get("updater", function (req, reply) {
    reply.sendFile('updater.html')
  })
fastify.post("/update", async function (request, reply) {
    bcrypt.compare(request.body.password, PASSWORD_HASH, (err, result) => {
        if (err) {
          console.error(err);
          return reply.send("error :(")
        }
        if (result) {
          simpleGit().pull();
          return reply.send("successfully updated :3");
        } else {
          return reply.send("wrong password :(")
        }
    });
})

fastify.listen({
    port: PORT,
    host: HOST
}, function (error, address) {
    if (error) {
        fastify.log.error(error);
        process.exit(1);
    }
})
