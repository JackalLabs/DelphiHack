import type { BrandPreviewProps } from 'components/BrandPreview'
import { BrandPreview } from 'components/BrandPreview'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { withMetadata } from 'utils/layout'

const ASSETS: BrandPreviewProps[] = [
  {
    name: 'Slate NFT',
    id: 'brand',
    url: 'brand/brand.svg',
    Asset: dynamic(() => import('public/brand/brand.svg')),
  },
  {
    name: 'Slate NFT Bust',
    id: 'brand-bust',
    url: 'brand/brand-bust.svg',
    Asset: dynamic(() => import('public/brand/brand-bust.svg')),
  },
  {
    name: 'Slate NFT Text',
    id: 'brand-text',
    url: 'brand/brand-text.svg',
    Asset: dynamic(() => import('public/brand/brand-text.svg')),
  },
]

const BrandPage: NextPage = () => {
  return (
    <section className="p-8 pb-16 space-y-8">
      <NextSeo title="Brand Assets" />

      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Brand Assets</h1>
        <p>View and download Slate NFT brand assets</p>
      </div>

      <hr className="black/20" />

      {ASSETS.map((props, i) => (
        <BrandPreview key={`asset-${i}`} {...props} />
      ))}
    </section>
  )
}

export default withMetadata(BrandPage, { center: false })
