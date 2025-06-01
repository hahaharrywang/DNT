import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { HiArrowRight, HiSparkles, HiGlobeAlt, HiLightningBolt } from 'react-icons/hi';
import Layout from '../components/Layout';
import StatsSection from '../components/StatsSection';

const HomePage = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isCurrentLanguageChinese = router.locale === 'zh';

  const handleExploreClick = () => {
    router.push('/positions', '/positions', { locale: router.locale });
  };

  const handleLearnMoreClick = () => {
    router.push('/about', '/about', { locale: router.locale });
  };

  const features = [
    {
      icon: HiLightningBolt,
      titleKey: 'features.techHub.title',
      descriptionKey: 'features.techHub.description',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: HiSparkles,
      titleKey: 'features.culture.title',
      descriptionKey: 'features.culture.description',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: HiGlobeAlt,
      titleKey: 'features.location.title',
      descriptionKey: 'features.location.description',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-50 via-white to-neutral-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-brand-red rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight ${
                isCurrentLanguageChinese ? 'chinese-text chinese-responsive-xl' : 'english-text'
              }`}
            >
              {t('hero.headline')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-lg sm:text-xl lg:text-2xl text-neutral-600 mb-4 max-w-3xl mx-auto leading-relaxed ${
                isCurrentLanguageChinese ? 'chinese-text chinese-responsive-lg' : 'english-text'
              }`}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={`text-base sm:text-lg text-brand-red font-medium mb-8 ${
                isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
              }`}
            >
              {t('hero.tagline')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className={`text-base sm:text-lg text-neutral-700 mb-12 max-w-2xl mx-auto leading-relaxed ${
                isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
              }`}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExploreClick}
                className={`btn-primary group ${
                  isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
                }`}
              >
                {t('hero.cta.explore')}
                <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLearnMoreClick}
                className={`btn-secondary ${
                  isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
                }`}
              >
                {t('hero.cta.learnMore')}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-neutral-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive-xl' : 'english-text'
            }`}>
              {t('features.title')}
            </h2>
            <p className={`text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive-lg' : 'english-text'
            }`}>
              {t('features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-brand-lg p-8 shadow-soft hover:shadow-brand transition-all duration-500 border border-neutral-100 hover:border-neutral-200">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 ${feature.bgColor} rounded-brand flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </motion.div>

                  <h3 className={`text-xl lg:text-2xl font-semibold text-neutral-900 mb-4 group-hover:text-brand-red transition-colors duration-300 ${
                    isCurrentLanguageChinese ? 'chinese-text chinese-responsive-lg' : 'english-text'
                  }`}>
                    {t(feature.titleKey)}
                  </h3>

                  <p className={`text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300 ${
                    isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
                  }`}>
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-brand-red to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive-xl' : 'english-text'
            }`}>
              {t('cta.title')}
            </h2>
            <p className={`text-lg sm:text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive-lg' : 'english-text'
            }`}>
              {t('cta.description')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleExploreClick}
              className={`btn-white group ${
                isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
              }`}
            >
              {t('cta.button')}
              <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>
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

export default HomePage; 