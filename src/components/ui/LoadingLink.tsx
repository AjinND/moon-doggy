// src/components/ui/LoadingLink.tsx
'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, MouseEvent } from 'react';
import { useNavigationLoading } from '@/components/providers/NavigationLoadingProvider';

interface LoadingLinkProps extends Omit<LinkProps, 'href'> {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}

export default function LoadingLink({ 
  href, 
  children, 
  className, 
  onClick,
  target,
  rel,
  ...props 
}: LoadingLinkProps) {
  const pathname = usePathname();
  const { setLoading } = useNavigationLoading();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }

    // Don't show loading if it's the same page or if default was prevented
    if (e.defaultPrevented || href === pathname) {
      return;
    }

    // Check if it's an external link or opens in new tab
    const url = href.toString();
    if (url.startsWith('http') || url.startsWith('mailto:') || url.startsWith('tel:') || target === '_blank') {
      return;
    }

    // Show loading for internal navigation
    setLoading(true);
  };

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </Link>
  );
}