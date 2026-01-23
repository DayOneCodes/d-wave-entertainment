import api from "../lib/api";
import axios from "axios";

export const createOrder = async (payload) => {
  const {data} = await api.post("/orders", payload);
  return data;
};

export const initializePayment = async (orderId) => {
  const {data} = await api.post("/payments/initialize", {
    orderId,
    provider: "PAYSTACK"
  });

  return data;
}
