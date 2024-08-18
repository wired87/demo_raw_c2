import {NextResponse} from "next/server";
import {Resend} from "resend";
import {cookies} from "next/headers";
import {getCart} from "@/lib/shopify";

export async function POST(req: any) {
  console.log("raw", req)
  try {
    const cartId = cookies().get('cartId')?.value;
    let cart;

    if (cartId) {
      cart = await getCart(cartId);
    }

    return NextResponse.json(
      {
        cart: cart,
        ok: true
      }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      {
        cart: null,
        ok: false
      }
    )
  }
}