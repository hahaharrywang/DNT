import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isCurrentLanguageChinese = router.locale === 'zh';

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { key: 'home', href: '/' },
    { key: 'positions', href: '/positions' },
    { key: 'about', href: '/about' },
    { key: 'apply', href: '/apply' },
    { key: 'contact', href: '/contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href === '/') {
      router.push('/', '/', { locale: router.locale });
    } else {
      router.push(href, href, { locale: router.locale });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className={`text-2xl lg:text-3xl font-semibold text-brand-red mb-4 ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive-lg' : 'english-text'
            }`}>
              {t('brand.name')}
            </h3>
            <p className={`text-neutral-300 mb-6 leading-relaxed max-w-md ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
            }`}>
              {t('brand.tagline')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-neutral-300 hover:text-white transition-colors duration-300"
              >
                <HiMail className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span className={`${isCurrentLanguageChinese ? 'chinese-text' : 'english-text'}`}>
                  {t('footer.contact.email')}
                </span>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-neutral-300 hover:text-white transition-colors duration-300"
              >
                <HiPhone className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span className={`${isCurrentLanguageChinese ? 'chinese-text' : 'english-text'}`}>
                  {t('footer.contact.phone')}
                </span>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-neutral-300 hover:text-white transition-colors duration-300"
              >
                <HiLocationMarker className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span className={`${isCurrentLanguageChinese ? 'chinese-text' : 'english-text'}`}>
                  {t('footer.contact.address')}
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-semibold text-white mb-6 ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
            }`}>
              {t('footer.quickLinks')}
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.key}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5, color: '#DC2626' }}
                  viewport={{ once: true }}
                  onClick={() => handleNavClick(link.href)}
                  className={`block text-neutral-300 hover:text-brand-red transition-all duration-300 text-left ${
                    isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`text-lg font-semibold text-white mb-6 ${
              isCurrentLanguageChinese ? 'chinese-text chinese-responsive' : 'english-text'
            }`}>
              {t('footer.followUs')}
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-neutral-800 rounded-brand flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-red transition-all duration-300 focus-brand"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            <p className={`text-neutral-400 mt-6 text-sm leading-relaxed ${
              isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
            }`}>
              {t('footer.socialPrompt')}
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-neutral-400 text-sm ${
              isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
            }`}>
              {t('footer.copyright')}
            </p>
            
            <div className="flex items-center space-x-6">
              <motion.button
                whileHover={{ y: -1 }}
                className={`text-neutral-400 hover:text-white transition-colors duration-300 text-sm ${
                  isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
                }`}
              >
                {t('footer.privacy')}
              </motion.button>
              <motion.button
                whileHover={{ y: -1 }}
                className={`text-neutral-400 hover:text-white transition-colors duration-300 text-sm ${
                  isCurrentLanguageChinese ? 'chinese-text' : 'english-text'
                }`}
              >
                {t('footer.terms')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 