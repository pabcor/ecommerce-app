export function getItem<T>(name: string): T | null {
  const item = localStorage.getItem(name);

  if (!item) {
    return null;
  }

  return JSON.parse(item);
}

export function setItem<T>(name: string, item: T) {
  const json = JSON.stringify(item);
  localStorage.setItem(name, json);
}
