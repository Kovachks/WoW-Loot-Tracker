import Image from 'next/image';
import localFont from 'next/font/local';
import Link from 'next/link';
import UnauthenticatedWrapper from '@/components/UnauthenticatedWrapper';
import InfoCard from '@/components/Cards/InfoCard';


export default function Home() {
	return (
		<UnauthenticatedWrapper>
			<InfoCard>
				<div>
					<h1>WoW Loot Tracker</h1>
					<p>Never lose site of loot again</p>
				</div>
				<Link href="/account">Account</Link>
			</InfoCard>
		</UnauthenticatedWrapper>
	);
}
