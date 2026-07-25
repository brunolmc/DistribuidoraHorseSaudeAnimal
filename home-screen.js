const { Button, Badge, Card, Eyebrow, Stat, ProductCard } = window.DistribuidoraHorseDesignSystem_1d44b3;

function Hero({ setRoute }) {
  const isMobile = useIsMobile();
  return (
    <section style={{ background: 'var(--ink-700)', color: 'var(--paper-50)', position: 'relative', overflow: 'hidden' }}>
      {/* watermark emblem */}
      <img src="./assets/mark-horse-light.png" alt="" style={{ position: 'absolute', right: isMobile ? -120 : -60, top: '50%', transform: 'translateY(-50%)', height: isMobile ? 300 : 460, opacity: 0.06, pointerEvents: 'none' }} />
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: isMobile ? 'var(--space-7) var(--gutter)' : 'var(--space-9) var(--gutter)', position: 'relative' }}>
        <div style={{ maxWidth: 680 }}>
          <Eyebrow tone="warm">Distribuidora de produtos veterinários · desde 2016</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 'var(--text-3xl)' : 'var(--text-5xl)', lineHeight: 1.05, letterSpacing: '-0.01em', fontWeight: 600, margin: '20px 0 0' }}>
            Produtos veterinários com orientação técnica
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.65, color: 'var(--ink-300)', maxWidth: 520, marginTop: 22 }}>
            Distribuímos medicamentos, suplementos e nutrição equina das melhores indústrias, com uma equipe técnica capaz de orientar a escolha e acompanhar o desenvolvimento do animal.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
            <Button variant="accent" size="lg" iconRight={<Icon name="ArrowRight" size={18} />} onClick={() => setRoute('catalog')}>Ver catálogo</Button>
            <Button variant="outline" size="lg" style={{ color: 'var(--paper-50)', borderColor: 'rgba(255,255,255,0.28)' }} onClick={() => setRoute('contact')}>Seja um cliente</Button>
          </div>
          <div style={{ display: 'flex', gap: isMobile ? 28 : 52, marginTop: isMobile ? 40 : 52, flexWrap: 'wrap' }}>
            <Stat value="+40" label="Marcas parceiras" tone="ink" style={{ '--text-primary': 'var(--paper-50)' }} />
            <Stat value="2016" label="No mercado" tone="ink" style={{ '--text-primary': 'var(--paper-50)' }} />
            <Stat value="MG" label="Base em BH" tone="ink" style={{ '--text-primary': 'var(--paper-50)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  ['HeartPulse', 'Saúde', 'Prevenção, tratamento e bem-estar animal com produtos veterinários de alta qualidade.'],
  ['Wheat', 'Nutrição', 'Suplementação e alimentação para o desenvolvimento e a condição do plantel.'],
  ['Trophy', 'Performance', 'Suporte ao desempenho esportivo e funcional em provas e competições.'],
  ['ShieldCheck', 'Confiança', 'Marcas reconhecidas, disponibilidade e suporte técnico especializado.'],
];

function Pillars() {
  const isMobile = useIsMobile();
  return (
    <Section bg="var(--color-bg)">
      <div style={{ textAlign: 'center', marginBottom: 44 }}>
        <Eyebrow tone="accent" style={{ justifyContent: 'center' }}>Nossos pilares</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 600, margin: '16px 0 0', color: 'var(--text-primary)' }}>Mais que produtos, uma parceria técnica</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: isMobile ? 12 : 20 }}>
        {PILLARS.map(([icon, title, body]) => (
          <Card key={title} variant="elevated" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--accent-soft)', color: 'var(--accent-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={icon} size={24} />
            </span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)' }}>{title}</div>
            <p style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

const PICK = (name) => (window.HORSE_PRODUCTS || []).find((p) => p.name === name) || {};
const FEATURED = ['Muscle Horse', 'Creatina 90 Syntec', 'Nutrifull Equi', 'Vitapulmin Gel'].map(PICK);

const TEAM_ITEMS = [
  ['Stethoscope', 'Orientação de uso', 'Indicação correta de medicamentos e suplementos para cada necessidade.'],
  ['LineChart', 'Acompanhamento', 'Suporte contínuo no desenvolvimento e na condição do animal.'],
  ['GraduationCap', 'Conhecimento técnico', 'Equipe especializada no universo equino, próxima do cliente.'],
];

function TechTeam({ setRoute }) {
  const isMobile = useIsMobile();
  return (
    <Section bg="var(--color-surface)">
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr', gap: isMobile ? 32 : 56, alignItems: 'center' }}>
        <div>
          <Eyebrow tone="accent">Equipe técnica</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 600, margin: '16px 0 0', color: 'var(--text-primary)', lineHeight: 1.1 }}>Não vendemos só produtos.<br />Orientamos e acompanhamos.</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.65, color: 'var(--text-secondary)', marginTop: 18, maxWidth: 440 }}>
            Nossa equipe técnica ajuda a escolher os produtos veterinários e suplementos certos e acompanha o desenvolvimento do animal, do plano nutricional à performance.
          </p>
          <div style={{ marginTop: 26 }}>
            <Button variant="accent" iconRight={<Icon name="ArrowRight" size={16} />} onClick={() => setRoute('contact')}>Fale com a equipe técnica</Button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {TEAM_ITEMS.map(([icon, title, body]) => (
            <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: 'var(--space-4)', background: 'var(--color-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)' }}>
              <span style={{ width: 46, height: 46, flex: '0 0 auto', borderRadius: 'var(--radius-md)', background: 'var(--accent-soft)', color: 'var(--accent-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={icon} size={22} />
              </span>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-lg)', fontWeight: 600, color: 'var(--text-primary)' }}>{title}</div>
                <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-secondary)' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Featured({ setRoute }) {
  const isMobile = useIsMobile();
  return (
    <Section bg="var(--color-surface)">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <Eyebrow tone="warm">Destaques do catálogo</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 600, margin: '14px 0 0', color: 'var(--text-primary)' }}>Produtos selecionados para o seu plantel</h2>
        </div>
        <Button variant="ghost" iconRight={<Icon name="ArrowUpRight" size={16} />} onClick={() => { window.location.href = 'catalogo-completo.html'; }}>Ver catálogo completo</Button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: isMobile ? 12 : 20 }}>
        {FEATURED.map((p) => (
          <ProductCard key={p.name} brand={p.marca} name={p.name} category={p.category} tone={p.tone} image={p.image}
            action={<Button size="sm" variant="outline" block onClick={() => { window.location.href = 'catalogo-completo.html'; }}>Ver produto</Button>} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Button variant="accent" size="lg" iconRight={<Icon name="ArrowRight" size={18} />} onClick={() => { window.location.href = 'catalogo-completo.html'; }}>Ver catálogo completo</Button>
        <div style={{ marginTop: 12, fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)' }}>Mais de 120 produtos · Syntec, Organnact, Calbos, Central Vet, Heel, Papa Mosca e Lambari</div>
      </div>
    </Section>
  );
}

function Brands() {
  const names = ['SYNTEC', 'ORGANNACT', 'CALBOS', 'CENTRAL VET', 'PAPA MOSCA', 'HEEL', 'LAMBARI'];
  return (
    <Section bg="var(--color-bg)" pad="var(--space-7) var(--gutter)">
      <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 26 }}>Marcas que distribuímos</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
        {names.map((n) => <span key={n} style={{ fontFamily: 'var(--font-display)', fontSize: 20, letterSpacing: '0.08em', color: 'var(--ink-400)', opacity: 0.7 }}>{n}</span>)}
      </div>
    </Section>
  );
}

function CTA({ setRoute }) {
  return (
    <Section bg="var(--color-surface)">
      <div style={{ background: 'var(--green-700)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8) var(--space-7)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap', color: 'var(--paper-50)' }}>
        <div style={{ maxWidth: 560 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 600, margin: 0 }}>Precisa de indicação técnica?</h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.6, color: 'var(--green-200)', marginTop: 12 }}>Nossa equipe técnica orienta a escolha dos produtos e acompanha o desenvolvimento do animal, no seu haras, centro de treinamento ou clínica.</p>
        </div>
        <Button variant="warm" size="lg" iconRight={<Icon name="ArrowRight" size={18} />} onClick={() => setRoute('contact')}>Falar com especialista</Button>
      </div>
    </Section>
  );
}

function HomeScreen({ setRoute }) {
  return (
    <div>
      <Hero setRoute={setRoute} />
      <Pillars />
      <TechTeam setRoute={setRoute} />
      <Featured setRoute={setRoute} />
      <Brands />
      <CTA setRoute={setRoute} />
    </div>
  );
}
Object.assign(window, { HomeScreen });
