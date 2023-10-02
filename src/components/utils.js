export const showAlert = (message) => {
  if (typeof window !== 'undefined' && window.alert) {
    window.alert(message);
  } else {
    console.error(message);
  }
};
