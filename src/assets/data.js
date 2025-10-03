export const API_KEY = import.meta.env.VITE_API_KEY;

export const formatViews = (num) => {
  if (!num) return "0";
  if (num >= 1000000) {
    return Math.floor(num / 1000000) + "M";
  } else if (num >= 1000) {
    return Math.floor(num / 1000) + "K";
  } else {
    return num.toString();
  }
};
