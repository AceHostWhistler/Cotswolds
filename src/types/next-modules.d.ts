declare module 'next/head' {
  import { ReactNode } from 'react';
  
  export interface HeadProps {
    children: ReactNode;
  }
  
  export default function Head(props: HeadProps): JSX.Element;
}

declare module 'next/link' {
  import { ComponentProps, ReactNode } from 'react';
  
  export interface LinkProps extends ComponentProps<'a'> {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    children: ReactNode;
  }
  
  export default function Link(props: LinkProps): JSX.Element;
}

declare module 'next/router' {
  export interface RouterProps {
    pathname: string;
    query: { [key: string]: string | string[] };
    asPath: string;
    isFallback: boolean;
    basePath: string;
    locale: string;
    locales: string[];
    defaultLocale: string;
    isReady: boolean;
    domainLocales: { domain: string; defaultLocale: string; locales: string[] }[];
  }
  
  export function useRouter(): RouterProps;
} 