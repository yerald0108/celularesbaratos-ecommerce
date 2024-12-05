import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="py-16 bg-gray-950 px-12 flex justify-between gap-10 text-slate-200 text-sm flex-wrap mt-10 md:flex-nowrap">
            <Link
                to='/'
                className={`text-2xl font-bold tracking-tighter transition-all text-white flex-1`}
            >
                Celulares Baratos
            </Link>
        </footer>
    );
};