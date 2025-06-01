import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { HiUsers, HiGlobeAlt, HiUserGroup, HiCalendar } from 'react-icons/hi';

interface StatItem {
  id: string;
  value: number;
  suffix: string;
  icon: React.ComponentType<any>;
  titleKey: string;
  color: string;
  bgColor: string;
}

const AnimatedCounter = ({ 
  value, 
  suffix, 
  isInView, 
  locale 
}: { 
  value: number; 
  suffix: string; 
  isInView: boolean; 
  locale: string;
}) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.onChange((latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  const formatNumber = (num: number, locale: string) => {
    if (locale === 'zh') {
      return num.toLocaleString('zh-TW');
    }
    return num.toLocaleString('en-US');
  };

  return (
    <span className="font-bold text-3xl lg:text-4xl xl:text-5xl">
      {formatNumber(displayValue, locale)}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isCurrentLanguageChinese = router.locale === 'zh';

  const stats: StatItem[] = [
    {
      id: 'participants',
      value: 900,
      suffix: '+',
      icon: HiUsers,
      titleKey: 'stats.participants',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      id: 'nationalities',
      value: 60,
      suffix: '+',
      icon: HiGlobeAlt,
      titleKey: 'stats.nationalities',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'international',
      value: 46,
      suffix: '%',
      icon: HiUserGroup,
      titleKey: 'stats.international',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'events',
      value: 25,
      suffix: '+',
      icon: HiCalendar,
      titleKey: 'stats.events',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-red-50 via-white to-blue-50 overflow-hidden">
      {/* Background Wave Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="absolute top-10 left-10 w-32 h-32 text-brand-red"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M20,20 Q50,5 80,20 Q95,50 80,80 Q50,95 20,80 Q5,50 20,20 Z" />
          </svg>
          <svg
            className="absolute top-40 right-20 w-24 h-24 text-blue-400"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <circle cx="50" cy="50" r="40" />
          </svg>
          <svg
            className="absolute bottom-20 left-1/4 w-28 h-28 text-purple-400"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
          </svg>
          <svg
            className="absolute bottom-40 right-10 w-20 h-20 text-green-400"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <path d="M50,10 L90,90 L10,90 Z" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
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
            {t('stats.title')}
          </h2>
          <p className={`text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed ${
            isCurrentLanguageChinese ? 'chinese-text chinese-responsive-lg' : 'english-text'
          }`}>
            {t('stats.subtitle')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-brand-xl p-6 lg:p-8 shadow-soft hover:shadow-brand transition-all duration-500 border border-neutral-100 hover:border-neutral-200 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-5 ${stat.bgColor} rounded-brand-xl`} />
                
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className={`w-full h-full ${stat.bgColor} rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-500`} />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 lg:w-16 lg:h-16 ${stat.bgColor} rounded-brand flex items-center justify-center mb-4 lg:mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <stat.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${stat.color}`} />
                  </motion.div>

                  {/* Number */}
                  <div className={`${stat.color} mb-2 lg:mb-3 ${
                    isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
                  }`}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                      locale={router.locale || 'en'}
                    />
                  </div>

                  {/* Title */}
                  <h3 className={`text-base lg:text-lg font-semibold text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300 ${
                    isCurrentLanguageChinese ? 'chinese-text chinese-responsive leading-relaxed' : 'english-text'
                  }`}>
                    {t(stat.titleKey)}
                  </h3>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-brand-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Wave */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-red to-red-600 rounded-full shadow-brand">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 