const { Logo, Button, Input, Select } = window.DistribuidoraHorseDesignSystem_1d44b3;

const CATS = ['Todos', 'Saúde', 'Nutrição', 'Performance', 'Higiene', 'Pesca'];
const LS_CART = 'horse-pedido-carrinho-v1';
const LS_CLIENT = 'horse-pedido-cliente-v1';
const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

function resolveVendedor() {
  const all = window.HORSE_VENDEDORES || {};
  const base = all.padrao || {};
  const code = norm(new URLSearchParams(window.location.search).get('rep') || '').replace(/[^a-z0-9]/g, '');
  const rep = all[code];
  if (!rep) return { ...base, code: '' };
  return { nome: rep.nome || base.nome, whatsapp: rep.whatsapp || base.whatsapp, email: rep.email || base.email, telefone: rep.telefone || base.telefone, code };
}
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };

function PedidoApp() {
  const isMobile = useIsMobile(900);
  const vendedor = React.useMemo(resolveVendedor, []);
  const catalog = React.useMemo(buildOrderCatalog, []);
  const marcas = React.useMemo(() => [...new Set(catalog.map((p) => p.marca))], [catalog]);

  const [cart, setCart] = useState(() => load(LS_CART, {}));
  const [cliente, setCliente] = useState(() => load(LS_CLIENT, {}));
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('Todos');
  const [marca, setMarca] = useState('Todas as marcas');
  const [sort, setSort] = useState('Nome A–Z');
  const [soPreco, setSoPreco] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [step, setStep] = useState('catalog');

  React.useEffect(() => { localStorage.setItem(LS_CART, JSON.stringify(cart)); }, [cart]);
  React.useEffect(() => { localStorage.setItem(LS_CLIENT, JSON.stringify(cliente)); }, [cliente]);

  const setQty = (key, qty, info) => setCart((c) => {
    const n = { ...c };
    if (qty <= 0) delete n[key]; else n[key] = { ...(c[key] || info), qty };
    return n;
  });
  const { units, subtotal } = cartTotals(cart);

  const catCount = React.useMemo(() => {
    const m = { Todos: catalog.length };
    catalog.forEach((p) => { m[p.category] = (m[p.category] || 0) + 1; });
    return m;
  }, [catalog]);

  const list = React.useMemo(() => {
    const t = norm(q.trim());
    let r = catalog.filter((p) =>
      (cat === 'Todos' || p.category === cat) &&
      (marca === 'Todas as marcas' || p.marca === marca) &&
      (!soPreco || p.minPrice != null) &&
      (!t || norm(p.name + ' ' + p.marca + ' ' + (p.desc || '')).includes(t)));
    const byName = (a, b) => a.name.localeCompare(b.name, 'pt-BR');
    if (sort === 'Nome A–Z') r = r.sort(byName);
    if (sort === 'Menor preço') r = r.sort((a, b) => (a.minPrice ?? 1e12) - (b.minPrice ?? 1e12));
    if (sort === 'Maior preço') r = r.sort((a, b) => (b.minPrice ?? -1) - (a.minPrice ?? -1));
    if (sort === 'Marca') r = r.sort((a, b) => a.marca.localeCompare(b.marca) || byName(a, b));
    return r;
  }, [catalog, q, cat, marca, sort, soPreco]);

  const clearFilters = () => { setQ(''); setCat('Todos'); setMarca('Todas as marcas'); setSoPreco(false); };
  const hasFilters = q || cat !== 'Todos' || marca !== 'Todas as marcas' || soPreco;
  const goCheckout = () => { setCartOpen(false); setStep('checkout'); };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', paddingBottom: isMobile && units ? 88 : 0 }}>
      {/* Header */}
      <header style={{ background: 'var(--ink-700)', color: 'var(--paper-50)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: isMobile ? '14px 16px' : '16px 32px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="index.html" style={{ display: 'flex' }}><Logo variant="full" tone="light" height={isMobile ? 34 : 42} base="./" /></a>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href={'https://wa.me/' + vendedor.whatsapp} target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: isMobile ? '6px 10px' : '8px 14px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 'var(--radius-pill)', color: 'var(--paper-50)', textDecoration: 'none' }}>
              <Icon name="MessageCircle" size={17} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.2 }}>
                {!isMobile && <span style={{ color: 'var(--ink-300)' }}>Seu vendedor: </span>}
                <strong>{vendedor.nome}</strong>
              </span>
            </a>
          </div>
        </div>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: isMobile ? '8px 16px 22px' : '10px 32px 30px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--amber-500)' }}>Pedido online</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 32 : 44, fontWeight: 600, lineHeight: 1.05, margin: '8px 0 0' }}>Monte seu pedido</h1>
          </div>
          <div style={{ display: 'flex', gap: isMobile ? 14 : 26, flexWrap: 'wrap' }}>
            {[['1', 'Escolha os produtos'], ['2', 'Ajuste as quantidades'], ['3', 'Envie para o vendedor']].map(([n, t]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--ink-300)' }}>
                <span style={{ width: 24, height: 24, borderRadius: 'var(--radius-pill)', background: 'var(--green-600)', color: 'var(--paper-0)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 12 }}>{n}</span>{t}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Filters */}
      <div style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(250,248,243,0.96)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: isMobile ? '12px 16px' : '14px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: isMobile ? 'wrap' : 'nowrap', alignItems: 'center' }}>
            <div style={{ flex: isMobile ? '1 1 100%' : '1 1 380px', minWidth: 0 }}>
              <Input placeholder="Buscar por produto, marca ou uso" iconLeft={<Icon name="Search" size={18} />} value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div style={{ flex: isMobile ? '1 1 45%' : '0 0 200px' }}><Select value={marca} onChange={(e) => setMarca(e.target.value)} options={['Todas as marcas', ...marcas]} /></div>
            <div style={{ flex: isMobile ? '1 1 45%' : '0 0 170px' }}><Select value={sort} onChange={(e) => setSort(e.target.value)} options={['Nome A–Z', 'Menor preço', 'Maior preço', 'Marca']} /></div>
          </div>
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2, alignItems: 'center' }}>
            {CATS.map((c) => <Chip key={c} active={cat === c} count={catCount[c] || 0} onClick={() => setCat(c)}>{c}</Chip>)}
            <span style={{ width: 1, height: 22, background: 'var(--border-strong)', flex: '0 0 1px', margin: '0 4px' }} />
            <Chip active={soPreco} onClick={() => setSoPreco((s) => !s)}>Só com preço</Chip>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 1360, margin: '0 auto', padding: isMobile ? '18px 16px 40px' : '28px 32px 60px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'minmax(0,1fr) 380px', gap: 28, alignItems: 'start' }}>
        <main>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)' }}>
            <span>{list.length} {list.length === 1 ? 'produto' : 'produtos'}</span>
            {hasFilters && <button type="button" onClick={clearFilters} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--accent)', fontWeight: 700, fontFamily: 'var(--font-sans)', fontSize: 14 }}>Limpar filtros</button>}
          </div>
          {list.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>
              Nenhum produto encontrado.<div style={{ marginTop: 14 }}><Button variant="outline" size="sm" onClick={clearFilters}>Limpar filtros</Button></div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(230px, 1fr))', gap: isMobile ? 12 : 18 }}>
              {list.map((p) => <OrderCard key={p.marca + p.name} product={p} cart={cart} setQty={setQty} compact={isMobile} />)}
            </div>
          )}
        </main>
        {!isMobile && (
          <aside style={{ position: 'sticky', top: 132, height: 'calc(100vh - 156px)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <CartPanel cart={cart} setQty={setQty} clear={() => setCart({})} onCheckout={goCheckout} />
          </aside>
        )}
      </div>

      <footer style={{ borderTop: '1px solid var(--border)', padding: '22px 16px', textAlign: 'center', fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--text-muted)' }}>
        Distribuidora Horse Saúde Animal · CNPJ 26.258.683/0001-75 · (31) 3411-3034 · vendas@horsesaudeanimal.com.br
      </footer>

      {/* Mobile cart bar + sheet */}
      {isMobile && units > 0 && !cartOpen && step === 'catalog' && (
        <div style={{ position: 'fixed', left: 12, right: 12, bottom: 12, zIndex: 40 }}>
          <button type="button" onClick={() => setCartOpen(true)} style={{ width: '100%', height: 60, border: 'none', borderRadius: 'var(--radius-lg)', background: 'var(--green-700)', color: 'var(--paper-0)', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: 12, padding: '0 18px', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
            <span style={{ position: 'relative', display: 'inline-flex' }}><Icon name="ShoppingBag" size={22} /><span style={{ position: 'absolute', top: -8, right: -10, minWidth: 20, height: 20, padding: '0 5px', borderRadius: 10, background: 'var(--amber-500)', fontSize: 11, fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{units}</span></span>
            <span style={{ fontSize: 15, fontWeight: 700, marginLeft: 8 }}>Ver pedido</span>
            <span style={{ marginLeft: 'auto', fontSize: 16, fontWeight: 800 }}>{BRL(subtotal)}</span>
          </button>
        </div>
      )}
      {isMobile && cartOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(28,29,32,0.5)' }} onClick={() => setCartOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '86vh', borderRadius: '18px 18px 0 0', overflow: 'hidden' }}>
            <CartPanel cart={cart} setQty={setQty} clear={() => setCart({})} onCheckout={goCheckout} onClose={() => setCartOpen(false)} />
          </div>
        </div>
      )}

      {step === 'checkout' && <Checkout cart={cart} vendedor={vendedor} cliente={cliente} setCliente={setCliente} isMobile={isMobile} onBack={() => setStep('catalog')} onSent={() => setStep('sent')} />}
      {step === 'sent' && <SentScreen vendedor={vendedor} isMobile={isMobile} onNew={(clear) => { if (clear) setCart({}); setStep('catalog'); }} />}
    </div>
  );
}
Object.assign(window, { PedidoApp });
