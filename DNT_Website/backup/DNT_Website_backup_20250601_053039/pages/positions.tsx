import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '../components/Layout';
import PositionsShowcase from '../components/PositionsShowcase';

const PositionsPage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <PositionsShowcase />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

export default PositionsPage; 