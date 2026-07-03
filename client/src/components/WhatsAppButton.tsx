import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  // Apna WhatsApp number yahan daalo
  const phone = "919557220763";

  const openWhatsApp = () => {
    const message =
      "Hello VRS Connect Solution, I would like to know more about your BPO services.";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-6 py-4 text-white shadow-2xl hover:bg-green-600 hover:scale-105 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />

      <span className="hidden md:block font-semibold">
        Chat on WhatsApp
      </span>
    </button>
  );
}

export default WhatsAppButton;