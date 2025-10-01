import { useDirectionStore } from '@/store/directionStore';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const { direction } = useDirectionStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-4xl font-bold">
        {direction === 'rtl' ? 'حول التطبيق' : 'About'}
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>
          {direction === 'rtl'
            ? 'هذا تطبيق كامل مع دعم RTL والخطوط العربية.'
            : 'This is a full-stack application with RTL and Arabic font support.'}
        </p>
      </div>

      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-primary px-4 py-2 text-primary-foreground"
      >
        {direction === 'rtl' ? 'العودة للصفحة الرئيسية' : 'Back to Home'}
      </Link>
    </div>
  );
}
