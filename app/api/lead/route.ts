import { NextResponse } from 'next/server'

// Demo endpoint so the enquiry form works in preview.
// For production, point `leadEndpoint` in lib/site-config.ts to your PHP handler
// (see backend/lead.php) or forward the payload from here to your PHP/MySQL API.
export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body?.name || !body?.phone) {
      return NextResponse.json(
        { ok: false, error: 'Name and phone are required.' },
        { status: 400 },
      )
    }

    // TODO: persist the lead (e.g. forward to your PHP/MySQL backend, CRM, or email).
    console.log('[v0] New lead enquiry:', body)

    return NextResponse.json({ ok: true, message: 'Lead received.' })
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }
}
