"use client";

import { useState } from "react";
import AnalysisDashboard from "@/components/AnalysisDashboard";
import AnalysisLoading from "@/components/AnalysisLoading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AnalysisPage() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="h-2 w-full flex">
                <div className="w-full h-full bg-board-dark"></div>
                <div className="w-full h-full bg-board-light"></div>
                <div className="w-full h-full bg-board-dark"></div>
                <div className="w-full h-full bg-board-light"></div>
                <div className="w-full h-full bg-board-dark"></div>
                <div className="w-full h-full bg-board-light"></div>
                <div className="w-full h-full bg-board-dark"></div>
                <div className="w-full h-full bg-board-light"></div>
            </div>

            <Header />

            <main className="flex-1 relative">
                <div className="absolute inset-0 top-0 h-[800px] z-0 opacity-10 pointer-events-none chess-square-bg"></div>

                <section className="relative z-10 py-12 px-4 md:px-10 lg:px-40">
                    {isLoading ? (
                        <AnalysisLoading onComplete={() => setIsLoading(false)} />
                    ) : (
                        <AnalysisDashboard />
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
