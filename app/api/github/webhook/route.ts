import { createHmac, timingSafeEqual } from "crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

function verifyGithubSignature(payload: string, signature: string | null, secret: string) {
  if (!signature?.startsWith("sha256=")) return false;

  const expected =
    "sha256=" + createHmac("sha256", secret).update(payload).digest("hex");

  try {
    return timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
  } catch {
    return false;
  }
}

/** GitHub webhook — refresh daftar proyek saat repo dibuat/diubah/dihapus */
export async function POST(request: Request) {
  const body = await request.text();
  const event = request.headers.get("x-github-event");
  const secret = process.env.GITHUB_WEBHOOK_SECRET;

  if (secret) {
    const signature = request.headers.get("x-hub-signature-256");
    if (!verifyGithubSignature(body, signature, secret)) {
      return NextResponse.json({ error: "Signature tidak valid" }, { status: 401 });
    }
  }

  if (event === "ping") {
    return NextResponse.json({ ok: true, message: "Webhook aktif" });
  }

  const refreshEvents = new Set(["push", "repository", "public", "release"]);

  if (event && refreshEvents.has(event)) {
    revalidatePath("/api/github/repos");
  }

  return NextResponse.json({ ok: true, revalidated: true, event });
}
