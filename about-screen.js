const { Button, Card, Eyebrow, Stat, Badge } = window.DistribuidoraHorseDesignSystem_1d44b3;

const VALUES = ['Ética', 'Transparência', 'Respeito aos animais', 'Compromisso com o cliente', 'Conhecimento técnico', 'Excelência no atendimento', 'Inovação', 'Agilidade', 'Parceria', 'Responsabilidade'];

function AboutScreen({ setRoute }) {
  const isMobile = useIsMobile();
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      {/* intro */}
      <section style={{ background: 'var(--ink-700)', color: 'var(--paper-50)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: isMobile ? 'var(--space-7) var(--gutter)' : 'var(--space-9) var(--gutter)', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr', gap: isMobile ? 24 : 56, alignItems: 'center' }}>
          <div>
            <Eyebrow tone="warm">A Distribuidora Horse</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isMobile ? 'var(--text-3xl)' : 'var(--text-4xl)', lineHeight: 1.05, fontWeight: 600, margin: '18px 0 0' }}>Uma parceira técnica do mercado equino</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.65, color: 'var(--ink-300)', marginTop: 20 }}>
              Sediada em Belo Horizonte e atuando desde 2016, a Horse é especializada na distribuição de produtos veterinários e suplementos para equinos, com uma equipe técnica capaz de orientar a escolha e acompanhar o desenvolvimento do animal, mantendo cavalos mais saudáveis e com melhor performance.
            </p>
          </div>
          <div style={{ display: isMobile ? 'none' : 'flex', justifyContent: 'center' }}>
            <img src="./assets/mark-horse-light.png" alt="Emblema Horse" style={{ height: 260, width: 'auto' }} />
          </div>
        </div>
      </section>

      {/* mission / vision */}
      <Section bg="var(--color-bg)">
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 24 }}>
          <Card accentEdge padding="var(--space-6)">
            <Eyebrow tone="accent">Missão</Eyebrow>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', lineHeight: 1.35, color: 'var(--text-primary)', margin: '16px 0 0', fontWeight: 500 }}>
              Promover a saúde, o desempenho e o bem-estar dos equinos por meio de produtos de excelência, atendimento consultivo e soluções que agreguem valor aos nossos clientes.
            </p>
          </Card>
          <Card accentEdge padding="var(--space-6)">
            <Eyebrow tone="warm">Visão</Eyebrow>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', lineHeight: 1.35, color: 'var(--text-primary)', margin: '16px 0 0', fontWeight: 500 }}>
              Ser reconhecida como a principal distribuidora especializada em saúde equina de Minas Gerais e uma referência nacional em qualidade, atendimento e relacionamento.
            </p>
          </Card>
        </div>
        <div style={{ display: 'flex', gap: isMobile ? 28 : 64, marginTop: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Stat value="2016" label="Fundação" align="center" />
          <Stat value="+40" label="Marcas" tone="accent" align="center" />
          <Stat value="BH" label="Minas Gerais" tone="warm" align="center" />
          <Stat value="B2B" label="Atacado especializado" align="center" />
        </div>
      </Section>

      {/* values */}
      <Section bg="var(--color-surface)">
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <Eyebrow tone="accent" style={{ justifyContent: 'center' }}>Nossos valores</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-2xl)', fontWeight: 600, margin: '14px 0 0', color: 'var(--text-primary)' }}>O que nos orienta</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', maxWidth: 760, margin: '0 auto' }}>
          {VALUES.map((v) => (
            <span key={v} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-primary)', background: 'var(--color-bg)' }}>
              <Icon name="Check" size={15} color="var(--accent)" /> {v}
            </span>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Button variant="accent" size="lg" iconRight={<Icon name="ArrowRight" size={18} />} onClick={() => setRoute('contact')}>Fale com a nossa equipe</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { AboutScreen });
