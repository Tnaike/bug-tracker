import db from '@/lib/db';
import { UserSchema } from '@/lib/validations/auth.schema';
import { hash } from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, name, password, image } = UserSchema.parse(body);

    // Check if email already exist
    const userExistsByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (userExistsByEmail) {
      return NextResponse.json({ user: null, message: 'An account with this email already exists' }, { status: 409 });
    }

    if (password.length < 6) {
      return NextResponse.json({ message: 'Password should be at least 6 characters long' }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: { email, name, password: hashedPassword, image },
    });
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json({ user: rest, message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create user. Please try again later.' }, { status: 500 });
  }
}
