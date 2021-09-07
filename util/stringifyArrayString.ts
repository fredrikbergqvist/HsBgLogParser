export function stringifyArrayString(arr: Array<string> = []): string {
  const stringifiedArray = arr.reduce((prev, curr) => {
    if (prev !== "") {
      prev += ",";
    }
    prev += `"${curr}"`;
    return prev;
  }, "");
  return `[${stringifiedArray}]`;
}
