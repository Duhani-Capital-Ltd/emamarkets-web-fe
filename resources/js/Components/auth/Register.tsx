import React, { useState } from 'react';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import DropdownForNumberPhone from './DropdownForNumberPhone';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';

const Register: React.FC = () => {
    const { register } = useAuth();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="px-4 py-6 xl:py-2 text-lg xl:text-sm text-white rounded-full">
                    Register
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full xl:w-1/3">
                <SheetHeader>
                    <SheetTitle className="text-2xl font-bold text-center">Sign up your account</SheetTitle>
                    <div className="flex items-center justify-center gap-3 my-3">
                        <Button variant="ghost" className="rounded-full h-16 w-16 bg-[#F4FAFF]">
                            {/* Facebook SVG */}
                        </Button>
                        <Button variant="ghost" className="rounded-full h-16 w-16 bg-[#F4FAFF]">
                            {/* Apple SVG */}
                        </Button>
                        <Button variant="ghost" className="rounded-full h-16 w-16 bg-[#F4FAFF]">
                            {/* Google SVG */}
                        </Button>
                    </div>
                </SheetHeader>
                <div className="flex items-center gap-3">
                    <hr className="flex-grow border-t border-gray-300" />
                    <p className="text-lg">Or create an account by</p>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Input
                            id="first-name"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="col-span-4 h-14 rounded-2xl"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Input
                            id="last-name"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="col-span-4 h-14 rounded-2xl"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Input
                            id="email-address"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="col-span-4 h-14 rounded-2xl"
                        />
                    </div>
                    <div className="flex items-center border rounded-2xl">
                        <DropdownForNumberPhone />
                        <Input
                            style={{ borderColor: 'inherit', boxShadow: 'none' }}
                            id="number-phone"
                            placeholder="Number phone"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="col-span-4 h-14 rounded-2xl border-none focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>
                <SheetFooter>
                    <Button
                        className="w-full h-12 rounded-full"
                        type="button"
                        onClick={register}
                    >
                        Sign Up
                    </Button>
                </SheetFooter>
                <SheetFooter className="mt-3">
                    <SheetClose asChild>
                        <Button variant="outline" className="w-full h-12 rounded-full" type="button">
                            Login
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default Register;
