'use client'

import { II18n } from '@/app/i18n/settings'
import { FooterBase } from './FooterBase'
import { useTranslation } from '@/app/i18n/client'

export const Footer = ({ lng }:{lng:II18n}) => {
  const { t } = useTranslation(lng, 'footer')
  return <FooterBase t={t} lng={lng} />
}