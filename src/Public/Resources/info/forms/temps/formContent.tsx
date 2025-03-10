import { Link } from "react-router-dom";
import ScrollNav from "./scrollNav";

export function FormContent({ beltData, nextBelt, prevBelt, nextFormLink, prevFormLink }: { beltData: any, nextBelt: any, prevBelt: any, nextFormLink: string, prevFormLink: string }) {
    return (
        <section className="flex flex-col items-center justify-start gap-12 py-20 px-8 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            {/* Back to Resources Link */}
            <Link 
                to="/resources/info/forms" 
                className="text-blue-600 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
            >
                <h1 className="text-2xl font-semibold tracking-wide">
                    ← Back to Forms
                </h1>
            </Link>

            {/* Page Title */}
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
                    {beltData?.form}
                </h1>
                <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
                    {beltData?.korean}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Rank form for {beltData?.kup} ({beltData.name})
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Testing to {nextBelt?.kup} ({nextBelt?.name})
                </p>

                {/* Belt Image */}
                <img 
                    src={beltData?.image} 
                    alt="12th Kup Belt" 
                    className="h-auto mx-auto mt-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 p-4"
                />
            </div>

            {/* Navigation Links */}
            <div className="flex justify-between w-full max-w-3xl">
                <div className="flex-1 text-left">
                    {prevFormLink && prevBelt && (
                        <Link 
                            to={prevFormLink} 
                            className="text-blue-600 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                        >
                            {/* Previous Form Link */}
                            <h2 className="text-xl font-semibold tracking-wide">
                                ← Previous Form ({prevBelt?.name})
                            </h2>
                        </Link>
                    )}
                </div>
                <div className="flex-1 text-right">
                    {nextFormLink && nextBelt && (
                        <Link 
                            to={nextFormLink} 
                            className="text-blue-600 dark:text-blue-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                        >
                            <h2 className="text-xl font-semibold tracking-wide">
                                Next Form ({nextBelt?.name}) →
                            </h2>
                        </Link>
                    )}
                </div>
            </div>

            {/* Scroll Navigation */}
            <ScrollNav 
                sections={[
                    { id: 'scrollToTop', label: 'Top' },
                    { id: 'scrollToBottom', label: 'Bottom' },
                ]} 
            />
        </section>
    )
}