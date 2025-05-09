export const GetItens = async () => {
  try {
    const res = localStorage.getItem("cart@bikestore");
    return res ? JSON.parse(res) : [];
  } catch (error) {}
};
