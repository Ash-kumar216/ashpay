import Logo from "@/components/Logo";

export default function DFooter() {
    return (
        <footer className="mt-20 mb-10 px-6 md:px-20 lg:px-32 grid place-content-center text-center">
            <Logo/>
            <p className="text-xs mb-4">By ashPaz</p>
            <ul className="list-none flex gap-2 items-center">
                <li><a target="_blank" className="transition bg-secondary py-1 px-3 rounded-full hover:bg-primary text-sm" href="https://github.com/Ash-kumar216">Github</a></li>
            </ul>
            {/* <p className="text-xs mt-4">©{new Date().getFullYear()} All rights reserved.</p> */}
        </footer>
    )
}