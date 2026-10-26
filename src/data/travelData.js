// Mock Data for WanderLuxe Travel Booking Application

export const DESTINATIONS = [
  {
    id: 'dest-1',
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    category: 'Beach & Island',
    tag: 'Romantic Getaway',
    rating: 4.9,
    reviewCount: 342,
    startingPrice: 1299,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    description: 'Iconic whitewashed cliffside villages, azure dome churches, and breathtaking Aegean Sea sunsets.',
    highlights: ['Oia Sunset Cruise', 'Caldera Wine Tasting', 'Red Beach Exploration', 'Traditional Greek Taverns'],
    climate: 'Sunny Mediterranean (24°C - 30°C)',
    bestSeason: 'May - October',
  },
  {
    id: 'dest-2',
    name: 'Bali & Nusa Islands',
    country: 'Indonesia',
    continent: 'Asia',
    category: 'Tropical Paradise',
    tag: 'Trending Now',
    rating: 4.85,
    reviewCount: 428,
    startingPrice: 899,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    description: 'Lush emerald rice terraces, spiritual ancient temples, sacred monkey forests, and tranquil surf beaches.',
    highlights: ['Ubud Jungle Swings', 'Uluwatu Sunset Temple', 'Nusa Penida Kelingking Beach', 'Balinese Spa Rituals'],
    climate: 'Tropical Warm (27°C - 31°C)',
    bestSeason: 'April - October',
  },
  {
    id: 'dest-3',
    name: 'Swiss Alps (Zermatt & Interlaken)',
    country: 'Switzerland',
    continent: 'Europe',
    category: 'Mountain Adventure',
    tag: 'Top Rated',
    rating: 4.95,
    reviewCount: 512,
    startingPrice: 1850,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    description: 'Majestic snow-capped peaks, alpine cogwheel trains, glacier lagoons, and charming wooden chalets.',
    highlights: ['Matterhorn Viewpoint', 'Jungfraujoch Top of Europe', 'Lake Brienz Cruise', 'Swiss Chocolate & Fondue Tour'],
    climate: 'Alpine Crisp (12°C - 22°C)',
    bestSeason: 'Year Round',
  },
  {
    id: 'dest-4',
    name: 'Kyoto & Tokyo Blossom',
    country: 'Japan',
    continent: 'Asia',
    category: 'Cultural Heritage',
    tag: 'Cultural Wonder',
    rating: 4.92,
    reviewCount: 389,
    startingPrice: 1650,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    description: 'Ancient Shinto shrines, serene Zen bamboo groves, traditional tea ceremonies, and neon metropolis wonder.',
    highlights: ['Fushimi Inari 10,000 Torii Gates', 'Arashiyama Bamboo Forest', 'Gion Geisha District', 'Tokyo Skytree & Shibuya'],
    climate: 'Temperate (15°C - 24°C)',
    bestSeason: 'March - May & Sept - Nov',
  },
  {
    id: 'dest-5',
    name: 'Amalfi Coast & Positano',
    country: 'Italy',
    continent: 'Europe',
    category: 'Luxury Coastal',
    tag: 'Celebrity Choice',
    rating: 4.88,
    reviewCount: 295,
    startingPrice: 1750,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    description: 'Dramatic pastel cliffside towns hanging over cobalt waters, scented lemon groves, and vintage yachts.',
    highlights: ['Capri Island Speedboat Tour', 'Positano Cliffside Dining', 'Ravello Villa Rufolo Gardens', 'Limoncello Workshop'],
    climate: 'Mediterranean Sun (22°C - 29°C)',
    bestSeason: 'May - September',
  },
  {
    id: 'dest-6',
    name: 'Serengeti Safari & Ngorongoro',
    country: 'Tanzania',
    continent: 'Africa',
    category: 'Wildlife Safari',
    tag: 'Ultimate Safari',
    rating: 4.98,
    reviewCount: 215,
    startingPrice: 2450,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    description: 'The great wildlife migration, majestic Big Five game drives, luxury tented bush camps, and Maasai culture.',
    highlights: ['Serengeti Sunrise Hot Air Balloon', 'Ngorongoro Crater Game Drive', 'Big 5 Tracking', 'Maasai Boma Cultural Visit'],
    climate: 'Warm Savanna (18°C - 28°C)',
    bestSeason: 'June - October & Jan - Feb',
  },
  {
    id: 'dest-7',
    name: 'Machu Picchu & Sacred Valley',
    country: 'Peru',
    continent: 'Americas',
    category: 'Historical Adventure',
    tag: 'World Wonder',
    rating: 4.91,
    reviewCount: 310,
    startingPrice: 1390,
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80',
    description: 'Mystical 15th-century Inca citadel perched high in the Andean cloud forest with ancient stone terraces.',
    highlights: ['Vistadome Scenic Train to Aguas Calientes', 'Guided Citadel Sunrise Tour', 'Cusco Colonial Walk', 'Sacred Valley Salt Mines'],
    climate: 'Mountain Subtropical (14°C - 23°C)',
    bestSeason: 'April - October',
  },
  {
    id: 'dest-8',
    name: 'Dubai & Arabian Desert Oasis',
    country: 'United Arab Emirates',
    continent: 'Asia',
    category: 'Ultra Luxury',
    tag: 'Modern Luxury',
    rating: 4.82,
    reviewCount: 460,
    startingPrice: 1150,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    description: 'Futuristic architectural wonders, 7-star hospitality, luxury mega-malls, and golden sunset desert dunes.',
    highlights: ['Burj Khalifa Level 148 Observation', 'Desert 4x4 Dune Bashing & BBQ', 'Marina Yacht Cruise', 'Museum of the Future'],
    climate: 'Sunny Desert (25°C - 35°C)',
    bestSeason: 'November - March',
  },
  {
    id: 'dest-9',
    name: 'Reykjavik & Golden Circle',
    country: 'Iceland',
    continent: 'Europe',
    category: 'Natural Wonders',
    tag: 'Aurora & Glaciers',
    rating: 4.93,
    reviewCount: 280,
    startingPrice: 1580,
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
    description: 'Glacial waterfalls, erupting geysers, thermal Blue Lagoon waters, and dancing Northern Lights.',
    highlights: ['Blue Lagoon Luxury Retreat', 'Gullfoss & Geysir Exploration', 'Northern Lights Super Jeep Hunt', 'Black Sand Beach Vik'],
    climate: 'Subpolar Oceanic (2°C - 13°C)',
    bestSeason: 'Sept - April (Auroras), June - August (Midnight Sun)',
  },
  {
    id: 'dest-10',
    name: 'Queenstown Adventure Capital',
    country: 'New Zealand',
    continent: 'Oceania',
    category: 'Thrill & Nature',
    tag: 'Adrenaline Haven',
    rating: 4.89,
    reviewCount: 198,
    startingPrice: 1420,
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80',
    description: 'Crystal Lake Wakatipu surrounded by The Remarkables mountain range, fjord cruises, and adventure sports.',
    highlights: ['Milford Sound Scenic Cruise', 'Skyline Gondola & Luge', 'Shotover River Jet Boat', 'Central Otago Pinot Noir Tasting'],
    climate: 'Alpine Oceanic (10°C - 22°C)',
    bestSeason: 'December - March (Summer) & July - Sept (Snow)',
  }
];

export const PACKAGES = [
  {
    id: 'pkg-1',
    title: 'Santorini Dream: Aegean Caldera & Sunset Luxury',
    destinationId: 'dest-1',
    destinationName: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    category: 'Beach & Island',
    tag: 'Best Seller',
    badge: 'Popular Choice',
    price: 1399,
    originalPrice: 1750,
    duration: '6 Days / 5 Nights',
    daysCount: 6,
    nightsCount: 5,
    rating: 4.94,
    reviewCount: 184,
    maxGroupSize: 12,
    physicalLevel: 'Easy',
    bestSeason: 'May - October',
    language: 'English, Greek',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Escape to Greece’s most romantic island with handpicked boutique caldera suites, a private luxury catamaran cruise to volcanic springs, and sommelier-guided Aegean wine tastings.',
    highlights: [
      '5 nights in a 5-Star Caldera Cliffside Cave Suite with infinity plunge pool',
      'Private sunset catamaran sailing with freshly prepared Greek BBQ and Aegean wine',
      'Guided walking tour through Oia, Fira, and Pyrgos traditional villages',
      'Sommelier-hosted volcanic vineyard wine tasting paired with local cheeses',
      'Private chauffeur airport and port transfers in premium Mercedes mini-vans'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paradise & Sunset Welcome Dinner',
        morning: 'VIP arrival transfer from Santorini Airport (JTR) to your Caldera Suite in Imerovigli.',
        afternoon: 'Check-in, relax by the infinity pool, and enjoy chilled welcome Champagne.',
        evening: 'Welcome 4-course Greek gastronomy dinner overlooking the famous sunset glow.',
        stay: 'Grace Hotel, Auberge Resorts Collection',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Caldera Trail Hike & Oia Whitewashed Alleys',
        morning: 'Gourmet cliffside breakfast. Scenic morning walk along the Fira-Oia caldera ridge.',
        afternoon: 'Explore Oia’s iconic blue domes, art galleries, and historic windmill views.',
        evening: 'Leisurely dinner at a cliffside seafood tavern tasting fresh Mediterranean sea bass.',
        stay: 'Grace Hotel, Auberge Resorts Collection',
        meals: 'Breakfast Included'
      },
      {
        day: 3,
        title: 'Private Catamaran Cruise & Volcanic Springs',
        morning: 'Morning at leisure for sunbathing or spa treatment.',
        afternoon: 'Board a luxury catamaran from Ammoudi Bay. Swim in hot sulfur volcanic springs and Red Beach.',
        evening: 'Sunset on board with grilled shrimp, Greek salad, and local Assyrtiko wine.',
        stay: 'Grace Hotel, Auberge Resorts Collection',
        meals: 'Breakfast & BBQ Lunch Included'
      },
      {
        day: 4,
        title: 'Volcanic Wine Tasting & Medieval Pyrgos',
        morning: 'Visit the prehistoric ruins of Akrotiri, the "Pompeii of the Aegean".',
        afternoon: 'Tour two historic volcanic wineries with private sommelier tastings.',
        evening: 'Explore Pyrgos medieval village with panoramic 360-degree views of the entire island.',
        stay: 'Grace Hotel, Auberge Resorts Collection',
        meals: 'Breakfast & Wine Tasting Included'
      },
      {
        day: 5,
        title: 'Perivolos Black Beach & Sunset Cocktail Party',
        morning: 'Private transfer to the volcanic black sand beach club of Perivolos with reserved cabanas.',
        afternoon: 'Water sports, ocean swimming, or relaxing beachside massages.',
        evening: 'Farewell sunset cocktail reception at an exclusive cliffside lounge.',
        stay: 'Grace Hotel, Auberge Resorts Collection',
        meals: 'Breakfast Included'
      },
      {
        day: 6,
        title: 'Farewell Aegean & Departure',
        morning: 'Champagne breakfast on your private terrace. Last-minute souvenir shopping in Fira.',
        afternoon: 'Private Mercedes transfer to Santorini Airport or Ferry Port for your onward journey.',
        evening: 'End of services with memories of a lifetime.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '5 Nights in 5-Star Boutique Caldera Cliffside Suite',
      'Daily gourmet breakfast with Aegean panoramic views',
      'Private 5-Hour Sunset Catamaran Cruise with Open Bar & BBQ',
      'Sommelier-led 4-course Wine & Cheese pairing tour',
      'VIP Airport & Port round-trip transfers in luxury van',
      'English-speaking certified private tour guides',
      'All local taxes, tourist fees, and entrance permits'
    ],
    excluded: [
      'International and domestic flights',
      'Travel insurance (available as add-on during booking)',
      'Personal expenses, tips, and optional water sports'
    ],
    hotels: [
      {
        name: 'Grace Hotel, Auberge Resorts Collection',
        stars: 5,
        location: 'Imerovigli, Santorini',
        roomType: 'Deluxe Suite with Heated Plunge Pool',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Caldera Cliff Plunge Pool',
        overlayIcons: [
          { icon: 'Waves', label: 'Infinity Pool' },
          { icon: 'Wine', label: 'Sunset Tasting' },
          { icon: 'Sparkles', label: '5-Star VIP' }
        ],
        amenities: ['Infinity Pool', 'Spa & Wellness', 'Ocean View', 'Free Wi-Fi', '24/7 Concierge']
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Pooja Hegde (Mumbai)',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'October 14, 2025',
        title: 'Pure magic from start to finish!',
        content: 'The catamaran sunset cruise was undeniably the highlight of our entire year. WanderLuxe made the booking effortless from Mumbai with instant UPI confirmation, and our caldera plunge pool suite was beyond breathtaking.'
      },
      {
        id: 'rev-2',
        author: 'Vikram Malhotra (New Delhi)',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'September 28, 2025',
        title: 'Flawless luxury experience',
        content: 'Every transfer was punctual, guides were knowledgeable, and the wine tasting tour introduced us to wines we loved. Complete value in Indian Rupees with 5-star service. 10/10 recommend!'
      }
    ]
  },
  {
    id: 'pkg-2',
    title: 'Bali Wonders: Ubud Jungle Villas & Nusa Penida Escape',
    destinationId: 'dest-2',
    destinationName: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    category: 'Tropical Paradise',
    tag: 'Top Rated',
    badge: 'Trending',
    price: 980,
    originalPrice: 1250,
    duration: '7 Days / 6 Nights',
    daysCount: 7,
    nightsCount: 6,
    rating: 4.88,
    reviewCount: 240,
    maxGroupSize: 10,
    physicalLevel: 'Moderate',
    bestSeason: 'April - November',
    language: 'English, Indonesian',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559628233-eb1b1a45564b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Immerse in spiritual Ubud rainforest sanctuaries with private pool villas, sacred water cleansing, floating breakfast, and a speedboat adventure to Nusa Penida’s iconic Kelingking T-Rex cliff.',
    highlights: [
      '3 nights in a Rainforest Pool Villa in Ubud + 3 nights in Seminyak Beachfront Resort',
      'Signature Balinese Floating Breakfast in your private infinity pool',
      'Fast-boat day excursion to Nusa Penida (Kelingking Beach, Broken Beach, Angel’s Billabong)',
      'Tirta Empul Holy Water Blessing Ceremony and Ubud Monkey Forest sanctuary',
      'Uluwatu Sunset Temple tour with hypnotic Kecak Fire Dance performance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Denpasar & Ubud Rainforest Check-in',
        morning: 'Flower lei welcome at Ngurah Rai International Airport (DPS).',
        afternoon: 'Scenic drive through lush jungle to your luxury villa in Ubud.',
        evening: 'Traditional Balinese blessing massage and relaxing welcome dinner.',
        stay: 'Kamandalu Ubud Rainforest Resort',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Floating Breakfast, Tegalalang Rice Terraces & Swing',
        morning: 'Famous floating breakfast served in your private pool overlooking jungle canopy.',
        afternoon: 'Walk through cascading Tegalalang Rice Terraces and soaring giant swing ride.',
        evening: 'Organic farm-to-table dining experience in downtown Ubud.',
        stay: 'Kamandalu Ubud Rainforest Resort',
        meals: 'Breakfast & Lunch Included'
      },
      {
        day: 3,
        title: 'Sacred Water Blessing & Hidden Waterfalls',
        morning: 'Holy water purification ritual with sarongs at Tirta Empul Temple.',
        afternoon: 'Hike to majestic Tibumana and Tukad Cepung hidden cave waterfalls.',
        evening: 'Artisan craft shopping at Ubud traditional art market.',
        stay: 'Kamandalu Ubud Rainforest Resort',
        meals: 'Breakfast Included'
      },
      {
        day: 4,
        title: 'Nusa Penida Island Wonder Expedition',
        morning: 'Early morning speed boat to Nusa Penida. Visit the iconic Kelingking T-Rex cliff.',
        afternoon: 'Marvel at Angel’s Billabong natural tide pool and Broken Beach cove.',
        evening: 'Transfer to Seminyak luxury beach resort. Sunset drinks at Potato Head Beach Club.',
        stay: 'The Seminyak Beach Resort & Spa',
        meals: 'Breakfast & Island Lunch Included'
      },
      {
        day: 5,
        title: 'Uluwatu Cliff Temple & Kecak Fire Dance',
        morning: 'Morning surfing lesson or relaxing sunbathing along Seminyak beach.',
        afternoon: 'Drive to Uluwatu Temple perched 70 meters high on an ocean cliff.',
        evening: 'Watch the dramatic sunset Kecak Dance followed by Jimbaran Bay grilled seafood feast.',
        stay: 'The Seminyak Beach Resort & Spa',
        meals: 'Breakfast & Seafood Dinner Included'
      },
      {
        day: 6,
        title: 'Spa Indulgence & Beachside Leisure',
        morning: '2-hour traditional Balinese lulur body scrub and flower petal bath.',
        afternoon: 'Boutique shopping along Seminyak’s trendy fashion streets.',
        evening: 'Farewell celebration dinner on the beach with live acoustic music.',
        stay: 'The Seminyak Beach Resort & Spa',
        meals: 'Breakfast Included'
      },
      {
        day: 7,
        title: 'Departure & Tropical Memories',
        morning: 'Buffet breakfast with beachfront views. Final morning dip.',
        afternoon: 'Private chauffeured transfer to Denpasar Airport for departure.',
        evening: 'Safe travels home.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '6 Nights accommodation (3 Nights Jungle Villa + 3 Nights Beach Resort)',
      'Daily breakfast including 1 Signature Private Pool Floating Breakfast',
      'Full Day Nusa Penida speedboat expedition with entrance fees & lunch',
      'Private air-conditioned vehicle with dedicated driver/guide throughout',
      'Uluwatu Sunset Tour + Kecak Dance tickets + Jimbaran Seafood Dinner',
      '2-Hour Traditional Balinese Luxury Spa treatment',
      'All temple donations, sarong rentals, and water bottles provided'
    ],
    excluded: [
      'International flights',
      'Personal shopping and alcoholic beverages outside specified dinners',
      'Travel insurance'
    ],
    hotels: [
      {
        name: 'Kamandalu Ubud Rainforest Resort',
        stars: 5,
        location: 'Ubud, Bali',
        roomType: 'Jungle Pool Villa',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Private Jungle Pool Villa',
        overlayIcons: [
          { icon: 'Palmtree', label: 'Forest Sanctuary' },
          { icon: 'Sparkles', label: 'Floating Breakfast' },
          { icon: 'Waves', label: 'Private Pool' }
        ],
        amenities: ['Private Pool', 'Forest Spa', 'Yoga Shala', 'Free Shuttle to Ubud Center']
      },
      {
        name: 'The Seminyak Beach Resort & Spa',
        stars: 5,
        location: 'Seminyak, Bali',
        roomType: 'Ocean View Suite',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Oceanfront Sunset Suite',
        overlayIcons: [
          { icon: 'Waves', label: 'Beachfront Club' },
          { icon: 'Sun', label: 'Sunset Cabana' }
        ],
        amenities: ['Beachfront Infinity Pool', 'Fitness Club', 'Sunset Lounge', 'Beach Access']
      }
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Kavita Nair (Bengaluru)',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'November 02, 2025',
        title: 'The floating breakfast in Ubud was a dream!',
        content: 'WanderLuxe organized our trip seamlessly from Bangalore. Our Balinese chauffeur Made was so courteous and attentive. The jungle pool villa in Ubud was sheer tranquility.'
      }
    ]
  },
  {
    id: 'pkg-3',
    title: 'Majestic Swiss Alps: Matterhorn & Glacier Express Expedition',
    destinationId: 'dest-3',
    destinationName: 'Swiss Alps',
    country: 'Switzerland',
    continent: 'Europe',
    category: 'Mountain Adventure',
    tag: 'Luxury Alpine',
    badge: 'Premium Experience',
    price: 2150,
    originalPrice: 2600,
    duration: '8 Days / 7 Nights',
    daysCount: 8,
    nightsCount: 7,
    rating: 4.97,
    reviewCount: 312,
    maxGroupSize: 8,
    physicalLevel: 'Easy to Moderate',
    bestSeason: 'Year Round (Winter Ski / Summer Alpine)',
    language: 'English, German, French',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Traverse the dramatic alpine spine of Switzerland. Ride the panoramic Glacier Express, ascend to Jungfraujoch "Top of Europe", gaze upon the Matterhorn from car-free Zermatt, and savor Swiss fondue.',
    highlights: [
      '1st Class Panoramic Rail passes including the legendary Glacier Express',
      'Ascent to Jungfraujoch (3,454m) with Ice Palace and Sphinx Observatory',
      'Gornergrat cogwheel train ride with 360-degree Matterhorn reflections',
      'Lake Lucerne vintage steamboat cruise and Swiss artisan chocolate workshop',
      'Traditional Alpine fondue dinner in a mountain hut above Interlaken'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zurich & Scenic Train to Lucerne',
        morning: 'Arrive at Zurich Airport (ZRH). Board 1st class panoramic train to Lucerne.',
        afternoon: 'Stroll across Chapel Bridge and the Old Town squares.',
        evening: 'Welcome dinner overlooking Lake Lucerne with local Swiss delicacies.',
        stay: 'Hotel Schweizerhof Luzern',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Mount Pilatus Golden Round Trip & Chocolate Workshop',
        morning: 'Lake Lucerne boat cruise followed by the world’s steepest cogwheel railway to Mt. Pilatus.',
        afternoon: 'Hands-on Swiss chocolatier masterclass in Lucerne.',
        evening: 'Leisurely evening stroll along the lake promenade.',
        stay: 'Hotel Schweizerhof Luzern',
        meals: 'Breakfast Included'
      },
      {
        day: 3,
        title: 'Scenic Train to Interlaken & Lake Brienz Cruise',
        morning: 'GoldenPass scenic train to Interlaken between emerald lakes.',
        afternoon: 'Cruise across turquoise Lake Brienz to the Giessbach Falls waterfall.',
        evening: 'Alpine fondue dinner in a cozy mountain timber chalet.',
        stay: 'Victoria-Jungfrau Grand Hotel & Spa',
        meals: 'Breakfast & Dinner Included'
      },
      {
        day: 4,
        title: 'Jungfraujoch - Top of Europe Glacier Experience',
        morning: 'Ride the state-of-the-art Eiger Express tricable gondola to Jungfraujoch (3,454m).',
        afternoon: 'Walk inside the carving Ice Palace and step out onto eternal Aletsch Glacier.',
        evening: 'Relax in the hotel’s 5,500m² luxury Roman spa.',
        stay: 'Victoria-Jungfrau Grand Hotel & Spa',
        meals: 'Breakfast Included'
      },
      {
        day: 5,
        title: 'Glacier Express Journey to Car-Free Zermatt',
        morning: 'Board the world-famous Glacier Express in 1st class panoramic dome cars.',
        afternoon: 'Cross deep gorges and 291 bridges as you climb into the Valais Alps to Zermatt.',
        evening: 'Arrive in idyllic car-free Zermatt with immediate views of the Matterhorn.',
        stay: 'The Omnia Mountain Lodge Zermatt',
        meals: 'Breakfast & 3-Course Rail Lunch Included'
      },
      {
        day: 6,
        title: 'Gornergrat Cogwheel & Riffelsee Reflections',
        morning: 'Ascend on Europe’s highest open-air cogwheel train to Gornergrat (3,089m).',
        afternoon: 'Short alpine hike to Riffelsee to capture the legendary Matterhorn mirror reflection.',
        evening: 'Fine dining at Michelin-recommended Valais restaurant.',
        stay: 'The Omnia Mountain Lodge Zermatt',
        meals: 'Breakfast Included'
      },
      {
        day: 7,
        title: 'Matterhorn Glacier Paradise & Alpine Wellness',
        morning: 'Highest cable car in the Alps to Matterhorn Glacier Paradise (3,883m).',
        afternoon: 'Thermal spa therapy, outdoor heated jacuzzi, and relaxing fireside wine.',
        evening: 'Farewell Gala dinner celebrating an epic alpine expedition.',
        stay: 'The Omnia Mountain Lodge Zermatt',
        meals: 'Breakfast & Gala Dinner Included'
      },
      {
        day: 8,
        title: 'Return to Zurich & Departure',
        morning: 'Scenic 1st class rail journey back to Zurich Airport or Zurich City Center.',
        afternoon: 'Departure with unforgettable alpine memories.',
        evening: 'End of tour.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '7 Nights in 5-Star luxury alpine hotels and mountain lodges',
      'Swiss Travel Pass 1st Class with unlimited trains, boats, and city transit',
      'Reserved 1st Class seating on the world-famous Glacier Express with 3-course lunch',
      'Jungfraujoch and Gornergrat mountain excursion tickets',
      'Daily hot breakfast buffet + 3 gourmet dinners (including Swiss fondue)',
      'Artisan Swiss Chocolate Making masterclass',
      'Luggage porterage and hotel concierge support'
    ],
    excluded: [
      'International flights to/from Zurich',
      'Ski equipment rental (if visiting during winter)',
      'Travel insurance'
    ],
    hotels: [
      {
        name: 'Victoria-Jungfrau Grand Hotel & Spa',
        stars: 5,
        location: 'Interlaken, Switzerland',
        roomType: 'Junior Suite with Jungfrau Mountain View',
        image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Historic Swiss Grand Hotel',
        overlayIcons: [
          { icon: 'Mountain', label: 'Jungfrau View' },
          { icon: 'Sparkles', label: 'Roman Spa' },
          { icon: 'Snowflake', label: 'Alpine Luxury' }
        ],
        amenities: ['Luxury Roman Spa', 'Indoor & Outdoor Heated Pools', 'Fine Dining', 'Tennis Courts']
      },
      {
        name: 'The Omnia Mountain Lodge',
        stars: 5,
        location: 'Zermatt, Switzerland',
        roomType: 'Matterhorn Suite',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Matterhorn Panoramic Chalet',
        overlayIcons: [
          { icon: 'Mountain', label: 'Direct Matterhorn View' },
          { icon: 'Flame', label: 'Fireside Lounge' }
        ],
        amenities: ['Matterhorn Views', 'Fireside Library', 'Indoor/Outdoor Pool', 'Gourmet Restaurant']
      }
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'Rajesh & Sunita Bansal (Jaipur)',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'October 19, 2025',
        title: 'Unbelievable beauty at every turn in the Swiss Alps',
        content: 'Watching the Matterhorn from our balcony at The Omnia in Zermatt was spiritual. The 1st class Glacier Express tickets booked through WanderLuxe in Indian Rupees made traveling through Switzerland effortless. Exceptional service!'
      }
    ]
  },
  {
    id: 'pkg-4',
    title: 'Japan Golden Route: Kyoto Heritage & Tokyo Metropole',
    destinationId: 'dest-4',
    destinationName: 'Kyoto & Tokyo',
    country: 'Japan',
    continent: 'Asia',
    category: 'Cultural Heritage',
    tag: 'Iconic Japan',
    badge: 'Cultural Highlight',
    price: 1890,
    originalPrice: 2200,
    duration: '8 Days / 7 Nights',
    daysCount: 8,
    nightsCount: 7,
    rating: 4.93,
    reviewCount: 268,
    maxGroupSize: 10,
    physicalLevel: 'Moderate',
    bestSeason: 'Spring Blossom & Autumn Foliage',
    language: 'English, Japanese',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Experience the soul of ancient Kyoto with private tea masters, bamboo forests, and Golden Pavilion, paired with a bullet train ride to neon-lit Tokyo, teamLab digital art, and Michelin ramen.',
    highlights: [
      'Authentic Ryokan stay with private cedar onsen bath and multi-course Kaiseki dinner',
      'Shinkansen Bullet Train at 320 km/h between Kyoto and Tokyo in Green Car (First Class)',
      'Early access private tour through Fushimi Inari Shrine and Arashiyama Bamboo Grove',
      'Tea Ceremony masterclass with a licensed Uji green tea master',
      'VIP tickets to teamLab Planets digital art museum in Tokyo'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kyoto & Ryokan Onsen Immersion',
        morning: 'Airport pick-up from Kansai Airport (KIX) and transfer to your traditional luxury Ryokan.',
        afternoon: 'Unpack, don traditional yukata robes, and soak in mineral-rich outdoor onsen baths.',
        evening: 'Exquisite 9-course seasonal Kaiseki banquet served privately in your tatami suite.',
        stay: 'Ryokan Gion Fukuzumi, Kyoto',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Fushimi Inari Torii Gates & Kiyomizu-dera',
        morning: 'Early morning tranquility hike through thousands of vermilion Torii gates at Fushimi Inari.',
        afternoon: 'Explore Kiyomizu-dera wooden temple and historic Ninenzaka preserved alleys.',
        evening: 'Gion Geisha district walking tour with a local cultural historian.',
        stay: 'Ryokan Gion Fukuzumi, Kyoto',
        meals: 'Breakfast & Dinner Included'
      },
      {
        day: 3,
        title: 'Arashiyama Bamboo Grove & Golden Pavilion (Kinkaku-ji)',
        morning: 'Stroll through the towering stalks of Arashiyama Bamboo Grove and Tenryu-ji Zen garden.',
        afternoon: 'Marvel at the gold-leaf covered Kinkaku-ji temple reflecting in its mirror pond.',
        evening: 'Traditional matcha tea preparation ceremony with an Uji master.',
        stay: 'Ryokan Gion Fukuzumi, Kyoto',
        meals: 'Breakfast Included'
      },
      {
        day: 4,
        title: 'Shinkansen Bullet Train to Futuristic Tokyo',
        morning: 'Board the Nozomi Shinkansen bullet train in First Class Green Car to Tokyo (2h 15m).',
        afternoon: 'Check in to luxury hotel in Shinjuku overlooking the Tokyo skyline.',
        evening: 'Explore Shibuya Crossing, Hachiko statue, and Omoide Yokocho lantern alleyways.',
        stay: 'Keio Plaza Hotel Tokyo Premier Grand',
        meals: 'Breakfast Included'
      },
      {
        day: 5,
        title: 'teamLab Planets Digital Art & Tsukiji Outer Market',
        morning: 'Fresh sashimi and wagyu skewers breakfast at vibrant Tsukiji Outer Fish Market.',
        afternoon: 'Immerse your senses barefoot in teamLab Planets interactive digital water museum.',
        evening: 'Ascend to Shibuya Sky open-air rooftop observation deck for 360-degree sunset views.',
        stay: 'Keio Plaza Hotel Tokyo Premier Grand',
        meals: 'Breakfast & Street Food Tastings Included'
      },
      {
        day: 6,
        title: 'Asakusa Senso-ji Temple & Akihabara Tech Culture',
        morning: 'Visit Tokyo’s oldest temple, Senso-ji in Asakusa, along Nakamise shopping street.',
        afternoon: 'Discover electronics and anime pop culture in vibrant Akihabara.',
        evening: 'Omakase sushi dinner experience with master sushi chef.',
        stay: 'Keio Plaza Hotel Tokyo Premier Grand',
        meals: 'Breakfast & Omakase Dinner Included'
      },
      {
        day: 7,
        title: 'Mount Fuji Day Excursion & Lake Kawaguchiko',
        morning: 'Private coach excursion to Mount Fuji 5th Station and Lake Kawaguchiko.',
        afternoon: 'Chureito Pagoda viewpoint photo stop and Oshino Hakkai spring water ponds.',
        evening: 'Return to Tokyo for a memorable farewell dinner in Roppongi Hills.',
        stay: 'Keio Plaza Hotel Tokyo Premier Grand',
        meals: 'Breakfast & Lunch Included'
      },
      {
        day: 8,
        title: 'Sayonara Tokyo & Departure',
        morning: 'Breakfast with panoramic Tokyo views. Last-minute tax-free shopping in Ginza.',
        afternoon: 'Narita/Haneda Express or private limousine bus transfer to the airport.',
        evening: 'Board flight home.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '7 Nights luxury accommodation (3 Nights Kyoto Luxury Ryokan + 4 Nights Tokyo 5-Star Hotel)',
      'First Class Green Car JR Shinkansen Bullet Train tickets',
      'Daily breakfast + 2 multi-course Kaiseki banquets + 1 Chef Omakase Sushi dinner',
      'teamLab Planets VIP entrance & Shibuya Sky observation deck passes',
      'Private Mount Fuji & Lake Kawaguchiko full day excursion with lunch',
      'Licensed English-speaking Japanese cultural guide throughout',
      'Pocket Wi-Fi device or eSIM provided upon arrival'
    ],
    excluded: [
      'International airfare',
      'Personal shopping and alcoholic drinks outside included banquets',
      'Comprehensive travel insurance'
    ],
    hotels: [
      {
        name: 'Ryokan Gion Fukuzumi',
        stars: 5,
        location: 'Kyoto, Japan',
        roomType: 'Traditional Japanese Tatami Suite with Hinoki Bath',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Gion Traditional Ryokan',
        overlayIcons: [
          { icon: 'Compass', label: 'Hinoki Onsen' },
          { icon: 'Utensils', label: 'Kaiseki Master' },
          { icon: 'Sparkles', label: 'Tatami Garden' }
        ],
        amenities: ['Private Onsen Bath', 'Kaiseki Dining', 'Zen Garden', 'Tea Ceremony Room']
      },
      {
        name: 'Keio Plaza Hotel Tokyo Premier Grand',
        stars: 5,
        location: 'Shinjuku, Tokyo',
        roomType: 'Club Floor Executive Room',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Tokyo Skyline Club Floor',
        overlayIcons: [
          { icon: 'Camera', label: 'Tokyo Skyline' },
          { icon: 'Wine', label: 'Club Lounge' }
        ],
        amenities: ['Skyline Views', 'Club Lounge', 'Fitness Center', 'Multiple Michelin Restaurants']
      }
    ],
    reviews: [
      {
        id: 'rev-5',
        author: 'Arjun Kapoor & Tanvi (Pune)',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'October 11, 2025',
        title: 'The ryokan onsen and Kaiseki dinner was sublime!',
        content: 'From the private Kyoto Kaiseki banquet to the exhilarating 320 km/h Shinkansen ride, every detail was orchestrated with Japanese precision. Booking from Pune with Rupee payment was smooth and transparent.'
      }
    ]
  },
  {
    id: 'pkg-5',
    title: 'Amalfi Coast Splendor: Positano, Capri & Sorrento Yachting',
    destinationId: 'dest-5',
    destinationName: 'Amalfi Coast',
    country: 'Italy',
    continent: 'Europe',
    category: 'Luxury Coastal',
    tag: 'La Dolce Vita',
    badge: 'Exclusive',
    price: 1980,
    originalPrice: 2400,
    duration: '7 Days / 6 Nights',
    daysCount: 7,
    nightsCount: 6,
    rating: 4.91,
    reviewCount: 175,
    maxGroupSize: 8,
    physicalLevel: 'Easy',
    bestSeason: 'May - September',
    language: 'English, Italian',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Live La Dolce Vita along Italy’s glamorous coastline. Bask in Positano’s pastel panoramas, cruise private speedboats around Capri’s Faraglioni sea stacks, and savor artisan limoncello.',
    highlights: [
      '6 nights in a cliffside boutique resort overlooking Positano bay',
      'Private vintage Riva speedboat day charter around Capri Island and Blue Grotto',
      'Scenic drive along the legendary Amalfi Cliffway in vintage convertible or Mercedes van',
      'Authentic Neapolitan pizza making class and mozzarella tasting in Sorrento',
      'Sunset Aperitivo overlooking Ravello’s Villa Rufolo cliff gardens'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Naples & Drive to Positano',
        morning: 'Private Mercedes transfer from Naples Airport or Train Station.',
        afternoon: 'Winding scenic drive along the Amalfi Coast cliff road to Positano.',
        evening: 'Welcome Prosecco and cliffside seafood pasta dinner in Positano.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Positano Coastal Charm & Spiaggia Grande Beach',
        morning: 'Espresso and sfogliatella pastry breakfast overlooking the pastel village.',
        afternoon: 'Reserved sun loungers at Spiaggia Grande beach with ocean swimming.',
        evening: 'Romantic dinner at candlelit restaurant carved into coastal cliff rock.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Breakfast Included'
      },
      {
        day: 3,
        title: 'Private Riva Speedboat Charter to Capri Island',
        morning: 'Board your private captained yacht. Sail past the dramatic Faraglioni Rocks.',
        afternoon: 'Visit the electric Blue Grotto and explore Capri’s luxury Piazzetta boutiques.',
        evening: 'Sunset champagne cruise back along the Sirenusa islands.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Breakfast & Yacht Snacks Included'
      },
      {
        day: 4,
        title: 'Ravello Mountain Heights & Villa Rufolo Gardens',
        morning: 'Scenic drive up to aristocratic Ravello perched high above the Mediterranean.',
        afternoon: 'Walk through the breathtaking flower terraces of Villa Rufolo and Villa Cimbrone.',
        evening: 'Aperitivo cocktails accompanied by classical violin music.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Breakfast Included'
      },
      {
        day: 5,
        title: 'Sorrento Lemon Orchards & Neapolitan Pizza Masterclass',
        morning: 'Visit organic Sorrento lemon groves and taste cold freshly made Limoncello.',
        afternoon: 'Hands-on pizza making masterclass with wood-fired oven and buffalo mozzarella.',
        evening: 'Free evening to stroll Sorrento’s lively artisan alleys and gelato parlors.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Breakfast & Pizza Lunch Included'
      },
      {
        day: 6,
        title: 'Amalfi Town & Ancient Paper Mills',
        morning: 'Ferry ride to historic Amalfi town and its magnificent 9th-century Duomo.',
        afternoon: 'Discover the ancient Valle delle Ferriere waterfalls and paper museum.',
        evening: 'Gala Farewell Dinner at Michelin-starred seaside terrace.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Breakfast & Gala Dinner Included'
      },
      {
        day: 7,
        title: 'Arrivederci Amalfi & Departure',
        morning: 'Final panoramic breakfast watching fishing boats leave the harbor.',
        afternoon: 'Private Mercedes transfer back to Naples International Airport.',
        evening: 'Flight departures.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '6 Nights in Luxury 5-Star Cliffside Sea View Suite',
      'Full Day Private Capri Yacht Charter with Skipper, Fuel & Towels',
      'Daily artisan Italian breakfast with freshly baked pastries',
      'Private Chauffeur Mercedes-Benz throughout all excursions',
      'Pizza Making Masterclass with local wine pairing',
      'Villa Rufolo entrance tickets and limoncello tasting session'
    ],
    excluded: [
      'International flights to Naples/Rome',
      'Blue Grotto rowboat admission fee (€15 paid locally to boatmen)',
      'Personal travel insurance'
    ],
    hotels: [
      {
        name: 'Villa Franca Luxury Resort',
        stars: 5,
        location: 'Positano, Amalfi Coast',
        roomType: 'Deluxe Mediterranean Sea View Suite',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Positano Clifftop Infinity Pool',
        overlayIcons: [
          { icon: 'Waves', label: 'Faraglioni Views' },
          { icon: 'Wine', label: 'Champagne Terrace' },
          { icon: 'Utensils', label: 'Michelin Dining' }
        ],
        amenities: ['Rooftop Infinity Pool', 'Michelin Star Dining', 'Spa & Hamam', 'Private Balcony']
      }
    ],
    reviews: [
      {
        id: 'rev-6',
        author: 'Deepak & Shreya Joshi (Kolkata)',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'September 15, 2025',
        title: 'Positano & Capri felt like a dream!',
        content: 'The private speedboat to Capri was pure heaven. Sailing through the Faraglioni arch with chilled limoncello is something we will cherish forever. 24/7 concierge support on WhatsApp was incredible.'
      }
    ]
  },
  {
    id: 'pkg-6',
    title: 'Serengeti & Ngorongoro Big Five Luxury Safari',
    destinationId: 'dest-6',
    destinationName: 'Serengeti Safari',
    country: 'Tanzania',
    continent: 'Africa',
    category: 'Wildlife Safari',
    tag: 'Wildlife Bucket List',
    badge: 'Once in a Lifetime',
    price: 2790,
    originalPrice: 3400,
    duration: '7 Days / 6 Nights',
    daysCount: 7,
    nightsCount: 6,
    rating: 4.99,
    reviewCount: 142,
    maxGroupSize: 6,
    physicalLevel: 'Moderate',
    bestSeason: 'June - October (Migration) & Jan - March (Calving)',
    language: 'English, Swahili',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508672019048-805b876b67e2?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Witness the greatest wildlife spectacle on Earth. Explore Serengeti National Park and the ancient volcanic Ngorongoro Crater in customized pop-up 4x4 Land Cruisers with luxury tented camps.',
    highlights: [
      '6 nights in luxury tented safari camps with en-suite baths and private verandas',
      'Serengeti Sunrise Hot Air Balloon Safari with champagne bush breakfast',
      'Full-day game drive descending 600m into the wildlife-dense Ngorongoro Crater',
      'Guaranteed window seat in customized 4x4 Land Cruiser with pop-up photography roof',
      'Authentic cultural encounter at a traditional Maasai Boma village'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha Arrival & Scenic Bush Flight to Serengeti',
        morning: 'Arrive at Kilimanjaro International Airport (JRO). Board scenic light aircraft to Serengeti airstrip.',
        afternoon: 'First thrilling game drive en route to your luxury tented bush lodge.',
        evening: 'Fireside sundowner gin & tonic followed by a 4-course safari banquet under starry African skies.',
        stay: 'Four Seasons Safari Lodge Serengeti',
        meals: 'Lunch & Dinner Included'
      },
      {
        day: 2,
        title: 'Serengeti Sunrise Hot Air Balloon & Big Five Tracking',
        morning: 'Dawn takeoff in a hot air balloon floating silently over herds of wildebeests and lions.',
        afternoon: 'Champagne bush breakfast followed by an afternoon game drive tracking leopards and cheetahs.',
        evening: 'Bush dinner around a roaring campfire listening to the calls of the wild.',
        stay: 'Four Seasons Safari Lodge Serengeti',
        meals: 'All Meals Included'
      },
      {
        day: 3,
        title: 'Full Day Great Migration Tracking',
        morning: 'Head into the Mara or Seronera river valleys to witness river crossings and predator action.',
        afternoon: 'Picnic lunch under an acacia tree surrounded by rolling savanna plains.',
        evening: 'Relax in the lodge’s infinity pool overlooking an active elephant watering hole.',
        stay: 'Four Seasons Safari Lodge Serengeti',
        meals: 'All Meals Included'
      },
      {
        day: 4,
        title: 'Drive to Ngorongoro Conservation Area',
        morning: 'Morning game drive tracking rhinos, giraffes, and hippos in central Serengeti.',
        afternoon: 'Scenic drive through Olduvai Gorge, the cradle of mankind, up to Ngorongoro crater rim.',
        evening: 'Dinner at luxury lodge perched on the rim of the 20km-wide volcanic caldera.',
        stay: 'Ngorongoro Crater Lodge',
        meals: 'All Meals Included'
      },
      {
        day: 5,
        title: 'Ngorongoro Crater Floor Safari Expedition',
        morning: 'Descend 600 meters into the crater floor for maximum density Big 5 sightings.',
        afternoon: 'Encounter black rhinos, giant tusked elephants, pink flamingos on Lake Magadi.',
        evening: 'Sunset drinks on your private viewing deck looking down into the mist-covered crater.',
        stay: 'Ngorongoro Crater Lodge',
        meals: 'All Meals Included'
      },
      {
        day: 6,
        title: 'Maasai Boma Cultural Experience & Lake Manyara',
        morning: 'Warm traditional welcoming dance and fire-making demonstration at a local Maasai village.',
        afternoon: 'Game drive through Lake Manyara National Park famous for tree-climbing lions.',
        evening: 'Farewell Gala safari dinner under the southern constellations.',
        stay: 'Ngorongoro Crater Lodge',
        meals: 'All Meals Included'
      },
      {
        day: 7,
        title: 'Return to Arusha & Departure',
        morning: 'Leisurely bush breakfast. Scenic flight back to Arusha.',
        afternoon: 'Transfer to Kilimanjaro Airport (JRO) for flight departures home.',
        evening: 'End of an unforgettable African safari.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '6 Nights in Luxury 5-Star Tented Safari Lodges',
      'All meals (Breakfast, Lunch, Gourmet Bush Dinners) and select wines/beers',
      'Serengeti Sunrise Hot Air Balloon Safari with Champagne Bush Breakfast',
      'Unlimited game drives in customized 4x4 Land Cruiser with charging ports & binoculars',
      'All National Park Conservation fees and Crater Service permits',
      'Internal light aircraft bush flights (Kilimanjaro/Arusha - Serengeti roundtrip)',
      'Expert certified Tanzanian wildlife ranger guide'
    ],
    excluded: [
      'International flights to Tanzania',
      'Tanzania tourist visa ($50-$100 paid online/upon arrival)',
      'Driver guide gratuity and comprehensive travel insurance'
    ],
    hotels: [
      {
        name: 'Four Seasons Safari Lodge Serengeti',
        stars: 5,
        location: 'Central Serengeti, Tanzania',
        roomType: 'Waterhole View Villa',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Watering Hole Wildlife Villa',
        overlayIcons: [
          { icon: 'Compass', label: 'Elephant Watering Hole' },
          { icon: 'Sun', label: 'Private Veranda' },
          { icon: 'Sparkles', label: 'Personal Butler' }
        ],
        amenities: ['Waterhole Infinity Pool', 'Discovery Centre Museum', 'Bush Spa', 'Private Butler']
      },
      {
        name: 'Ngorongoro Crater Lodge',
        stars: 5,
        location: 'Ngorongoro Crater Rim, Tanzania',
        roomType: 'Luxury Crater View Suite',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Crater Rim Stilted Chateau',
        overlayIcons: [
          { icon: 'Flame', label: 'Fireplace Butler' },
          { icon: 'Eye', label: '600m Crater View' }
        ],
        amenities: ['Panoramic Crater Deck', 'Fireplace Butler', 'Fine Dining', 'Wildlife Viewing Telescope']
      }
    ],
    reviews: [
      {
        id: 'rev-7',
        author: 'Dr. Sameer & Neha Kulkarni (Hyderabad)',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'October 05, 2025',
        title: 'Beyond our wildest dreams in Serengeti!',
        content: 'We saw the Big Five in the first 48 hours! The sunrise hot air balloon flight over thousands of wildebeests brought tears of joy. WanderLuxe managed all park permits, bush flights, and luxury tented stays flawlessly.'
      }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Destinations', icon: 'Globe' },
  { id: 'Beach & Island', name: 'Beach & Coastal', icon: 'Palmtree' },
  { id: 'Mountain Adventure', name: 'Alpine & Hiking', icon: 'Mountain' },
  { id: 'Cultural Heritage', name: 'Culture & Temples', icon: 'Landmark' },
  { id: 'Wildlife Safari', name: 'Wildlife & Nature', icon: 'Compass' },
  { id: 'Ultra Luxury', name: 'Luxury City & Desert', icon: 'Sparkles' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Vikram & Radhika Malhotra',
    role: 'Honeymoon Travelers (Mumbai)',
    trip: 'Santorini Dream Package',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    content: 'WanderLuxe turned our honeymoon into an unforgettable fairytale. The private caldera suite was spectacular, and the 24/7 concierge took care of every restaurant reservation flawlessly.'
  },
  {
    id: 2,
    name: 'Aarav Mehta',
    role: 'Solo Explorer & Photographer (Bengaluru)',
    trip: 'Japan Golden Route',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: 'The itinerary pacing was perfection. The First Class Shinkansen pass, access to teamLab, and authentic ryokan stay gave me once-in-a-lifetime photos. Booking from Bangalore was effortless with Indian Rupee pricing!'
  },
  {
    id: 3,
    name: 'Dr. Sneha & Rajesh Reddy',
    role: 'Family Vacation (Hyderabad)',
    trip: 'Swiss Alps Expedition',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    content: 'Booking for our family of 4 from Hyderabad was completely stress-free. The transparent INR pricing, instant WhatsApp concierge updates, and confirmed Swiss rail passes gave us complete peace of mind.'
  }
];

export const PROMO_CODES = {
  WANDER20: { discountPercent: 20, description: '20% Off WanderLuxe Special Welcome' },
  SUMMER10: { discountPercent: 10, description: '10% Off Seasonal Vacation Discount' },
  LUXURY100: { discountFixed: 100, description: '₹8,500 Off Any Luxury Booking' }
};

export const INITIAL_BOOKINGS = [
  {
    id: 'BK-78412',
    packageId: 'pkg-1',
    packageTitle: 'Santorini Dream: Aegean Caldera & Sunset Luxury',
    destinationName: 'Santorini, Greece',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    travelDate: '2026-11-15',
    adults: 2,
    children: 0,
    roomTier: 'deluxe',
    roomTierLabel: 'Deluxe Suite with Heated Plunge Pool (+₹25,500)',
    addOns: ['Airport VIP Chauffeur Transfer', 'Full Travel Protection Insurance'],
    customer: {
      fullName: 'Rohan Sharma',
      email: 'rohan.sharma@gmail.com',
      phone: '+91 98201 45892',
      country: 'India'
    },
    paymentMethod: 'UPI (rohan@okhdfcbank)',
    pricing: {
      basePrice: 1399,
      adultsCount: 2,
      baseTotal: 2798,
      childrenDiscount: 0,
      roomUpgrade: 300,
      addOnsTotal: 205,
      subtotal: 3303,
      discount: 660.6,
      promoCode: 'WANDER20',
      taxesAndFees: 211.39,
      totalPaid: 2853.79
    },
    status: 'Confirmed',
    createdAt: '2026-10-20T10:15:00.000Z'
  },
  {
    id: 'BK-33593',
    packageId: 'pkg-3',
    packageTitle: 'Majestic Swiss Alps: Matterhorn & Glacier Express Expedition',
    destinationName: 'Swiss Alps, Switzerland',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    travelDate: '2026-11-20',
    adults: 2,
    children: 0,
    roomTier: 'standard',
    roomTierLabel: 'Standard Alpine Suite (Included)',
    addOns: ['Full Travel Protection Insurance'],
    customer: {
      fullName: 'Ananya Iyer',
      email: 'ananya.iyer@outlook.com',
      phone: '+91 98450 71234',
      country: 'India'
    },
    paymentMethod: 'NetBanking (HDFC Bank)',
    pricing: {
      basePrice: 2150,
      adultsCount: 2,
      baseTotal: 4300,
      childrenDiscount: 0,
      roomUpgrade: 0,
      addOnsTotal: 120,
      subtotal: 4420,
      discount: 884,
      promoCode: 'WANDER20',
      taxesAndFees: 282.88,
      totalPaid: 3818.88
    },
    status: 'Confirmed',
    createdAt: '2026-10-22T14:30:00.000Z'
  }
];

export const COMMUNITY_STORIES = [
  {
    id: 'story-1',
    traveler: 'Priya & Arjun Kapoor',
    handle: '@priya.wanderlust',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    location: 'Positano, Italy',
    caption: 'Private vintage yacht cruising around Capri Faraglioni rocks at sunset with chilled limoncello.',
    likes: '2.8k',
    overlayIcons: [
      { name: 'Sailboat', label: 'Private Yacht' },
      { name: 'Wine', label: 'Prosecco Sunset' },
      { name: 'Camera', label: 'Scenic View' }
    ]
  },
  {
    id: 'story-2',
    traveler: 'Kabir Verma',
    handle: '@kabir.lens',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    location: 'Zermatt, Switzerland',
    caption: 'Matterhorn mirror reflection at Riffelsee before boarding the Glacier Express Excellence Class.',
    likes: '3.9k',
    overlayIcons: [
      { name: 'Mountain', label: 'Glacier Peak' },
      { name: 'Snowflake', label: 'Powder Snow' },
      { name: 'Utensils', label: 'Alpine Fondue' }
    ]
  },
  {
    id: 'story-3',
    traveler: 'Meera Singhania',
    handle: '@meera.zen',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    location: 'Ubud, Bali',
    caption: 'Morning floating breakfast in our rainforest pool villa overlooking the jungle mist in Bali.',
    likes: '4.6k',
    overlayIcons: [
      { name: 'Palmtree', label: 'Jungle Villa' },
      { name: 'Sparkles', label: 'Floating Breakfast' },
      { name: 'Heart', label: 'Soul Healing' }
    ]
  },
  {
    id: 'story-4',
    traveler: 'Aarav & Tanvi Deshmukh',
    handle: '@aarav.tanvi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    location: 'Kyoto, Japan',
    caption: 'Early morning tranquility along 10,000 vermilion Torii gates at Fushimi Inari Taisha.',
    likes: '3.2k',
    overlayIcons: [
      { name: 'Landmark', label: 'Torii Shrines' },
      { name: 'Compass', label: 'Zen Walk' },
      { name: 'Camera', label: 'Golden Hour' }
    ]
  },
  {
    id: 'story-5',
    traveler: 'Dr. Vikramaditya Sen',
    handle: '@vikram.wildlife',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    location: 'Serengeti, Tanzania',
    caption: 'Sunrise hot air balloon drifting over the Great Migration savanna herds across the Mara River.',
    likes: '5.8k',
    overlayIcons: [
      { name: 'Compass', label: 'Big Five Safari' },
      { name: 'Sun', label: 'Balloon Sunrise' },
      { name: 'Camera', label: 'Savanna Wildlife' }
    ]
  },
  {
    id: 'story-6',
    traveler: 'Ananya Iyer',
    handle: '@ananya.journeys',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    location: 'Oia, Santorini',
    caption: 'Infinity pool sunset overlooking the volcanic caldera and whitewashed Aegean bell towers.',
    likes: '7.1k',
    overlayIcons: [
      { name: 'Waves', label: 'Infinity Pool' },
      { name: 'Wine', label: 'Caldera Wine' },
      { name: 'Heart', label: 'Romantic Vibe' }
    ]
  }
];

export const TRAVEL_VIBES = [
  {
    id: 'vibe-1',
    title: 'Honeymoon & Romantic Calderas',
    tag: 'Couples & Honeymoon',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    destination: 'Santorini & Amalfi Coast',
    overlayIcons: ['Heart', 'Wine', 'Waves'],
    activityHighlights: ['Private Infinity Pool', 'Sunset Catamaran', 'Cliffside Dining']
  },
  {
    id: 'vibe-2',
    title: 'High-Altitude Alpine Expeditions',
    tag: 'Mountain & Adventure',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    destination: 'Swiss Alps & Interlaken',
    overlayIcons: ['Mountain', 'Snowflake', 'Compass'],
    activityHighlights: ['Glacier Express Rail', 'Top of Europe 3,454m', 'Matterhorn Hike']
  },
  {
    id: 'vibe-3',
    title: 'Tropical Jungle & Island Sanctuaries',
    tag: 'Rainforest & Wellness',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    destination: 'Bali & Nusa Penida',
    overlayIcons: ['Palmtree', 'Sparkles', 'Waves'],
    activityHighlights: ['Rainforest Villa Pool', 'Floating Breakfast', 'Holy Water Cleansing']
  },
  {
    id: 'vibe-4',
    title: 'Sacred Temples & Metropole Neon',
    tag: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    destination: 'Kyoto & Tokyo Blossom',
    overlayIcons: ['Landmark', 'Compass', 'Camera'],
    activityHighlights: ['First Class Bullet Train', 'Kaiseki Onsen Ryokan', 'Zen Tea Masterclass']
  },
  {
    id: 'vibe-5',
    title: 'Untamed Savanna & Big Five Safaris',
    tag: 'Wilderness & Nature',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    destination: 'Serengeti & Ngorongoro',
    overlayIcons: ['Compass', 'Sun', 'Camera'],
    activityHighlights: ['Sunrise Hot Air Balloon', 'Ngorongoro Crater 4x4', 'Luxury Tented Lodge']
  }
];

// Featured 5-Star Luxury Villas & Signature Hotels
export const FEATURED_HOTELS = [
  {
    id: 'hotel-1',
    name: 'Canaves Oia Epitome',
    destination: 'Santorini, Greece',
    badge: '5-Star Ultra Luxury',
    pricePerNight: 1450,
    rating: 4.98,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Private Caldera Pool Villa',
    overlayIcons: [
      { name: 'Waves', label: 'Infinity Plunge Pool' },
      { name: 'Wine', label: 'Sunset Sommelier' },
      { name: 'Sparkles', label: '24/7 Butler' }
    ],
    highlights: ['Aegean Sunset Views', 'Private Heliport', 'Michelin-Trained Chef']
  },
  {
    id: 'hotel-2',
    name: 'The Chedi Andermatt',
    destination: 'Swiss Alps, Switzerland',
    badge: 'Alpine Grandeur',
    pricePerNight: 1890,
    rating: 4.96,
    reviews: 240,
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Matterhorn View Chalet',
    overlayIcons: [
      { name: 'Mountain', label: 'Glacier Panorama' },
      { name: 'Snowflake', label: 'Heated Hydrotherapy' },
      { name: 'Flame', label: 'Granite Fireplace' }
    ],
    highlights: ['2,400m² Tibetan Spa', 'Ski-in Ski-out Butler', 'Cheese Humidor']
  },
  {
    id: 'hotel-3',
    name: 'Mandapa, a Ritz-Carlton Reserve',
    destination: 'Ubud, Bali',
    badge: 'Rainforest Sanctuary',
    pricePerNight: 1250,
    rating: 4.99,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Ayung River Pool Villa',
    overlayIcons: [
      { name: 'Palmtree', label: 'Jungle Canopy' },
      { name: 'Waves', label: 'Riverfront Deck' },
      { name: 'Sparkles', label: 'Patih Butler Service' }
    ],
    highlights: ['Private Rice Paddy Terraces', 'Sacred Water Blessing', 'Kubu Organic Dining']
  },
  {
    id: 'hotel-4',
    name: 'Hoshinoya Kyoto',
    destination: 'Kyoto, Japan',
    badge: 'Historic Riverside Ryokan',
    pricePerNight: 1620,
    rating: 4.95,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Oi River Wooden Pavilion',
    overlayIcons: [
      { name: 'Compass', label: 'Private Boat Access' },
      { name: 'Utensils', label: 'Kaiseki Banquet' },
      { name: 'Landmark', label: 'Arashiyama Forest' }
    ],
    highlights: ['Cedarwood Onsen Bath', 'Zen Tea Master Ceremony', 'Kimono Concierge']
  },
  {
    id: 'hotel-5',
    name: 'Villa Franca Positano',
    destination: 'Amalfi Coast, Italy',
    badge: 'Cliffside Splendor',
    pricePerNight: 1780,
    rating: 4.94,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Rooftop Panoramic Suite',
    overlayIcons: [
      { name: 'Waves', label: 'Capri Sea View' },
      { name: 'Wine', label: 'Limoncello Lounge' },
      { name: 'Camera', label: 'Faraglioni Sunset' }
    ],
    highlights: ['Rooftop Sky Pool', 'Li Galli Michelin Restaurant', 'Private Riva Yacht']
  },
  {
    id: 'hotel-6',
    name: 'Singita Sasakwa Lodge',
    destination: 'Serengeti, Tanzania',
    badge: 'Edwardian Safari Palace',
    pricePerNight: 2850,
    rating: 5.0,
    reviews: 130,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Savanna Hilltop Manor',
    overlayIcons: [
      { name: 'Compass', label: 'Big 5 Tracker' },
      { name: 'Sun', label: 'Private Bush Deck' },
      { name: 'Sparkles', label: 'Vintage Cellar' }
    ],
    highlights: ['Private 350,000-Acre Reserve', 'Equestrian Safari', 'Heated Rim-Flow Pool']
  }
];

// Curated Editorial Guides & Bucket List Insights
export const TRAVEL_GUIDES = [
  {
    id: 'guide-1',
    title: 'The Secret Caldera: 7 Hidden Sunset Coves in Santorini',
    author: 'Priya Patel',
    authorRole: 'Senior Luxury Travel Curator',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    readTime: '4 Min Read',
    category: 'Hidden Gems',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80',
    overlayIcons: [
      { name: 'Camera', label: 'Photo Spots' },
      { name: 'Wine', label: 'Sunset Coves' }
    ],
    summary: 'Escape the crowds in Oia and discover secluded volcanic coves, private sea caves, and cliffside taverns known only to local boatmen.'
  },
  {
    id: 'guide-2',
    title: 'First-Class Across the Alps: The Glacier Express Excellence Guide',
    author: 'Rohan Nambiar',
    authorRole: 'Alpine Expedition Specialist',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    readTime: '6 Min Read',
    category: 'Scenic Rail',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80',
    overlayIcons: [
      { name: 'Mountain', label: 'Panoramic Rail' },
      { name: 'Sparkles', label: 'Excellence Class' }
    ],
    summary: 'Everything you need to know about the world-renowned panoramic train journey through 291 bridges, 91 tunnels, and the Swiss Rhine Gorge.'
  },
  {
    id: 'guide-3',
    title: 'Sacred Kyoto: Zen Tea Ceremonies & Private Bamboo Trails',
    author: 'Nisha Krishnan',
    authorRole: 'Asian Culture & Heritage Director',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    readTime: '5 Min Read',
    category: 'Culture & Zen',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    overlayIcons: [
      { name: 'Compass', label: 'Ancient Shrines' },
      { name: 'Utensils', label: 'Tea Master' }
    ],
    summary: 'A curated journey into Kyoto’s secret garden pavilions, centuries-old Uji matcha estates, and sunrise strolls before temple doors open.'
  },
  {
    id: 'guide-4',
    title: 'Serengeti From Above: The Ultimate Dawn Balloon Expedition',
    author: 'Devrat Sen',
    authorRole: 'Wildlife Expedition Leader',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    readTime: '7 Min Read',
    category: 'Wilderness',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
    overlayIcons: [
      { name: 'Sun', label: 'Sunrise Flight' },
      { name: 'Compass', label: 'Migration Tracking' }
    ],
    summary: 'Float silently above golden acacia treetops as millions of wildebeests, lions, and giraffes awaken in the world’s greatest wilderness.'
  }
];

