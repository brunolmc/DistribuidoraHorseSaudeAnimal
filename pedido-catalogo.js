const { Badge, Button } = window.DistribuidoraHorseDesignSystem_1d44b3;

const BRL = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function buildOrderCatalog() {
  const precos = window.HORSE_PRECOS || {};
  return (window.HORSE_PRODUCTS || []).map((p) => {
    const pv = precos[p.name];
    const variants = pv && pv.length ? pv.map(([label, price]) => ({ label, price })) : [{ label: p.size, price: null }];
    const prices = variants.map((v) => v.price).filter((x) => x != null);
    return { ...p, variants, minPrice: prices.length ? Math.min(...prices) : null };
  });
}

function Stepper({ value, onChange, size = 'md' }) {
  const h = size === 'sm' ? 34 : 40;
  const btn = { width: h, height: h, border: 'none', background: 'transparent', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' };
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', background: 'var(--color-surface)', height: h }}>
      <button type="button" aria-label="Diminuir" style={btn} onClick={() => onChange(Math.max(0, value - 1))}><Icon name={value <= 1 ? 'Trash2' : 'Minus'} size={15} /></button>
      <input
        type="number" inputMode="numeric" min="0" value={value}
        onChange={(e) => { const n = parseInt(e.target.value, 10); onChange(isNaN(n) ? 0 : Math.max(0, Math.min(9999, n))); }}
        onFocus={(e) => e.target.select()}
        style={{ width: 44, height: h - 2, border: 'none', borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)', textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', background: 'transparent', outline: 'none', MozAppearance: 'textfield' }}
      />
      <button type="button" aria-label="Aumentar" style={btn} onClick={() => onChange(value + 1)}><Icon name="Plus" size={15} /></button>
    </div>
  );
}

function OrderCard({ product, cart, setQty, compact }) {
  const [vi, setVi] = useState(0);
  const v = product.variants[vi];
  const key = product.name + '::' + v.label;
  const qty = cart[key] ? cart[key].qty : 0;
  const [imgOk, setImgOk] = useState(true);
  const set = (n) => setQty(key, n, { name: product.name, marca: product.marca, variant: v.label, price: v.price, image: product.image });

  const image = (
    <div style={{ background: 'var(--paper-0)', borderRadius: compact ? 'var(--radius-md)' : 0, borderBottom: compact ? 'none' : '1px solid var(--border)', aspectRatio: '1 / 1', width: compact ? 104 : '100%', flex: compact ? '0 0 104px' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: compact ? '1px solid var(--border)' : undefined }}>
      {imgOk && product.image
        ? <img src={product.image} alt={product.name} loading="lazy" onError={() => setImgOk(false)} style={{ width: '88%', height: '88%', objectFit: 'contain' }} />
        : <Icon name="Package" size={32} color="var(--stone-500)" />}
    </div>
  );

  const body = (
    <div style={{ padding: compact ? 0 : 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 8, flex: 1, minWidth: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{product.marca}</span>
        <Badge tone={product.tone} size="sm">{product.category}</Badge>
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: compact ? 19 : 21, fontWeight: 600, lineHeight: 1.15, color: 'var(--text-primary)', textWrap: 'pretty' }}>{product.name}</div>
      {product.variants.length > 1 ? (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {product.variants.map((x, i) => (
            <button key={x.label} type="button" onClick={() => setVi(i)} style={{ cursor: 'pointer', padding: '5px 10px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, border: '1px solid ' + (i === vi ? 'var(--accent)' : 'var(--border-strong)'), background: i === vi ? 'var(--accent-soft)' : 'var(--color-surface)', color: i === vi ? 'var(--accent-strong)' : 'var(--text-secondary)' }}>{x.label}</button>
          ))}
        </div>
      ) : (
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)' }}>{v.label}</div>
      )}
      <div style={{ marginTop: 'auto', paddingTop: 6, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: v.price != null ? 18 : 14, color: v.price != null ? 'var(--text-primary)' : 'var(--accent-warm-strong)' }}>
          {v.price != null ? BRL(v.price) : 'Sob consulta'}
        </div>
        {qty > 0
          ? <Stepper value={qty} onChange={set} size={compact ? 'sm' : 'md'} />
          : <Button size="sm" variant="accent" iconLeft={<Icon name="Plus" size={15} />} onClick={() => set(1)}>Adicionar</Button>}
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: compact ? 'row' : 'column', gap: compact ? 14 : 0, padding: compact ? 12 : 0, background: 'var(--color-surface)', border: '1px solid ' + (qty > 0 ? 'var(--accent)' : 'var(--border)'), borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: qty > 0 ? '0 0 0 3px var(--focus-ring)' : 'var(--shadow-xs)', transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)' }}>
      {image}
      {body}
    </div>
  );
}

function Chip({ active, children, onClick, count }) {
  return (
    <button type="button" onClick={onClick} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', border: '1px solid ' + (active ? 'var(--ink-700)' : 'var(--border-strong)'), background: active ? 'var(--ink-700)' : 'var(--color-surface)', color: active ? 'var(--paper-50)' : 'var(--text-secondary)' }}>
      {children}
      {count != null && <span style={{ fontSize: 11, opacity: 0.7 }}>{count}</span>}
    </button>
  );
}

Object.assign(window, { BRL, buildOrderCatalog, Stepper, OrderCard, Chip });
