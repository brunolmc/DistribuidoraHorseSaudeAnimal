const { Button, Badge, Input, Select, Checkbox, ProductCard, Eyebrow } = window.DistribuidoraHorseDesignSystem_1d44b3;

const ALL_PRODUCTS = () => window.HORSE_PRODUCTS || [];
const CATEGORIAS = ['Saúde', 'Nutrição', 'Performance', 'Higiene', 'Pesca'];
const MARCAS_FILTRO = ['Syntec', 'Organnact', 'Calbos', 'Central Vet', 'Heel', 'J.A. Ambiental', 'Lambari'];

function FilterGroup({ title, children }) {
  return (
    <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: '1px solid var(--border)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>{children}</div>
    </div>
  );
}

function CatalogScreen() {
  const isMobile = useIsMobile();
  const [q, setQ] = useState('');
  const [cats, setCats] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [ordem, setOrdem] = useState('relevancia');

  const toggle = (list, setList) => (value) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : list.concat(value));
  };
  const limpar = () => { setQ(''); setCats([]); setMarcas([]); setOrdem('relevancia'); };

  const filtrados = React.useMemo(() => {
    const t = q.trim().toLowerCase();
    let out = ALL_PRODUCTS().filter((p) =>
      (cats.length === 0 || cats.includes(p.category)) &&
      (marcas.length === 0 || marcas.includes(p.marca)) &&
      (!t || p.name.toLowerCase().includes(t) || p.marca.toLowerCase().includes(t) || (p.desc || '').toLowerCase().includes(t))
    );
    if (ordem === 'nome') out = out.slice().sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    if (ordem === 'marca') out = out.slice().sort((a, b) => a.marca.localeCompare(b.marca, 'pt-BR') || a.name.localeCompare(b.name, 'pt-BR'));
    return out;
  }, [q, cats, marcas, ordem]);

  const visiveis = filtrados.slice(0, 12);
  const temFiltro = q || cats.length || marcas.length;
  const goFull = () => { window.location.href = 'catalogo-completo.html'; };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100%' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-7) var(--gutter) var(--space-9)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Eyebrow tone="accent">Catálogo</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 600, margin: '14px 0 6px', color: 'var(--text-primary)' }}>Produtos para equinos</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', margin: 0 }}>Uma amostra do portfólio: saúde, nutrição, performance e higiene</p>
          </div>
          <Button variant="accent" iconRight={<Icon name="ArrowRight" size={16} />} onClick={goFull}>Ver catálogo completo</Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '260px 1fr', gap: isMobile ? 24 : 36, marginTop: 32, alignItems: 'start' }}>
          <aside style={{ background: 'var(--color-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', position: isMobile ? 'static' : 'sticky', top: 96 }}>
            <div style={{ marginBottom: 20 }}>
              <Input placeholder="Buscar produto" iconLeft={<Icon name="Search" size={18} />} value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <FilterGroup title="Categoria">
              {CATEGORIAS.map((c) => (
                <Checkbox key={c} label={c} checked={cats.includes(c)} onChange={() => toggle(cats, setCats)(c)} />
              ))}
            </FilterGroup>
            <FilterGroup title="Marca">
              {MARCAS_FILTRO.map((m) => (
                <Checkbox key={m} label={m} checked={marcas.includes(m)} onChange={() => toggle(marcas, setMarcas)(m)} />
              ))}
            </FilterGroup>
            <Button variant="ghost" size="sm" block onClick={limpar} disabled={!temFiltro}>Limpar filtros</Button>
          </aside>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-muted)' }}>
                {filtrados.length} produto{filtrados.length !== 1 ? 's' : ''}
                {filtrados.length > visiveis.length ? ' · mostrando ' + visiveis.length : ''}
              </div>
              <div style={{ width: 210 }}>
                <Select value={ordem} onChange={(e) => setOrdem(e.target.value)} options={[
                  { value: 'relevancia', label: 'Ordenar: relevância' },
                  { value: 'nome', label: 'Nome A–Z' },
                  { value: 'marca', label: 'Marca' },
                ]} />
              </div>
            </div>

            {visiveis.length === 0 ? (
              <div style={{ padding: '70px 20px', textAlign: 'center', background: 'var(--color-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)' }}>Nenhum produto encontrado</div>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', margin: '8px 0 20px' }}>Tente outra combinação de filtros ou limpe a busca.</p>
                <Button variant="outline" size="sm" onClick={limpar}>Limpar filtros</Button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(3,1fr)', gap: isMobile ? 12 : 20 }}>
                {visiveis.map((p) => (
                  <ProductCard key={p.name} brand={p.marca} name={p.name} category={p.category} tone={p.tone} image={p.image}
                    action={<Button size="sm" variant="outline" block onClick={goFull}>Ver produto</Button>} />
                ))}
              </div>
            )}

            <div style={{ marginTop: 32, padding: 'var(--space-6)', background: 'var(--color-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)' }}>Quer ver o portfólio inteiro?</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>Mais de 120 produtos de Syntec, Organnact, Calbos, Central Vet, Heel, J.A. Ambiental e Lambari.</div>
              </div>
              <Button variant="accent" iconRight={<Icon name="ArrowRight" size={16} />} onClick={goFull}>Ver catálogo completo</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { CatalogScreen });
