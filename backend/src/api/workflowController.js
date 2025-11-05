import { v4 as uuidv4 } from 'uuid';
import { logRequest } from '../utils/helpers.js';

let workflows = [];

/**
 * Get all workflows
 */
export const getWorkflows = (req, res) => {
  logRequest(req);
  res.json({ workflows });
};

/**
 * Create a new workflow
 */
export const createWorkflow = (req, res) => {
  logRequest(req);
  const { name, steps } = req.body;
  if (!name || !steps) {
    return res.status(400).json({ error: 'Name and steps are required' });
  }

  const newWorkflow = { id: uuidv4(), name, steps, createdAt: new Date() };
  workflows.push(newWorkflow);

  res.status(201).json({ message: 'Workflow created', workflow: newWorkflow });
};

/**
 * Update workflow steps
 */
export const updateWorkflow = (req, res) => {
  logRequest(req);
  const { id } = req.params;
  const { steps } = req.body;

  const workflow = workflows.find(wf => wf.id === id);
  if (!workflow) return res.status(404).json({ error: 'Workflow not found' });

  workflow.steps = steps;
  res.json({ message: 'Workflow updated', workflow });
};

/**
 * Delete a workflow
 */
export const deleteWorkflow = (req, res) => {
  logRequest(req);
  const { id } = req.params;
  workflows = workflows.filter(wf => wf.id !== id);
  res.json({ message: 'Workflow deleted' });
};
