export function normalizeIP(ip: string): string {
  if (ip && ip.includes(".") && ip.includes(":")) {
    return ip.split(":")[0];
  }
  return ip;
}
