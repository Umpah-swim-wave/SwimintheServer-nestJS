export default {
  success: (message: string, data: any) => {
    return {
      success: true,
      message: message,
      data: data,
    };
  },
  fail: (message: string) => {
    return {
      success: false,
      message: message,
    };
  },
};
