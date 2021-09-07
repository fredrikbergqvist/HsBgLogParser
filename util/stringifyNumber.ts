export function stringifyNumber(key: string, value: number = -1): string {
  if (!key) {
    return "";
  }
  return `${key}: ${value}`;
}
