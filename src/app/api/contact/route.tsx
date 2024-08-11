
import {NextResponse} from "next/server";
import {EmailTemplate} from "@/components/EmailTemplates/ToMe";
import {Resend} from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: any) {
  console.log("raw", req)
  try {
    const formData = await req.json()
    console.log("server stuff", formData)
    //const res = await sendMail(formData)
    const result = await resend.emails.send({
      from: "BESTBRAIN REQ <noreply@botworld.cloud>",
      to: [process.env.NEXT_PUBLIC_GMAIL],
      subject: formData.subject,
      react: EmailTemplate(formData),
    });
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