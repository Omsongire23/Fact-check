import Link from "next/link";

export default function AnalysisDashboard() {
    return (
        <div className="layout-content-container flex flex-col max-w-[1024px] mx-auto gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Article Header Section */}
            <div className="bg-surface-dark border-2 border-wood-medium rounded-xl p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-wood-pattern opacity-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 p-4 opacity-5 text-[12rem] leading-none font-serif text-primary select-none pointer-events-none transition-transform duration-700 group-hover:rotate-12">♔</div>
                <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-primary/80 text-sm font-display uppercase tracking-wider">
                        <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-lg">public</span> TechDaily.com</span>
                        <span className="w-1 h-1 bg-primary/40 rounded-full"></span>
                        <span>Oct 12, 2023</span>
                        <span className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-wood-medium/30 border border-primary/20 text-xs text-primary">
                            <span className="material-symbols-outlined text-sm">hourglass_empty</span> Processing Time: 1.2s
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-4xl font-display font-bold text-board-light mb-6 leading-tight max-w-3xl">
                        &quot;Quantum Leap: Has Apple Solved the Qubit Stability Crisis in New M4 Chips?&quot;
                    </h1>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        <span className="px-3 py-1 rounded bg-wood-dark border border-wood-light/30 text-wood-light text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                            <span>♙</span> Hardware
                        </span>
                        <span className="px-3 py-1 rounded bg-wood-dark border border-wood-light/30 text-wood-light text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                            <span>♙</span> Stocks
                        </span>
                        <span className="px-3 py-1 rounded bg-wood-dark border border-wood-light/30 text-wood-light text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                            <span>♙</span> Innovation
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Analysis */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* Verdict Card */}
                    <div className="bg-surface-light dark:bg-surface-dark border-l-8 border-red-600 rounded-r-xl p-6 shadow-lg flex flex-col relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-600/5 pointer-events-none"></div>
                        <div className="flex items-start justify-between relative z-10">
                            <div>
                                <h2 className="text-red-600 dark:text-red-500 font-bold font-display uppercase tracking-widest text-xs mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">flag</span> Analysis Verdict
                                </h2>
                                <p className="text-3xl md:text-4xl font-display font-black text-wood-dark dark:text-board-light flex items-center gap-3">
                                    BLUNDER
                                    <span className="text-red-600 text-lg font-bold px-2 py-1 bg-red-100 dark:bg-red-900/30 rounded text-sm tracking-wide border border-red-600/20">MISLEADING</span>
                                </p>
                            </div>
                            <div className="hidden md:block text-red-600/10 text-8xl font-serif leading-none -mt-4">?</div>
                        </div>
                        <p className="mt-4 text-wood-medium dark:text-text-secondary-dark font-body text-sm leading-relaxed">
                            The content contains significant inaccuracies regarding technical specifications and production timelines. It misinterprets patent filing US-2023-089 as an immediate product feature.
                        </p>
                    </div>

                    {/* Strategic Analysis */}
                    <div className="bg-surface-light dark:bg-surface-dark border border-wood-light/20 rounded-xl p-8 shadow-sm relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-wood-dark via-wood-medium to-transparent opacity-20"></div>
                        <h3 className="text-xl font-display font-bold text-wood-dark dark:text-board-light mb-6 flex items-center gap-2">
                            <span className="text-primary text-2xl">♝</span> Strategic Analysis
                        </h3>
                        <div className="prose prose-invert prose-p:text-wood-medium dark:prose-p:text-text-secondary-dark max-w-none prose-headings:font-display prose-a:text-primary">
                            <p className="mb-4">
                                The claim that Apple has &quot;solved&quot; qubit stability is a <strong>tactical overstatement</strong>. While the patent filing describes a novel error-correction method for thermal management, industry benchmarks confirm that practical implementation remains at least 3-5 years away (Endgame Scenarios).
                            </p>
                            <p className="mb-4">
                                Furthermore, our engine cross-referenced supply chain data from TSMC (Move 14.d4). There are currently no tooling orders for the quantum-specific simplified architectures mentioned in the article. This suggests the news is speculative positioning rather than based on production reality.
                            </p>
                            <div className="bg-wood-light/10 p-4 rounded-lg border border-wood-light/20 my-4">
                                <h4 className="text-sm font-bold text-wood-dark dark:text-primary mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-base">psychology</span> AI Detection Note
                                </h4>
                                <p className="text-xs text-wood-medium dark:text-text-secondary-dark">
                                    Hallucination detected in paragraph 3: The article quotes a &quot;Dr. Aris Vance&quot; who does not appear in any accredited quantum physics citation database.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Verified Sources */}
                    <div className="bg-surface-light dark:bg-surface-dark border border-wood-light/20 rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-display font-bold text-wood-dark dark:text-board-light mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">menu_book</span> Verified Sources
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li className="flex items-start gap-4 p-3 hover:bg-wood-light/5 rounded-lg transition-colors group cursor-pointer border border-transparent hover:border-wood-light/10">
                                <div className="bg-wood-dark text-board-light w-8 h-8 flex items-center justify-center rounded font-serif font-bold group-hover:bg-primary group-hover:text-wood-dark transition-colors">1</div>
                                <div className="flex-1">
                                    <p className="text-wood-dark dark:text-board-light font-medium group-hover:text-primary transition-colors text-sm">USPTO Patent Database: Filing US-2023-089</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-green-600 bg-green-100 dark:bg-green-900/20 px-1.5 py-0.5 rounded">Primary Source</span>
                                        <span className="text-wood-light text-xs">Official Record</span>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-wood-light group-hover:text-primary text-lg">open_in_new</span>
                            </li>
                            <li className="flex items-start gap-4 p-3 hover:bg-wood-light/5 rounded-lg transition-colors group cursor-pointer border border-transparent hover:border-wood-light/10">
                                <div className="bg-wood-dark text-board-light w-8 h-8 flex items-center justify-center rounded font-serif font-bold group-hover:bg-primary group-hover:text-wood-dark transition-colors">2</div>
                                <div className="flex-1">
                                    <p className="text-wood-dark dark:text-board-light font-medium group-hover:text-primary transition-colors text-sm">MIT Technology Review: Quantum Roadmap 2024</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">Cross-Reference</span>
                                        <span className="text-wood-light text-xs">Academic Review</span>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-wood-light group-hover:text-primary text-lg">open_in_new</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column - Sidebars */}
                <div className="flex flex-col gap-6">

                    {/* Confidence Score */}
                    <div className="bg-surface-light dark:bg-surface-dark border border-wood-light/20 rounded-xl p-6 shadow-sm">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex flex-col">
                                <span className="text-wood-medium dark:text-text-secondary-dark text-xs font-bold uppercase tracking-wider mb-1">Engine Depth</span>
                                <span className="text-wood-dark dark:text-board-light font-bold text-sm">Confidence Score</span>
                            </div>
                            <span className="text-primary text-3xl font-black font-display">94%</span>
                        </div>
                        <div className="w-full bg-wood-dark/10 dark:bg-wood-light/10 h-3 rounded-full overflow-hidden relative">
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_2px,rgba(0,0,0,0.1)_2px)] [background-size:20px_100%] z-10"></div>
                            <div className="h-full bg-gradient-to-r from-primary to-primary-hover w-[94%] shadow-[0_0_10px_rgba(197,160,101,0.5)]"></div>
                        </div>
                        <p className="text-xs text-wood-light mt-3 italic flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">check_circle</span> Calculated to 24 ply depth
                        </p>
                    </div>

                    {/* Position Threat */}
                    <div className="bg-wood-dark text-board-light rounded-xl p-6 shadow-xl relative overflow-hidden group">
                        <div className="absolute -right-6 -top-6 text-white/5 text-[8rem] font-serif rotate-12 transition-transform duration-700 group-hover:rotate-0">♞</div>
                        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                            <span className="material-symbols-outlined text-primary">monitoring</span>
                            <h3 className="text-sm font-display font-bold uppercase tracking-wider">Position Threat</h3>
                        </div>
                        <div className="flex flex-col gap-4 relative z-10">
                            <div className="flex items-center justify-between bg-black/20 p-3 rounded-lg border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center font-bold text-xs tracking-wider font-display text-white">AAPL</div>
                                    <div>
                                        <p className="font-bold text-sm text-white">Apple Inc.</p>
                                        <p className="text-xs text-white/50">150 Shares</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-primary font-bold text-sm bg-primary/20 px-2 py-0.5 rounded border border-primary/30">HOLD</span>
                                    <span className="text-[10px] text-white/50 uppercase tracking-wider mt-1 block">Volatility Risk</span>
                                </div>
                            </div>
                            <div className="bg-surface-dark/50 rounded p-3 text-xs text-white/80 border-l-2 border-primary">
                                <p className="leading-relaxed"><strong>Grandmaster Advisory:</strong> Do not react to this news cycle. The detected hype is likely to cause a short-term trap. Maintain position.</p>
                            </div>
                        </div>
                        <Link href="/portfolio" className="w-full mt-4 py-2 bg-primary hover:bg-primary-hover text-wood-dark text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-lg cursor-pointer text-center block">
                            Sync Portfolio
                        </Link>
                    </div>

                    {/* Related Openings */}
                    <div className="bg-surface-light dark:bg-surface-dark border border-wood-light/20 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xs font-display font-bold text-wood-medium dark:text-text-secondary-dark uppercase tracking-wider mb-4 border-b border-wood-light/10 pb-2">Related Openings</h3>
                        <div className="flex flex-col gap-4">
                            <Link className="group flex gap-3 items-start" href="#">
                                <span className="text-primary text-xl leading-none mt-0.5 font-serif">♟</span>
                                <div>
                                    <h4 className="text-wood-dark dark:text-board-light font-medium text-sm group-hover:text-primary transition-colors mb-1 leading-snug">Google Quantum AI updates roadmap for 2025</h4>
                                    <span className="text-xs text-wood-light">2 days ago • Verified</span>
                                </div>
                            </Link>
                            <Link className="group flex gap-3 items-start" href="#">
                                <span className="text-primary text-xl leading-none mt-0.5 font-serif">♟</span>
                                <div>
                                    <h4 className="text-wood-dark dark:text-board-light font-medium text-sm group-hover:text-primary transition-colors mb-1 leading-snug">IBM Osprey processor benchmarks leaked</h4>
                                    <span className="text-xs text-wood-light">5 days ago • Speculation</span>
                                </div>
                            </Link>
                            <Link className="group flex gap-3 items-start" href="#">
                                <span className="text-primary text-xl leading-none mt-0.5 font-serif">♟</span>
                                <div>
                                    <h4 className="text-wood-dark dark:text-board-light font-medium text-sm group-hover:text-primary transition-colors mb-1 leading-snug">NVIDIA&apos;s role in error correction algorithms</h4>
                                    <span className="text-xs text-wood-light">1 week ago • Accurate</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Share/Download */}
                    <div className="flex gap-2">
                        <button className="flex-1 py-2 bg-surface-light dark:bg-surface-dark border border-wood-light/20 hover:border-primary text-wood-medium hover:text-primary rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer">
                            <span className="material-symbols-outlined text-base">share</span> Share
                        </button>
                        <button className="flex-1 py-2 bg-surface-light dark:bg-surface-dark border border-wood-light/20 hover:border-primary text-wood-medium hover:text-primary rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer">
                            <span className="material-symbols-outlined text-base">download</span> PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
