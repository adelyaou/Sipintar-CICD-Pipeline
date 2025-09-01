declare module 'prom-client' {
  export class Registry {
    metrics(): Promise<string>;
    contentType: string;
  }

  export function collectDefaultMetrics(opts: { register: Registry }): void;
}
