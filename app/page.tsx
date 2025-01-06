import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Hero Section */}
      <section className='py-20 px-4 text-center'>
        <h1 className='text-6xl font-bold mb-6 text-primary'>TypeTidy</h1>
        <p className='text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
          Your intelligent writing companion for clear, error-free, and
          impactful communication
        </p>
        <div className='flex gap-4 justify-center'>
          <Link href='/sign-up'>
            <Button size='lg'>Get Started Free</Button>
          </Link>
          <Button size='lg' variant='outline'>
            See How It Works
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-4 bg-muted'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12 text-foreground'>
            Why Choose TypeTidy?
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <FeatureCard
              title='Real-time Corrections'
              description='Get instant feedback on grammar, spelling, and style as you type'
              icon='⚡'
            />
            <FeatureCard
              title='AI-Powered Suggestions'
              description='Advanced AI helps you write more clearly and effectively'
              icon='🤖'
            />
            <FeatureCard
              title='Context-Aware'
              description='Understands your writing context to provide relevant suggestions'
              icon='🎯'
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 text-center bg-background'>
        <h2 className='text-3xl font-bold mb-6 text-foreground'>
          Ready to Transform Your Writing?
        </h2>
        <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
          Join thousands of writers who trust TypeTidy to perfect their content
        </p>
        <Link href='/sign-up'>
          <Button size='lg'>Start Writing Better Today</Button>
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className='p-6 rounded-lg bg-card border shadow-sm hover:shadow-md transition-shadow'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-xl font-semibold mb-2 text-foreground'>{title}</h3>
      <p className='text-muted-foreground'>{description}</p>
    </div>
  );
}
