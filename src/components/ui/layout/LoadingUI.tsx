import { ImSpinner9 } from "react-icons/im";

export default function LoadingUI() {
    return (
        <main className="w-full h-screen">
            <section className="top-1/2 left-1/2 absolute -translate-1/2">
                <ImSpinner9 size={48} className="text-slate-400 animate-spin" />
            </section>
        </main>
    );
}