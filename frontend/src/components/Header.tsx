import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
    return (
        <header className="py-4 px-6 mx:px-10 flex justify-between items-center bg-white shadow-sm">
            <div className="text-2xl font-bold text-blue-600">SwipeRank</div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Button variant="ghost" asChild>
                            <Link href="#features">Features</Link> 
                        </Button>
                    </li>
                    <li>
                        <Button variant="ghost" asChild>
                            <Link href="#how-it-works">How It Works</Link>
                        </Button>
                    </li>
                    <li><Button>Sign Up</Button></li>
                </ul>
            </nav>
        </header>
    )
}