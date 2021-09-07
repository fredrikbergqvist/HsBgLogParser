export function stringifyBool(key: string, value: boolean = false): string {
  if (!key) {
    return "";
  }
  return `${key}: ${value}`;
}
