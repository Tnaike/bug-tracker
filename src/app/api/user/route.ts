import prisma from '@/utils/db';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password, image } = body;

    // Check if email already exist
    const userExistsByEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (userExistsByEmail) {
      return NextResponse.json({ user: null, message: 'An account with this email already exists' }, { status: 409 });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: { email, name, password: hashedPassword, image },
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({ user: rest, message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating user', error);
    return NextResponse.json({ message: 'Failed to create user. Please try again later.' }, { status: 500 });
  }
}
