const { Button, Card, Input, Select, Checkbox, Eyebrow, Badge } = window.DistribuidoraHorseDesignSystem_1d44b3;

function ContactRow({ icon, title, value, href }) {
  const inner = (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <span style={{ width: 42, height: 42, flex: '0 0 auto', borderRadius: 'var(--radius-md)', background: 'var(--accent-soft)', color: 'var(--accent-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={20} />
      </span>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{title}</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--text-primary)', marginTop: 4 }}>{value}</div>
      </div>
    </div>
  );
  return href
    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener" style={{ textDecoration: 'none', color: 'inherit' }}>{inner}</a>
    : inner;
}

function ContactScreen() {
  const [sent, setSent] = useState(false);
  const isMobile = useIsMobile();
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: isMobile ? 'var(--space-7) var(--gutter) var(--space-8)' : 'var(--space-8) var(--gutter) var(--space-9)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr', gap: isMobile ? 32 : 56, alignItems: 'start' }}>
          <div>
            <Eyebrow tone="accent">Atendimento consultivo</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-3xl)', fontWeight: 600, margin: '14px 0 0', color: 'var(--text-primary)' }}>Fale com um especialista</h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 1.65, color: 'var(--text-secondary)', marginTop: 16, maxWidth: 420 }}>
              Atendemos haras, centros de treinamento, clínicas, lojas agropecuárias e revendas em todo o estado. Conte pra gente o que você precisa.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}>
              <ContactRow icon="MapPin" title="Base" value="Belo Horizonte, Minas Gerais" />
              <ContactRow icon="Phone" title="Telefone fixo" value="(31) 3411-3034" href="tel:+553134113034" />
              <ContactRow icon="MessageCircle" title="WhatsApp" value="(31) 99873-9510" href="https://wa.me/5531998739510" />
              <ContactRow icon="Mail" title="E-mail" value="vendas@horsesaudeanimal.com.br" href="mailto:vendas@horsesaudeanimal.com.br" />
            </div>
            <div style={{ marginTop: 26 }}>
              <a href="https://wa.me/5531998739510" target="_blank" rel="noopener" style={{ textDecoration: 'none' }}>
                <Button variant="accent" iconLeft={<Icon name="MessageCircle" size={16} />}>Chamar no WhatsApp</Button>
              </a>
            </div>
          </div>

          <Card variant="elevated" padding="var(--space-6)">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <span style={{ width: 58, height: 58, borderRadius: 'var(--radius-pill)', background: 'var(--success-soft)', color: 'var(--accent-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}><Icon name="Check" size={28} /></span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--text-xl)', margin: '18px 0 6px', color: 'var(--text-primary)' }}>Mensagem enviada!</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-secondary)', margin: 0 }}>Nossa equipe retornará em breve.</p>
                <div style={{ marginTop: 22 }}><Button variant="outline" onClick={() => setSent(false)}>Enviar outra</Button></div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                  <Input label="Nome" placeholder="Seu nome" />
                  <Input label="Telefone" placeholder="(31) 90000-0000" />
                </div>
                <Input label="E-mail" placeholder="voce@empresa.com" iconLeft={<Icon name="Mail" size={18} />} />
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
                  <Select label="Perfil" options={['Haras', 'Centro de treinamento', 'Veterinário', 'Loja / revenda', 'Proprietário']} />
                  <Select label="Interesse" options={['Saúde', 'Nutrição', 'Performance', 'Todos']} />
                </div>
                <Input label="Mensagem" placeholder="Como podemos ajudar?" />
                <Checkbox label="Aceito receber contato e condições comerciais" defaultChecked />
                <Button variant="accent" size="lg" block iconRight={<Icon name="Send" size={17} />} onClick={() => setSent(true)}>Enviar mensagem</Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { ContactScreen });
