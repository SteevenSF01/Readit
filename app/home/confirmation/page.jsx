'use client';

import { useSelector } from 'react-redux';

const OrderConfirmationPage = () => {
  const theme = useSelector((state) => state.theme.darkMode);

  return (
    <section
      className={`${
        theme ? 'bg-black text-white' : 'bg-white text-black'
      } h-screen flex flex-col items-center justify-center`}
    >
      <h1 className="text-3xl font-bold mb-8">
        Thank you for your order!
      </h1>
      <p className="text-lg decoration-[#E00404] underline-offset-4 underline ">
        Your order has been successfully placed. We'll email you the details shortly.
      </p>
    </section>
  );
};

export default OrderConfirmationPage;
