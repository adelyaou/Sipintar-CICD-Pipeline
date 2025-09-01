export const runtime = "nodejs";
import { Registry, collectDefaultMetrics } from 'prom-client';

const register = new Registry();
collectDefaultMetrics({ register });

export async function GET() {
  return new Response(await register.metrics(), {
    headers: { 'Content-Type': register.contentType },
  });
}
