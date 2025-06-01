import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiGlobeAlt } from 'react-icons/hi';

const Header = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'positions', href: '/positions' },
    { key: 'about', href: '/about' },
    { key: 'apply', href: '/apply' },
    { key: 'contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = router.locale === 'en' ? 'zh' : 'en';
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href === '/') {
      router.push('/', '/', { locale: router.locale });
    } else {
      router.push(href, href, { locale: router.locale });
    }
  };

  const isCurrentLanguageChinese = router.locale === 'zh';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavClick('/')}
          >
            <h1 className={`text-xl lg:text-2xl font-semibold text-brand-red transition-all duration-300 ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive-lg' : 'english-text'
            }`}>
              {t('brand.name')}
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => handleNavClick(item.href)}
                className={`nav-link-brand ${
                  router.pathname === item.href ? 'active' : ''
                } ${
                  isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
                }`}
              >
                {t(`nav.${item.key}`)}
              </motion.button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="language-switcher focus-brand"
              title={t('language.switch')}
            >
              <HiGlobeAlt className="w-4 h-4 text-neutral-600" />
              <span className="text-sm font-medium text-neutral-700">
                {isCurrentLanguageChinese ? 'EN' : '中文'}
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-brand bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 focus-brand"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <HiX className="w-6 h-6 text-neutral-600" />
                ) : (
                  <HiMenu className="w-6 h-6 text-neutral-600" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 shadow-soft"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left py-3 px-4 rounded-brand hover:bg-red-50 hover:text-brand-red transition-all duration-300 ${
                      router.pathname === item.href ? 'bg-red-50 text-brand-red' : 'text-neutral-600'
                    } ${
                      isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 