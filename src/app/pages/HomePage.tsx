import { useDirectionStore } from '@/store/directionStore';

export default function HomePage() {
  const { direction, toggleDirection, language } = useDirectionStore();

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">
          {direction === 'rtl' ? 'مرحباً بكم' : 'Welcome'}
        </h1>
        <p className="text-lg text-muted-foreground">
          {direction === 'rtl'
            ? 'تطبيق كامل مع دعم RTL والخطوط العربية'
            : 'Full-stack application with RTL and Arabic font support'}
        </p>
      </header>

      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">
            {direction === 'rtl' ? 'الإعدادات' : 'Settings'}
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {direction === 'rtl' ? 'الاتجاه الحالي:' : 'Current Direction:'}
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {direction.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {direction === 'rtl' ? 'اللغة:' : 'Language:'}
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium">
                {language === 'ar' ? 'العربية' : 'English'}
              </span>
            </div>

            <button
              onClick={toggleDirection}
              className="w-full rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {direction === 'rtl' ? 'التبديل إلى LTR' : 'Switch to RTL'}
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">
            {direction === 'rtl' ? 'الميزات' : 'Features'}
          </h2>
          
          <ul className="space-y-2">
            {(direction === 'rtl'
              ? [
                  '✅ دعم كامل للغة العربية',
                  '✅ تصميم متجاوب',
                  '✅ أداء محسّن',
                  '✅ اختبارات شاملة',
                ]
              : [
                  '✅ Full TypeScript support',
                  '✅ Responsive design',
                  '✅ Optimized performance',
                  '✅ Comprehensive testing',
                ]
            ).map((feature, index) => (
              <li key={index} className="text-sm">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
