import configuration from './config/configuration';
import server from './httpapp';

process.title = 'hacker-news-node';

configuration.init().then(() => {
  server.start(3000, 'build/public/');
});

