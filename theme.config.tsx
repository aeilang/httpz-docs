import React from 'react';
import Image from 'next/image';
import { useRouter } from 'nextra/hooks';
import { LocaleSwitch, useConfig, DocsThemeConfig, Link, ThemeSwitch } from 'nextra-theme-docs';

const BANNER_TEXT = {
  cn: '🎉 httpz v1.1.0 已发布',
  en: '🎉 httpz v1.1.0 released',
};

const TOC_TITLE_TEXT = {
  en: 'On This Page',
  cn: 'On This Page',
};

const EDIT_TEXT = {
  en: 'Edit this page on GitHub →',
  cn: 'Edit this page on GitHub →',
};

const FEEDBACK_TEXT = {
  en: 'Question? Give us feedback →',
  cn: 'Question? Give us feedback →',
};

const SEARCH_TEXT = {
  en: 'Search documentation...',
  cn: '搜索文档...',
};

const THEME_SWITCH_TEXT = {
  en: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
  cn: {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
};

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/aeilang/httpz-docs/tree/master',
  project: {
    link: 'https://github.com/aeilang/httpz',
  },
  i18n: [
    { name: '简体中文', locale: 'cn' },
    { name: 'English', locale: 'en' },
  ],
  banner: {
    key: 'announcement',
    content: function useText() {
      const { locale } = useRouter();
      return BANNER_TEXT[locale];
    },
    dismissible: true,
  },
  navbar: {
    extraContent: LocaleSwitch,
  },
  search: {
    placeholder: function useText() {
      const { locale } = useRouter();
      return SEARCH_TEXT[locale];
    },
  },
  logo: function useRouterLogo() {
    const { locale } = useRouter();
    return (
      <Link
        href={`/${locale}`}
        className="flex items-center text-current no-underline hover:opacity-75 ltr:mr-auto rtl:ml-auto"
      >
        <Image src="/logo/logo.png" alt="logo" width={45} height={45} />
        <span className="hidden select-none font-extrabold ltr:ml-2 rtl:mr-2 md:inline">HTTPZ</span>
      </Link>
    );
  },
  logoLink: false,
  darkMode: true,
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
    title: function useText() {
      const { locale } = useRouter();
      return TOC_TITLE_TEXT[locale];
    },
  },
  themeSwitch: {
    useOptions() {
      const { locale } = useRouter();
      return THEME_SWITCH_TEXT[locale];
    },
  },
  editLink: {
    content: function useText() {
      const { locale } = useRouter();
      return EDIT_TEXT[locale];
    },
  },
  feedback: {
    content: function useText() {
      const { locale } = useRouter();
      return FEEDBACK_TEXT[locale];
    },
  },
  footer: {
    component: (
      <footer className="bg-[#303846] text-center w-full flex items-center justify-center min-h-24 bottom-0">
            <span className=" text-white p-2 font-serif">
            Copyright © {new Date().getFullYear()} HTTPZ, {'  '}
                aeilang
            </span>

            <LocaleSwitch className='text-white text-md dark:text-white'/>
            <ThemeSwitch className='text-white text-md dark:text-white'/>
      </footer>
    ),
  },
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>();
    const { locale } = useRouter();
    const description = config.frontMatter.description || 'httpz | HTTPZ';
    const image = config.frontMatter.image 
    const title = `${config.title}`;
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        {/* Favicons, meta */}
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon.ico" />
        <link rel="mask-icon" href="/logo/favicon.ico" color="#000000" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="vi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thanhnamnguyen.dev" />
        <meta property="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="thanhnamnguyen.dev" />
      </>
    );
  },
};

export default config;
