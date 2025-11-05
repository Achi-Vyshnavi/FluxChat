import express from 'express';
import cors from 'cors';
import {
  getWorkflows,
  createWorkflow,
  updateWorkflow,
  deleteWorkflow
} from './api/workflowController.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.get('/workflows', getWorkflows);
app.post('/workflows', createWorkflow);
app.put('/workflows/:id', updateWorkflow);
app.delete('/workflows/:id', deleteWorkflow);

// Start server
app.listen(PORT, () => {
  console.log(`FluxChat backend running at http://localhost:${PORT}`);
});
