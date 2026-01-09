import { useNavigate } from "react-router-dom";

export default function OrderSummary({
  subtotal,
  serviceFees,
  tax,
  total,
  ticketQuantities,
  handleOrderPreparation,
  handleProceedToPayment,
}) {
  const navigate = useNavigate();

  const styles = {
    orderSummaryCard:
      "sticky top-24 bg-surface-dark border border-surface-highlight rounded-xl p-6 shadow-xl",
    buttonPrimary:
      "w-full bg-green-700 hover:bg-green-700/90 text-white text-lg font-bold py-4 px-6 rounded-lg transition-all shadow-[0_0_20px_rgba(40,24,40,0.4)] hover:shadow-[0_0_30px_rgba(40,24,40,0.6)] flex items-center justify-center gap-2",
    buttonSecondary:
      "w-full bg-transparent hover:bg-surface-highlight text-red-500 font-medium py-3 px-6 rounded-lg transition-colors border border-transparent hover:border-surface-highlight",
  };

  return (
    <div className="flex flex-1 flex-col min-w-[320px]">
      <div className={styles.orderSummaryCard}>
        <h3 className="text-primary text-xl font-bold mb-6">
          Order Summary
        </h3>

        <div className="flex flex-col gap-3 mb-6">
          <div className="flex justify-between items-center text-text-secondary">
            <span>Subtotal</span>
            <span className="text-primary font-medium">£{subtotal}</span>
          </div>

          <div className="flex justify-between items-center text-text-secondary">
            <span>Service Fees</span>
            <span className="text-primary font-medium">£{serviceFees}</span>
          </div>

          <div className="flex justify-between items-center text-text-secondary">
            <span>Tax</span>
            <span className="text-primary font-medium">£{tax}</span>
          </div>
        </div>

        <div className="h-px bg-surface-highlight mb-6 w-full"></div>

        <div className="flex justify-between items-end mb-8">
          <div className="flex flex-col">
            <span className="text-text-secondary text-sm">
              Total Amount
            </span>
            <span className="text-xs text-text-secondary">GBP</span>
          </div>
          <span className="text-primary text-3xl font-black tracking-tight">
            ${total}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <button
            className={styles.buttonPrimary}
            onClick={() => {
              if (handleOrderPreparation().length === 0) {
                console.log("Unable to proceed. No Item Selected!");
              } else {
                console.log(handleOrderPreparation());
                console.log(handleProceedToPayment());
              }
            }}
          >
            Continue to Payment
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </button>

          <button
            className={styles.buttonSecondary}
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        </div>

        <div className="mt-6 flex items-start gap-2 text-xs text-text-secondary/60">
          <span className="material-symbols-outlined text-[16px]">
            lock
          </span>
          <p>
            Secure checkout powered by Neon Pay. By continuing, you
            agree to the Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
}
