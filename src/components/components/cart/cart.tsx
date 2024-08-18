
import CartModal from "@/components/components/cart/modal";
import axios from "axios";
import {useEffect, useState} from "react";

const postUrl: string = process.env.NODE_ENV === 'production' ? "" : "http://localhost:3000/";

export default async function Cart() {
  const [cart, setCart] = useState<any | null>(null);

  const getCart = async () => {
    try {
      console.log("Fetchoing cart...")
      const res = await axios.get(postUrl);
      if (res.data.cart) {
        const cart = res.data.cart;
        setCart(cart)
      }
      console.log("Finished:", res)
    }catch (e) {
      console.error("Error fetchoing cart...")
    }
  }

  useEffect(() => {
    getCart().then(() => console.log("Cart fetched..."));
  }, []);

  return <CartModal cart={cart} />;

}
