import SplashScreen from './Components/splashscreen';
import dynamic from 'next/dynamic';

export const runtime = 'edge';

const LandingPage = dynamic(() => import('./landingpage'), {
  ssr: false,
  loading: () => <SplashScreen />,
});

export default async function Home() {
  return <LandingPage />
}
