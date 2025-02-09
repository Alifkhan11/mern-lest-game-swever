import { Server } from 'http'
import app from './app'
import config from './app/config'
import mongoose from 'mongoose'

const port = config.PORT || 5001
let server:Server


async function main(){
    try {
        await mongoose.connect(config.DD_URL as string)

        server = app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    } catch (error) {
        
    }
}



main();
process.on('unhandledRejection', () => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
