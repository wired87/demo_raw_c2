import { NextResponse } from "next/server";

const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;
const HF_MODEL_URL = "https://api-inference.huggingface.co/models/YOUR_MODEL_NAME";

export async function POST(req: Request) {
  try {
    // Parse form data
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ message: "No file uploaded", ok: false }, { status: 400 });
    }

    // Convert file to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Prepare FormData for Hugging Face
    const hfFormData = new FormData();
    hfFormData.append("file", new Blob([buffer]), file.name);

    // Send file to Hugging Face
    const response = await fetch(HF_MODEL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
      },
      body: hfFormData,
    });

    const hfResult = await response.json();

    return NextResponse.json({ result: hfResult, ok: true });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ message: "File upload failed", ok: false }, { status: 500 });
  }
}
