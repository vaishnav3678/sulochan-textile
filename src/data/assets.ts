import heroKosaSilk from '../assets/images/hero_kosa_silk_1791461433782.jpg';
import artisanAtLoom from '../assets/images/artisan_at_loom_1791461459449.jpg';
import kosaSilkDetail from '../assets/images/kosa_silk_detail_1791461475498.jpg';
import collectionSaree from '../assets/images/collection_saree_1791461495113.jpg';
import dressMaterials from '../assets/images/dress_materials_1791461513222.jpg';
import customSilk from '../assets/images/custom_silk_1791461536227.jpg';
import weavingWorkshop from '../assets/images/weaving_workshop_1791461549750.jpg';
import loomShuttleMacro from '../assets/images/loom_shuttle_macro_1791461572165.jpg';

export const ASSETS = {
  hero: heroKosaSilk,
  artisanAtLoom: artisanAtLoom,
  kosaSilkDetail: kosaSilkDetail,
  collectionSaree: collectionSaree,
  dressMaterials: dressMaterials,
  customSilk: customSilk,
  weavingWorkshop: weavingWorkshop,
  loomShuttleMacro: loomShuttleMacro,
};

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: string;
  craftDetails: string[];
  specs: {
    origin: string;
    weave: string;
    material: string;
    artisanSupport: string;
  };
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'kosa-silk-sarees',
    name: 'Kosa Silk Sarees',
    category: 'Sarees',
    image: collectionSaree,
    shortDesc: 'Pure handloom Kosa silk sarees woven by skilled artisans of Champa, featuring authentic textures and traditional temple borders.',
    fullDesc: 'Crafted with genuine wild silk harvested in Chhattisgarh, each saree is woven on traditional handlooms by master weavers. Renowned for its natural dull-golden sheen, breathability, and distinctive slub texture, Kosa silk sarees embody centuries of artisanal heritage adapted for timeless celebratory occasions.',
    startingPrice: '₹700',
    craftDetails: [
      'Natural wild tassar (Kosa) silk filament',
      'Hand-reeled and hand-spun yarn',
      'Authentic handloom weaving on traditional pit looms',
      'Traditional borders with subtle contemporary geometric adaptation',
      'Supports skilled artisan weaver families in Champa'
    ],
    specs: {
      origin: 'Champa, Chhattisgarh, India',
      weave: 'Handloom Plain & Border Weave',
      material: '100% Traditional Kosa Silk',
      artisanSupport: 'Part of 185+ associated weavers network'
    }
  },
  {
    id: 'dress-materials',
    name: 'Dress Materials',
    category: 'Unstitched Fabrics',
    image: dressMaterials,
    shortDesc: 'Handcrafted Kosa silk unstitched fabric sets and matching dupattas designed for versatile, contemporary ethnic wear.',
    fullDesc: 'Carefully curated unstitched dress materials combining the organic charm of handloom Kosa silk with contemporary cuts. Each set includes handwoven kurta fabrics and textured dupattas, offering a lightweight, cooling drape suitable for all Indian seasons.',
    startingPrice: '₹700',
    craftDetails: [
      'Pure handloom silk yardage with natural slub character',
      'Artisanal texture with rich natural color tones',
      'Includes co-ordinated handloom dupatta with woven selvedge',
      'Adaptable for contemporary kurtas, anarkalis, and modern silhouettes',
      'Direct handloom production from Champa clusters'
    ],
    specs: {
      origin: 'Champa, Chhattisgarh, India',
      weave: 'Handloom Fine Slub Texture',
      material: 'Authentic Chhattisgarh Silk',
      artisanSupport: 'Direct artisan-to-market linkage'
    }
  },
  {
    id: 'customised-silk-textiles',
    name: 'Customised Silk Textiles',
    category: 'Custom & Bespoke',
    image: customSilk,
    shortDesc: 'Bespoke handloom yardages, stoles, and specialized silk textiles customized to client specifications and design requirements.',
    fullDesc: 'Sulochana Dewagan Textile collaborates directly with designers, boutiques, and institutions across India to create customized handloom silk textiles. Utilizing specialized loom settings and traditional craftsmanship, we produce tailored widths, custom border weaves, and exclusive texture runs.',
    startingPrice: '₹700',
    craftDetails: [
      'Customized weave density, border motifs, and widths',
      'Bespoke production runs for fashion labels and trade buyers',
      'Development supported by RAMP design interventions',
      'Strict quality standards supervised by master craftsmen',
      'Nationwide delivery across all over India'
    ],
    specs: {
      origin: 'Champa, Chhattisgarh, India',
      weave: 'Custom Handloom Weave Specifications',
      material: 'Kosa Silk & Blended Traditional Handloom',
      artisanSupport: 'Collaborative artisan development'
    }
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: 'Workshop' | 'Artisan' | 'Textile' | 'Craft';
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Master Weaver at Loom',
    caption: 'Skilled artisan guiding the warp and shuttle at a traditional pit loom in Champa.',
    category: 'Artisan',
    image: artisanAtLoom,
  },
  {
    id: 'g2',
    title: 'Heritage Kosa Silk Saree',
    caption: 'Exquisite handwoven Kosa silk with natural wild sheen and traditional temple border.',
    category: 'Textile',
    image: collectionSaree,
  },
  {
    id: 'g3',
    title: 'Traditional Weaving Workshop',
    caption: 'The vibrant collective workshop supporting 185+ weavers in Chhattisgarh.',
    category: 'Workshop',
    image: weavingWorkshop,
  },
  {
    id: 'g4',
    title: 'Handloom Shuttle & Warp Interlocking',
    caption: 'Precision macro view of hand-reeled silk filaments passing through the reed.',
    category: 'Craft',
    image: loomShuttleMacro,
  },
  {
    id: 'g5',
    title: 'Pure Kosa Silk Dress Materials',
    caption: 'Unstitched handloom yardage and matching dupattas in earthy natural hues.',
    category: 'Textile',
    image: dressMaterials,
  },
  {
    id: 'g6',
    title: 'Wild Kosa Silk Cocoons & Filament',
    caption: 'Traditional wild tassar cocoons harvested from native forests in Chhattisgarh.',
    category: 'Craft',
    image: kosaSilkDetail,
  },
  {
    id: 'g7',
    title: 'Customised Silk Yardage & Stoles',
    caption: 'Bespoke handloom runs prepared for trade partners and bespoke orders.',
    category: 'Textile',
    image: customSilk,
  },
  {
    id: 'g8',
    title: 'Fluid Kosa Silk Drape',
    caption: 'Timeless luxury handloom with genuine artisanal slub texture and golden luster.',
    category: 'Textile',
    image: heroKosaSilk,
  },
];
