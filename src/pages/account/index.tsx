import AuthenticatedWrapper from "@/components/AuthenticatedWrapper";
import InfoCard from "@/components/Cards/InfoCard";
import Link from "next/link";

const Account = () => {


    return (
        <div>
            <AuthenticatedWrapper>
                <InfoCard>
                    Guilds
                    <Link href="/create"><button>Create Guild</button></Link>
                </InfoCard>
            </AuthenticatedWrapper>
        </div>
    )
}

export default Account;