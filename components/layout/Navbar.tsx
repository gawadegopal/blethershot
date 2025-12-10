import { ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { FaHouseChimney } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import Sidedrawer from './Sidedrawer';
import { currentUser } from '@clerk/nextjs/server';

export default async function Navbar() {
    const user = await currentUser();

    return (
        <div className="h-20 flex items-center justify-between text-black">
            <Link href={'/'} className='font-bold text-2xl cursor-pointer'>
                Blethershot
            </Link>

            {user &&
                <div className="w-[50%] hidden md:flex text-md items-center justify-between">
                    <div className="flex gap-4 items-center">
                        <Link href="/" className="flex items-center justify-start gap-1">
                            <FaHouseChimney />
                            <span>Home</span>
                        </Link>
                    </div>
                </div>
            }

            <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-6">
                <ClerkLoading>
                    <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-solid border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
                </ClerkLoading>

                <SignedIn>
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <SignInButton>
                        <div className="flex items-center justify-center text-lg gap-2 cursor-pointer">
                            <MdAccountCircle className="text-2xl" />
                            <span>Login/Register</span>
                        </div>
                    </SignInButton>
                </SignedOut>
            </div>

            {user && <Sidedrawer />}
        </div>
    )
}
