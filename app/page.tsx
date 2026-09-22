import { getScenario } from '@/lib/scenario-store';

import { DealsSection } from './components/deals-section';
import { DestinationSection } from './components/destination-section';
import { HeroSection } from './components/hero-section';
import { HowItWorksSection } from './components/how-it-works-section';
import { ResortsSection } from './components/resorts-section';
import { ReviewsSection } from './components/reviews-section';
import { SafeWeddingSection } from './components/safe-wedding-section';
import { SiteFooter } from './components/site-footer';
import { SiteHeader } from './components/site-header';
import { StartNowSection } from './components/start-now-section';
import { TrustSection } from './components/trust-section';

// Destination photos/copy are admin-editable but rarely change, so the home
// page stays statically cached and just revalidates every minute rather than
// hitting the DB on every visitor request.
export const revalidate = 60;

export default async function Home() {
    const scenario = await getScenario();
    const resortsFor = (destination: string) => scenario.resortsByDestination[destination] ?? [];

    // The set and order of homepage region sections follows the admin-managed
    // "희망 지역" list directly, so adding/renaming/removing a region in the
    // admin panel (and giving it at least one hall) is enough to change what
    // shows here — no code change needed. Regions with no halls yet are
    // skipped instead of rendering an empty section.
    const shownDestinations = scenario.destinations.filter((destination) => resortsFor(destination).length > 0);

    return (
        <>
            <SiteHeader />
            <main className="flex-1">
                <HeroSection />
                <TrustSection />
                <DealsSection />
                <ResortsSection resorts={scenario.popularResorts} />
                {shownDestinations.map((destination, index) => (
                    <DestinationSection
                        key={destination}
                        id={index === 0 ? 'regions' : undefined}
                        destination={destination}
                        resorts={resortsFor(destination)}
                    />
                ))}
                <HowItWorksSection />
                <SafeWeddingSection />
                <StartNowSection />
                <ReviewsSection />
            </main>
            <SiteFooter />
        </>
    );
}
