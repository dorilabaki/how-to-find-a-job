import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface Lead {
  email: string;
  createdAt: string;
}

const leadsPath = path.join(process.cwd(), 'lib', 'leads.json');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = (body.email ?? '').toString().trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    let leads: Lead[] = [];
    try {
      const data = await fs.readFile(leadsPath, 'utf-8');
      leads = JSON.parse(data);
    } catch {
      leads = [];
    }

    if (leads.some((lead) => lead.email === email)) {
      return NextResponse.json(
        { error: "You're already on the list! Check your inbox." },
        { status: 409 },
      );
    }

    leads.push({ email, createdAt: new Date().toISOString() });
    await fs.writeFile(leadsPath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 },
    );
  }
}
