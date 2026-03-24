import { createOrder, initializePayment } from "../services/payment.service.js";
import { useToast } from "../contexts/ToastContext.jsx";


export function usePayments () {

  const proceedToPayment = async (orderDraft) => {
    try {
      const order = await createOrder(orderDraft);

      if (!order?.orderId){
        throw new Error ("Order creation failed");
      }

      console.log(order);

      const payment = await initializePayment(order.orderId);

      if (!payment?.authorizationUrl){
        throw new Error("Payment Initialization failed");
      }

      window.location.href = payment.authorizationUrl;
    }
    catch (error){
      console.log("Proceed to payment failed:", error)

      const message = error.response?.data?.message || 
      error.message ||
      "Unable to proceed to payment"

      throw error;
    }
  };

  return { proceedToPayment }
}