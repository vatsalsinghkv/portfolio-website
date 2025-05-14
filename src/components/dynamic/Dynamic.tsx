import dynamic from 'next/dynamic';

export const DynamicShowLottie = dynamic(
  () => import('@/components/ui/ShowLottie'),
  {
    ssr: false,
  }
);
