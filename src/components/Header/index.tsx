import Link from "next/link";

const Header = () => {

    return (
        <div className="border-b-2 border flex justify-between items-center p-4">
            <div className="inline-block">WoW Loot Tracker</div>
            <div className="inline-block">
                <Link href="/login"><button>Login</button></Link>
            </div>
        </div>
    )
};

export default Header;