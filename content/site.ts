export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'nails' | 'bridal' | 'spa';
  description: string;
  priceFormatted: string;
  priceValue: number;
  durationMinutes: number;
  isStartingPrice?: boolean;
}

export interface SignatureTreatment {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  includes: string[];
  imageBrief: string;
}

export interface BridalTier {
  id: string;
  name: string;
  tagline: string;
  priceFormatted: string;
  duration: string;
  features: string[];
  highlight?: boolean;
}

export interface Stylist {
  id: string;
  name: string;
  speciality: string;
  experienceYears: number;
  bio: string;
  imageBrief: string;
  aspectRatio: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  cadence: string;
  priceFormatted: string;
  period: string;
  description: string;
  benefits: string[];
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  service: string;
  city: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  aspect: string;
  imageBrief: string;
}

export const siteContent = {
  meta: {
    title: "Noor Salon & Spa — Civil Lines, Kanpur",
    description: "An unhurried sanctuary for bespoke haircuts, French skin rituals, handcrafted nail architecture, and couture bridal artistry in Kanpur.",
  },
  nap: {
    name: "Noor Salon & Spa",
    establishedYear: 2014,
    city: "Kanpur",
    neighborhood: "Civil Lines",
    address: "14/82 Civil Lines, Opposite Green Park Stadium, Kanpur, Uttar Pradesh 208001",
    phoneDisplay: "+91 90000 00000",
    phoneRaw: "+919000000000",
    whatsappNumber: "919000000000",
    instagramHandle: "@noorsalonkanpur",
    instagramUrl: "https://instagram.com/noorsalonkanpur",
    hours: [
      { days: "Tuesday – Saturday", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "11:00 AM – 7:00 PM" },
      { days: "Monday", time: "Reserved for deep sanitization & private trials" },
    ],
  },
  navigation: {
    leftLinks: [
      { label: "Treatments", href: "#services" },
      { label: "Signatures", href: "#signatures" },
      { label: "Bridal Suite", href: "#bridal" },
    ],
    rightLinks: [
      { label: "Atelier Artists", href: "#stylists" },
      { label: "Lookbook", href: "#gallery" },
      { label: "Visit", href: "#visit" },
    ],
    cta: {
      label: "Book Appointment",
      href: "#booking",
    },
  },
  hero: {
    eyebrow: "Since 2014 / Civil Lines, Kanpur",
    titleLine1: "Beauty,",
    titleLine2: "unhurried.",
    description:
      "A quiet studio space where deliberate technique meets thoughtful hospitality. We shape hair, restore skin, and prepare brides with disciplined precision.",
    cta: {
      label: "Reserve Your Chair",
      href: "#booking",
    },
    verticalLabel: "Atelier Noor / 26.4716° N, 80.3475° E",
    portraitBrief:
      "Indian woman with softly swept natural waves, candid editorial three-quarter profile, raw window light, muted linen backdrop, quiet confidence, no heavy retouch.",
  },
  intro: {
    eyebrow: "Our Practice",
    heading: "We do not believe in conveyor-belt salon visits.",
    paragraph:
      "Noor was built as a quiet counterweight to loud, hurried salons. We allocate generous appointment blocks so every haircut begins with a genuine conversation about texture and routine. Every facial follows a diagnostic consultation, and bridal styling is treated as bespoke tailoring.",
    pullQuote:
      "“True craft requires time. We protect the quiet pace of our work so you leave with style that endures long past your appointment.”",
    author: "Zoya Siddiqui",
    role: "Founder & Creative Director",
    image1Brief:
      "Close-up of hair shears resting on warm honed stone slab with soft natural window shadows, editorial still life.",
    image2Brief:
      "Senior aesthetician gently preparing botanical serum with glass dropper into ceramic mixing dish, quiet daylight.",
  },
  services: {
    eyebrow: "Menu of Services",
    title: "Treatments & Grooming",
    subtitle: "Transparent pricing. Generous consultation time included with every reservation.",
    categories: [
      { key: "hair", label: "Hair" },
      { key: "skin", label: "Skin" },
      { key: "nails", label: "Nails" },
      { key: "bridal", label: "Bridal" },
      { key: "spa", label: "Spa" },
    ] as const,
    items: [
      // Hair
      {
        id: "hair-1",
        category: "hair",
        name: "Precision Haircut & Blowdry",
        description: "Includes structural texture analysis, scalp massage, and custom thermal styling.",
        priceFormatted: "₹600",
        priceValue: 600,
        durationMinutes: 45,
      },
      {
        id: "hair-2",
        category: "hair",
        name: "Global French Gloss Colour",
        description: "Ammonia-free conditioning formula balancing depth, warmth, and reflective shine.",
        priceFormatted: "from ₹3,500",
        priceValue: 3500,
        durationMinutes: 120,
        isStartingPrice: true,
      },
      {
        id: "hair-3",
        category: "hair",
        name: "Bespoke Balayage / Babylights",
        description: "Hand-painted dimensional placement tailored to your facial architecture and natural part.",
        priceFormatted: "from ₹5,500",
        priceValue: 5500,
        durationMinutes: 180,
        isStartingPrice: true,
      },
      {
        id: "hair-4",
        category: "hair",
        name: "Keratin Smooth Shield",
        description: "Deep micro-protein infusion that tames humidity frizz while preserving natural bounce.",
        priceFormatted: "from ₹4,500",
        priceValue: 4500,
        durationMinutes: 150,
        isStartingPrice: true,
      },
      {
        id: "hair-5",
        category: "hair",
        name: "Moroccan Oil Hydration Ritual",
        description: "Intense argan treatment under warm micro-mist to restore dry or chemically treated strands.",
        priceFormatted: "₹1,800",
        priceValue: 1800,
        durationMinutes: 60,
      },
      {
        id: "hair-6",
        category: "hair",
        name: "Men's Architectural Cut & Beard Sculpt",
        description: "Scissor-over-comb silhouette tailoring with hot towel botanical balm finish.",
        priceFormatted: "₹750",
        priceValue: 750,
        durationMinutes: 45,
      },

      // Skin
      {
        id: "skin-1",
        category: "skin",
        name: "French Radiance Facial",
        description: "Signature drainage massage, enzyme exfoliation, and cool collagen sheet therapy.",
        priceFormatted: "from ₹1,800",
        priceValue: 1800,
        durationMinutes: 60,
        isStartingPrice: true,
      },
      {
        id: "skin-2",
        category: "skin",
        name: "Sothys Paris Illuminating Facial",
        description: "Imported botanical extracts targeting hyperpigmentation, uneven tone, and dullness.",
        priceFormatted: "₹3,400",
        priceValue: 3400,
        durationMinutes: 75,
      },
      {
        id: "skin-3",
        category: "skin",
        name: "Deep Pore Clarifying Cleanse",
        description: "Ultrasonic extractions, charcoal detox mask, and high-frequency antibacterial calming.",
        priceFormatted: "₹2,200",
        priceValue: 2200,
        durationMinutes: 60,
      },
      {
        id: "skin-4",
        category: "skin",
        name: "24K Gold Leaf Firming Infusion",
        description: "Pure cosmetic gold leaf and peptide micro-massage stimulating elasticity.",
        priceFormatted: "₹4,200",
        priceValue: 4200,
        durationMinutes: 90,
      },
      {
        id: "skin-5",
        category: "skin",
        name: "Hydra Shield Barrier Repair",
        description: "Ceramide replenishment designed specifically for seasonal climate shifts in Kanpur.",
        priceFormatted: "₹2,600",
        priceValue: 2600,
        durationMinutes: 60,
      },
      {
        id: "skin-6",
        category: "skin",
        name: "Gentleman's Clarifying Face Treatment",
        description: "Targeted ingrown hair relief, deep sonic cleansing, and mattifying hydration.",
        priceFormatted: "₹1,900",
        priceValue: 1900,
        durationMinutes: 50,
      },

      // Nails
      {
        id: "nails-1",
        category: "nails",
        name: "Russian Dry Manicure & BIAB Gel",
        description: "Flawless cuticle refinement with builder gel overlay for resilient natural growth.",
        priceFormatted: "₹1,800",
        priceValue: 1800,
        durationMinutes: 75,
      },
      {
        id: "nails-2",
        category: "nails",
        name: "Rose Petal Luxury Spa Pedicure",
        description: "Warm milk soak, Himalayan salt scrub, callused sole restoration, and paraffin pack.",
        priceFormatted: "₹1,400",
        priceValue: 1400,
        durationMinutes: 60,
      },
      {
        id: "nails-3",
        category: "nails",
        name: "Editorial Hand-Painted Nail Art",
        description: "Delicate micro-florals, negative space chrome, or custom minimalist linework.",
        priceFormatted: "from ₹800",
        priceValue: 800,
        durationMinutes: 45,
        isStartingPrice: true,
      },
      {
        id: "nails-4",
        category: "nails",
        name: "Soft Gel Sculpted Extensions (Full Set)",
        description: "Lightweight, non-damaging extensions shaped to your natural finger proportions.",
        priceFormatted: "₹2,800",
        priceValue: 2800,
        durationMinutes: 90,
      },
      {
        id: "nails-5",
        category: "nails",
        name: "Classic Groomed Manicure & Buff",
        description: "Nail shaping, cuticle treatment, and glass-file high gloss natural shine.",
        priceFormatted: "₹700",
        priceValue: 700,
        durationMinutes: 35,
      },

      // Bridal
      {
        id: "bridal-1",
        category: "bridal",
        name: "Couture Wedding Day Artistry",
        description: "Complete signature HD or airbrush bridal makeup, dupatta draping, and hair sculpting.",
        priceFormatted: "On Request",
        priceValue: 35000,
        durationMinutes: 240,
      },
      {
        id: "bridal-2",
        category: "bridal",
        name: "Engagement & Sangeet Styling",
        description: "Contemporary evening glam with camera-tested skin finish and ornate hair styling.",
        priceFormatted: "On Request",
        priceValue: 18000,
        durationMinutes: 180,
      },
      {
        id: "bridal-3",
        category: "bridal",
        name: "Bridal Skin Preparation Suite (3 Sessions)",
        description: "A 4-week structured skin regimen to achieve a calm, luminous bridal complexion.",
        priceFormatted: "₹9,500",
        priceValue: 9500,
        durationMinutes: 180,
      },
      {
        id: "bridal-4",
        category: "bridal",
        name: "Private Bridal Trial & Consultation",
        description: "2-hour dedicated studio trial testing lighting, lip pairings, and hair foundations.",
        priceFormatted: "₹4,000",
        priceValue: 4000,
        durationMinutes: 120,
      },
      {
        id: "bridal-5",
        category: "bridal",
        name: "Groom's Wedding Day Grooming",
        description: "Discreet complexion balancing, beard alignment, precision styling, and brow cleanup.",
        priceFormatted: "₹3,500",
        priceValue: 3500,
        durationMinutes: 60,
      },

      // Spa
      {
        id: "spa-1",
        category: "spa",
        name: "Balinese Deep Tissue Tension Release",
        description: "Firm acupressure strokes and warm herbal compress focusing on spinal tension.",
        priceFormatted: "₹2,800",
        priceValue: 2800,
        durationMinutes: 60,
      },
      {
        id: "spa-2",
        category: "spa",
        name: "Warm Saffron & Almond Body Polish",
        description: "Gentle natural exfoliation followed by cold-pressed Kashmiri almond oil infusion.",
        priceFormatted: "₹3,200",
        priceValue: 3200,
        durationMinutes: 75,
      },
      {
        id: "spa-3",
        category: "spa",
        name: "Aromatherapy Stress Relief Session",
        description: "Custom-blended French lavender and sandalwood oils with rhythmic soothing motions.",
        priceFormatted: "₹2,500",
        priceValue: 2500,
        durationMinutes: 60,
      },
      {
        id: "spa-4",
        category: "spa",
        name: "Foot Reflexology & Calming Tea Ritual",
        description: "Targeted pressure point stimulation relieving travel and long standing fatigue.",
        priceFormatted: "₹1,200",
        priceValue: 1200,
        durationMinutes: 45,
      },
    ] as ServiceItem[],
  },
  signatureTreatments: [
    {
      id: "sig-1",
      number: "01",
      title: "The Civil Lines Hair Ritual",
      subtitle: "Scalp Diagnostics + French Gloss + Micro-Trim",
      description:
        "Designed for Kanpur's unique water and dust exposure. We analyze your scalp under 50x magnification, treat follicle build-up with thermal zinc clay, restore moisture with pure argan oil, and finish with a bespoke micro-trim.",
      duration: "105 minutes",
      price: "₹4,200",
      includes: [
        "Digital scalp condition assessment",
        "Thermal clay detox massage",
        "Ammonia-free French gloss infusion",
        "Dry architectural micro-trim",
        "Cold blowdry finish with silk drops",
      ],
      imageBrief:
        "Editorial shot of an artisan shampoo basin area in warm alabaster stone, clean linen towels folded with brass clips, soft sunlight.",
    },
    {
      id: "sig-2",
      number: "02",
      title: "The Noor Luminous Facial",
      subtitle: "Lymphatic Drainage + 24K Leaf Therapy",
      description:
        "Our signature restorative skin treatment. Uses manual lymphatic drainage to relieve fluid retention, followed by gentle lactic peel exfoliation and genuine 24-karat cosmetic gold leaf pressed directly into the epidermal barrier.",
      duration: "90 minutes",
      price: "₹4,800",
      includes: [
        "Double oil-to-milk botanical cleanse",
        "Contour lymphatic facial massage",
        "Pure 24K gold foil application",
        "Cryo-globe soothing seal",
        "Hyaluronic barrier shield SPF 50",
      ],
      imageBrief:
        "Close-up of gentle hands with delicate gold rings applying a luminous sheer mask with a flat brush on an Indian woman's cheekbone, side lighting.",
    },
    {
      id: "sig-3",
      number: "03",
      title: "The Pre-Couture Bridal Day",
      subtitle: "Full Body Polish + Russian Mani + Express Facial",
      description:
        "A private half-day sanctuary reservation 48 hours prior to wedding ceremonies. No hurried rushing—just disciplined restorative steps preparing your hands, skin, and mind.",
      duration: "4 hours",
      price: "₹12,500",
      includes: [
        "Warm almond & saffron body polish",
        "Russian dry manicure with BIAB gel",
        "Rose petal milk bath pedicure",
        "Sothys moisture recharge facial",
        "Private suite access with fresh Kashmiri kahwa",
      ],
      imageBrief:
        "Quiet bridal suite corner with an ornate mirror reflecting a delicate hand-embroidered dupatta on warm wood, no clutter.",
    },
  ] as SignatureTreatment[],
  bridal: {
    eyebrow: "The Bridal Atelier",
    title: "Couture Bridal Packages",
    description:
      "We dress and paint brides with architectural restraint. No cakey masking, no cookie-cutter looks. We build on your natural bone structure and pair with your heirloom jewellery.",
    trialNote: "Private bridal trials are hosted every Tuesday and Wednesday in our private mezzanine suite.",
    tiers: [
      {
        id: "tier-engagement",
        name: "The Engagement Edit",
        tagline: "Sophisticated, modern, evening-ready.",
        priceFormatted: "₹18,000",
        duration: "3 hours",
        features: [
          "Bespoke HD complexion styling",
          "Hair architecture with floral accents",
          "Signature lash placement",
          "Dupatta / drape pin placement",
          "Touch-up miniature kit for the evening",
        ],
      },
      {
        id: "tier-wedding",
        name: "The Wedding Day (Signature)",
        tagline: "Our definitive couture bridal standard.",
        priceFormatted: "₹38,000",
        duration: "4.5 hours",
        highlight: true,
        features: [
          "Private bridal suite reservation",
          "Airbrush or Ultra-HD micro-coverage",
          "Sculpted bridal bun or open waves",
          "Heirloom jewelry & double dupatta draping",
          "Includes 90-minute pre-wedding studio trial",
          "Dedicated touch-up artist on site for 1 hour",
        ],
      },
      {
        id: "tier-reception",
        name: "The Reception & Gala",
        tagline: "High-fashion glamour for the final celebration.",
        priceFormatted: "₹24,000",
        duration: "3.5 hours",
        features: [
          "Chiseled editorial contour finish",
          "Glamour hair styling with luxury extensions",
          "Dramatic eye contour & custom lash build",
          "Saree / lehenga couture pleating",
          "Long-wear setting mist for late hours",
        ],
      },
    ] as BridalTier[],
  },
  stylists: {
    eyebrow: "Our Team",
    title: "Senior Atelier Artists",
    subtitle: "Every specialist brings a minimum of seven years of rigorous salon discipline.",
    list: [
      {
        id: "zoya",
        name: "Zoya Siddiqui",
        speciality: "Creative Director & Bridal Specialist",
        experienceYears: 12,
        bio: "Trained at Toni & Guy London. Zoya specializes in bespoke bridal architecture and French haircutting techniques.",
        imageBrief:
          "Portrait of an Indian woman in her late 30s, crisp charcoal linen blazer, quiet editorial gaze, studio daylight.",
        aspectRatio: "aspect-[3/4]",
      },
      {
        id: "kabir",
        name: "Kabir Verma",
        speciality: "Master Colorist & Balayage Artist",
        experienceYears: 9,
        bio: "L'Oréal Professionnel certified. Known across Kanpur for custom dimensional balayage that blends cleanly as it grows.",
        imageBrief:
          "Portrait of an Indian man with neat classic haircut, rolled sleeves, focused expression holding color board, soft backdrop.",
        aspectRatio: "aspect-[4/5]",
      },
      {
        id: "meera",
        name: "Meera Sen",
        speciality: "Senior Aesthetician & Skin Diagnostician",
        experienceYears: 11,
        bio: "CIDESCO diploma holder. Meera leads our French facial protocols and bespoke pre-bridal skin regimens.",
        imageBrief:
          "Portrait of a composed Indian woman with sleek low bun, warm neutral shirt, warm side profile, clean natural skin.",
        aspectRatio: "aspect-[3/4]",
      },
      {
        id: "arjun",
        name: "Arjun Nair",
        speciality: "Texture Architect & Precision Barber",
        experienceYears: 8,
        bio: "Specialist in razor cuts, beard contouring, and restoring damaged, chemical-treated hair texture.",
        imageBrief:
          "Portrait of a young Indian man with neat beard, focused eyes, neutral studio light, clean minimal styling.",
        aspectRatio: "aspect-[1/1]",
      },
    ] as Stylist[],
  },
  booking: {
    eyebrow: "Online Reservation",
    title: "Reserve Your Appointment",
    subtitle: "Select your treatments and preferences below. We will confirm your exact slot via WhatsApp.",
    timeSlots: [
      "10:00 AM",
      "11:30 AM",
      "01:00 PM",
      "02:30 PM",
      "04:00 PM",
      "05:30 PM",
      "07:00 PM",
    ],
  },
  gallery: {
    eyebrow: "Portfolio",
    title: "Lookbook & Recent Work",
    subtitle: "Captured unretouched under studio daylight in Civil Lines.",
    items: [
      {
        id: "gal-1",
        title: "Caramel Melt Balayage",
        category: "Hair Colour",
        caption: "Seamless hand-painted honey ribbons on deep Indian espresso hair.",
        aspect: "aspect-[3/4]",
        imageBrief:
          "Back view of long wavy espresso hair with subtle caramel and honey balayage ribbons, natural window light.",
      },
      {
        id: "gal-2",
        title: "The Royal Awadh Bride",
        category: "Bridal Artistry",
        caption: "Minimalist glowing skin paired with antique polki jewelry and crimson veil.",
        aspect: "aspect-[4/5]",
        imageBrief:
          "Side profile of an Indian bride with clean dewy makeup, kohl rimmed eyes, antique gold jewelry, sheer dupatta.",
      },
      {
        id: "gal-3",
        title: "Russian Glaze Manicure",
        category: "Nails",
        caption: "Translucent oyster pearl chrome on natural structured square tips.",
        aspect: "aspect-[1/1]",
        imageBrief:
          "Close up of manicured hands holding an unglazed ceramic cup, pearl chrome gel finish, crisp cuticles.",
      },
      {
        id: "gal-4",
        title: "French Bob with Soft Fringe",
        category: "Precision Haircut",
        caption: "Jawline-hugging silhouette cut dry for everyday effortless texture.",
        aspect: "aspect-[3/4]",
        imageBrief:
          "Editorial side angle of an Indian woman with an architectural chin-length French bob and soft wispy fringe.",
      },
      {
        id: "gal-5",
        title: "Dewy Glass Complexion",
        category: "Skin Therapy",
        caption: "Immediate post-treatment radiance following the 24K gold leaf infusion.",
        aspect: "aspect-[4/5]",
        imageBrief:
          "Fresh close-up of healthy, hydrated, luminous skin on high cheekbone, clean studio light, no foundation.",
      },
    ] as GalleryItem[],
  },
  memberships: {
    eyebrow: "Privilege Program",
    title: "Studio Memberships",
    subtitle: "For patrons who prioritize consistent maintenance and unhurried appointments.",
    plans: [
      {
        id: "glow-monthly",
        name: "The Glow Club",
        cadence: "Monthly Commitment",
        priceFormatted: "₹2,999",
        period: "per month",
        description: "Ideal for monthly skin reset and regular haircut maintenance.",
        benefits: [
          "1 Signature Facial or Spa Ritual every month",
          "1 Precision Haircut & Thermal Blowdry included",
          "15% privilege discount across all retail haircare",
          "Priority weekend booking slots (48-hour hold)",
          "Complimentary hot oil scalp add-on each visit",
        ],
      },
      {
        id: "annual-circle",
        name: "The Noor Circle",
        cadence: "Annual Patronage",
        priceFormatted: "₹28,000",
        period: "per year",
        description: "Comprehensive year-round grooming and salon privileges for you and one family member.",
        benefits: [
          "12 Custom Haircuts & 12 French Express Facials",
          "4 Complimentary Luxury Spa Pedicures",
          "25% privilege discount on all Bridal & Pre-Bridal packages",
          "Unlimited complimentary blowdry sessions with any service",
          "Direct WhatsApp hotline to Creative Director Zoya",
          "Transferable privilege card for one immediate family member",
        ],
      },
    ] as MembershipPlan[],
  },
  reviews: [
    {
      id: "rev-1",
      quote:
        "“Finding a salon in Kanpur that doesn't push ten unnecessary bleach products on you was a revelation. Zoya listened to what I wanted for 15 minutes before even touching a comb. My haircut grows out so beautifully.”",
      author: "Radhika Singhania",
      service: "Precision Haircut & French Gloss",
      city: "Swaroop Nagar, Kanpur",
    },
    {
      id: "rev-2",
      quote:
        "“My bridal makeup was everything I prayed for: radiant, weightless, and it survived 7 hours of emotional ceremonies under heavy lights without cracking. They treated my mother with such warmth as well.”",
      author: "Ananya Bajpai",
      service: "The Wedding Day Bridal Package",
      city: "Civil Lines, Kanpur",
    },
    {
      id: "rev-3",
      quote:
        "“The Balinese deep tissue massage and scalp detox completely melted away months of desk work strain. The aesthetic is serene, quiet, and wonderfully unpretentious.”",
      author: "Vikramaditya Tandon",
      service: "Balinese Deep Tissue & Scalp Detox",
      city: "Cantt, Kanpur",
    },
    {
      id: "rev-4",
      quote:
        "“Their Russian dry manicure is on par with the boutique salons in Mumbai and Dubai. Crisp edges, zero pain, and the gel lasted four solid weeks without a single chip.”",
      author: "Dr. Priyamvada Shukla",
      service: "Russian Dry Manicure & BIAB Gel",
      city: "Tilak Nagar, Kanpur",
    },
  ] as Review[],
  faq: {
    eyebrow: "Questions & Answers",
    title: "Studio Etiquette & Policies",
    items: [
      {
        id: "faq-1",
        question: "Do you require a patch test prior to hair colouring or chemical treatments?",
        answer:
          "Yes, absolutely. For all first-time colour and chemical clients, we require a complimentary 10-minute patch test at least 48 hours prior to the appointment to protect your safety.",
      },
      {
        id: "faq-2",
        question: "How does the bridal trial booking work?",
        answer:
          "Bridal trials are hosted exclusively on Tuesdays and Wednesdays in our private bridal suite. We dedicate 2 full hours to test foundation shades, eyelash styles, and hair foundations. The trial fee is fully adjusted against your final wedding package if booked within 7 days.",
      },
      {
        id: "faq-3",
        question: "What is your cancellation and rescheduling policy?",
        answer:
          "Because we preserve long, unhurried appointment blocks, we respectfully request at least 24 hours notice for standard appointments, and 72 hours for signature spa rituals or bridal trials.",
      },
      {
        id: "faq-4",
        question: "What professional product brands do you use in treatments?",
        answer:
          "We use only authentic, imported salon formulations: L'Oréal Professionnel, Moroccanoil, Olaplex, Sothys Paris, and O.P.I. All retail and backbar products are strictly authentic and batch-verified.",
      },
      {
        id: "faq-5",
        question: "Do you offer dedicated services for men?",
        answer:
          "Yes. Noor is a unisex studio. We offer architectural haircuts, beard sculpting, gentleman's clarify facials, hand care, and sports recovery massages in a comfortable, respectful setting.",
      },
      {
        id: "faq-6",
        question: "Is there convenient parking available at the Civil Lines studio?",
        answer:
          "Yes. We offer dedicated on-site parking directly in front of the studio on the Civil Lines boulevard, with valet assistance during weekend afternoon hours.",
      },
    ] as FAQItem[],
  },
  visit: {
    eyebrow: "Location & Hours",
    title: "Visit Our Studio",
    subtitle: "Located on the quiet tree-lined stretch of Civil Lines, Kanpur.",
    addressLine1: "14/82 Civil Lines",
    addressLine2: "Opposite Green Park Stadium, VIP Road",
    cityPin: "Kanpur, Uttar Pradesh 208001",
    landmarks: "Near Reserve Bank Colony, 5 minutes from Phool Bagh.",
    phone: "+91 90000 00000",
    email: "concierge@noorsalon.in",
    footerSignoff: "See you soon.",
  },
};
