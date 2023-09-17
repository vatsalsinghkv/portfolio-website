import { Button, ShowLottie } from '@/components';
import { Layout } from '@/containers';

const Custom404 = () => {
  return (
    <Layout className="grid h-screen place-items-center">
      <div className="w-full max-w-xl text-center">
        <ShowLottie path="/lotties/404.json" className="mx-auto" />

        <p className="mt-5 text-3xl capitalize md:text-4xl text-dark-2">
          page not found
        </p>

        <Button type="link" href="/" size="lg" className="mt-20" sameTab center>
          go home
        </Button>
      </div>
    </Layout>
  );
};

export default Custom404;
