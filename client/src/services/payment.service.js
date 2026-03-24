import api from "../lib/api";
import { httpRequest } from "../api/httpClient.js";

export const createOrder = (payload) => {
  const data = httpRequest("/orders", payload);
  return data;
};

export const initializePayment = (orderId) => {
  const data = httpRequest("/payments/initialize", {
    orderId,
    provider: "PAYSTACK"
  });

  return data;
}
