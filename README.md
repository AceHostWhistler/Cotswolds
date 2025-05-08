This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Property Gallery Component

The `PropertyGallery` component can be used to display a grid of property photos with a fullscreen viewer. This component is designed to be reused across all property listing pages.

### Usage

```jsx
import PropertyGallery from "@/components/PropertyGallery";

// In your property page component:
const MyPropertyPage = () => {
  const photos = [
    "/photos/properties/my-property/1.jpg",
    "/photos/properties/my-property/2.jpg",
    "/photos/properties/my-property/3.jpg",
    // ... more photos
  ];

  return (
    <div>
      <h1>My Amazing Property</h1>
      {/* Other property content */}
      
      <div ref={photosRef}>
        <PropertyGallery 
          photos={photos}
          propertyName="My Property"
          maxInitialPhotos={9} // Optional, defaults to 8
        />
      </div>
    </div>
  );
};
```

### Props

- `photos` (required): An array of photo URLs to display in the gallery
- `propertyName` (required): The name of the property, used for alt text and modal titles
- `maxInitialPhotos` (optional): Maximum number of photos to show initially before "View All" button appears (defaults to 8)

### Features

- Responsive grid layout
- Fullscreen modal gallery when "View All" is clicked
- Individual photo fullscreen view with navigation
- Lazy loading for performance optimization
- Mobile-friendly design
