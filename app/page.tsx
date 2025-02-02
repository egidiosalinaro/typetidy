import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollButton } from '@/components/scroll-button';
import { Footer } from '@/components/footer';

export default async function Home() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='py-20 px-4 text-center'>
        <h1 className='text-6xl font-bold mb-6 text-primary'>TypeTidy</h1>
        <p className='text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
          A distraction-free writing assistant that works everywhere you type
        </p>
        <div className='flex gap-4 justify-center'>
          <Link href='/download'>
            <Button size='lg'>Get Started Free</Button>
          </Link>
          <ScrollButton />
        </div>
      </section>

      {/* How It Works Section */}
      <section id='how-it-works' className='py-24 px-4 bg-accent/10'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center space-y-4 mb-16'>
            <h2 className='text-4xl font-bold text-foreground'>
              How TypeTidy Works
            </h2>
            <p className='text-lg text-muted-foreground'>
              Simple, non-invasive, and effective
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='space-y-4 text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
                <span className='text-2xl text-primary'>1</span>
              </div>
              <h3 className='text-xl font-semibold text-foreground'>
                Type Anywhere
              </h3>
              <p className='text-muted-foreground'>
                Write naturally in any application on your computer. TypeTidy
                runs silently in the background.
              </p>
            </div>

            <div className='space-y-4 text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
                <span className='text-2xl text-primary'>2</span>
              </div>
              <h3 className='text-xl font-semibold text-foreground'>
                Request Check
              </h3>
              <p className='text-muted-foreground'>
                Press your preferred shortcut key or click the toolbar icon when
                you want to check your writing.
              </p>
            </div>

            <div className='space-y-4 text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto'>
                <span className='text-2xl text-primary'>3</span>
              </div>
              <h3 className='text-xl font-semibold text-foreground'>
                Review & Apply
              </h3>
              <p className='text-muted-foreground'>
                Review suggested improvements in a clean interface and apply the
                changes you want with a single click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-4 bg-accent'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12 text-accent-foreground'>
            Why Choose TypeTidy?
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <FeatureCard
              title='Non-Invasive Design'
              description='No more distracting underlines or popups. Just a clean interface with corrections when you need them'
              icon='✨'
            />
            <FeatureCard
              title='System-Wide Support'
              description='Works seamlessly anywhere you type on your computer - from emails to documents, in any language'
              icon='🌐'
            />
            <FeatureCard
              title='Smart Assistance'
              description='Powered by advanced language models to provide contextual suggestions while keeping you in control'
              icon='🎯'
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-16 px-4 bg-background'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12 text-foreground'>
            A Better Writing Experience
          </h2>
          <div className='grid md:grid-cols-2 gap-12'>
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-foreground'>
                Distraction-Free Writing
              </h3>
              <p className='text-muted-foreground'>
                Unlike other tools that clutter your screen with constant
                highlights and suggestions, TypeTidy stays out of your way until
                you need it. Access powerful corrections with a simple shortcut
                or through the minimal toolbar icon.
              </p>
            </div>
            <div className='space-y-6'>
              <h3 className='text-xl font-semibold text-foreground'>
                Universal Compatibility
              </h3>
              <p className='text-muted-foreground'>
                As a system-level tool, TypeTidy works everywhere you write -
                from professional emails to social media posts, supporting
                multiple languages and writing styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 px-4 bg-muted/50'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center space-y-4 mb-16'>
            <h2 className='text-4xl font-bold text-foreground'>
              Frequently Asked Questions
            </h2>
            <p className='text-lg text-muted-foreground'>
              Everything you need to know about TypeTidy
            </p>
          </div>

          <div className='bg-card rounded-xl border shadow-sm p-6'>
            <Accordion type='single' collapsible className='w-full space-y-4'>
              <AccordionItem value='item-1' className='border-none'>
                <AccordionTrigger className='hover:no-underline hover:text-primary'>
                  How is TypeTidy different from other writing assistants?
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground'>
                  Unlike browser extensions or in-app tools, TypeTidy works at
                  the system level, meaning it's available everywhere you type.
                  Plus, our minimal interface keeps your screen clutter-free
                  until you need assistance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-2' className='border-none'>
                <AccordionTrigger className='hover:no-underline hover:text-primary'>
                  Which languages does TypeTidy support?
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground'>
                  TypeTidy supports writing in multiple languages, including
                  English, Spanish, French, German, and many more. Our language
                  detection is automatic, so you can switch languages
                  seamlessly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-3' className='border-none'>
                <AccordionTrigger className='hover:no-underline hover:text-primary'>
                  How do I access TypeTidy's corrections?
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground'>
                  Simply use our customizable keyboard shortcut or click the
                  minimal toolbar icon whenever you want to check your text. No
                  constant underlining or pop-ups—you're in control.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-4' className='border-none'>
                <AccordionTrigger className='hover:no-underline hover:text-primary'>
                  Where can I use TypeTidy?
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground'>
                  Everywhere! As a system-level tool, TypeTidy works in any
                  application where you can type—email clients, word processors,
                  browsers, messaging apps, and more.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-5' className='border-none'>
                <AccordionTrigger className='hover:no-underline hover:text-primary'>
                  Is my writing data secure?
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground'>
                  Absolutely. TypeTidy processes your text locally on your
                  device, and any cloud features are completely optional. Your
                  privacy is our priority.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value='item-6' className='border-none'>
                <AccordionTrigger className='hover:no-underline hover:text-primary'>
                  Do I need to be online to use TypeTidy?
                </AccordionTrigger>
                <AccordionContent className='text-muted-foreground'>
                  TypeTidy works offline for basic corrections. While an
                  internet connection enables advanced features, you can still
                  rely on core functionality without it.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4 text-center'>
        <h2 className='text-3xl font-bold mb-6 text-foreground'>
          Ready to Transform Your Writing?
        </h2>
        <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
          Join thousands of writers who choose TypeTidy for a cleaner, more
          focused writing experience
        </p>
        <Link href='/download'>
          <Button size='lg'>Start Writing Better Today</Button>
        </Link>
      </section>

      <Footer />
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
    <div className='p-6 rounded-lg bg-card border border-muted shadow-sm hover:shadow-md transition-shadow'>
      <div className='text-4xl mb-4'>{icon}</div>
      <h3 className='text-xl font-semibold mb-2 text-foreground'>{title}</h3>
      <p className='text-muted-foreground'>{description}</p>
    </div>
  );
}
