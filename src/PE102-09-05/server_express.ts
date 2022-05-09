import * as express from 'express';
import {join} from 'path';
import { cmd } from './cmd';

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.get('', (_, res) => {
    res.send('<h1>App exec cmd</h1>');
  });
  
  app.get('/execmd', (req, res) => {
    if(!req.query.cmd) {
      res.send({
        error: 'A Command has to be provided',
      });
    } else {
      cmd(req.query.cmd as string, req.query.args as string, (err, data) => {
        if(err) {
          res.send({
            error: 'Command not found',
          });
        } else if(!data!.success) {
          res.send({
            error: 'Cannot execute the command',
          });
        } else {
          res.send({
            output: data!.command,
          });
        }
      });
    }
  });
  
  app.get('*', (_, res) => {
    res.send('<h1>404</h1>');
  });
  
  app.listen(3000, () => {
    console.log('Server is up on port 3000');
  });