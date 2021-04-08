export default {
  success: (message, data = null) => {
    return { success: true, message, data };
  },

  fail: (message) => {
    return { success: false, message };
  },
};
