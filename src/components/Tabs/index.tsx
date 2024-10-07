import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
import { AnimatePresence, motion } from 'framer-motion';
import useMedia from 'use-media';
import { useTranslations } from 'next-intl';

export const TabsNav = ({ ...props }: Tabs.TabsProps) => {
  const [currentTab, setCurrentTab] = useState<string>('Software Mind');
  const isMd = useMedia({ minWidth: '768px' });
  const t = useTranslations('Experience');
  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      {...props}
      className={`grid md:flex gap-16 sm:gap-16 md:gap-20 min-w-52 ${props.className}`}
    >
      <Tabs.List className="md:block flex">
        <TabItem isSelected={currentTab === 'Software Mind'} title="Software Mind" value="Software Mind" />
        <TabItem isSelected={currentTab === 'Octuspay'} title="Octuspay" value="Octuspay" />
        <TabItem isSelected={currentTab === 'Etaure'} title="Etaure" value="Etaure" />
        <TabItem isSelected={currentTab === 'Conexos'} title="Conexos" value="Conexos" />
      </Tabs.List>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab}
          initial={isMd ? { x: 10, opacity: 0 } : { y: 10, opacity: 0 }}
          animate={isMd ? { x: 0, opacity: 1 } : { y: 0, opacity: 1 }}
          className="w-full"
          transition={{ duration: 0.4 }}
        >
          <Tabs.Content value="Software Mind">
            <div className="flex items-center justify-between gap-1 sm:flex-row flex-col sm:mb-8 md:mb-0">
              <h1 className="font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100">
                {t('SoftwareMindTitle')}
              </h1>
              <span className="dark:text-gray-dark-400 text-blue-light-100">{t('SoftwareMindData')}</span>
            </div>
            <div className='mt-6 mb-8'>
              <span className="dark:text-blue-dark-100 text-md font-medium text-blue-light-200 mr-1.5">Software Mind</span>
              <span className='text-xs'>({t('SoftwareMindLocal')} - Texas/EUA)</span>
            </div>
            <p>{t('SoftwareMindText')}</p>
            <ul className="list-disc list-inside">
              <li>{t("SoftwareMindLi")}</li>
              <li>{t("SoftwareMindLi2")}</li>
              <li>{t("SoftwareMindLi3")}</li>
            </ul>
          </Tabs.Content>

          <Tabs.Content value="Octuspay">
            <div className="flex items-center justify-between gap-1 sm:flex-row flex-col sm:mb-8 md:mb-0">
              <h1 className="font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100">
                {t('OctuspayTitle')}
              </h1>
              <span className="dark:text-gray-dark-400 text-blue-light-100">{t('OctuspayData')}</span>
            </div>
            <div className='mt-6 mb-8'>
              <span className="dark:text-blue-dark-100 text-md font-medium text-blue-light-200 mr-1.5">Octuspay</span>
              <span className='text-xs'>({t('OctuspayLocal')} - Vitória/ES)</span>
            </div>
            <p>{t('OctuspayText')}</p>
            <ul className="list-disc list-inside">
              <li>{t("OctuspayLi")}</li>
              <li>{t("OctuspayLi2")}</li>
              <li>{t("OctuspayLi3")}</li>
              <li>{t("OctuspayLi4")}</li>
              <li>{t("OctuspayLi5")}</li>
            </ul>
          </Tabs.Content>

          <Tabs.Content value="Etaure">
            <div className="flex items-center justify-between gap-1 sm:flex-row flex-col sm:mb-8 md:mb-0">
              <h1 className="font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100">
                {t('EtaureTitle')}
              </h1>
              <span className="dark:text-gray-dark-400 text-blue-light-100">{t('EtaureData')}</span>
            </div>
            <div className='mt-6 mb-8'>
              <span className="dark:text-blue-dark-100 text-md font-medium text-blue-light-200 mr-1.5">Etaure</span>
              <span className='text-xs'>({t('EtaureLocal')} - Vitória/ES)</span>
            </div>
            <p>{t('EtaureText')}</p>
            <ul className="list-disc list-inside">
              <li>{t("EtaureLi")}</li>
              <li>{t("EtaureLi2")}</li>
              <li>{t("EtaureLi3")}</li>
              <li>{t("EtaureLi4")}</li>
            </ul>
          </Tabs.Content>

          <Tabs.Content value="Conexos">
            <div className="flex items-center justify-between gap-1 sm:flex-row flex-col sm:mb-8 md:mb-0">
              <h1 className="font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100">
                {t('ConexosTitle')}
              </h1>
              <span className="dark:text-gray-dark-400 text-blue-light-100">{t('ConexosData')}</span>
            </div>
            <div className='mt-6 mb-8'>
              <span className="dark:text-blue-dark-100 text-md font-medium text-blue-light-200 mr-1.5">Conexos</span>
              <span className='text-xs'>({t('ConexosLocal')} - Vitória/ES)</span>
            </div>
            <p>{t('ConexosText')}</p>
            <ul className="list-disc list-inside">
              <li>{t("ConexosLi")}</li>
              <li>{t("ConexosLi2")}</li>
              <li>{t("ConexosLi3")}</li>
              <li>{t("ConexosLi4")}</li>
              <li>{t("ConexosLi5")}</li>
            </ul>

            <Tabs.Content value="Conexos" className='mt-10'>
              <div className="flex items-center justify-between gap-1 sm:flex-row flex-col sm:mb-8 md:mb-0">
                <h1 className="font-medium text-xl sm:text-2xl dark:text-gray-dark-400 text-blue-light-100">
                  Estagiário de {t('ConexosTitle')}
                </h1>
                <span className="dark:text-gray-dark-400 text-blue-light-100">Julho 2021 - Setembro 2022</span>
              </div>
              <div className='mt-6 mb-8'>
                <span className="dark:text-blue-dark-100 text-md font-medium text-blue-light-200 mr-1.5">Conexos</span>
                <span className='text-xs'>({t('ConexosLocal')} - Vitória/ES)</span>
              </div>
            </Tabs.Content>

          </Tabs.Content>


        </motion.div>
      </AnimatePresence>
    </Tabs.Root>
  );
};
