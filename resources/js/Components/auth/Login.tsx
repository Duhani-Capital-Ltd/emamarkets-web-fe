import React, { useState } from 'react';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import Register from './Register';

interface PageProps {
    apiKey: string;
    loginUrl: string;
    loginVersion: string;
}

export const Login: React.FC = () => {
    const { username, setUsername, password, setPassword, errorMessage, login } = useAuth();
    const [localErrorMessage, setLocalErrorMessage] = useState<string>('');

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="rounded-full w-full xl:w-fit py-6 xl:py-0 border xl:border-none text-lg xl:text-sm"
                    onClick={() => setLocalErrorMessage('')}
                >
                    Login
                </Button>
            </SheetTrigger>
            <SheetContent className="w-full xl:w-1/3">
                <SheetHeader>
                    <SheetTitle className="text-2xl font-bold text-center">Masuk dengan</SheetTitle>
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
                    <p className="text-lg">atau melalui</p>
                    <hr className="flex-grow border-t border-gray-300" />
                </div>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Input
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="col-span-4 h-14 rounded-2xl"
                        />
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="col-span-4 h-14 rounded-2xl"
                        />
                    </div>
                    {(localErrorMessage || errorMessage) && (
                        <p className="text-red-500">{localErrorMessage || errorMessage}</p>
                    )}
                    <p>Forgot Password?</p>
                </div>
                <SheetFooter>
                    <Button
                        className="w-full h-12 rounded-full"
                        type="button"
                        onClick={async () => {
                            try {
                                await login();
                                setLocalErrorMessage(''); // Clear any local error if login is successful
                            } catch (err) {
                                setLocalErrorMessage('Failed to log in. Please try again.');
                            }
                        }}
                    >
                        Login
                    </Button>
                </SheetFooter>
                <SheetFooter className="mt-3">
                    <SheetClose asChild>
                        <Button variant="outline" className="w-full h-12 rounded-full" type="button">
                            Sign Up
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
