/* @ds-bundle: {"format":4,"namespace":"DistribuidoraHorseDesignSystem_1d44b3","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"fc5668cc71e5","components/brand/Logo.jsx":"16a71ad59650","components/commerce/ProductCard.jsx":"4c5769280870","components/core/Badge.jsx":"f7443ba10933","components/core/Button.jsx":"4bb17e810897","components/core/Card.jsx":"0787977b476f","components/core/IconButton.jsx":"bfad6797a853","components/core/Stat.jsx":"c71fcce505c3","components/forms/Checkbox.jsx":"0a0f41f6c0fb","components/forms/Input.jsx":"aaa9999a5f93","components/forms/Select.jsx":"5751fe508861","import_github/about-screen.js":"2be867092e5c","import_github/catalog-screen.js":"d806c59b2d94","import_github/contact-screen.js":"2042ecd80ffb","import_github/footer.js":"2611b63baf40","import_github/header.js":"8548e5486043","import_github/home-screen.js":"f3ec3843ef8a","import_github/products.js":"f358f5a6e6fe","import_github/shared.js":"ddf4f71d8c59","ui_kits/site/AboutScreen.jsx":"719dd56bedad","ui_kits/site/CatalogScreen.jsx":"d806c59b2d94","ui_kits/site/ContactScreen.jsx":"2042ecd80ffb","ui_kits/site/Footer.jsx":"c64daa3c13c5","ui_kits/site/Header.jsx":"cbecc6d8aa0e","ui_kits/site/HomeScreen.jsx":"dc106db34d24","ui_kits/site/products.js":"4a01bff0c84e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DistribuidoraHorseDesignSystem_1d44b3 = window.DistribuidoraHorseDesignSystem_1d44b3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — Cinzel caps eyebrow/kicker with an optional lead rule.
 * Used above section headings for the brand's editorial rhythm.
 */
function Eyebrow({
  children,
  tone = 'accent',
  rule = true,
  style = {},
  ...rest
}) {
  const colors = {
    accent: 'var(--accent)',
    warm: 'var(--accent-warm)',
    muted: 'var(--text-muted)',
    ink: 'var(--text-primary)'
  };
  const c = colors[tone] || colors.accent;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      fontWeight: 'var(--fw-medium)',
      color: c,
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1.5,
      background: c,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — brand logo. Renders the real logo assets.
 * `variant`: "full" (wordmark lockup) or "mark" (horse-head emblem only).
 * `tone`: "dark" (charcoal, for light bg) or "light" (for dark bg).
 * Assets resolve relative to the design-system root.
 */
function Logo({
  variant = 'full',
  tone = 'dark',
  height,
  base = '',
  style = {},
  alt = 'Distribuidora Horse — Saúde Animal',
  ...rest
}) {
  const file = variant === 'mark' ? tone === 'light' ? 'assets/mark-horse-light.png' : 'assets/mark-horse.png' : tone === 'light' ? 'assets/logo-horse-light.png' : 'assets/logo-horse.png';
  const h = height || (variant === 'mark' ? 56 : 72);
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${base}${file}`,
    alt: alt,
    style: {
      height: h,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — small status / category label.
 * Tones: neutral, health (green), performance (amber), success, warning, danger, info.
 * Styles: soft (tinted fill) or solid.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  size = 'md',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ['var(--paper-100)', 'var(--text-secondary)'],
      solid: ['var(--ink-600)', 'var(--paper-50)']
    },
    health: {
      soft: ['var(--accent-soft)', 'var(--accent-strong)'],
      solid: ['var(--accent)', 'var(--paper-0)']
    },
    performance: {
      soft: ['var(--accent-warm-soft)', 'var(--accent-warm-strong)'],
      solid: ['var(--accent-warm)', 'var(--paper-0)']
    },
    success: {
      soft: ['var(--success-soft)', 'var(--green-700)'],
      solid: ['var(--success)', 'var(--paper-0)']
    },
    warning: {
      soft: ['var(--warning-soft)', 'var(--amber-800)'],
      solid: ['var(--warning)', 'var(--paper-0)']
    },
    danger: {
      soft: ['var(--danger-soft)', 'var(--red-600)'],
      solid: ['var(--danger)', 'var(--paper-0)']
    },
    info: {
      soft: ['var(--info-soft)', 'var(--blue-600)'],
      solid: ['var(--info)', 'var(--paper-0)']
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant] || tones.neutral.soft;
  const dims = size === 'sm' ? {
    fs: 11,
    pad: '3px 8px',
    h: 20
  } : {
    fs: 12,
    pad: '4px 11px',
    h: 24
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: dims.h,
      padding: dims.pad,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontSize: dims.fs,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.03em',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — product catalog card. Image slot, brand line, name, category
 * badge and optional action. Composes Badge.
 */
function ProductCard({
  name,
  brand,
  category,
  tone = 'health',
  image,
  imageAlt = '',
  action,
  onClick,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      boxShadow: 'var(--shadow-xs)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-xs)';
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 3',
      background: 'var(--paper-0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      padding: 'var(--space-3)',
      boxSizing: 'border-box'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--ls-caps)',
      color: 'var(--stone-500)'
    }
  }, "PRODUTO")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, category && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone,
    size: "sm"
  }, category)), brand && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--lh-snug)'
    }
  }, name), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, action)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — primary action control.
 * Variants: solid (ink), accent (green), warm (amber), outline, ghost.
 * Sizes: sm, md, lg. Optional leading/trailing icon via `iconLeft`/`iconRight`.
 */
function Button({
  children,
  variant = 'solid',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  block = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: 13,
      gap: 8
    },
    md: {
      padding: '0 20px',
      height: 44,
      fontSize: 14,
      gap: 9
    },
    lg: {
      padding: '0 30px',
      height: 54,
      fontSize: 15,
      gap: 10
    }
  };
  const variants = {
    solid: {
      background: 'var(--brand)',
      color: 'var(--brand-contrast)',
      border: '1px solid var(--brand)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid var(--accent)'
    },
    warm: {
      background: 'var(--accent-warm)',
      color: 'var(--paper-0)',
      border: '1px solid var(--accent-warm)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.solid;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: '0.02em',
      lineHeight: 1,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      boxShadow: variant === 'solid' || variant === 'accent' || variant === 'warm' ? 'var(--shadow-xs)' : 'none',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.08)';
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.1em',
      height: '1.1em'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.1em',
      height: '1.1em'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — surface container.
 * Variants: elevated (shadow), outline (hairline), sunken (tinted).
 * `interactive` adds hover lift. `accentEdge` draws a top brand rule.
 */
function Card({
  children,
  variant = 'elevated',
  interactive = false,
  accentEdge = false,
  padding = 'var(--space-5)',
  style = {},
  ...rest
}) {
  const variants = {
    elevated: {
      background: 'var(--color-surface)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)'
    },
    outline: {
      background: 'var(--color-surface)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'none'
    },
    sunken: {
      background: 'var(--color-surface-sunken)',
      border: '1px solid var(--border)',
      boxShadow: 'none'
    }
  };
  const v = variants[variant] || variants.elevated;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      padding,
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = v.boxShadow;
      }
    }
  }, rest), accentEdge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'var(--accent)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — icon-only button. Same variants/sizes as Button, square.
 */
function IconButton({
  children,
  variant = 'outline',
  size = 'md',
  label,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 54
  }[size] || 44;
  const variants = {
    solid: {
      background: 'var(--brand)',
      color: 'var(--brand-contrast)',
      border: '1px solid var(--brand)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-contrast)',
      border: '1px solid var(--accent)'
    },
    outline: {
      background: 'var(--color-surface)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    }
  };
  const v = variants[variant] || variants.outline;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dims,
      height: dims,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.08)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.15em',
      height: '1.15em',
      fontSize: dims * 0.42
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — headline metric block for stats/credentials.
 * Serif value with a Cinzel caps label.
 */
function Stat({
  value,
  label,
  sublabel,
  align = 'left',
  tone = 'ink',
  style = {},
  ...rest
}) {
  const colors = {
    ink: 'var(--text-primary)',
    accent: 'var(--accent)',
    warm: 'var(--accent-warm)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--text-3xl)',
      lineHeight: 1,
      color: colors[tone] || colors.ink,
      letterSpacing: 'var(--ls-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — checkbox with label. Controlled or uncontrolled.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || (label ? `cb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--accent)' : 'var(--color-surface)',
      border: `1px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      inset: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }, rest)), on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L5 8.6L9.6 3.4",
    stroke: "var(--paper-0)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — text input with optional label, leading icon and hint/error.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  id,
  size = 'md',
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const h = size === 'sm' ? 40 : size === 'lg' ? 54 : 46;
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      width: '100%',
      height: h,
      boxSizing: 'border-box',
      padding: iconLeft ? '0 14px 0 42px' : '0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      background: 'var(--color-surface)',
      border: `1px solid ${error ? 'var(--danger)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = error ? 'var(--danger)' : 'var(--border-focus)';
      e.target.style.boxShadow = `0 0 0 3px ${error ? 'var(--danger-soft)' : 'var(--focus-ring)'}`;
    },
    onBlur: e => {
      e.target.style.borderColor = error ? 'var(--danger)' : 'var(--border-strong)';
      e.target.style.boxShadow = 'none';
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horse — native select styled to match Input, with caret.
 */
function Select({
  label,
  hint,
  options = [],
  id,
  size = 'md',
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const h = size === 'sm' ? 40 : size === 'lg' ? 54 : 46;
  const selId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    style: {
      width: '100%',
      height: h,
      boxSizing: 'border-box',
      padding: '0 40px 0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      background: 'var(--color-surface)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      appearance: 'none',
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--border-focus)';
      e.target.style.boxShadow = `0 0 0 3px var(--focus-ring)`;
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border-strong)';
      e.target.style.boxShadow = 'none';
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none',
      color: 'var(--text-secondary)',
      fontSize: 12
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// import_github/about-screen.js
try { (() => {
const {
  Button,
  Card,
  Eyebrow,
  Stat,
  Badge
} = window.DistribuidoraHorseDesignSystem_1d44b3;
const VALUES = ['Ética', 'Transparência', 'Respeito aos animais', 'Compromisso com o cliente', 'Conhecimento técnico', 'Excelência no atendimento', 'Inovação', 'Agilidade', 'Parceria', 'Responsabilidade'];
function AboutScreen({
  setRoute
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-700)',
      color: 'var(--paper-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: isMobile ? 'var(--space-7) var(--gutter)' : 'var(--space-9) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr',
      gap: isMobile ? 24 : 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "warm"
  }, "A Distribuidora Horse"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: isMobile ? 'var(--text-3xl)' : 'var(--text-4xl)',
      lineHeight: 1.05,
      fontWeight: 600,
      margin: '18px 0 0'
    }
  }, "Uma parceira t\xE9cnica do mercado equino"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--ink-300)',
      marginTop: 20
    }
  }, "Sediada em Belo Horizonte e atuando desde 2016, a Horse \xE9 especializada na distribui\xE7\xE3o de produtos veterin\xE1rios e suplementos para equinos, com uma equipe t\xE9cnica capaz de orientar a escolha e acompanhar o desenvolvimento do animal, mantendo cavalos mais saud\xE1veis e com melhor performance.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: isMobile ? 'none' : 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/mark-horse-light.png",
    alt: "Emblema Horse",
    style: {
      height: 260,
      width: 'auto'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accentEdge: true,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Miss\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.35,
      color: 'var(--text-primary)',
      margin: '16px 0 0',
      fontWeight: 500
    }
  }, "Promover a sa\xFAde, o desempenho e o bem-estar dos equinos por meio de produtos de excel\xEAncia, atendimento consultivo e solu\xE7\xF5es que agreguem valor aos nossos clientes.")), /*#__PURE__*/React.createElement(Card, {
    accentEdge: true,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "warm"
  }, "Vis\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.35,
      color: 'var(--text-primary)',
      margin: '16px 0 0',
      fontWeight: 500
    }
  }, "Ser reconhecida como a principal distribuidora especializada em sa\xFAde equina de Minas Gerais e uma refer\xEAncia nacional em qualidade, atendimento e relacionamento."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: isMobile ? 28 : 64,
      marginTop: 48,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "2016",
    label: "Funda\xE7\xE3o",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "+40",
    label: "Marcas",
    tone: "accent",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "BH",
    label: "Minas Gerais",
    tone: "warm",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "B2B",
    label: "Atacado especializado",
    align: "center"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      justifyContent: 'center'
    }
  }, "Nossos valores"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      margin: '14px 0 0',
      color: 'var(--text-primary)'
    }
  }, "O que nos orienta")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'center',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, VALUES.map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 18px',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)',
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 15,
    color: "var(--accent)"
  }), " ", v))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    }),
    onClick: () => setRoute('contact')
  }, "Fale com a nossa equipe"))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "import_github/about-screen.js", error: String((e && e.message) || e) }); }

// import_github/catalog-screen.js
try { (() => {
const {
  Button,
  Badge,
  Input,
  Select,
  Checkbox,
  ProductCard,
  Eyebrow
} = window.DistribuidoraHorseDesignSystem_1d44b3;
const ALL_PRODUCTS = () => window.HORSE_PRODUCTS || [];
const CATEGORIAS = ['Saúde', 'Nutrição', 'Performance', 'Higiene', 'Pesca'];
const MARCAS_FILTRO = ['Syntec', 'Organnact', 'Calbos', 'Central Vet', 'Heel', 'J.A. Ambiental', 'Lambari'];
function FilterGroup({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 20,
      marginBottom: 20,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, children));
}
function CatalogScreen() {
  const isMobile = useIsMobile();
  const [q, setQ] = useState('');
  const [cats, setCats] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [ordem, setOrdem] = useState('relevancia');
  const toggle = (list, setList) => value => {
    setList(list.includes(value) ? list.filter(v => v !== value) : list.concat(value));
  };
  const limpar = () => {
    setQ('');
    setCats([]);
    setMarcas([]);
    setOrdem('relevancia');
  };
  const filtrados = React.useMemo(() => {
    const t = q.trim().toLowerCase();
    let out = ALL_PRODUCTS().filter(p => (cats.length === 0 || cats.includes(p.category)) && (marcas.length === 0 || marcas.includes(p.marca)) && (!t || p.name.toLowerCase().includes(t) || p.marca.toLowerCase().includes(t) || (p.desc || '').toLowerCase().includes(t)));
    if (ordem === 'nome') out = out.slice().sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    if (ordem === 'marca') out = out.slice().sort((a, b) => a.marca.localeCompare(b.marca, 'pt-BR') || a.name.localeCompare(b.name, 'pt-BR'));
    return out;
  }, [q, cats, marcas, ordem]);
  const visiveis = filtrados.slice(0, 12);
  const temFiltro = q || cats.length || marcas.length;
  const goFull = () => {
    window.location.href = 'catalogo-completo.html';
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Cat\xE1logo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      margin: '14px 0 6px',
      color: 'var(--text-primary)'
    }
  }, "Produtos para equinos"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Uma amostra do portf\xF3lio: sa\xFAde, nutri\xE7\xE3o, performance e higiene")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    }),
    onClick: goFull
  }, "Ver cat\xE1logo completo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '260px 1fr',
      gap: isMobile ? 24 : 36,
      marginTop: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      position: isMobile ? 'static' : 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar produto",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Search",
      size: 18
    }),
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Categoria"
  }, CATEGORIAS.map(c => /*#__PURE__*/React.createElement(Checkbox, {
    key: c,
    label: c,
    checked: cats.includes(c),
    onChange: () => toggle(cats, setCats)(c)
  }))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Marca"
  }, MARCAS_FILTRO.map(m => /*#__PURE__*/React.createElement(Checkbox, {
    key: m,
    label: m,
    checked: marcas.includes(m),
    onChange: () => toggle(marcas, setMarcas)(m)
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    block: true,
    onClick: limpar,
    disabled: !temFiltro
  }, "Limpar filtros")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, filtrados.length, " produto", filtrados.length !== 1 ? 's' : '', filtrados.length > visiveis.length ? ' · mostrando ' + visiveis.length : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 210
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: ordem,
    onChange: e => setOrdem(e.target.value),
    options: [{
      value: 'relevancia',
      label: 'Ordenar: relevância'
    }, {
      value: 'nome',
      label: 'Nome A–Z'
    }, {
      value: 'marca',
      label: 'Marca'
    }]
  }))), visiveis.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '70px 20px',
      textAlign: 'center',
      background: 'var(--color-surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Nenhum produto encontrado"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: '8px 0 20px'
    }
  }, "Tente outra combina\xE7\xE3o de filtros ou limpe a busca."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: limpar
  }, "Limpar filtros")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
      gap: isMobile ? 12 : 20
    }
  }, visiveis.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    brand: p.marca,
    name: p.name,
    category: p.category,
    tone: p.tone,
    image: p.image,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      block: true,
      onClick: goFull
    }, "Ver produto")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      padding: 'var(--space-6)',
      background: 'var(--color-surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Quer ver o portf\xF3lio inteiro?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "Mais de 120 produtos de Syntec, Organnact, Calbos, Central Vet, Heel, J.A. Ambiental e Lambari.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    }),
    onClick: goFull
  }, "Ver cat\xE1logo completo"))))));
}
Object.assign(window, {
  CatalogScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "import_github/catalog-screen.js", error: String((e && e.message) || e) }); }

// import_github/contact-screen.js
try { (() => {
const {
  Button,
  Card,
  Input,
  Select,
  Checkbox,
  Eyebrow,
  Badge
} = window.DistribuidoraHorseDesignSystem_1d44b3;
function ContactRow({
  icon,
  title,
  value,
  href
}) {
  const inner = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: 'var(--accent-soft)',
      color: 'var(--accent-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, value)));
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    target: href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, inner) : inner;
}
function ContactScreen() {
  const [sent, setSent] = useState(false);
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: isMobile ? 'var(--space-7) var(--gutter) var(--space-8)' : 'var(--space-8) var(--gutter) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
      gap: isMobile ? 32 : 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Atendimento consultivo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      margin: '14px 0 0',
      color: 'var(--text-primary)'
    }
  }, "Fale com um especialista"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      marginTop: 16,
      maxWidth: 420
    }
  }, "Atendemos haras, centros de treinamento, cl\xEDnicas, lojas agropecu\xE1rias e revendas em todo o estado. Conte pra gente o que voc\xEA precisa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(ContactRow, {
    icon: "MapPin",
    title: "Base",
    value: "Belo Horizonte, Minas Gerais"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "Phone",
    title: "Telefone fixo",
    value: "(31) 3411-3034",
    href: "tel:+553134113034"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "MessageCircle",
    title: "WhatsApp",
    value: "(31) 99873-9510",
    href: "https://wa.me/5531998739510"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "Mail",
    title: "E-mail",
    value: "vendas@horsesaudeanimal.com.br",
    href: "mailto:vendas@horsesaudeanimal.com.br"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5531998739510",
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "MessageCircle",
      size: 16
    })
  }, "Chamar no WhatsApp")))), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "var(--space-6)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '30px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 58,
      height: 58,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--success-soft)',
      color: 'var(--accent-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 28
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      margin: '18px 0 6px',
      color: 'var(--text-primary)'
    }
  }, "Mensagem enviada!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Nossa equipe retornar\xE1 em breve."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Enviar outra"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Seu nome"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefone",
    placeholder: "(31) 90000-0000"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    placeholder: "voce@empresa.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Perfil",
    options: ['Haras', 'Centro de treinamento', 'Veterinário', 'Loja / revenda', 'Proprietário']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Interesse",
    options: ['Saúde', 'Nutrição', 'Performance', 'Todos']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Mensagem",
    placeholder: "Como podemos ajudar?"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Aceito receber contato e condi\xE7\xF5es comerciais",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    block: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "Send",
      size: 17
    }),
    onClick: () => setSent(true)
  }, "Enviar mensagem"))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "import_github/contact-screen.js", error: String((e && e.message) || e) }); }

// import_github/footer.js
try { (() => {
const {
  Logo
} = window.DistribuidoraHorseDesignSystem_1d44b3;
function Footer({
  setRoute
}) {
  const isMobile = useIsMobile();
  const nav = r => () => setRoute && setRoute(r);
  const irMarcas = () => {
    setRoute && setRoute('home');
    setTimeout(() => {
      const el = document.getElementById('marcas');
      if (el) window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }, 120);
  };
  const full = () => {
    window.location.href = 'catalogo-completo.html';
  };
  const cols = [['Empresa', [['A Horse', nav('about')], ['Missão e valores', nav('about')], ['Trabalhe conosco', nav('contact')]]], ['Catálogo', [['Saúde', full], ['Nutrição', full], ['Performance', full], ['Higiene', full]]], ['Atendimento', [['Fale conosco', nav('contact')], ['Seja um cliente', nav('contact')], ['Marcas parceiras', irMarcas]]]];
  const social = [['Instagram', 'https://www.instagram.com/distribuidorahorse', '@distribuidorahorse'], ['MessageCircle', 'https://wa.me/5531998739510', 'WhatsApp (31) 99873-9510'], ['Phone', 'tel:+553134113034', 'Telefone (31) 3411-3034'], ['Mail', 'mailto:vendas@horsesaudeanimal.com.br', 'E-mail']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-700)',
      color: 'var(--paper-200)',
      padding: 'var(--space-7) var(--gutter) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr 1fr' : '1.4fr repeat(3,1fr)',
      gap: isMobile ? 28 : 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: isMobile ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    tone: "light",
    height: 72,
    base: "./"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--ink-300)',
      maxWidth: 260
    }
  }, "Distribuidora especializada em sa\xFAde, nutri\xE7\xE3o e performance equina. Belo Horizonte, Minas Gerais."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      gap: 10
    }
  }, social.map(([n, href, label]) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: href,
    target: href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    title: label,
    "aria-label": label,
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(255,255,255,0.18)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--paper-200)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.10)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 17
  }))))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--amber-500)'
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '16px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(([label, action]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    onClick: action,
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink-300)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--paper-100)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--ink-300)';
    }
  }, label))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2016\u20132026 Distribuidora Horse Sa\xFAde Animal \xB7 CNPJ 26.258.683/0001-75"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 22,
      color: 'var(--paper-100)'
    }
  }, "Horse Sa\xFAde Animal"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "import_github/footer.js", error: String((e && e.message) || e) }); }

// import_github/header.js
try { (() => {
const {
  Logo,
  Button,
  IconButton
} = window.DistribuidoraHorseDesignSystem_1d44b3;
function Header({
  route,
  setRoute
}) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const nav = [['home', 'Início'], ['catalog', 'Catálogo'], ['about', 'A Horse'], ['contact', 'Contato']];
  const go = id => {
    setRoute(id);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(250,248,243,0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      height: isMobile ? 72 : 92,
      padding: '0 var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    tone: "dark",
    height: isMobile ? 48 : 62,
    base: "./"
  })), !isMobile && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 6,
      marginLeft: 'auto'
    }
  }, nav.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      cursor: 'pointer',
      padding: '9px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: route === id ? 700 : 500,
      color: route === id ? 'var(--text-primary)' : 'var(--text-secondary)',
      borderBottom: route === id ? '2px solid var(--accent)' : '2px solid transparent'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Buscar",
    variant: "ghost",
    onClick: () => go('catalog')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 19
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "MessageCircle",
      size: 16
    }),
    onClick: () => go('contact')
  }, "Falar com especialista"))), isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Menu",
    variant: "ghost",
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'X' : 'Menu',
    size: 22
  })))), isMobile && open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)',
      background: 'var(--color-surface)',
      padding: 'var(--space-4) var(--gutter) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, nav.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      cursor: 'pointer',
      padding: '13px 4px',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: route === id ? 700 : 500,
      color: route === id ? 'var(--accent-strong)' : 'var(--text-primary)',
      borderBottom: '1px solid var(--border)'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "md",
    block: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "MessageCircle",
      size: 16
    }),
    onClick: () => go('contact')
  }, "Falar com especialista"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "import_github/header.js", error: String((e && e.message) || e) }); }

// import_github/home-screen.js
try { (() => {
const {
  Button,
  Badge,
  Card,
  Eyebrow,
  Stat,
  ProductCard
} = window.DistribuidoraHorseDesignSystem_1d44b3;
function Hero({
  setRoute
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-700)',
      color: 'var(--paper-50)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "./assets/mark-horse-light.png",
    alt: "",
    style: {
      position: 'absolute',
      right: isMobile ? '-18%' : '4%',
      top: '50%',
      transform: 'translateY(-50%)',
      height: isMobile ? 240 : 400,
      maxWidth: '46%',
      objectFit: 'contain',
      opacity: 0.07,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: isMobile ? 'var(--space-7) var(--gutter)' : 'var(--space-8) var(--gutter)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "warm"
  }, "Distribuidora de produtos veterin\xE1rios \xB7 desde 2016"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: isMobile ? 'var(--text-3xl)' : 'var(--text-5xl)',
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      fontWeight: 600,
      margin: '20px 0 0'
    }
  }, "Produtos veterin\xE1rios com orienta\xE7\xE3o t\xE9cnica"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--ink-300)',
      maxWidth: 520,
      marginTop: 22
    }
  }, "Distribu\xEDmos medicamentos, suplementos e nutri\xE7\xE3o equina das melhores ind\xFAstrias, com uma equipe t\xE9cnica capaz de orientar a escolha e acompanhar o desenvolvimento do animal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    }),
    onClick: () => setRoute('catalog')
  }, "Ver cat\xE1logo"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: 'var(--paper-50)',
      borderColor: 'rgba(255,255,255,0.28)'
    },
    onClick: () => setRoute('contact')
  }, "Seja um cliente")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: isMobile ? 28 : 52,
      marginTop: isMobile ? 32 : 44,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "+40",
    label: "Marcas parceiras",
    tone: "ink",
    style: {
      '--text-primary': 'var(--paper-50)'
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2016",
    label: "No mercado",
    tone: "ink",
    style: {
      '--text-primary': 'var(--paper-50)'
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "MG",
    label: "Base em BH",
    tone: "ink",
    style: {
      '--text-primary': 'var(--paper-50)'
    }
  })))));
}
const PILLARS = [['HeartPulse', 'Saúde', 'Prevenção, tratamento e bem-estar animal com produtos veterinários de alta qualidade.'], ['Wheat', 'Nutrição', 'Suplementação e alimentação para o desenvolvimento e a condição do plantel.'], ['Trophy', 'Performance', 'Suporte ao desempenho esportivo e funcional em provas e competições.'], ['ShieldCheck', 'Confiança', 'Marcas reconhecidas, disponibilidade e suporte técnico especializado.']];
function Pillars() {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      justifyContent: 'center'
    }
  }, "Nossos pilares"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      margin: '16px 0 0',
      color: 'var(--text-primary)'
    }
  }, "Mais que produtos, uma parceria t\xE9cnica")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
      gap: isMobile ? 12 : 20
    }
  }, PILLARS.map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    variant: "elevated",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--accent-soft)',
      color: 'var(--accent-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, body)))));
}
const PICK = name => (window.HORSE_PRODUCTS || []).find(p => p.name === name) || {};
const FEATURED = ['Muscle Horse', 'Creatina 90 Syntec', 'Nutrifull Equi', 'Vitapulmin Gel'].map(PICK);
const TEAM_ITEMS = [['Stethoscope', 'Orientação de uso', 'Indicação correta de medicamentos e suplementos para cada necessidade.'], ['LineChart', 'Acompanhamento', 'Suporte contínuo no desenvolvimento e na condição do animal.'], ['GraduationCap', 'Conhecimento técnico', 'Equipe especializada no universo equino, próxima do cliente.']];
function TechTeam({
  setRoute
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
      gap: isMobile ? 32 : 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Equipe t\xE9cnica"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      margin: '16px 0 0',
      color: 'var(--text-primary)',
      lineHeight: 1.1
    }
  }, "N\xE3o vendemos s\xF3 produtos.", /*#__PURE__*/React.createElement("br", null), "Orientamos e acompanhamos."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      marginTop: 18,
      maxWidth: 440
    }
  }, "Nossa equipe t\xE9cnica ajuda a escolher os produtos veterin\xE1rios e suplementos certos e acompanha o desenvolvimento do animal, do plano nutricional \xE0 performance."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    }),
    onClick: () => setRoute('contact')
  }, "Fale com a equipe t\xE9cnica"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, TEAM_ITEMS.map(([icon, title, body]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      padding: 'var(--space-4)',
      background: 'var(--color-bg)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: 'var(--accent-soft)',
      color: 'var(--accent-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, body)))))));
}
function Featured({
  setRoute
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 32,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "warm"
  }, "Destaques do cat\xE1logo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      margin: '14px 0 0',
      color: 'var(--text-primary)'
    }
  }, "Produtos selecionados para o seu plantel")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowUpRight",
      size: 16
    }),
    onClick: () => {
      window.location.href = 'catalogo-completo.html';
    }
  }, "Ver cat\xE1logo completo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
      gap: isMobile ? 12 : 20
    }
  }, FEATURED.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    brand: p.marca,
    name: p.name,
    category: p.category,
    tone: p.tone,
    image: p.image,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      block: true,
      onClick: () => {
        window.location.href = 'catalogo-completo.html';
      }
    }, "Ver produto")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    }),
    onClick: () => {
      window.location.href = 'catalogo-completo.html';
    }
  }, "Ver cat\xE1logo completo"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Mais de 120 produtos \xB7 Syntec, Organnact, Calbos, Central Vet, Heel, J.A. Ambiental e Lambari")));
}
function Brands() {
  const names = [['Syntec', 'SYNTEC'], ['Organnact', 'ORGANNACT'], ['Calbos', 'CALBOS'], ['Central Vet', 'CENTRAL VET'], ['Heel', 'HEEL'], ['J.A. Ambiental', 'J.A. AMBIENTAL'], ['Lambari', 'LAMBARI']];
  const abrir = marca => {
    window.location.href = 'catalogo-completo.html?marca=' + encodeURIComponent(marca);
  };
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg)",
    id: "marcas",
    pad: "var(--space-6) var(--gutter)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 26
    }
  }, "Marcas que distribu\xEDmos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, names.map(([marca, label]) => /*#__PURE__*/React.createElement("button", {
    key: marca,
    onClick: () => abrir(marca),
    title: 'Ver produtos ' + marca,
    style: {
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      padding: '6px 4px',
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      letterSpacing: '0.08em',
      color: 'var(--ink-400)',
      opacity: 0.7,
      transition: 'opacity var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
      e.currentTarget.style.color = 'var(--accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.7;
      e.currentTarget.style.color = 'var(--ink-400)';
    }
  }, label))));
}
function CTA({
  setRoute
}) {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-700)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-8) var(--space-7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap',
      color: 'var(--paper-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      margin: 0
    }
  }, "Precisa de indica\xE7\xE3o t\xE9cnica?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.6,
      color: 'var(--green-200)',
      marginTop: 12
    }
  }, "Nossa equipe t\xE9cnica orienta a escolha dos produtos e acompanha o desenvolvimento do animal, no seu haras, centro de treinamento ou cl\xEDnica.")), /*#__PURE__*/React.createElement(Button, {
    variant: "warm",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    }),
    onClick: () => setRoute('contact')
  }, "Falar com especialista")));
}
function HomeScreen({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(TechTeam, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Featured, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Brands, null), /*#__PURE__*/React.createElement(CTA, {
    setRoute: setRoute
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "import_github/home-screen.js", error: String((e && e.message) || e) }); }

// import_github/products.js
try { (() => {
/* Catálogo Distribuidora Horse, extraído do catálogo oficial do cliente.
   Imagens reais em assets/produtos/ (webp otimizado).
   tone: health (Saúde) · performance (Performance) · neutral (Nutrição/Higiene/Pesca): cor do badge. */
(function () {
  const slug = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/&/g, '').replace(/[()\/.]/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const P = (marca, name, category, size, desc, img) => {
    const tone = category === 'Saúde' ? 'health' : category === 'Performance' ? 'performance' : 'neutral';
    return {
      marca,
      name,
      category,
      tone,
      size,
      desc,
      image: './assets/produtos/' + (img || slug(name)) + '.webp'
    };
  };
  window.HORSE_PRODUCTS = [
  // ---------------- SYNTEC ----------------
  P('Syntec', 'Creatina 90 Syntec', 'Performance', '2 kg', 'Suplemento à base de creatina monoidratada grau de pureza de 99%, alta qualidade e pronta para uso.'), P('Syntec', 'Fenilbutazona', 'Saúde', '100 ml', 'Anti-inflamatório não esteroide (AINE) com propriedades analgésica e antipirética.'), P('Syntec', 'Vitapulmin Gel', 'Saúde', '500 ml', 'Broncodilatador seletivo B2 à base de Clembuterol; melhora a condutância do ar.'), P('Syntec', 'Apromazin 1%', 'Saúde', '20 ml', 'Tranquilizante e pré-anestésico à base de Maleato de Acepromazina.', 'apromazin-1'), P('Syntec', 'Anestt', 'Saúde', '50 ml', 'Anestésico local injetável à base de Cloridrato de Lidocaína e Bitartarato de Epinefrina.'), P('Syntec', 'Maxitec Injetável', 'Saúde', '50 ml', 'Anti-inflamatório não esteroide à base de Meloxicam 3%.'), P('Syntec', 'Equi-Boost', 'Performance', '50 ml', 'Hormônio sintético à base de Undecilenato de Boldenona, auxílio no tratamento de cavalos debilitados.'), P('Syntec', 'Cetamin', 'Saúde', '50 ml', 'Anestésico geral dissociativo à base de Cloridrato de Cetamina.'), P('Syntec', 'Cikadol', 'Saúde', '50 g', 'Pomada à base de Benzilpenicilina, Diidroestreptomicina, Óleo de Citronela e Ureia.'), P('Syntec', 'Duofor', 'Higiene', '1 L a 5 L', 'Sanitizante para limpeza e higienização de instalações, equipamentos e veículos de transporte.'), P('Syntec', 'Detomidin', 'Saúde', '10 ml', 'Sedação e analgesia eficazes em equinos e bovinos, à base de detomidina.'), P('Syntec', 'Evigest', 'Saúde', '1 frasco 1 ml + seringa', 'Injetável inibidor de cio (estro) em cadelas e gatas, de fácil aplicação.'), P('Syntec', 'Xilazin', 'Saúde', '10 a 50 ml', 'Sedativo e analgésico à base de Cloridrato de Xilazina 2%.'),
  // ---------------- ORGANNACT ----------------
  P('Organnact', 'Calmyn Equi Turbo Líquido', 'Nutrição', '1 litro', 'Suplemento aminoácido vitamínico mineral, ideal para animais em períodos de estresse ou agitação.'), P('Organnact', 'Calmyn Equi', 'Nutrição', '34 ml', 'Nova apresentação do Calmyn Equi Turbo (líquido), com a mesma eficácia.'), P('Organnact', 'Enteroequi Pellets', 'Nutrição', 'Balde 3,6 kg', 'Suplemento mineral e aminoácido que auxilia no funcionamento intestinal e equilíbrio da microbiota.'), P('Organnact', 'Gastroequi', 'Nutrição', '34 ml', 'Suplemento vitamínico aminoácido com suporte para o adequado funcionamento gástrico.'), P('Organnact', 'Gastroequi Pellets', 'Nutrição', 'Balde 1 kg', 'Suplemento mineral vitamínico para equinos em qualquer fase da vida.'), P('Organnact', 'M.O. Ruminantes', 'Nutrição', '780 ml', 'Modificador orgânico para ruminantes, reforço nutricional e reposição de nutrientes.', 'm-o-ruminantes'), P('Organnact', 'MO Turbo', 'Nutrição', '56 ml', 'Suplemento vitamínico aminoácido para equinos em diversas fases da vida.'), P('Organnact', 'Lactobac', 'Nutrição', '35 g', 'Suplemento vitamínico mineral para bovinos, contendo probióticos e prebiótico.'), P('Organnact', 'LactoBac Equi', 'Nutrição', '66 ml', 'Suplemento vitamínico contendo probióticos e prebiótico para equinos.', 'lactobac-equi'), P('Organnact', 'Bovisacc', 'Nutrição', '1 kg e 15 kg', 'Suplemento vitamínico mineral para bovinos de leite; probiótico da microbiota ruminal.'), P('Organnact', 'Glicol Bovis Turbo', 'Nutrição', '500 ml e 5 L', 'Suplemento vitamínico aminoácido para bovinos, auxílio na nutrição diária.'), P('Organnact', 'Glicol Turbo', 'Nutrição', '1,5 L e 5 L', 'Suplemento vitamínico aminoácido para equinos, muares, asininos e avestruzes.'), P('Organnact', 'Promun Recém Nascido Equi', 'Nutrição', '78 ml', 'Suplemento vitamínico mineral aminoácido para equinos neonatos ou potros em fase de lactação.', 'promun-recem-nascido-equi'), P('Organnact', 'Promun Recém-Nascido', 'Nutrição', '30 ml', 'Suplemento vitamínico mineral para equinos neonatos ou potros lactentes.', 'promun-recem-nascido'), P('Organnact', 'Promun Equi', 'Nutrição', '500 g', 'Suplemento com probiótico e prebiótico, auxílio na manutenção do equilíbrio intestinal.'), P('Organnact', 'Sponge Equi', 'Nutrição', '78 ml', 'Suplemento aminoácido com prebiótico (MOS) e beta-glucanas para a microbiota intestinal.'), P('Organnact', 'Prata Mata Bicheira', 'Saúde', '500 ml', 'Indicado na profilaxia e tratamento de bicheiras (miíases) causadas por mosca.'), P('Organnact', 'Kit Pré-Prova (ATP / D-Nitrox / Turbo)', 'Performance', '115 g', 'Suplemento energético indicado para equinos atletas antes das provas.', 'kit-pre-prova-atp-d-nitrox-turbo'), P('Organnact', 'Pre-Aprova 3 em 1', 'Performance', '80 ml', 'Preparação essencial (ATP, Turbo e D-Nitrox) para o cavalo competir em boas condições.', 'pre-aprova-3-em-1'), P('Organnact', 'ATP', 'Performance', '78 ml', 'Suplemento energético para equinos atletas, aporte imediato de energia antes da prova.', 'atp'), P('Organnact', 'Turbo', 'Performance', '78 ml', 'Suplemento vitamínico aminoácido com arginina, taurina e creatina para equinos atletas.', 'turbo'), P('Organnact', 'D-Nitrox', 'Performance', '78 ml', 'Suplemento aminoácido com arginina e taurina, apoio ao desempenho em provas.', 'd-nitrox'), P('Organnact', 'D-Nitrox 25 Turbo', 'Performance', '1 kg', 'Glicose energética para manutenção das reservas energéticas do equino atleta.', 'd-nitrox-25-turbo'), P('Organnact', 'Casco & Pelo', 'Nutrição', '500 g', 'Suplemento vitamínico mineral aminoácido; manutenção das características de casco e pelo.', 'casco-pelo'), P('Organnact', 'Casco & Pelo Turbo', 'Nutrição', '1 L', 'Manutenção da qualidade de cascos, pelos, crina e cauda em qualquer fase da vida.', 'casco-pelo-turbo'), P('Organnact', 'Condrix Equi', 'Nutrição', '500 g', 'Suplemento mineral aminoácido indicado para equinos de todas as idades.'), P('Organnact', 'Creatina ATP', 'Performance', '2 kg', 'Suplemento aminoácido com creatina e ATP para o metabolismo energético de equinos atletas.'), P('Organnact', 'Creatina', 'Performance', '2 kg', 'Suplemento aminoácido para preparação de leilões e provas de morfologia.'), P('Organnact', 'Hemo Turbo', 'Nutrição', '1 L e 5 L', 'Alta concentração de ácido fólico, pode ser usado com antibióticos.'), P('Organnact', 'Eletro Equi Gel', 'Nutrição', '80 ml', 'Suplementação diária de eletrólitos para equinos em exercícios intensos ou transportados.'), P('Organnact', 'Eletro Equi Pó', 'Nutrição', '500 g', 'Suplemento mineral que repõe minerais e mantém o equilíbrio hidroeletrolítico.', 'eletro-equi-po'), P('Organnact', 'Muscle Horse', 'Performance', '2,5 / 6 / 15 kg', 'Ideal para início da fase atlética, doma e treinamento.'), P('Organnact', 'Muscle Horse Turbo', 'Performance', '2,5 / 6 / 15 kg', 'Manutenção da performance, da saúde de articulações e da massa muscular.', 'muscle-horse-turbo'), P('Organnact', 'Muscle Horse Turbo Box Pouch', 'Performance', '2,5 / 6 / 15 kg', 'Suplemento vitamínico aminoácido em embalagem pouch para praticidade no dia a dia.', 'muscle-horse-turbo-box-pouch'), P('Organnact', 'Fitoclean', 'Higiene', '250 ml', 'Solução higienizadora que promove limpeza profunda em equinos, caninos, felinos e bovinos.'), P('Organnact', 'Nutrifull Apetite Boost Equi', 'Nutrição', '34 ml', 'Suplemento vitamínico mineral aminoácido para manutenção da boa qualidade nutricional.', 'nutrifull-apetite-boost-equi'), P('Organnact', 'Nutrifull Equi', 'Nutrição', '500 ml e 3,6 L', 'Reforço aminoácido, vitamínico e mineral para manutenção da qualidade nutricional diária.'), P('Organnact', 'Relax Ice', 'Performance', '100 e 350 ml', 'Óleo para massagem com ação relaxante e hidratante; sensação de frescor à pele.'), P('Organnact', 'Relax Ice Gel', 'Performance', '1 kg', 'Gel para massagem para uso em equinos, caninos, felinos e bovinos.'), P('Organnact', 'Relax Ice - Barro', 'Performance', '1,2 e 6 kg', 'Pasta para descanso muscular após exercícios, relaxamento de músculos e tendões.', 'relax-ice-barro'), P('Organnact', 'Compplet Max', 'Nutrição', '2,5 / 6 / 15 kg', 'Suplemento vitamínico mineral aminoácido contendo probiótico, para todas as idades.'), P('Organnact', 'Disco Final', 'Performance', '60 ml', 'Suplemento com BCAA e L-carnitina para equinos atletas adultos.'), P('Organnact', 'Antiox EC Selênio', 'Performance', '500 g', 'Nutrientes antioxidantes (vitamina E, C e selênio) para cavalos em atividades físicas.', 'antiox-ec-selenio'), P('Organnact', 'BCAA', 'Performance', '60 g', 'Aminoácido indicado para equinos após esforço físico intenso.'), P('Organnact', 'Corpore Potros', 'Nutrição', '10 kg', 'Suplemento aminoácido proteico para potros em crescimento, conceito de proteína ideal.', 'corpore-potros'), P('Organnact', 'Corpore Potros Pellets', 'Nutrição', '3 e 10 kg', 'Versão em pellets do Corpore Potros, facilita o consumo e reduz desperdício.', 'corpore-potros-pellets'), P('Organnact', 'Corpore Potros Baby Sustag Pellets', 'Nutrição', '3 e 10 kg', 'Suplemento para potros na fase inicial, apoio ao crescimento estruturado.', 'corpore-potros-baby-sustag-pellets'), P('Organnact', 'Corpore Potros Box Pouch', 'Nutrição', '3 e 10 kg', 'Suplemento aminoácido proteico para equinos em crescimento em embalagem pouch.', 'corpore-potros-box-pouch'), P('Organnact', 'Orga Milk Potros', 'Nutrição', '10 kg', 'Proporção ideal de cálcio e fósforo para potros na fase de lactação, rende cerca de 100 litros.', 'orga-milk-potros'), P('Organnact', 'Ortho Potros', 'Nutrição', '500 ml e 5 L', 'Suplemento aminoácido para potros em crescimento; vitaminas e minerais diários.'), P('Organnact', 'Resistance', 'Performance', '4,5 kg', 'Colina precursora da vitamina B1, contribui para maior resistência e captação de glicose.', 'resistance'), P('Organnact', 'Laminact Turbo', 'Nutrição', '4,5 kg', 'Suplemento vitamínico mineral com elementos importantes para as características fisiológicas.'), P('Organnact', 'Mio Action', 'Performance', '1 kg', 'Suplemento proteico para equinos submetidos a treinamentos ou esforços intensos.'), P('Organnact', 'Neutralatic Turbo', 'Nutrição', '1 L', 'Contribui para a redução do acúmulo de ácido lático em equinos.'), P('Organnact', 'O2 Fitoflu Turbo', 'Performance', '500 ml', 'Suplemento vitamínico aminoácido para equinos submetidos à prática regular de exercícios.', 'o2-fitoflu-turbo'), P('Organnact', 'HepHorse', 'Saúde', '500 ml', 'Suplemento vitamínico aminoácido; suporte nutricional ao bom funcionamento hepático.', 'hephorse'),
  // ---------------- CALBOS ----------------
  P('Calbos', 'Citronela', 'Higiene', '500 ml', 'Indicado para higiene e embelezamento de equinos, bovinos, ovinos e caprinos.'), P('Calbos', 'Shampoo Citronela', 'Higiene', '1 L e 5 L', 'Auxilia no embelezamento dos pelos, crina e cauda, com perfume suave.', 'shampoo-citronela-1'), P('Calbos', 'Spray Citronela', 'Higiene', '500 ml', 'Indicado para higiene e embelezamento de equinos, bovinos, ovinos e caprinos.'), P('Calbos', 'Abrilhantador Calbos', 'Higiene', '500 ml e 1 L', 'Promove brilho em equinos e bovinos; impede aderência de sujidades ao pelo.', 'abrilhantador-calbos-1'), P('Calbos', 'Calfoz', 'Saúde', '200 e 500 ml', 'Cálcio, Fósforo, Magnésio e Dextrose. Alta eficiência nas hipocalcemias e hipomagnesemias.', 'calfoz-1'), P('Calbos', 'Antec', 'Saúde', '4 comprimidos', 'Vermífugo de amplo espectro para gatos e cachorros, de fácil administração.'), P('Calbos', 'Amitraz', 'Saúde', '25 unidades', 'Carrapaticida para bovinos e sarnicida/piolhicida para ovinos.'), P('Calbos', 'Mustang Cromo', 'Nutrição', '5 kg', 'Suplemento mineral completo com probióticos; melhor condição corporal e desempenho.'), P('Calbos', 'Cipermetrina', 'Higiene', '1 L', 'Auxílio na eliminação de carrapatos e moscas; controle de mosca do chifre.'), P('Calbos', 'Hipofen', 'Saúde', '20 g', 'Vermífugo oral para equinos; pode ser usado em potros e fêmeas prenhes.'), P('Calbos', 'Serene Horse', 'Nutrição', '35 g', 'Suplemento vitamínico aminoácido para animais nervosos, provas e transporte.'), P('Calbos', 'Vit Ade', 'Saúde', '50 ml', 'Estimulante do crescimento, engorda e fertilidade; prevenção do raquitismo.', 'vit-ade'), P('Calbos', 'Rubralan', 'Saúde', '10 e 40 ml', 'Indicado no tratamento das anemias (piroplasmose, anaplasmose e verminose).'), P('Calbos', 'Sedacol', 'Saúde', '100 e 200 ml', 'Agente na debelação de síndromes congestivas do aparelho gastrintestinal.', 'sedacol-1'), P('Calbos', 'Placencal', 'Saúde', '200 ml', 'Aumento das contrações musculares do útero no momento do parto.'), P('Calbos', 'Pencil Pronto', 'Saúde', '50 ml', 'Antibiótico com ação analgésica e anti-inflamatória; amplo espectro de ação.'), P('Calbos', 'Ivermin Pasta Oral', 'Saúde', '6 g', 'Vermífugo para 600 kg de peso vivo; eficaz para grandes e pequenos estrôngilos.'), P('Calbos', 'Dexametasona', 'Saúde', '10 a 200 ml', 'Anti-inflamatório que atua reduzindo a dor e o inchaço rapidamente.'), P('Calbos', 'Neomastic', 'Saúde', '8 ml', 'Suspensão antibiótica para tratamento de mastites em vacas no período seco.'), P('Calbos', 'Mastical', 'Saúde', '12 seringas de 10 ml', 'Indicado para problemas no sistema mamário e terapia tópica em micoses.'), P('Calbos', 'Neocidine H', 'Nutrição', '1,75 L', 'Suplementação de cálcio, fósforo, magnésio, vitamina D3 e B12.', 'neocidine-h'), P('Calbos', 'Glicolcalbos', 'Saúde', '500 ml', 'Solução de Dextrose a 50%; energético potente e ação diurética.'), P('Calbos', 'Farinha de Cálcio Avícola', 'Nutrição', '1 kg', 'Suplemento mineral para aves com cálcio, fósforo e outros minerais.'),
  // ---------------- CENTRAL VET ----------------
  P('Central Vet', 'Atadura Elástica Coesiva', 'Saúde', '5 e 10 cm × 4,5 m', 'Bandagem estabilizadora de articulações e ligamentos; primeiros socorros e pós-operatório.'), P('Central Vet', 'Atadura Elástica Coesiva Sabor Amargo', 'Saúde', '5 e 10 cm × 4,5 m', 'Atadura estabilizadora com sabor amargo que evita mordeduras.'),
  // ---------------- HEEL (homeopáticos veterinários) ----------------
  P('Heel', 'Engystol', 'Saúde', '5 ampolas de 1 ml', 'Medicamento homeopático injetável de uso parenteral para uso veterinário.'), P('Heel', 'Traumeel', 'Saúde', '50 comprimidos', 'Indicado para bovinos, equinos, asininos, ovinos, suínos, caninos e felinos.'), P('Heel', 'Zeel', 'Saúde', '5 ampolas de 5 ml', 'Solução injetável indicada para bovinos, equinos, suínos, ovinos, caprinos, caninos e felinos.'),
  // ---------------- PAPA MOSCA / J.A. AMBIENTAL ----------------
  P('J.A. Ambiental', 'Papa Mosca', 'Higiene', '6 L', 'Atrativo biológico que combate as moscas de forma eficaz e sustentável, sem venenos ou inseticidas.'), P('J.A. Ambiental', 'Atrativo Natural Pet', 'Higiene', '2 L', 'Solução ecológica e definitiva contra as moscas.'), P('J.A. Ambiental', 'Papa Insetos', 'Higiene', '500 ml', 'Composição Methomyl 0,066% + surfactantes; controle de insetos.'), P('J.A. Ambiental', 'Armadilha de Tela', 'Higiene', 'unidade', 'Rede protetora e recipiente para captura de moscas.'), P('J.A. Ambiental', 'Armadilha Biológica', 'Higiene', 'unidade', 'Armadilha montada: funil, cuba, tampa, aranha, trava borboleta e haste.'), P('J.A. Ambiental', 'Ratoeira Injetável T-Rex', 'Higiene', 'unidade', 'Ratoeira injetada em polipropileno virgem, mola de alta pressão; resistente ao sol e chuva.', 'ratoeira-injetavel-t-rex'), P('J.A. Ambiental', 'Porta Iscas para Ratos', 'Higiene', 'unidade', 'Porta-iscas em polipropileno virgem com 4 funções de captura; ferro de fixação e chave universal.'),
  // ---------------- LAMBARI (massas prontas para pesca) ----------------
  P('Lambari', 'Massa Pacu Goiaba', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor goiaba.', 'massa-pacu-goiaba'), P('Lambari', 'Massa Pacu Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor milho verde.', 'massa-pacu-milho-verde'), P('Lambari', 'Massa Pacu Queijo', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor queijo.', 'massa-pacu-queijo'), P('Lambari', 'Massa Pacu Sangue', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor sangue.', 'massa-pacu-sangue'), P('Lambari', 'Massa Piau Bichinho da Laranja', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor bichinho da laranja.', 'massa-piau-bichinho-da-laranja'), P('Lambari', 'Massa Piau Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor milho verde.', 'massa-piau-milho-verde'), P('Lambari', 'Massa Piau Queijo', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor queijo.', 'massa-piau-queijo'), P('Lambari', 'Massa Piau Sangue', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor sangue.', 'massa-piau-sangue'), P('Lambari', 'Massa Tilápia Bichinho da Laranja', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, sabor bichinho da laranja.', 'massa-tilapia-bichinho-da-laranja'), P('Lambari', 'Massa Tilápia Erva Doce', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, sabor erva doce.', 'massa-tilapia-erva-doce'), P('Lambari', 'Massa Tilápia Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, sabor milho verde.', 'massa-tilapia-milho-verde'), P('Lambari', 'Massa Tilápia P-40', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, isca P-40.', 'massa-tilapia-p-40'), P('Lambari', 'Massa Pronta para Pesca Natural', 'Pesca', '100 g', 'Massa pronta para pesca de lambari, sabor natural.', 'massa-pronta-para-pesca-natural'), P('Lambari', 'Massa Pronta para Pescar Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de lambari, sabor milho verde.', 'massa-pronta-para-pescar-sabor-milho-verde'), P('Lambari', 'Massa Pronta para Pescar Queijo', 'Pesca', '100 g', 'Massa pronta para pesca de lambari, sabor queijo.', 'massa-pronta-para-pescar-sabor-queijo'), P('Lambari', 'Minhoca Pronta Carne Fina', 'Pesca', '100 g', 'Minhoca pronta para pesca, carne fina.', 'minhoca-pronta-carne-fina'),
  // ---------------- HORSE (marca própria) ----------------
  P('Horse', 'Escova para Animal', 'Higiene', 'unidade', 'Escova para cavalos; ferramenta certa para manter a pelagem limpa e saudável.')];
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "import_github/products.js", error: String((e && e.message) || e) }); }

// import_github/shared.js
try { (() => {
/* Shared helpers for the Horse site UI kit. Exported to window for cross-script use. */
const {
  useState
} = React;

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
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.75,
  style = {}
}) {
  const ref = React.useRef();
  React.useEffect(() => {
    if (ref.current && window.lucide && window.lucide.icons[name]) {
      ref.current.innerHTML = '';
      const el = window.lucide.createElement(window.lucide.icons[name]);
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      el.setAttribute('stroke', color);
      el.setAttribute('stroke-width', strokeWidth);
      ref.current.appendChild(el);
    }
  }, [name, size, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      ...style
    }
  });
}

// Section shell with consistent gutters
function Section({
  children,
  bg = 'transparent',
  pad,
  id,
  style = {}
}) {
  const isMobile = useIsMobile();
  const p = pad || (isMobile ? 'var(--space-6) var(--gutter)' : 'var(--space-8) var(--gutter)');
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: p,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, children));
}
Object.assign(window, {
  Icon,
  Section,
  useState,
  useIsMobile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "import_github/shared.js", error: String((e && e.message) || e) }); }

// ui_kits/site/AboutScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Eyebrow,
  Stat,
  Badge
} = window.DistribuidoraHorseDesignSystem_1d44b3;
const VALUES = ['Ética', 'Transparência', 'Respeito aos animais', 'Compromisso com o cliente', 'Conhecimento técnico', 'Excelência no atendimento', 'Inovação', 'Agilidade', 'Parceria', 'Responsabilidade'];
function AboutScreen({
  setRoute
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-700)',
      color: 'var(--paper-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: isMobile ? 'var(--space-7) var(--gutter)' : 'var(--space-9) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr',
      gap: isMobile ? 24 : 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "warm"
  }, "A Distribuidora Horse"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: isMobile ? 'var(--text-3xl)' : 'var(--text-4xl)',
      lineHeight: 1.05,
      fontWeight: 600,
      margin: '18px 0 0'
    }
  }, "Uma parceira t\xE9cnica do mercado equino"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--ink-300)',
      marginTop: 20
    }
  }, "Sediada em Belo Horizonte e atuando desde 2016, a Horse \xE9 especializada na distribui\xE7\xE3o de produtos veterin\xE1rios e suplementos para equinos, com uma equipe t\xE9cnica capaz de orientar a escolha e acompanhar o desenvolvimento do animal, mantendo cavalos mais saud\xE1veis e com melhor performance.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: isMobile ? 'none' : 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-horse-light.png",
    alt: "Emblema Horse",
    style: {
      height: 260,
      width: 'auto'
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    accentEdge: true,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Miss\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.35,
      color: 'var(--text-primary)',
      margin: '16px 0 0',
      fontWeight: 500
    }
  }, "Promover a sa\xFAde, o desempenho e o bem-estar dos equinos por meio de produtos de excel\xEAncia, atendimento consultivo e solu\xE7\xF5es que agreguem valor aos nossos clientes.")), /*#__PURE__*/React.createElement(Card, {
    accentEdge: true,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "warm"
  }, "Vis\xE3o"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.35,
      color: 'var(--text-primary)',
      margin: '16px 0 0',
      fontWeight: 500
    }
  }, "Ser reconhecida como a principal distribuidora especializada em sa\xFAde equina de Minas Gerais e uma refer\xEAncia nacional em qualidade, atendimento e relacionamento."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: isMobile ? 28 : 64,
      marginTop: 48,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "2016",
    label: "Funda\xE7\xE3o",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "+40",
    label: "Marcas",
    tone: "accent",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "BH",
    label: "Minas Gerais",
    tone: "warm",
    align: "center"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "B2B",
    label: "Atacado especializado",
    align: "center"
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      justifyContent: 'center'
    }
  }, "Nossos valores"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      margin: '14px 0 0',
      color: 'var(--text-primary)'
    }
  }, "O que nos orienta")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'center',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, VALUES.map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 18px',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)',
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 15,
    color: "var(--accent)"
  }), " ", v))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    }),
    onClick: () => setRoute('contact')
  }, "Fale com a nossa equipe"))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/CatalogScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Input,
  Select,
  Checkbox,
  ProductCard,
  Eyebrow
} = window.DistribuidoraHorseDesignSystem_1d44b3;
const ALL_PRODUCTS = () => window.HORSE_PRODUCTS || [];
const CATEGORIAS = ['Saúde', 'Nutrição', 'Performance', 'Higiene', 'Pesca'];
const MARCAS_FILTRO = ['Syntec', 'Organnact', 'Calbos', 'Central Vet', 'Heel', 'J.A. Ambiental', 'Lambari'];
function FilterGroup({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 20,
      marginBottom: 20,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, children));
}
function CatalogScreen() {
  const isMobile = useIsMobile();
  const [q, setQ] = useState('');
  const [cats, setCats] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [ordem, setOrdem] = useState('relevancia');
  const toggle = (list, setList) => value => {
    setList(list.includes(value) ? list.filter(v => v !== value) : list.concat(value));
  };
  const limpar = () => {
    setQ('');
    setCats([]);
    setMarcas([]);
    setOrdem('relevancia');
  };
  const filtrados = React.useMemo(() => {
    const t = q.trim().toLowerCase();
    let out = ALL_PRODUCTS().filter(p => (cats.length === 0 || cats.includes(p.category)) && (marcas.length === 0 || marcas.includes(p.marca)) && (!t || p.name.toLowerCase().includes(t) || p.marca.toLowerCase().includes(t) || (p.desc || '').toLowerCase().includes(t)));
    if (ordem === 'nome') out = out.slice().sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    if (ordem === 'marca') out = out.slice().sort((a, b) => a.marca.localeCompare(b.marca, 'pt-BR') || a.name.localeCompare(b.name, 'pt-BR'));
    return out;
  }, [q, cats, marcas, ordem]);
  const visiveis = filtrados.slice(0, 12);
  const temFiltro = q || cats.length || marcas.length;
  const goFull = () => {
    window.location.href = 'catalogo-completo.html';
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--gutter) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Cat\xE1logo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      margin: '14px 0 6px',
      color: 'var(--text-primary)'
    }
  }, "Produtos para equinos"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Uma amostra do portf\xF3lio: sa\xFAde, nutri\xE7\xE3o, performance e higiene")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    }),
    onClick: goFull
  }, "Ver cat\xE1logo completo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '260px 1fr',
      gap: isMobile ? 24 : 36,
      marginTop: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      position: isMobile ? 'static' : 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar produto",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Search",
      size: 18
    }),
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Categoria"
  }, CATEGORIAS.map(c => /*#__PURE__*/React.createElement(Checkbox, {
    key: c,
    label: c,
    checked: cats.includes(c),
    onChange: () => toggle(cats, setCats)(c)
  }))), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Marca"
  }, MARCAS_FILTRO.map(m => /*#__PURE__*/React.createElement(Checkbox, {
    key: m,
    label: m,
    checked: marcas.includes(m),
    onChange: () => toggle(marcas, setMarcas)(m)
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    block: true,
    onClick: limpar,
    disabled: !temFiltro
  }, "Limpar filtros")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, filtrados.length, " produto", filtrados.length !== 1 ? 's' : '', filtrados.length > visiveis.length ? ' · mostrando ' + visiveis.length : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 210
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: ordem,
    onChange: e => setOrdem(e.target.value),
    options: [{
      value: 'relevancia',
      label: 'Ordenar: relevância'
    }, {
      value: 'nome',
      label: 'Nome A–Z'
    }, {
      value: 'marca',
      label: 'Marca'
    }]
  }))), visiveis.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '70px 20px',
      textAlign: 'center',
      background: 'var(--color-surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Nenhum produto encontrado"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: '8px 0 20px'
    }
  }, "Tente outra combina\xE7\xE3o de filtros ou limpe a busca."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: limpar
  }, "Limpar filtros")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(3,1fr)',
      gap: isMobile ? 12 : 20
    }
  }, visiveis.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    brand: p.marca,
    name: p.name,
    category: p.category,
    tone: p.tone,
    image: p.image,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      block: true,
      onClick: goFull
    }, "Ver produto")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      padding: 'var(--space-6)',
      background: 'var(--color-surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, "Quer ver o portf\xF3lio inteiro?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, "Mais de 120 produtos de Syntec, Organnact, Calbos, Central Vet, Heel, J.A. Ambiental e Lambari.")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    }),
    onClick: goFull
  }, "Ver cat\xE1logo completo"))))));
}
Object.assign(window, {
  CatalogScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/CatalogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/ContactScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Input,
  Select,
  Checkbox,
  Eyebrow,
  Badge
} = window.DistribuidoraHorseDesignSystem_1d44b3;
function ContactRow({
  icon,
  title,
  value,
  href
}) {
  const inner = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: 'var(--accent-soft)',
      color: 'var(--accent-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      marginTop: 4
    }
  }, value)));
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    target: href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, inner) : inner;
}
function ContactScreen() {
  const [sent, setSent] = useState(false);
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-bg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: isMobile ? 'var(--space-7) var(--gutter) var(--space-8)' : 'var(--space-8) var(--gutter) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
      gap: isMobile ? 32 : 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Atendimento consultivo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      margin: '14px 0 0',
      color: 'var(--text-primary)'
    }
  }, "Fale com um especialista"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      marginTop: 16,
      maxWidth: 420
    }
  }, "Atendemos haras, centros de treinamento, cl\xEDnicas, lojas agropecu\xE1rias e revendas em todo o estado. Conte pra gente o que voc\xEA precisa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(ContactRow, {
    icon: "MapPin",
    title: "Base",
    value: "Belo Horizonte, Minas Gerais"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "Phone",
    title: "Telefone fixo",
    value: "(31) 3411-3034",
    href: "tel:+553134113034"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "MessageCircle",
    title: "WhatsApp",
    value: "(31) 99873-9510",
    href: "https://wa.me/5531998739510"
  }), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "Mail",
    title: "E-mail",
    value: "vendas@horsesaudeanimal.com.br",
    href: "mailto:vendas@horsesaudeanimal.com.br"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/5531998739510",
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "MessageCircle",
      size: 16
    })
  }, "Chamar no WhatsApp")))), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "var(--space-6)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '30px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 58,
      height: 58,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--success-soft)',
      color: 'var(--accent-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Check",
    size: 28
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      margin: '18px 0 6px',
      color: 'var(--text-primary)'
    }
  }, "Mensagem enviada!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, "Nossa equipe retornar\xE1 em breve."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Enviar outra"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome",
    placeholder: "Seu nome"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefone",
    placeholder: "(31) 90000-0000"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    placeholder: "voce@empresa.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Mail",
      size: 18
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Perfil",
    options: ['Haras', 'Centro de treinamento', 'Veterinário', 'Loja / revenda', 'Proprietário']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Interesse",
    options: ['Saúde', 'Nutrição', 'Performance', 'Todos']
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Mensagem",
    placeholder: "Como podemos ajudar?"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Aceito receber contato e condi\xE7\xF5es comerciais",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    block: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "Send",
      size: 17
    }),
    onClick: () => setSent(true)
  }, "Enviar mensagem"))))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Footer.jsx
try { (() => {
const {
  Logo
} = window.DistribuidoraHorseDesignSystem_1d44b3;
function Footer({
  setRoute
}) {
  const isMobile = useIsMobile();
  const nav = r => () => setRoute && setRoute(r);
  const irMarcas = () => {
    setRoute && setRoute('home');
    setTimeout(() => {
      const el = document.getElementById('marcas');
      if (el) window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }, 120);
  };
  const full = () => {
    window.location.href = 'catalogo-completo.html';
  };
  const cols = [['Empresa', [['A Horse', nav('about')], ['Missão e valores', nav('about')], ['Trabalhe conosco', nav('contact')]]], ['Catálogo', [['Saúde', full], ['Nutrição', full], ['Performance', full], ['Higiene', full]]], ['Atendimento', [['Fale conosco', nav('contact')], ['Seja um cliente', nav('contact')], ['Marcas parceiras', irMarcas]]]];
  const social = [['Instagram', 'https://www.instagram.com/distribuidorahorse', '@distribuidorahorse'], ['MessageCircle', 'https://wa.me/5531998739510', 'WhatsApp (31) 99873-9510'], ['Phone', 'tel:+553134113034', 'Telefone (31) 3411-3034'], ['Mail', 'mailto:vendas@horsesaudeanimal.com.br', 'E-mail']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-700)',
      color: 'var(--paper-200)',
      padding: 'var(--space-7) var(--gutter) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr 1fr' : '1.4fr repeat(3,1fr)',
      gap: isMobile ? 28 : 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: isMobile ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "mark",
    tone: "light",
    height: 72,
    base: "../../"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--ink-300)',
      maxWidth: 260
    }
  }, "Distribuidora especializada em sa\xFAde, nutri\xE7\xE3o e performance equina. Belo Horizonte, Minas Gerais."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      gap: 10
    }
  }, social.map(([n, href, label]) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: href,
    target: href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    title: label,
    "aria-label": label,
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid rgba(255,255,255,0.18)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--paper-200)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(255,255,255,0.10)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 17
  }))))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--amber-500)'
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '16px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(([label, action]) => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    onClick: action,
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink-300)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--paper-100)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--ink-300)';
    }
  }, label))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2016\u20132026 Distribuidora Horse Sa\xFAde Animal \xB7 CNPJ 26.258.683/0001-75"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 22,
      color: 'var(--paper-100)'
    }
  }, "Horse Sa\xFAde Animal"))));
}
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/Header.jsx
try { (() => {
const {
  Logo,
  Button,
  IconButton
} = window.DistribuidoraHorseDesignSystem_1d44b3;
function Header({
  route,
  setRoute
}) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const nav = [['home', 'Início'], ['catalog', 'Catálogo'], ['about', 'A Horse'], ['contact', 'Contato']];
  const go = id => {
    setRoute(id);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(250,248,243,0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      height: isMobile ? 72 : 92,
      padding: '0 var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    tone: "dark",
    height: isMobile ? 48 : 62,
    base: "../../"
  })), !isMobile && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 6,
      marginLeft: 'auto'
    }
  }, nav.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      cursor: 'pointer',
      padding: '9px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: route === id ? 700 : 500,
      color: route === id ? 'var(--text-primary)' : 'var(--text-secondary)',
      borderBottom: route === id ? '2px solid var(--accent)' : '2px solid transparent'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Buscar",
    variant: "ghost",
    onClick: () => go('catalog')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 19
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "MessageCircle",
      size: 16
    }),
    onClick: () => go('contact')
  }, "Falar com especialista"))), isMobile && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Menu",
    variant: "ghost",
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'X' : 'Menu',
    size: 22
  })))), isMobile && open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)',
      background: 'var(--color-surface)',
      padding: 'var(--space-4) var(--gutter) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, nav.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      cursor: 'pointer',
      padding: '13px 4px',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: route === id ? 700 : 500,
      color: route === id ? 'var(--accent-strong)' : 'var(--text-primary)',
      borderBottom: '1px solid var(--border)'
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "md",
    block: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "MessageCircle",
      size: 16
    }),
    onClick: () => go('contact')
  }, "Falar com especialista"))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/HomeScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Eyebrow,
  Stat,
  ProductCard
} = window.DistribuidoraHorseDesignSystem_1d44b3;
function Hero({
  setRoute
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-700)',
      color: 'var(--paper-50)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mark-horse-light.png",
    alt: "",
    style: {
      position: 'absolute',
      right: isMobile ? '-18%' : '4%',
      top: '50%',
      transform: 'translateY(-50%)',
      height: isMobile ? 240 : 400,
      maxWidth: '46%',
      objectFit: 'contain',
      opacity: 0.07,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: isMobile ? 'var(--space-7) var(--gutter)' : 'var(--space-8) var(--gutter)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "warm"
  }, "Distribuidora de produtos veterin\xE1rios \xB7 desde 2016"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: isMobile ? 'var(--text-3xl)' : 'var(--text-5xl)',
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      fontWeight: 600,
      margin: '20px 0 0'
    }
  }, "Produtos veterin\xE1rios com orienta\xE7\xE3o t\xE9cnica"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--ink-300)',
      maxWidth: 520,
      marginTop: 22
    }
  }, "Distribu\xEDmos medicamentos, suplementos e nutri\xE7\xE3o equina das melhores ind\xFAstrias, com uma equipe t\xE9cnica capaz de orientar a escolha e acompanhar o desenvolvimento do animal."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    }),
    onClick: () => setRoute('catalog')
  }, "Ver cat\xE1logo"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: 'var(--paper-50)',
      borderColor: 'rgba(255,255,255,0.28)'
    },
    onClick: () => setRoute('contact')
  }, "Seja um cliente")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: isMobile ? 28 : 52,
      marginTop: isMobile ? 32 : 44,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "+40",
    label: "Marcas parceiras",
    tone: "ink",
    style: {
      '--text-primary': 'var(--paper-50)'
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "2016",
    label: "No mercado",
    tone: "ink",
    style: {
      '--text-primary': 'var(--paper-50)'
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "MG",
    label: "Base em BH",
    tone: "ink",
    style: {
      '--text-primary': 'var(--paper-50)'
    }
  })))));
}
const PILLARS = [['HeartPulse', 'Saúde', 'Prevenção, tratamento e bem-estar animal com produtos veterinários de alta qualidade.'], ['Wheat', 'Nutrição', 'Suplementação e alimentação para o desenvolvimento e a condição do plantel.'], ['Trophy', 'Performance', 'Suporte ao desempenho esportivo e funcional em provas e competições.'], ['ShieldCheck', 'Confiança', 'Marcas reconhecidas, disponibilidade e suporte técnico especializado.']];
function Pillars() {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent",
    style: {
      justifyContent: 'center'
    }
  }, "Nossos pilares"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      margin: '16px 0 0',
      color: 'var(--text-primary)'
    }
  }, "Mais que produtos, uma parceria t\xE9cnica")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
      gap: isMobile ? 12 : 20
    }
  }, PILLARS.map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    variant: "elevated",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--accent-soft)',
      color: 'var(--accent-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, body)))));
}
const PICK = name => (window.HORSE_PRODUCTS || []).find(p => p.name === name) || {};
const FEATURED = ['Muscle Horse', 'Creatina 90 Syntec', 'Nutrifull Equi', 'Vitapulmin Gel'].map(PICK);
const TEAM_ITEMS = [['Stethoscope', 'Orientação de uso', 'Indicação correta de medicamentos e suplementos para cada necessidade.'], ['LineChart', 'Acompanhamento', 'Suporte contínuo no desenvolvimento e na condição do animal.'], ['GraduationCap', 'Conhecimento técnico', 'Equipe especializada no universo equino, próxima do cliente.']];
function TechTeam({
  setRoute
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
      gap: isMobile ? 32 : 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, "Equipe t\xE9cnica"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 600,
      margin: '16px 0 0',
      color: 'var(--text-primary)',
      lineHeight: 1.1
    }
  }, "N\xE3o vendemos s\xF3 produtos.", /*#__PURE__*/React.createElement("br", null), "Orientamos e acompanhamos."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      color: 'var(--text-secondary)',
      marginTop: 18,
      maxWidth: 440
    }
  }, "Nossa equipe t\xE9cnica ajuda a escolher os produtos veterin\xE1rios e suplementos certos e acompanha o desenvolvimento do animal, do plano nutricional \xE0 performance."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    }),
    onClick: () => setRoute('contact')
  }, "Fale com a equipe t\xE9cnica"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, TEAM_ITEMS.map(([icon, title, body]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      padding: 'var(--space-4)',
      background: 'var(--color-bg)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: 'var(--accent-soft)',
      color: 'var(--accent-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, body)))))));
}
function Featured({
  setRoute
}) {
  const isMobile = useIsMobile();
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 32,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "warm"
  }, "Destaques do cat\xE1logo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      margin: '14px 0 0',
      color: 'var(--text-primary)'
    }
  }, "Produtos selecionados para o seu plantel")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowUpRight",
      size: 16
    }),
    onClick: () => {
      window.location.href = 'catalogo-completo.html';
    }
  }, "Ver cat\xE1logo completo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
      gap: isMobile ? 12 : 20
    }
  }, FEATURED.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.name,
    brand: p.marca,
    name: p.name,
    category: p.category,
    tone: p.tone,
    image: p.image,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "outline",
      block: true,
      onClick: () => {
        window.location.href = 'catalogo-completo.html';
      }
    }, "Ver produto")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    }),
    onClick: () => {
      window.location.href = 'catalogo-completo.html';
    }
  }, "Ver cat\xE1logo completo"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Mais de 120 produtos \xB7 Syntec, Organnact, Calbos, Central Vet, Heel, J.A. Ambiental e Lambari")));
}
function Brands() {
  const names = [['Syntec', 'SYNTEC'], ['Organnact', 'ORGANNACT'], ['Calbos', 'CALBOS'], ['Central Vet', 'CENTRAL VET'], ['Heel', 'HEEL'], ['J.A. Ambiental', 'J.A. AMBIENTAL'], ['Lambari', 'LAMBARI']];
  const abrir = marca => {
    window.location.href = 'catalogo-completo.html?marca=' + encodeURIComponent(marca);
  };
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-bg)",
    id: "marcas",
    pad: "var(--space-6) var(--gutter)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 26
    }
  }, "Marcas que distribu\xEDmos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, names.map(([marca, label]) => /*#__PURE__*/React.createElement("button", {
    key: marca,
    onClick: () => abrir(marca),
    title: 'Ver produtos ' + marca,
    style: {
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      padding: '6px 4px',
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      letterSpacing: '0.08em',
      color: 'var(--ink-400)',
      opacity: 0.7,
      transition: 'opacity var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = 1;
      e.currentTarget.style.color = 'var(--accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = 0.7;
      e.currentTarget.style.color = 'var(--ink-400)';
    }
  }, label))));
}
function CTA({
  setRoute
}) {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "var(--color-surface)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--green-700)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-8) var(--space-7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap',
      color: 'var(--paper-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      margin: 0
    }
  }, "Precisa de indica\xE7\xE3o t\xE9cnica?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.6,
      color: 'var(--green-200)',
      marginTop: 12
    }
  }, "Nossa equipe t\xE9cnica orienta a escolha dos produtos e acompanha o desenvolvimento do animal, no seu haras, centro de treinamento ou cl\xEDnica.")), /*#__PURE__*/React.createElement(Button, {
    variant: "warm",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    }),
    onClick: () => setRoute('contact')
  }, "Falar com especialista")));
}
function HomeScreen({
  setRoute
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(TechTeam, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Featured, {
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement(Brands, null), /*#__PURE__*/React.createElement(CTA, {
    setRoute: setRoute
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site/products.js
try { (() => {
/* Catálogo Distribuidora Horse, extraído do catálogo oficial do cliente.
   Imagens reais em assets/produtos/ (webp otimizado).
   tone: health (Saúde) · performance (Performance) · neutral (Nutrição/Higiene/Pesca): cor do badge. */
(function () {
  const slug = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/&/g, '').replace(/[()\/.]/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const P = (marca, name, category, size, desc, img) => {
    const tone = category === 'Saúde' ? 'health' : category === 'Performance' ? 'performance' : 'neutral';
    return {
      marca,
      name,
      category,
      tone,
      size,
      desc,
      image: '../../assets/produtos/' + (img || slug(name)) + '.webp'
    };
  };
  window.HORSE_PRODUCTS = [
  // ---------------- SYNTEC ----------------
  P('Syntec', 'Creatina 90 Syntec', 'Performance', '2 kg', 'Suplemento à base de creatina monoidratada grau de pureza de 99%, alta qualidade e pronta para uso.'), P('Syntec', 'Fenilbutazona', 'Saúde', '100 ml', 'Anti-inflamatório não esteroide (AINE) com propriedades analgésica e antipirética.'), P('Syntec', 'Vitapulmin Gel', 'Saúde', '500 ml', 'Broncodilatador seletivo B2 à base de Clembuterol; melhora a condutância do ar.'), P('Syntec', 'Apromazin 1%', 'Saúde', '20 ml', 'Tranquilizante e pré-anestésico à base de Maleato de Acepromazina.', 'apromazin-1'), P('Syntec', 'Anestt', 'Saúde', '50 ml', 'Anestésico local injetável à base de Cloridrato de Lidocaína e Bitartarato de Epinefrina.'), P('Syntec', 'Maxitec Injetável', 'Saúde', '50 ml', 'Anti-inflamatório não esteroide à base de Meloxicam 3%.'), P('Syntec', 'Equi-Boost', 'Performance', '50 ml', 'Hormônio sintético à base de Undecilenato de Boldenona, auxílio no tratamento de cavalos debilitados.'), P('Syntec', 'Cetamin', 'Saúde', '50 ml', 'Anestésico geral dissociativo à base de Cloridrato de Cetamina.'), P('Syntec', 'Cikadol', 'Saúde', '50 g', 'Pomada à base de Benzilpenicilina, Diidroestreptomicina, Óleo de Citronela e Ureia.'), P('Syntec', 'Duofor', 'Higiene', '1 L a 5 L', 'Sanitizante para limpeza e higienização de instalações, equipamentos e veículos de transporte.'), P('Syntec', 'Detomidin', 'Saúde', '10 ml', 'Sedação e analgesia eficazes em equinos e bovinos, à base de detomidina.'), P('Syntec', 'Evigest', 'Saúde', '1 frasco 1 ml + seringa', 'Injetável inibidor de cio (estro) em cadelas e gatas, de fácil aplicação.'), P('Syntec', 'Xilazin', 'Saúde', '10 a 50 ml', 'Sedativo e analgésico à base de Cloridrato de Xilazina 2%.'),
  // ---------------- ORGANNACT ----------------
  P('Organnact', 'Calmyn Equi Turbo Líquido', 'Nutrição', '1 litro', 'Suplemento aminoácido vitamínico mineral, ideal para animais em períodos de estresse ou agitação.'), P('Organnact', 'Calmyn Equi', 'Nutrição', '34 ml', 'Nova apresentação do Calmyn Equi Turbo (líquido), com a mesma eficácia.'), P('Organnact', 'Enteroequi Pellets', 'Nutrição', 'Balde 3,6 kg', 'Suplemento mineral e aminoácido que auxilia no funcionamento intestinal e equilíbrio da microbiota.'), P('Organnact', 'Gastroequi', 'Nutrição', '34 ml', 'Suplemento vitamínico aminoácido com suporte para o adequado funcionamento gástrico.'), P('Organnact', 'Gastroequi Pellets', 'Nutrição', 'Balde 1 kg', 'Suplemento mineral vitamínico para equinos em qualquer fase da vida.'), P('Organnact', 'M.O. Ruminantes', 'Nutrição', '780 ml', 'Modificador orgânico para ruminantes, reforço nutricional e reposição de nutrientes.', 'm-o-ruminantes'), P('Organnact', 'MO Turbo', 'Nutrição', '56 ml', 'Suplemento vitamínico aminoácido para equinos em diversas fases da vida.'), P('Organnact', 'Lactobac', 'Nutrição', '35 g', 'Suplemento vitamínico mineral para bovinos, contendo probióticos e prebiótico.'), P('Organnact', 'LactoBac Equi', 'Nutrição', '66 ml', 'Suplemento vitamínico contendo probióticos e prebiótico para equinos.', 'lactobac-equi'), P('Organnact', 'Bovisacc', 'Nutrição', '1 kg e 15 kg', 'Suplemento vitamínico mineral para bovinos de leite; probiótico da microbiota ruminal.'), P('Organnact', 'Glicol Bovis Turbo', 'Nutrição', '500 ml e 5 L', 'Suplemento vitamínico aminoácido para bovinos, auxílio na nutrição diária.'), P('Organnact', 'Glicol Turbo', 'Nutrição', '1,5 L e 5 L', 'Suplemento vitamínico aminoácido para equinos, muares, asininos e avestruzes.'), P('Organnact', 'Promun Recém Nascido Equi', 'Nutrição', '78 ml', 'Suplemento vitamínico mineral aminoácido para equinos neonatos ou potros em fase de lactação.', 'promun-recem-nascido-equi'), P('Organnact', 'Promun Recém-Nascido', 'Nutrição', '30 ml', 'Suplemento vitamínico mineral para equinos neonatos ou potros lactentes.', 'promun-recem-nascido'), P('Organnact', 'Promun Equi', 'Nutrição', '500 g', 'Suplemento com probiótico e prebiótico, auxílio na manutenção do equilíbrio intestinal.'), P('Organnact', 'Sponge Equi', 'Nutrição', '78 ml', 'Suplemento aminoácido com prebiótico (MOS) e beta-glucanas para a microbiota intestinal.'), P('Organnact', 'Prata Mata Bicheira', 'Saúde', '500 ml', 'Indicado na profilaxia e tratamento de bicheiras (miíases) causadas por mosca.'), P('Organnact', 'Kit Pré-Prova (ATP / D-Nitrox / Turbo)', 'Performance', '115 g', 'Suplemento energético indicado para equinos atletas antes das provas.', 'kit-pre-prova-atp-d-nitrox-turbo'), P('Organnact', 'Pre-Aprova 3 em 1', 'Performance', '80 ml', 'Preparação essencial (ATP, Turbo e D-Nitrox) para o cavalo competir em boas condições.', 'pre-aprova-3-em-1'), P('Organnact', 'ATP', 'Performance', '78 ml', 'Suplemento energético para equinos atletas, aporte imediato de energia antes da prova.', 'atp'), P('Organnact', 'Turbo', 'Performance', '78 ml', 'Suplemento vitamínico aminoácido com arginina, taurina e creatina para equinos atletas.', 'turbo'), P('Organnact', 'D-Nitrox', 'Performance', '78 ml', 'Suplemento aminoácido com arginina e taurina, apoio ao desempenho em provas.', 'd-nitrox'), P('Organnact', 'D-Nitrox 25 Turbo', 'Performance', '1 kg', 'Glicose energética para manutenção das reservas energéticas do equino atleta.', 'd-nitrox-25-turbo'), P('Organnact', 'Casco & Pelo', 'Nutrição', '500 g', 'Suplemento vitamínico mineral aminoácido; manutenção das características de casco e pelo.', 'casco-pelo'), P('Organnact', 'Casco & Pelo Turbo', 'Nutrição', '1 L', 'Manutenção da qualidade de cascos, pelos, crina e cauda em qualquer fase da vida.', 'casco-pelo-turbo'), P('Organnact', 'Condrix Equi', 'Nutrição', '500 g', 'Suplemento mineral aminoácido indicado para equinos de todas as idades.'), P('Organnact', 'Creatina ATP', 'Performance', '2 kg', 'Suplemento aminoácido com creatina e ATP para o metabolismo energético de equinos atletas.'), P('Organnact', 'Creatina', 'Performance', '2 kg', 'Suplemento aminoácido para preparação de leilões e provas de morfologia.'), P('Organnact', 'Hemo Turbo', 'Nutrição', '1 L e 5 L', 'Alta concentração de ácido fólico, pode ser usado com antibióticos.'), P('Organnact', 'Eletro Equi Gel', 'Nutrição', '80 ml', 'Suplementação diária de eletrólitos para equinos em exercícios intensos ou transportados.'), P('Organnact', 'Eletro Equi Pó', 'Nutrição', '500 g', 'Suplemento mineral que repõe minerais e mantém o equilíbrio hidroeletrolítico.', 'eletro-equi-po'), P('Organnact', 'Muscle Horse', 'Performance', '2,5 / 6 / 15 kg', 'Ideal para início da fase atlética, doma e treinamento.'), P('Organnact', 'Muscle Horse Turbo', 'Performance', '2,5 / 6 / 15 kg', 'Manutenção da performance, da saúde de articulações e da massa muscular.', 'muscle-horse-turbo'), P('Organnact', 'Muscle Horse Turbo Box Pouch', 'Performance', '2,5 / 6 / 15 kg', 'Suplemento vitamínico aminoácido em embalagem pouch para praticidade no dia a dia.', 'muscle-horse-turbo-box-pouch'), P('Organnact', 'Fitoclean', 'Higiene', '250 ml', 'Solução higienizadora que promove limpeza profunda em equinos, caninos, felinos e bovinos.'), P('Organnact', 'Nutrifull Apetite Boost Equi', 'Nutrição', '34 ml', 'Suplemento vitamínico mineral aminoácido para manutenção da boa qualidade nutricional.', 'nutrifull-apetite-boost-equi'), P('Organnact', 'Nutrifull Equi', 'Nutrição', '500 ml e 3,6 L', 'Reforço aminoácido, vitamínico e mineral para manutenção da qualidade nutricional diária.'), P('Organnact', 'Relax Ice', 'Performance', '100 e 350 ml', 'Óleo para massagem com ação relaxante e hidratante; sensação de frescor à pele.'), P('Organnact', 'Relax Ice Gel', 'Performance', '1 kg', 'Gel para massagem para uso em equinos, caninos, felinos e bovinos.'), P('Organnact', 'Relax Ice - Barro', 'Performance', '1,2 e 6 kg', 'Pasta para descanso muscular após exercícios, relaxamento de músculos e tendões.', 'relax-ice-barro'), P('Organnact', 'Compplet Max', 'Nutrição', '2,5 / 6 / 15 kg', 'Suplemento vitamínico mineral aminoácido contendo probiótico, para todas as idades.'), P('Organnact', 'Disco Final', 'Performance', '60 ml', 'Suplemento com BCAA e L-carnitina para equinos atletas adultos.'), P('Organnact', 'Antiox EC Selênio', 'Performance', '500 g', 'Nutrientes antioxidantes (vitamina E, C e selênio) para cavalos em atividades físicas.', 'antiox-ec-selenio'), P('Organnact', 'BCAA', 'Performance', '60 g', 'Aminoácido indicado para equinos após esforço físico intenso.'), P('Organnact', 'Corpore Potros', 'Nutrição', '10 kg', 'Suplemento aminoácido proteico para potros em crescimento, conceito de proteína ideal.', 'corpore-potros'), P('Organnact', 'Corpore Potros Pellets', 'Nutrição', '3 e 10 kg', 'Versão em pellets do Corpore Potros, facilita o consumo e reduz desperdício.', 'corpore-potros-pellets'), P('Organnact', 'Corpore Potros Baby Sustag Pellets', 'Nutrição', '3 e 10 kg', 'Suplemento para potros na fase inicial, apoio ao crescimento estruturado.', 'corpore-potros-baby-sustag-pellets'), P('Organnact', 'Corpore Potros Box Pouch', 'Nutrição', '3 e 10 kg', 'Suplemento aminoácido proteico para equinos em crescimento em embalagem pouch.', 'corpore-potros-box-pouch'), P('Organnact', 'Orga Milk Potros', 'Nutrição', '10 kg', 'Proporção ideal de cálcio e fósforo para potros na fase de lactação, rende cerca de 100 litros.', 'orga-milk-potros'), P('Organnact', 'Ortho Potros', 'Nutrição', '500 ml e 5 L', 'Suplemento aminoácido para potros em crescimento; vitaminas e minerais diários.'), P('Organnact', 'Resistance', 'Performance', '4,5 kg', 'Colina precursora da vitamina B1, contribui para maior resistência e captação de glicose.', 'resistance'), P('Organnact', 'Laminact Turbo', 'Nutrição', '4,5 kg', 'Suplemento vitamínico mineral com elementos importantes para as características fisiológicas.'), P('Organnact', 'Mio Action', 'Performance', '1 kg', 'Suplemento proteico para equinos submetidos a treinamentos ou esforços intensos.'), P('Organnact', 'Neutralatic Turbo', 'Nutrição', '1 L', 'Contribui para a redução do acúmulo de ácido lático em equinos.'), P('Organnact', 'O2 Fitoflu Turbo', 'Performance', '500 ml', 'Suplemento vitamínico aminoácido para equinos submetidos à prática regular de exercícios.', 'o2-fitoflu-turbo'), P('Organnact', 'HepHorse', 'Saúde', '500 ml', 'Suplemento vitamínico aminoácido; suporte nutricional ao bom funcionamento hepático.', 'hephorse'),
  // ---------------- CALBOS ----------------
  P('Calbos', 'Citronela', 'Higiene', '500 ml', 'Indicado para higiene e embelezamento de equinos, bovinos, ovinos e caprinos.'), P('Calbos', 'Shampoo Citronela', 'Higiene', '1 L e 5 L', 'Auxilia no embelezamento dos pelos, crina e cauda, com perfume suave.', 'shampoo-citronela-1'), P('Calbos', 'Spray Citronela', 'Higiene', '500 ml', 'Indicado para higiene e embelezamento de equinos, bovinos, ovinos e caprinos.'), P('Calbos', 'Abrilhantador Calbos', 'Higiene', '500 ml e 1 L', 'Promove brilho em equinos e bovinos; impede aderência de sujidades ao pelo.', 'abrilhantador-calbos-1'), P('Calbos', 'Calfoz', 'Saúde', '200 e 500 ml', 'Cálcio, Fósforo, Magnésio e Dextrose. Alta eficiência nas hipocalcemias e hipomagnesemias.', 'calfoz-1'), P('Calbos', 'Antec', 'Saúde', '4 comprimidos', 'Vermífugo de amplo espectro para gatos e cachorros, de fácil administração.'), P('Calbos', 'Amitraz', 'Saúde', '25 unidades', 'Carrapaticida para bovinos e sarnicida/piolhicida para ovinos.'), P('Calbos', 'Mustang Cromo', 'Nutrição', '5 kg', 'Suplemento mineral completo com probióticos; melhor condição corporal e desempenho.'), P('Calbos', 'Cipermetrina', 'Higiene', '1 L', 'Auxílio na eliminação de carrapatos e moscas; controle de mosca do chifre.'), P('Calbos', 'Hipofen', 'Saúde', '20 g', 'Vermífugo oral para equinos; pode ser usado em potros e fêmeas prenhes.'), P('Calbos', 'Serene Horse', 'Nutrição', '35 g', 'Suplemento vitamínico aminoácido para animais nervosos, provas e transporte.'), P('Calbos', 'Vit Ade', 'Saúde', '50 ml', 'Estimulante do crescimento, engorda e fertilidade; prevenção do raquitismo.', 'vit-ade'), P('Calbos', 'Rubralan', 'Saúde', '10 e 40 ml', 'Indicado no tratamento das anemias (piroplasmose, anaplasmose e verminose).'), P('Calbos', 'Sedacol', 'Saúde', '100 e 200 ml', 'Agente na debelação de síndromes congestivas do aparelho gastrintestinal.', 'sedacol-1'), P('Calbos', 'Placencal', 'Saúde', '200 ml', 'Aumento das contrações musculares do útero no momento do parto.'), P('Calbos', 'Pencil Pronto', 'Saúde', '50 ml', 'Antibiótico com ação analgésica e anti-inflamatória; amplo espectro de ação.'), P('Calbos', 'Ivermin Pasta Oral', 'Saúde', '6 g', 'Vermífugo para 600 kg de peso vivo; eficaz para grandes e pequenos estrôngilos.'), P('Calbos', 'Dexametasona', 'Saúde', '10 a 200 ml', 'Anti-inflamatório que atua reduzindo a dor e o inchaço rapidamente.'), P('Calbos', 'Neomastic', 'Saúde', '8 ml', 'Suspensão antibiótica para tratamento de mastites em vacas no período seco.'), P('Calbos', 'Mastical', 'Saúde', '12 seringas de 10 ml', 'Indicado para problemas no sistema mamário e terapia tópica em micoses.'), P('Calbos', 'Neocidine H', 'Nutrição', '1,75 L', 'Suplementação de cálcio, fósforo, magnésio, vitamina D3 e B12.', 'neocidine-h'), P('Calbos', 'Glicolcalbos', 'Saúde', '500 ml', 'Solução de Dextrose a 50%; energético potente e ação diurética.'), P('Calbos', 'Farinha de Cálcio Avícola', 'Nutrição', '1 kg', 'Suplemento mineral para aves com cálcio, fósforo e outros minerais.'),
  // ---------------- CENTRAL VET ----------------
  P('Central Vet', 'Atadura Elástica Coesiva', 'Saúde', '5 e 10 cm × 4,5 m', 'Bandagem estabilizadora de articulações e ligamentos; primeiros socorros e pós-operatório.'), P('Central Vet', 'Atadura Elástica Coesiva Sabor Amargo', 'Saúde', '5 e 10 cm × 4,5 m', 'Atadura estabilizadora com sabor amargo que evita mordeduras.'),
  // ---------------- HEEL (homeopáticos veterinários) ----------------
  P('Heel', 'Engystol', 'Saúde', '5 ampolas de 1 ml', 'Medicamento homeopático injetável de uso parenteral para uso veterinário.'), P('Heel', 'Traumeel', 'Saúde', '50 comprimidos', 'Indicado para bovinos, equinos, asininos, ovinos, suínos, caninos e felinos.'), P('Heel', 'Zeel', 'Saúde', '5 ampolas de 5 ml', 'Solução injetável indicada para bovinos, equinos, suínos, ovinos, caprinos, caninos e felinos.'),
  // ---------------- PAPA MOSCA / J.A. AMBIENTAL ----------------
  P('J.A. Ambiental', 'Papa Mosca', 'Higiene', '6 L', 'Atrativo biológico que combate as moscas de forma eficaz e sustentável, sem venenos ou inseticidas.'), P('J.A. Ambiental', 'Atrativo Natural Pet', 'Higiene', '2 L', 'Solução ecológica e definitiva contra as moscas.'), P('J.A. Ambiental', 'Papa Insetos', 'Higiene', '500 ml', 'Composição Methomyl 0,066% + surfactantes; controle de insetos.'), P('J.A. Ambiental', 'Armadilha de Tela', 'Higiene', 'unidade', 'Rede protetora e recipiente para captura de moscas.'), P('J.A. Ambiental', 'Armadilha Biológica', 'Higiene', 'unidade', 'Armadilha montada: funil, cuba, tampa, aranha, trava borboleta e haste.'), P('J.A. Ambiental', 'Ratoeira Injetável T-Rex', 'Higiene', 'unidade', 'Ratoeira injetada em polipropileno virgem, mola de alta pressão; resistente ao sol e chuva.', 'ratoeira-injetavel-t-rex'), P('J.A. Ambiental', 'Porta Iscas para Ratos', 'Higiene', 'unidade', 'Porta-iscas em polipropileno virgem com 4 funções de captura; ferro de fixação e chave universal.'),
  // ---------------- LAMBARI (massas prontas para pesca) ----------------
  P('Lambari', 'Massa Pacu Goiaba', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor goiaba.', 'massa-pacu-goiaba'), P('Lambari', 'Massa Pacu Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor milho verde.', 'massa-pacu-milho-verde'), P('Lambari', 'Massa Pacu Queijo', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor queijo.', 'massa-pacu-queijo'), P('Lambari', 'Massa Pacu Sangue', 'Pesca', '100 g', 'Massa pronta para pesca de pacu, sabor sangue.', 'massa-pacu-sangue'), P('Lambari', 'Massa Piau Bichinho da Laranja', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor bichinho da laranja.', 'massa-piau-bichinho-da-laranja'), P('Lambari', 'Massa Piau Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor milho verde.', 'massa-piau-milho-verde'), P('Lambari', 'Massa Piau Queijo', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor queijo.', 'massa-piau-queijo'), P('Lambari', 'Massa Piau Sangue', 'Pesca', '100 g', 'Massa pronta para pesca de piau, sabor sangue.', 'massa-piau-sangue'), P('Lambari', 'Massa Tilápia Bichinho da Laranja', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, sabor bichinho da laranja.', 'massa-tilapia-bichinho-da-laranja'), P('Lambari', 'Massa Tilápia Erva Doce', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, sabor erva doce.', 'massa-tilapia-erva-doce'), P('Lambari', 'Massa Tilápia Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, sabor milho verde.', 'massa-tilapia-milho-verde'), P('Lambari', 'Massa Tilápia P-40', 'Pesca', '100 g', 'Massa pronta para pesca de tilápia, isca P-40.', 'massa-tilapia-p-40'), P('Lambari', 'Massa Pronta para Pesca Natural', 'Pesca', '100 g', 'Massa pronta para pesca de lambari, sabor natural.', 'massa-pronta-para-pesca-natural'), P('Lambari', 'Massa Pronta para Pescar Milho Verde', 'Pesca', '100 g', 'Massa pronta para pesca de lambari, sabor milho verde.', 'massa-pronta-para-pescar-sabor-milho-verde'), P('Lambari', 'Massa Pronta para Pescar Queijo', 'Pesca', '100 g', 'Massa pronta para pesca de lambari, sabor queijo.', 'massa-pronta-para-pescar-sabor-queijo'), P('Lambari', 'Minhoca Pronta Carne Fina', 'Pesca', '100 g', 'Minhoca pronta para pesca, carne fina.', 'minhoca-pronta-carne-fina'),
  // ---------------- HORSE (marca própria) ----------------
  P('Horse', 'Escova para Animal', 'Higiene', 'unidade', 'Escova para cavalos; ferramenta certa para manter a pelagem limpa e saudável.')];
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site/products.js", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
