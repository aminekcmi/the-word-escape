import { SignInButton } from "@clerk/nextjs";
import DarkModeButton from "../themes/DarkModeButton";

export default function UnauthenticatedUI() {
    return (
        <>
            <header className="p-3 w-full">
                <nav className="flex justify-between items-center">
                    <span className="w-[24px] h-[24px]"></span>
                    <h1 className="font-bold text-slate-950 dark:text-slate-50 text-lg text-center">The Word Escape</h1>
                    <DarkModeButton />
                </nav>
            </header>

            <main>
                <section className="top-1/2 left-1/2 absolute bg-slate-100 dark:bg-slate-900 shadow-lg p-2 border-2 border-slate-300 dark:border-slate-700 rounded-lg w-11/12 max-w-96 text-center -translate-1/2">
                    <h2 className="font-bold text-slate-950 dark:text-slate-50 text-sm 5xs:text-lg">Welcome to The Word Escape</h2>
                    <p className="mt-2 text-slate-700 dark:text-slate-400 text-xs 5xs:text-sm">Continue by clicking the button below</p>

                    <SignInButton>
                    <button className="bg-slate-700 hover:bg-slate-800 shadow-lg mt-5 p-2 rounded-md font-bold text-slate-50 text-xs 5xs:text-sm hover:scale-105 transition-transform hover:cursor-pointer">Continue with your account</button>
                    </SignInButton>
                </section>
            </main>
        </>
    );
}