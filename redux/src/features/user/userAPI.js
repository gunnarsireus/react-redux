// A mock function to mimic making an async request for data
export function fetchIsIdentified(value = false) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: value }), 500)
  );
}
export function fetchToggleIsIdentified(value = false) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: !value }), 500)
  );
}
