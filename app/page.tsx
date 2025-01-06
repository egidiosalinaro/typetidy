import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='py-20 px-4 text-center'>
        <h1 className='text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
          TypeTidy
        </h1>
        <p className='text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
          Your intelligent writing companion for clear, error-free, and
          impactful communication
        </p>
        <div className='flex gap-4 justify-center'>
          <Link href='/sign-up'>
            <Button size='lg' className='bg-purple-600 hover:bg-purple-700'>
              Get Started Free
            </Button>
          </Link>
          <Button size='lg' variant='outline'>
            See How It Works
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-4 bg-gray-50 dark:bg-gray-900'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
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
      <section className='py-20 px-4 text-center'>
        <h2 className='text-3xl font-bold mb-6'>
          Ready to Transform Your Writing?
        </h2>
        <p className='text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
          Join thousands of writers who trust TypeTidy to perfect their content
        </p>
        <Link href='/sign-up'>
          <Button size='lg' className='bg-purple-600 hover:bg-purple-700'>
            Start Writing Better Today
          </Button>
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
    <div className='p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-gray-600 dark:text-gray-300'>{description}</p>
    </div>
  );
}
