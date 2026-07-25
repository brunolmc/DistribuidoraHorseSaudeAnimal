const { Logo, Button, IconButton } = window.DistribuidoraHorseDesignSystem_1d44b3;

function Header({ route, setRoute }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const nav = [
    ['home', 'Início'],
    ['catalog', 'Catálogo'],
    ['about', 'A Horse'],
    ['contact', 'Contato'],
  ];
  const go = (id) => { setRoute(id); setOpen(false); };
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20, background: 'rgba(250,248,243,0.92)',
      backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto', height: isMobile ? 64 : 76, padding: '0 var(--gutter)',
        display: 'flex', alignItems: 'center', gap: 28,
      }}>
        <a onClick={() => go('home')} style={{ cursor: 'pointer', display: 'flex' }}>
          <Logo variant="full" tone="dark" height={isMobile ? 38 : 44} base="./" />
        </a>
        {!isMobile && (
          <React.Fragment>
            <nav style={{ display: 'flex', gap: 6, marginLeft: 'auto' }}>
              {nav.map(([id, label]) => (
                <a key={id} onClick={() => go(id)} style={{
                  cursor: 'pointer', padding: '9px 14px', fontFamily: 'var(--font-sans)', fontSize: 14,
                  fontWeight: route === id ? 700 : 500,
                  color: route === id ? 'var(--text-primary)' : 'var(--text-secondary)',
                  borderBottom: route === id ? '2px solid var(--accent)' : '2px solid transparent',
                }}>{label}</a>
              ))}
            </nav>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <IconButton label="Buscar" variant="ghost" onClick={() => go('catalog')}><Icon name="Search" size={19} /></IconButton>
              <Button variant="accent" size="sm" iconLeft={<Icon name="MessageCircle" size={16} />} onClick={() => go('contact')}>Falar com especialista</Button>
            </div>
          </React.Fragment>
        )}
        {isMobile && (
          <div style={{ marginLeft: 'auto' }}>
            <IconButton label="Menu" variant="ghost" onClick={() => setOpen((o) => !o)}>
              <Icon name={open ? 'X' : 'Menu'} size={22} />
            </IconButton>
          </div>
        )}
      </div>
      {isMobile && open && (
        <div style={{ borderTop: '1px solid var(--border)', background: 'var(--color-surface)', padding: 'var(--space-4) var(--gutter) var(--space-5)' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {nav.map(([id, label]) => (
              <a key={id} onClick={() => go(id)} style={{
                cursor: 'pointer', padding: '13px 4px', fontFamily: 'var(--font-sans)', fontSize: 16,
                fontWeight: route === id ? 700 : 500,
                color: route === id ? 'var(--accent-strong)' : 'var(--text-primary)',
                borderBottom: '1px solid var(--border)',
              }}>{label}</a>
            ))}
          </nav>
          <div style={{ marginTop: 16 }}>
            <Button variant="accent" size="md" block iconLeft={<Icon name="MessageCircle" size={16} />} onClick={() => go('contact')}>Falar com especialista</Button>
          </div>
        </div>
      )}
    </header>
  );
}
Object.assign(window, { Header });
