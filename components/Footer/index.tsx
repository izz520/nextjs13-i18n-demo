import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { II18n, languages } from '@/app/i18n/settings'
import { useTranslation } from '@/app/i18n'

export const Footer = async ({ lng }:{lng:II18n}) => {
  const { t } = await useTranslation(lng, 'footer')
  console.log("Footer",lng);
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        {/* @ts-ignore */}
        Switch from <strong>{{lng}}</strong> to:{' '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <Link href={`/${l}`}>
              {l}
            </Link>
          </span>
        )
      })}
    </footer>
  )
}