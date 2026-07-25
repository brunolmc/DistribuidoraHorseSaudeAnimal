const { Button, Badge, Input, Select, Checkbox, ProductCard, Eyebrow } = window.DistribuidoraHorseDesignSystem_1d44b3;

const PICKC = (name) => (window.HORSE_PRODUCTS || []).find((p) => p.name === name) || {};
const CATALOG = ['Muscle Horse', 'Creatina 90 Syntec', 'Vitapulmin Gel', 'Nutrifull Equi', 'Calfoz', 'Relax Ice', 'Gastroequi', 'Hipofen', 'Kit Pré-Prova (ATP / D-Nitrox / Turbo)'].map(PICKC);

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
  const goFull = () => { window.location.href = 'catalogo-completo.html'; };
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100%' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-7) var(--gutter) var(--space-9)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Eyebrow tone="accent">Catálogo</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 600, margin: '14px 0 6px', color: 'var(--text-primary)' }}>Produtos para equinos</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)', margin: 0 }}>Uma amostra do portfólio · saúde, nutrição, performance e higiene</p>
          </div>
          <Button variant="accent" iconRight={<Icon name="ArrowRight" size={16} />} onClick={goFull}>Ver catálogo completo</Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '260px 1fr', gap: isMobile ? 24 : 36, marginTop: 32, alignItems: 'start' }}>
          <aside style={{ background: 'var(--color-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)', position: isMobile ? 'static' : 'sticky', top: 96 }}>
            <div style={{ marginBottom: 20 }}><Input placeholder="Buscar produto" iconLeft={<Icon name="Search" size={18} />} /></div>
            <FilterGroup title="Categoria">
              <Checkbox label="Saúde" defaultChecked />
              <Checkbox label="Nutrição" defaultChecked />
              <Checkbox label="Performance" defaultChecked />
              <Checkbox label="Higiene" />
            </FilterGroup>
            <FilterGroup title="Marca">
              <Checkbox label="Syntec" />
              <Checkbox label="Organnact" />
              <Checkbox label="Calbos" />
              <Checkbox label="Central Vet" />
            </FilterGroup>
            <FilterGroup title="Disponibilidade">
              <Checkbox label="Em estoque" defaultChecked />
              <Checkbox label="Pronta entrega" />
            </FilterGroup>
            <Button variant="ghost" size="sm" block>Limpar filtros</Button>
          </aside>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, flexWrap: 'wrap', gap: 12 }}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Badge tone="health" dot>Saúde</Badge>
                <Badge tone="neutral" dot>Nutrição</Badge>
                <Badge tone="performance" dot>Performance</Badge>
              </div>
              <div style={{ width: 200 }}><Select options={['Ordenar: relevância', 'Nome A–Z', 'Marca']} /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(3,1fr)', gap: isMobile ? 12 : 20 }}>
              {CATALOG.map((p) => (
                <ProductCard key={p.name} brand={p.marca} name={p.name} category={p.category} tone={p.tone} image={p.image}
                  action={<Button size="sm" variant="outline" block onClick={goFull}>Ver produto</Button>} />
              ))}
            </div>
            <div style={{ marginTop: 32, padding: 'var(--space-6)', background: 'var(--color-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)' }}>Quer ver o portfólio inteiro?</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', marginTop: 4 }}>Mais de 120 produtos de Syntec, Organnact, Calbos, Central Vet, Heel, Papa Mosca e Lambari.</div>
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
