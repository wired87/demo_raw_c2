

import {NextResponse} from "next/server";
import {EmailTemplate} from "@/components/EmailTemplates/ToMe";
import {Resend} from "resend";
// Shopify API URL
const shopifyUrl = `https://${x}:${PASSWORD}@${SHOP_NAME}.myshopify.com/admin/api/${API_VERSION}/products.json`;

// Define the product data
const productData = {
  product: {
    title: "Sample Product",
    body_html: "<strong>Good product!</strong>",
    vendor: "Your Vendor Name",
    product_type: "Your Product Type",
    tags: ["tag1", "tag2"],
    variants: [
      {
        option1: "Default Title",
        price: "19.99",
        sku: "123"
      }
    ]
  }
};


export async function POST(req: any) {
  const { SHOPIFY_API_KEY, } = process.env;
  try {
    const formData = await req.json()
    console.log("server stuff", formData)
    //const res = await sendMail(formData)

    console.log("res", result)

    return NextResponse.json(
      {
        result: result,
        ok: true
      }
    )
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { message: 'Something went wrong', ok: false },
      { status: 500 }
    )
  }
}