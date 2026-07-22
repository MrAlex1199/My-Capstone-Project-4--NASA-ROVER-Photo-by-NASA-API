import app from './app';
import { config } from './config';

app.listen(config.port, () => {
  console.log(`🚀 NASA Rover Explorer Server running on http://localhost:${config.port}`);
});
