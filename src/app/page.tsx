import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyThisBook from '@/components/WhyThisBook';
import VideoSection from '@/components/VideoSection';
import BookSummary from '@/components/BookSummary';
import WeeklyExcerpts from '@/components/WeeklyExcerpts';
import PurchaseBox from '@/components/PurchaseBox';
import AuthorSection from '@/components/AuthorSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyThisBook />
      <VideoSection />
      <BookSummary />
      <WeeklyExcerpts />
      <PurchaseBox />
      <AuthorSection />
      <Footer />
    </main>
  );
}
