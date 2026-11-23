import React from 'react';

/**
 * Reusable Button Component with mobile touch optimization and accessibility focus rings.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-primary cursor-pointer select-none active:scale-[0.98] text-center';

  const variants = {
    primary:
      'bg-navy-primary text-white hover:bg-navy-secondary shadow-md hover:shadow-lg',
    secondary:
      'bg-white text-navy-primary border border-slate-200 hover:border-navy-primary/40 hover:bg-light-blue/50 shadow-sm',
    accent:
      'bg-accent-teal text-white hover:bg-accent-teal/90 shadow-md hover:shadow-lg',
    outline:
      'bg-transparent text-navy-primary border border-navy-primary/30 hover:border-navy-primary hover:bg-navy-primary/5',
    ghost:
      'bg-transparent text-navy-primary hover:bg-light-blue/60'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 min-h-[38px] sm:min-h-[36px] gap-1.5',
    md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2',
    lg: 'text-sm sm:text-base px-6 py-3 min-h-[48px] gap-2.5 font-semibold'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
