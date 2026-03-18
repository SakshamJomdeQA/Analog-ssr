import { defineEventHandler } from 'h3';

export default defineEventHandler(() => ({
  time: new Date().toISOString(),
  type: 'server',
}));
