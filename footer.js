const { Logo } = window.DistribuidoraHorseDesignSystem_1d44b3;

function Footer({ setRoute }) {
  const isMobile = useIsMobile();
  const nav = (r) => () => setRoute && setRoute(r);
  const irMarcas = () => {
    setRoute && setRoute('home');
    setTimeout(() => {
      const el = document.getElementById('marcas');
      if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    }, 120);
  };
  const full = () => { window.location.href = 'catalogo-completo.html'; };
  const cols = [
    ['Empresa', [['A Horse', nav('about')], ['Missão e valores', nav('about')], ['Trabalhe conosco', nav('contact')]]],
    ['Catálogo', [['Saúde', full], ['Nutrição', full], ['Performance', full], ['Higiene', full]]],
    ['Atendimento', [['Fale conosco', nav('contact')], ['Seja um cliente', nav('contact')], ['Marcas parceiras', irMarcas]]],
  ];
  const social = [
    ['Instagram', 'https://www.instagram.com/distribuidorahorse', '@distribuidorahorse'],
    ['MessageCircle', 'https://wa.me/5531998739510', 'WhatsApp (31) 99873-9510'],
    ['Phone', 'tel:+553134113034', 'Telefone (31) 3411-3034'],
    ['Mail', 'mailto:vendas@horsesaudeanimal.com.br', 'E-mail'],
  ];
  return (
    <footer style={{ background: 'var(--ink-700)', color: 'var(--paper-200)', padding: 'var(--space-7) var(--gutter) var(--space-5)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1.4fr repeat(3,1fr)', gap: isMobile ? 28 : 40 }}>
          <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
            <Logo variant="mark" tone="light" height={72} base="./" />
            <p style={{ marginTop: 18, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--ink-300)', maxWidth: 260 }}>
              Distribuidora especializada em saúde, nutrição e performance equina. Belo Horizonte, Minas Gerais.
            </p>
            <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
              {social.map(([n, href, label]) => (
                <a key={n} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener" title={label} aria-label={label}
                  style={{ width: 38, height: 38, borderRadius: 'var(--radius-pill)', border: '1px solid rgba(255,255,255,0.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--paper-200)', transition: 'background var(--dur-fast) var(--ease-out)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}>
                  <Icon name={n} size={17} />
                </a>
              ))}
            </div>
          </div>
          {cols.map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--amber-500)' }}>{h}</div>
              <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {items.map(([label, action]) => <li key={label}><a onClick={action} style={{ cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-300)' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--paper-100)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-300)'; }}>{label}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--ink-300)' }}>
          <span>© 2016–2026 Distribuidora Horse Saúde Animal · CNPJ 26.258.683/0001-75</span>
          <span style={{ fontFamily: 'var(--font-script)', fontSize: 22, color: 'var(--paper-100)' }}>Horse Saúde Animal</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
