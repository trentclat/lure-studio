import Image from "next/image"
import { Button } from "@/ui/button"

export function WelcomeHero() {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background Image */}
            <Image
                src="/images/pf_lure_studio_bg.png"
                alt="underwater fishing lure background"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
                className="-z-10"
            />

            {/* Content Container */}
            <main className="flex flex-col items-center justify-center p-4">
                <div className="bg-black/70 backdrop-blur-md text-white p-6 md:p-10 rounded-lg shadow-2xl max-w-xl md:max-w-2xl lg:max-w-3xl text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider mb-6">
                        Lure Studio
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
                        the all-in-one platform for designing and prototyping 3D fishing lures.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white text-black hover:bg-gray-200 border-2 border-white w-full sm:w-auto px-8 py-6 text-lg font-semibold transition-colors duration-300"
                        >
                            UPLOAD IMAGE
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
} 