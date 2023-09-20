import Image from 'next/image'
import { useTranslation } from '../i18n'
import { Footer } from '@/components/Footer'
import { Suspense } from 'react'
import Link from 'next/link'
import { II18n } from '../i18n/settings'

export default async function Home({ params }: { params: { lng: II18n } }) {
  const lng = params.lng
  const { t } = await useTranslation(lng, "home")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>{lng}</span>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/client-page`}>
        {t('to-client-page')}
      </Link>
      {/* @ts-ignore */}
      <Footer lng={lng} />
    </main>
  )
}
