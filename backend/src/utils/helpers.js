export const logRequest = (req) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
};

export const validateSteps = (steps) => {
  if (!Array.isArray(steps) || steps.length === 0) {
    throw new Error('Workflow steps must be a non-empty array');
  }
};
