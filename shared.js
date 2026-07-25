/* Shared helpers for the Horse site UI kit. Exported to window for cross-script use. */
const { useState } = React;

// Reactive mobile breakpoint hook
function useIsMobile(bp = 768) {
  const [m, setM] = React.useState(typeof window !== 'undefined' ? window.innerWidth <= bp : false);
  React.useEffect(() => {
    const on = () => setM(window.innerWidth <= bp);
    on();
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, [bp]);
  return m;
}

// Lucide icon helper
function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 1.75, style = {} }) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide.icons[name]) {
      ref.current.innerHTML = '';
      const el = window.lucide.createElement(window.lucide.icons[name]);
      el.setAttribute('width', size); el.setAttribute('height', size);
      el.setAttribute('stroke', color); el.setAttribute('stroke-width', strokeWidth);
      ref.current.appendChild(el);
    }
  }, [name, size, color, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', ...style }} />;
}

// Section shell with consistent gutters
function Section({ children, bg = 'transparent', pad, id, style = {} }) {
  const isMobile = useIsMobile();
  const p = pad || (isMobile ? 'var(--space-6) var(--gutter)' : 'var(--space-8) var(--gutter)');
  return (
    <section id={id} style={{ background: bg, padding: p, ...style }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>{children}</div>
    </section>
  );
}

Object.assign(window, { Icon, Section, useState, useIsMobile });
