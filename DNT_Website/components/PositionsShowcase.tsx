import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiUsers, 
  HiSpeakerphone, 
  HiMicrophone, 
  HiUserGroup, 
  HiCamera, 
  HiVideoCamera, 
  HiCake,
  HiSupport,
  HiSearch,
  HiFilter,
  HiStar,
  HiArrowRight
} from 'react-icons/hi';

interface Position {
  id: string;
  titleEn: string;
  titleZh: string;
  category: 'priority' | 'creative' | 'support';
  icon: React.ComponentType<any>;
  responsibilitiesKey: string;
  compensationKey: string;
  isPriority: boolean;
  color: string;
  bgColor: string;
}

const PositionsShowcase = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isCurrentLanguageChinese = router.locale === 'zh';
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const positions: Position[] = [
    {
      id: 'community-organizer',
      titleEn: 'Community Event Organizer',
      titleZh: '社群活動總召',
      category: 'priority',
      icon: HiUsers,
      responsibilitiesKey: 'positions.communityOrganizer.responsibilities',
      compensationKey: 'positions.communityOrganizer.compensation',
      isPriority: true,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      id: 'marketing-sales',
      titleEn: 'Marketing & Sales',
      titleZh: '行銷企劃',
      category: 'priority',
      icon: HiSpeakerphone,
      responsibilitiesKey: 'positions.marketingSales.responsibilities',
      compensationKey: 'positions.marketingSales.compensation',
      isPriority: true,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'bilingual-host',
      titleEn: 'Bilingual Host',
      titleZh: '雙語主持人',
      category: 'priority',
      icon: HiMicrophone,
      responsibilitiesKey: 'positions.bilingualHost.responsibilities',
      compensationKey: 'positions.bilingualHost.compensation',
      isPriority: true,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      id: 'reception-lead',
      titleEn: 'Reception Lead',
      titleZh: '接待',
      category: 'support',
      icon: HiUserGroup,
      responsibilitiesKey: 'positions.receptionLead.responsibilities',
      compensationKey: 'positions.receptionLead.compensation',
      isPriority: false,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      id: 'photographer',
      titleEn: 'Photographer',
      titleZh: '攝影師',
      category: 'creative',
      icon: HiCamera,
      responsibilitiesKey: 'positions.photographer.responsibilities',
      compensationKey: 'positions.photographer.compensation',
      isPriority: false,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50',
    },
    {
      id: 'video-producer',
      titleEn: 'Short Video Producer',
      titleZh: '短影片製作',
      category: 'creative',
      icon: HiVideoCamera,
      responsibilitiesKey: 'positions.videoProducer.responsibilities',
      compensationKey: 'positions.videoProducer.compensation',
      isPriority: false,
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
    },
    {
      id: 'fb-manager',
      titleEn: 'F&B Manager',
      titleZh: '餐飲管理',
      category: 'support',
      icon: HiCake,
      responsibilitiesKey: 'positions.fbManager.responsibilities',
      compensationKey: 'positions.fbManager.compensation',
      isPriority: false,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      id: 'event-assistant',
      titleEn: 'Event Assistant',
      titleZh: '活動助理',
      category: 'support',
      icon: HiSupport,
      responsibilitiesKey: 'positions.eventAssistant.responsibilities',
      compensationKey: 'positions.eventAssistant.compensation',
      isPriority: false,
      color: 'text-teal-500',
      bgColor: 'bg-teal-50',
    },
  ];

  const filters = [
    { id: 'all', labelKey: 'positions.filters.all', icon: HiFilter },
    { id: 'priority', labelKey: 'positions.filters.priority', icon: HiStar },
    { id: 'creative', labelKey: 'positions.filters.creative', icon: HiCamera },
    { id: 'support', labelKey: 'positions.filters.support', icon: HiSupport },
  ];

  const filteredPositions = useMemo(() => {
    let filtered = positions;

    // Apply category filter
    if (selectedFilter !== 'all') {
      if (selectedFilter === 'priority') {
        filtered = filtered.filter(position => position.isPriority);
      } else {
        filtered = filtered.filter(position => position.category === selectedFilter);
      }
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(position => 
        position.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        position.titleZh.includes(searchTerm)
      );
    }

    return filtered;
  }, [selectedFilter, searchTerm]);

  const handleApply = (positionId: string) => {
    // Navigate to application form or open modal
    router.push(`/apply?position=${positionId}`, undefined, { locale: router.locale });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {t('positions.title')}
          </h2>
          <p className={`text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed ${
            isCurrentLanguageChinese ? 'chinese-text chinese-responsive-lg' : 'english-text'
          }`}>
            {t('positions.subtitle')}
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiSearch className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder={t('positions.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`block w-full pl-10 pr-3 py-3 border border-neutral-200 rounded-brand-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-300 ${
                isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
              }`}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.id)}
                className={`inline-flex items-center px-4 py-2 rounded-brand text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-brand-red text-white shadow-brand'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:border-brand-red hover:text-brand-red'
                } ${isCurrentLanguageChinese ? 'chinese-text' : 'english-text'}`}
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {t(filter.labelKey)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Positions Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedFilter}-${searchTerm}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {filteredPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative bg-white rounded-brand-xl p-6 shadow-soft hover:shadow-brand transition-all duration-500 border border-neutral-100 hover:border-neutral-200 overflow-hidden h-full flex flex-col">
                  {/* Priority Badge */}
                  {position.isPriority && (
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center shadow-lg"
                      >
                        <HiStar className="w-3 h-3 mr-1" />
                        {isCurrentLanguageChinese ? '優先' : 'Priority'}
                      </motion.div>
                    </div>
                  )}

                  {/* Background Gradient */}
                  <div className={`absolute inset-0 opacity-5 ${position.bgColor} rounded-brand-xl`} />
                  
                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <div className={`w-full h-full ${position.bgColor} rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-500`} />
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 ${position.bgColor} rounded-brand flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <position.icon className={`w-6 h-6 ${position.color}`} />
                    </motion.div>

                    {/* Job Title */}
                    <div className="mb-4 flex-grow">
                      <h3 className={`text-lg font-bold text-neutral-900 mb-1 group-hover:text-brand-red transition-colors duration-300 ${
                        isCurrentLanguageChinese ? 'chinese-text chinese-responsive-lg' : 'english-text'
                      }`}>
                        {isCurrentLanguageChinese ? position.titleZh : position.titleEn}
                      </h3>
                      <p className={`text-sm text-neutral-500 ${
                        isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
                      }`}>
                        {isCurrentLanguageChinese ? position.titleEn : position.titleZh}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4 flex-grow">
                      <h4 className={`text-sm font-semibold text-neutral-700 mb-2 ${
                        isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
                      }`}>
                        {t('positions.responsibilities')}
                      </h4>
                      <ul className={`text-sm text-neutral-600 space-y-1 ${
                        isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
                      }`}>
                        {t(position.responsibilitiesKey, { returnObjects: true }).map((responsibility: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1 h-1 bg-brand-red rounded-full mt-2 mr-2 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compensation */}
                    <div className="mb-6">
                      <h4 className={`text-sm font-semibold text-neutral-700 mb-1 ${
                        isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
                      }`}>
                        {t('positions.compensation')}
                      </h4>
                      <p className={`text-sm text-green-600 font-medium ${
                        isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
                      }`}>
                        {t(position.compensationKey)}
                      </p>
                    </div>

                    {/* Apply Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleApply(position.id)}
                      className={`w-full btn-primary group text-sm ${
                        isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
                      }`}
                    >
                      {t('positions.applyNow')}
                      <HiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-neutral-50 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-brand-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredPositions.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiSearch className="w-8 h-8 text-neutral-400" />
            </div>
            <h3 className={`text-lg font-semibold text-neutral-700 mb-2 ${
              isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
            }`}>
              {t('positions.noResults')}
            </h3>
            <p className={`text-neutral-500 ${
              isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
            }`}>
              {t('positions.tryDifferentSearch')}
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-brand-red to-red-600 rounded-brand-xl p-8 lg:p-12 text-white">
            <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive-lg' : 'english-text'
            }`}>
              {t('positions.ctaTitle')}
            </h3>
            <p className={`text-red-100 mb-6 max-w-2xl mx-auto ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
            }`}>
              {t('positions.ctaDescription')}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact', undefined, { locale: router.locale })}
              className={`btn-white group ${
                isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
              }`}
            >
              {t('positions.contactUs')}
              <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PositionsShowcase; 