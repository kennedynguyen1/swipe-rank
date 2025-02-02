import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <section className="py-20 px-6 md:px-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Simplify Your Applicant Ranking Process</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">SwipeRank helps clubs and organizations efficiently review and rank applicants with an intuitive, swipe-based interface.</p>
            <Button size="lg" className="text-lg">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Button>
        </section>
    )
}