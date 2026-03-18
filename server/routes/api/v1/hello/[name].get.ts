import { defineEventHandler, getRouterParam } from 'h3';

export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name');
  return { message: `Hello, ${name}!` };
});
