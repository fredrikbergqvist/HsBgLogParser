export function stringifyString(key: string, value: string = ""): string {
  if (!key) {
    return "";
  }
  return `${key}: "${value}"`;
}
