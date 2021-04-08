export default {
  success: (message, data) => {
    return { success: true, message, data };
  },

  fail: (message) => {
    return { success: false, message };
  },
};
