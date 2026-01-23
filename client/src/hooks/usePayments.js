import { createOrder, initializePayment } from "../services/payment.service";
import { useToast } from "../contexts/ToastContext";

export function usePayments () {
  const {showToast} = useToast();

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

      showToast(message);

      throw error;
    }
  };

  return { proceedToPayment }
}