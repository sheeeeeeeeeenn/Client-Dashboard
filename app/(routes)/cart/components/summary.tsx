"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  // State to prevent showing the toast messages multiple times
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    if (!toastShown) {
      if (searchParams.get('success')) {
        toast.success('Payment completed.');
        removeAll();
        setToastShown(true); // Prevent the toast from showing again
      }

      if (searchParams.get('canceled')) {
        toast.error('Something went wrong.');
        setToastShown(true); // Prevent the toast from showing again
      }
    }
    // Ensure toastShown is included in the dependencies array
  }, [searchParams, removeAll, toastShown]);

  const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id)
    });

    window.location = response.data.url;
  }

  return (
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
        Proceed to payment
      </Button>
    </div>
  );
}

export default Summary;
