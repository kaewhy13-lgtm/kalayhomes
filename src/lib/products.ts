import type { Product } from "./types";

const IMG = "https://lh3.googleusercontent.com/aida-public/";

export const ALL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Muted Clay Vase",
    slug: "muted-clay-vase",
    description: "A beautifully hand-thrown vase with a muted clay finish. Each piece is unique, featuring subtle variations in color and texture that celebrate the beauty of imperfection.",
    price: 85,
    category: "Living",
    variant: "Natural Clay",
    badge: "New",
    imageUrl: IMG + "AB6AXuCUfsAfb5LeqozRovf3XP2vVXVYQCvez38LXAti3T1FB0nOsP9N54WTaD_RbScZLtMkLOhHYQF_p0z6P15Vq_m4XY88IH18_S0fAmehP3zQOIH9gEz0dZX4wgjNXefqawAC25eUlpuGTq1K2W9CHoJfJMjf3XpLPX1LIacYf39cWd696WoyqjhBXjF7y2c8SMSAXdGvcjNZ6-sV_fYrut8GfgiiU8FBFQRbfLKIkWWIwNN1CAXtM6KlTZbHN3u7QPsnF6skrdc3uTc",
    images: [],
    variants: [
      { id: "v1", name: "Natural Clay", colorHex: "#C4956A", priceModifier: 0 },
      { id: "v2", name: "Charcoal", colorHex: "#3C3B3A", priceModifier: 10 },
    ],
  },
  {
    id: "2",
    name: "Stone-Washed Linen Set",
    slug: "stone-washed-linen-set",
    description: "Luxuriously soft stone-washed linen, pre-shrunk and ready for everyday use. The relaxed drape and lived-in texture bring effortless warmth to any room.",
    price: 42,
    category: "Bedroom",
    variant: "Oatmeal",
    imageUrl: IMG + "AB6AXuDNZGxatg_X8Q_KAtpa9nKinsRMuuF0vjgaQug0ZGM9q1SgTd-zRAsur1iiPdsgwcnzYqNYQd2fB2XPuGTacPtjzfkLT4kLPojTsvuUOjKHqtgiquiTCrqcGoGXxFLMQLMzFSPLr_8Sgg9vOfhRgsFjnPLXiNrdHIaJmwDI4-cYmtv-lZf0dwCsYAT5QkW9NKsLmLcWHnxU-1aNeNom21DaBYVJrlsSzwW2iN75NoIw8J1iuRsRdL36Y0jQsEfGvZ3fyX2chLZeBSo",
    images: [],
    variants: [
      { id: "v3", name: "Oatmeal", colorHex: "#E5D5C5", priceModifier: 0 },
      { id: "v4", name: "Sage", colorHex: "#9BAF94", priceModifier: 5 },
    ],
  },
  {
    id: "3",
    name: "Orbital Brass Lamp",
    slug: "orbital-brass-lamp",
    description: "A sculptural brass lamp that doubles as a statement piece. The orbital design casts beautiful shadow patterns while providing warm ambient light.",
    price: 210,
    category: "Living",
    variant: "Aged Brass",
    imageUrl: IMG + "AB6AXuAxzYw-P2S0cFfsC964FkOkQKUEuD6YWcJuJ1ggkm41kj6R0ggoetKtEl_s3OZQP7cW6OydC4L8wqLLsK3qszhOmwd5SPTui1HK7_D1ls5iya6n-CnIGqXdvgAZA5CsSNwpYxDqLEUl7AE4kV91lSjEiWyrQpIT_cUVP3BJdRwyOMZIS5rbd53ADZxMnO_YU_Vd_aX4GUBtTh226hzEguaNvDE5JnhwNkn34DOwr5XH3dbnDyiet0mEn6D7gLQ_gaifNkTnCYHp914",
    images: [],
    variants: [
      { id: "v5", name: "Aged Brass", colorHex: "#B8860B", priceModifier: 0 },
      { id: "v6", name: "Matte Black", colorHex: "#2C2C2C", priceModifier: 0 },
    ],
  },
  {
    id: "4",
    name: "The Solace Chair",
    slug: "the-solace-chair",
    description: "Designed for deep relaxation, The Solace Chair features a sculpted oak frame and plush cushioning wrapped in sustainably sourced fabric.",
    price: 540,
    category: "Living",
    variant: "Warm Oak",
    imageUrl: IMG + "AB6AXuCcWqqx_Bz_HbaNyzWWztrOnD-FqgawOIsVnSYzZtaj9cLLdn4Dglg5RgWjRfkkiBmJbCiOhBcJRcu3uj1RQx6KKXfcojyLfHBcA8LMmlJ-s7mTzxVGNQfmZ_kAqykP48COtVr5qBA35HjwmLMc_acFDiUqUg6XU5ktZAZfj-dHPyurNybxCifR56msWYyZQVCqEfc-43UyCPziulJ2ePqtF7dTPm5cwbSga3guYxTqzPFuzz5t2SP07iFuJNHGk-45pbvjYD_wn5Q",
    images: [],
    variants: [
      { id: "v7", name: "Warm Oak", colorHex: "#D2B48C", priceModifier: 0 },
      { id: "v8", name: "Walnut", colorHex: "#5C4033", priceModifier: 40 },
    ],
  },
  {
    id: "5",
    name: "Earthbound Dinner Plate",
    slug: "earthbound-dinner-plate",
    description: "Hand-thrown dinner plate with a matte sand glaze. The organic shape and earthy tones make every meal feel like a special occasion.",
    price: 42,
    category: "Plates",
    variant: "Matte Sand Glaze",
    imageUrl: IMG + "AB6AXuAdMoT-eQaSWSnZ9FmU2VAU2gz7i84kDnwwPRmIVisOagrgBUSAJxbq2oJ2FCoixsiaHF8Jirve62zvpPRWSF8WYR8eyrED9j1gjCZMzC2digz_k-5Nv3zm34CE-Z1YaLgo1G9D_J8ev_V2Fbewy7SfrXUem57w191CC2yEugzptbuZ3VgvgbcFiOWDDBJuRPFSfuzVyfUL8HMDLvUnx_LnruFMI4Pv8xipqxaQNw0dxqFghdJliZFTDeVg0ogAI_K9Ox0c01G_F2M",
    images: [],
    variants: [
      { id: "v9", name: "Sand", colorHex: "#F4F1EC", priceModifier: 0 },
      { id: "v10", name: "Clay", colorHex: "#E5D5C5", priceModifier: 0 },
    ],
  },
  {
    id: "6",
    name: "Cereal Bowl Set",
    slug: "cereal-bowl-set",
    description: "A set of four hand-thrown cereal bowls in terracotta and cream. Perfect for morning rituals and quiet breakfasts.",
    price: 78,
    category: "Bowls",
    variant: "Terracotta & Cream",
    imageUrl: IMG + "AB6AXuCz_skRDkQJ2_URZSKsICWHQNJa-GmQYnC_LKfL44-eXMGP70z6NpJmxaogZyu5cda-0CwP56mEeyJYYZg77W42C3GKwVZZrAEJKB8R8tj0UgkpcTl9vu6rO19vJWFxc0jg2Bzs941rj0lz_NYMl8w0bp59kb2jcAxCy_d021ZfbRmALsCV15VkQKsRsoxJRmizx_HE57Ip6H9yk4J_bxWGl94JuuVS9Z8-oO0TaD0-x1alT8-Cs9Zlru8_kstO8Qj6hR22EDfa43o",
    images: [],
    variants: [
      { id: "v11", name: "Terracotta", colorHex: "#C4956A", priceModifier: 0 },
      { id: "v12", name: "Cream", colorHex: "#F5F0E8", priceModifier: 0 },
    ],
  },
  {
    id: "7",
    name: "Ocean Spray Pitcher",
    slug: "ocean-spray-pitcher",
    description: "A limited edition pitcher with a speckled stone glaze reminiscent of ocean spray on coastal rocks. Each piece is truly one-of-a-kind.",
    price: 95,
    category: "Serving",
    variant: "Speckled Stone",
    badge: "Limited Edition",
    imageUrl: IMG + "AB6AXuDXkV7C5lSgDorWImt-0PmHcNOoCx1CoeIEMr06e1HHe22butY4GV8JxHENjScGXLvyic1FjoezhZJ7ctUiCkbEGNEe7U1vrcKU9dUNWz5iVvQWcgyZ-WRFfOts18hbgr_PNdclW0AvxX1BodFshty2ESHD-H2udjDDrkPnFhz9dbNyrFyopOQ-ADnsRvnob5a_We11FO91ip3acrFCfDSLjYwvIQ7juGIO8HSlybC0rBar2q7vYgeSfGI49ii9kzBLFd9iHcZ8hsI",
    images: [],
    variants: [
      { id: "v13", name: "Speckled Stone", colorHex: "#8B9DAF", priceModifier: 0 },
    ],
  },
  {
    id: "8",
    name: "Basalt Espresso Pair",
    slug: "basalt-espresso-pair",
    description: "A pair of espresso cups in a deep charcoal matte finish. The minimalist form celebrates the ritual of coffee.",
    price: 34,
    category: "Drinkware",
    variant: "Charcoal Matte",
    imageUrl: IMG + "AB6AXuBF4NBhcIFXBQQhdT49zbFh4ZOZVmjvKe8Z6FwbSbZ9c5gM0Rxp5kUOlifT95urBNopG_aye5IX2E_c9i_fzQI-0S3CrcIDsaF9nk-gNEc_Ak-KHrFvQHrLnqWjYK8Hdzv64OajrDEMXXZNb7-DYDWpasH_oT2YE8D7romlBQhQpWK6h3oGFq23ZdFQskrqR3C-UJtjltMPmwE7snZ-FV56s6dpSTET0UIxKUAKDBJTUgzNEuWPdNgdW10thOD0o0zGsPznRFNF5jc",
    images: [],
    variants: [
      { id: "v14", name: "Charcoal", colorHex: "#3C3B3A", priceModifier: 0 },
      { id: "v15", name: "Cream", colorHex: "#F5F0E8", priceModifier: 0 },
    ],
  },
  {
    id: "9",
    name: "Lichen Serving Platter",
    slug: "lichen-serving-platter",
    description: "A generous serving platter in sage green gloss. The organic shape and lush glaze bring nature to your table.",
    price: 110,
    category: "Serving",
    variant: "Sage Green Gloss",
    imageUrl: IMG + "AB6AXuDjzeF60AgKn88gFfevYrViZTZFh09mPs9BPpztlveu94CctFJP-WOLGwucaJigTUpIEDEYF3PJkHwJwhfCcux9gXgv4DlXnCesREybVIjceMGpy4EpqH3ly143ZPsweGzAhHDrY3bwXLv0cvwmz39ayMoEe_Dwt1uZuWUZPvlPAQ-naXFNLaNwi-_SsoQmjrkRmpFtCa5Pr3HCHHiHhA9sivsY__fqJ-nnGyOWVzNc9tRtCdHy0mZ8naOW2f2NyJKftUarX6Ot54A",
    images: [],
    variants: [
      { id: "v16", name: "Sage Green", colorHex: "#9BAF94", priceModifier: 0 },
    ],
  },
  {
    id: "10",
    name: "Fluted Morning Mug",
    slug: "fluted-morning-mug",
    description: "Start your day with intention. This fluted mug in oatmeal ribbed finish fits perfectly in your hands.",
    price: 38,
    category: "Drinkware",
    variant: "Oatmeal Ribbed",
    imageUrl: IMG + "AB6AXuAKsu67MuP1zgJ_l1K7EQWG0F8sNr-e_g-rv80ob8dxC1xU4VlCCDiAlK9lTlObUjwlMYa75BnVE2WBwbZfcxwfDcGoXYp2Kat-CRm7tFp4biemxkTPo04nYKDMm8ygBFBaQEYJ2oUXYfJ2A5UpED2gZMkshsezrD7lR5cu5WDI-kPiTZ6Dy_bZqVCOdif_v7MVnUWyJ2FEeASvspaENRTGIcg3QnGT1q6gVhf0k1aIYy3fCNefj4QtZunhUF5kXkUuKVYR1MpZH3g",
    images: [],
    variants: [
      { id: "v17", name: "Oatmeal", colorHex: "#E5D5C5", priceModifier: 0 },
      { id: "v18", name: "Moss", colorHex: "#6B7B5E", priceModifier: 0 },
    ],
  },
  {
    id: "11",
    name: "The Terra Shallow Bowl",
    slug: "terra-bowl",
    description: "Each Terra bowl is individually hand-thrown in our Kyoto studio. The unique glaze is inspired by the soft morning mist over the Kamo River, resulting in a matte finish that feels remarkably warm to the touch.",
    price: 124,
    category: "Bowls",
    variant: "Morning Mist",
    badge: "Handcrafted",
    imageUrl: IMG + "AB6AXuAro4ATa12aENHKjW0dGPNvr7dCyQBsn8uvclQyky9T0u_Hez_dJi_ncbntVxTc3CrgIZTwmfgL1Xq5-3Hv3ZJTBq-WObYQhvAaNgEFKyq4lcH3CNKtCXWaH5EjQ1g4OVcNlIqRUhBYZ9HcQ6p2v0UQ3U_2WSx6EQiUuD-TG4kNfVlD354vh8IxegjCFj630-HMoZaDvRkJ2pTjWylo6z5eg_qXzU4Hrm7qkWUmDwZ6q_qtnjx8Mkeo-h-UJM-p8gbbcuDO897RK0s",
    images: [
      IMG + "AB6AXuAfIv0iIesoe7BnQzsVd1Pk7CXnq-2Jo-r14QDOrikznGfKio0V683zSuBQZitFQot8S490O9bd4IxbFmUu-GXH2v039canrsR_QCI4SB6vCNNNp4FPo2tCK4GqqDehADkgv-d5CeBOYVaD4aT5Hhugvw54lyJezvFyhnwWc-kNLVy2YsVoPHKfnyY1e18s-HRmtZu-wBjJ-cRmc2Mo9LO0Wl4tgUrxvrUBSXRm9ukuYCS345vl7eNYiK2eg0Uy5Y1XuiD0J2Vby_s",
      IMG + "AB6AXuC3aQxYyRN0xU8n7RLDP1ULfmFSgyLijc-p66aJO_McfLd7rKGtTgdRQ2bXWExOeHsU6nZ-jxxZen0uYkptIFE4HksOu0_QbZdGFjRpijBc4cCiQZuzyFWoext3ql6j1dJ1tnvthuiIHdXJ7g0l5EJUwdyEMjWSxcmyL0B52-exnp6OmGdry0pcbQhjj6nFFXTP1fMyBKLsJUMq1nVgThBko6S_PQnYZYNjoHnRnmHXex9vqBDTV0DeXeN-09hVLv3ZafLsIvk0fnw",
    ],
    variants: [
      { id: "v19", name: "Morning Mist", colorHex: "#F4F1EC", priceModifier: 0 },
      { id: "v20", name: "Desert Clay", colorHex: "#E5D5C5", priceModifier: 0 },
      { id: "v21", name: "Midnight Onyx", colorHex: "#3C3B3A", priceModifier: 15 },
    ],
  },
  {
    id: "12",
    name: "Pure Linen Throw",
    slug: "pure-linen-throw",
    description: "A generous pure linen throw blanket, pre-washed for ultimate softness. Drape it over a chair or at the foot of the bed for instant warmth.",
    price: 124,
    category: "Bedroom",
    variant: "Oatmeal / Large",
    imageUrl: IMG + "AB6AXuCdFm-swY3Wmvr9uLDTZLX7D3qgbnLkcU3qKcfAMg31_CGOY36g4C1LtKiZ1mXO93w8NZARCeqPTUkSGmSFFLbTNG7qwLkOtCbroDVhvudoZ9QOu3KBYO_8C762UW3h0M1UPSdyaZIWAprDakdRckiBMbxthWI5FcXx2_nfg1jRetJ1iETgPf5ZsIpEFeRQdVJRNMF74svAnS3lqOpGXZhLuejVSS4I5hdomb-HAWyRlU5PfedqW6_T6NdD3TjmqfKdiSzE_wc-Jz4",
    images: [],
    variants: [
      { id: "v22", name: "Oatmeal", colorHex: "#E5D5C5", priceModifier: 0 },
      { id: "v23", name: "Charcoal", colorHex: "#4A4A4A", priceModifier: 0 },
    ],
  },
  {
    id: "13",
    name: "Cedar & Moss Soy Candle",
    slug: "cedar-moss-candle",
    description: "Hand-poured soy candle with notes of cedarwood, moss, and subtle vanilla. Set of 3 in reusable ceramic vessels.",
    price: 62,
    category: "Living",
    variant: "Set of 3",
    imageUrl: IMG + "AB6AXuANe1VlR5Sz6Oe_ngtnx31TQs6kF9_c1t6gUG-w9aSgwgGT3Vsp-GtKasZYTX5-VaGHRDj1bCVoU2B0IeXcFWUrgngLDPEUtizEfnAOxFeTmYoivtH1dL8Fu44pl0GLVmNtOHJH6OJi1CCVv7k9MYzh_huj2H5LyvHHMrKR7w4mEWRg9OTPdLvNoRXD8SVpYrX4rHoq6mUfoTc3hFz0UUBuuz3nVgPcDAy4pH4myDQu7U1CeeQEGRi_s0GlfiTXmDtgs7usx56Ph8I",
    images: [],
    variants: [
      { id: "v24", name: "Cedar & Moss", colorHex: "#6B7B5E", priceModifier: 0 },
    ],
  },
];

export function getProducts(): Product[] {
  return ALL_PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === "All Items") return ALL_PRODUCTS;
  return ALL_PRODUCTS.filter((p) => p.category === category);
}

export function getNewArrivals(count = 4): Product[] {
  return ALL_PRODUCTS.slice(0, count);
}

export function getRelatedProducts(currentSlug: string, count = 4): Product[] {
  return ALL_PRODUCTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
