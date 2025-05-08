// Define the interface for article objects
export interface Article {
  title: string;
  category: string;
  description?: string;
  readTime: string;
  link: string;
  coverImage: string;
}

// All blog articles data with proper image paths
export const allArticles: Article[] = [
  {
    title: "Whistler's Best Luxury Airbnb Rental chalets. Where Large Luxury Vacation Homes Redefine Your Mountain Getaway",
    category: "Luxury Properties",
    description: "Discover Whistler's most exclusive luxury vacation rental homes, from ski-in/ski-out chalets to private butler service. Experience the ultimate mountain getaway with AceHost's premium properties.",
    readTime: "15 min read",
    link: "/post/whistlers-crown-jewels-where-luxury-rental-homes-redefine-the-mountain-getaway",
    coverImage: "/photos/post/whistlers-crown-jewels-where-luxury-rental-homes-redefine-the-mountain-getaway/hero.jpg",
  },
  {
    title: "Whistler's Dream Rental Homes: Top 5 Luxury Vacation Properties",
    category: "Luxury Properties",
    description: "Explore Whistler's most exclusive luxury vacation rentals, from ski-in/ski-out chalets to stunning village properties. Discover what makes these 5 properties the ultimate mountain getaway.",
    readTime: "13 min read",
    link: "/post/whistlers-dream-rental-homes",
    coverImage: "/photos/post/whistlers-dream-rental-homes/hero.jpg",
  },
  {
    title: "Whistler Snow Report: Record Snowfall Marks the Start of the 2024/2025 Ski Season",
    category: "Whistler Snow/Weather Report",
    description: "Whistler Snow & Weather Report 2024/2025 Opening Day",
    readTime: "11 minute read",
    link: "/post/whistler-snow-report-record-snowfall-marks-the-start-of-the-2024-2025-ski-season",
    coverImage: "/photos/post/WinterSnowReport/WinterSnowHero.png",
  },
  {
    title: "Luxury Whistler Vacation Redefined: How AceHost Whistler Caters to the 1% in Canada's Ultimate Playground",
    category: "VIP Concierge | Luxury Vacation",
    description: "Experience luxury in Whistler with exclusive concierge services",
    readTime: "20 min",
    link: "/post/luxury-whistler-vacation-redefined-how-acehost-whistler-caters-to-the-1-in-canadas-ultimate-playground",
    coverImage: "/photos/post/Luxury Whistler Vacation/Hero.jpg",
  },
  {
    title: "Find Your Dream Long-Term Luxury Rental in Whistler with AceHost",
    category: "Long-term, Property",
    description: "Luxury long-term home rental options",
    readTime: "10 min read",
    link: "/post/find-your-dream-long-term-luxury-rental-in-whistler-with-acehost",
    coverImage: "/photos/post/find-your-dream-long-term-luxury-rental-in-whistler-with-acehost/Hero.jpg",
  },
  {
    title: "Top 7 of the Most Luxury Vacation Rental Homes in Whistler | Christmas and New Year's",
    category: "Travel Christmas",
    description: "Top 7 of the Most Luxury Vacation Rental Homes in Whistler | Christmas & New Year's",
    readTime: "15 min read",
    link: "/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years",
    coverImage: "/photos/post/top-7-of-the-most-luxury-vacation-rental-homes-in-whistler-for-christmas-new-years/Hero.png",
  },
  {
    title: "Highlighting the Importance of a Property Management Company For Your Whistler Investment Home",
    category: "Property Management",
    description: "Why professional property management matters for Whistler vacation homes",
    readTime: "15 min read",
    link: "/post/highlighting-the-importance-of-a-property-management-company-for-your-whistler-investment-home",
    coverImage: "/photos/post/highlighting-the-importance-of-a-property-management-company-for-your-whistler-investment-home/Hero.jpg",
  },
  {
    title: "Discover the Ultimate Ski-in Ski-out Luxury Chalet Homes in Whistler, Canada",
    category: "Luxury Properties",
    description: "Experience the epitome of luxury with exclusive ski-in/ski-out chalets in Whistler",
    readTime: "12 min read",
    link: "/post/discover-the-ultimate-ski-in-ski-out-luxury-chalet-homes-in-whistler-canada",
    coverImage: "/photos/post/discover-the-ultimate-ski-in-ski-out-luxury-chalet-homes-in-whistler-canada/hero.jpg",
  },
  {
    title: "The Best Restaurants in Whistler, Canada | Food, Coffee, Cocktails & More",
    category: "Dining & Lifestyle",
    description: "Discover Whistler's finest dining experiences, from Michelin-recommended restaurants to cozy cafés",
    readTime: "18 min read",
    link: "/post/the-best-restaurants-in-whistler-canada-food-coffee-cocktails-more",
    coverImage: "/photos/post/the-best-restaurants-in-whistler-canada-food-coffee-cocktails-more/hero.jpeg",
  },
  {
    title: "AceHost Whistler VIP Concierge Services",
    category: "VIP Services",
    description: "Experience luxury in Whistler with AceHost's exclusive VIP concierge services",
    readTime: "14 min read",
    link: "/post/acehost-whistler-vip-concierge-services",
    coverImage: "/photos/post/acehost-whistler-vip-concierge-services/hero.png",
  },
  {
    title: "High Budget Things to do on Vacation in Whistler Canada",
    category: "Luxury Activities",
    description: "Exclusive experiences and activities for luxury travelers in Whistler",
    readTime: "14 min read",
    link: "/post/high-budget-things-to-do-on-vacation-in-whistler-canada",
    coverImage: "/photos/post/high-budget-things-to-do-on-vacation-in-whistler-canada/hero.png",
  },
  {
    title: "Whistler's Luxury Rental Escapes | Choosing a Luxury Airbnb Vacation",
    category: "Luxury Accommodations",
    description: "Explore Whistler's most exquisite luxury vacation rentals",
    readTime: "20 min read",
    link: "/post/whistlers-luxury-rental-escapes",
    coverImage: "/photos/post/whistlers-luxury-rental-escapes/hero.jpg",
  }
];

// Function to get related articles excluding the current one
export const getRelatedArticles = (currentArticleLink: string, count: number = 3): Article[] => {
  return allArticles
    .filter(article => article.link !== currentArticleLink)
    .sort(() => 0.5 - Math.random()) // Randomize the articles
    .slice(0, count); // Get the specified number of articles
}; 