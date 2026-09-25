const { Button, Input, Select, Eyebrow } = window.DistribuidoraHorseDesignSystem_1d44b3;

function cartTotals(cart) {
  const items = Object.entries(cart).filter(([, it]) => it.qty > 0);
  let subtotal = 0, units = 0, consulta = 0;
  items.forEach(([, it]) => { units += it.qty; if (it.price != null) subtotal += it.price * it.qty; else consulta += 1; });
  return { items, subtotal, units, consulta };
}

function buildMessage(cart, cliente, vendedor) {
  const { items, subtotal, consulta } = cartTotals(cart);
  const L = [];
  L.push('*Pedido | Distribuidora Horse*');
  L.push('Vendedor: ' + vendedor.nome);
  L.push('');
  L.push('*Cliente*');
  L.push('Nome: ' + cliente.nome);
  if (cliente.empresa) L.push('Empresa/Haras: ' + cliente.empresa);
  if (cliente.documento) L.push('CPF/CNPJ: ' + cliente.documento);
  L.push('Telefone: ' + cliente.telefone);
  L.push('Cidade/UF: ' + cliente.cidade);
  if (cliente.pagamento) L.push('Pagamento: ' + cliente.pagamento);
  L.push('');
  L.push('*Itens*');
  items.forEach(([, it], i) => {
    const line = (i + 1) + '. ' + it.qty + 'x ' + it.name + ' (' + it.variant + ')';
    L.push(it.price != null ? line + ' | ' + BRL(it.price * it.qty) : line + ' | sob consulta');
  });
  L.push('');
  L.push('Subtotal: ' + BRL(subtotal) + (consulta ? ' + ' + consulta + ' item(ns) sob consulta' : ''));
  if (cliente.obs) { L.push(''); L.push('Observações: ' + cliente.obs); }
  return L.join('\n');
}

function CartLine({ k, it, setQty }) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ width: 52, height: 52, flex: '0 0 52px', background: 'var(--paper-0)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {it.image ? <img src={it.image} alt="" style={{ width: '88%', height: '88%', objectFit: 'contain' }} /> : <Icon name="Package" size={20} />}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25 }}>{it.name}</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{it.variant}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 8 }}>
          <Stepper value={it.qty} size="sm" onChange={(n) => setQty(k, n, it)} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 800, color: it.price != null ? 'var(--text-primary)' : 'var(--accent-warm-strong)' }}>{it.price != null ? BRL(it.price * it.qty) : 'Sob consulta'}</span>
        </div>
      </div>
    </div>
  );
}

function CartPanel({ cart, setQty, clear, onCheckout, onClose }) {
  const { items, subtotal, units, consulta } = cartTotals(cart);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--color-surface)' }}>
      <div style={{ padding: '18px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Icon name="ShoppingBag" size={20} />
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, color: 'var(--text-primary)' }}>Seu pedido</div>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-muted)' }}>{units} {units === 1 ? 'unidade' : 'unidades'}</span>
        {onClose && <button type="button" aria-label="Fechar" onClick={onClose} style={{ marginLeft: 'auto', border: 'none', background: 'transparent', cursor: 'pointer', padding: 6, display: 'inline-flex' }}><Icon name="X" size={22} /></button>}
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 10px', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6 }}>
            <Icon name="ShoppingBag" size={34} color="var(--paper-300)" />
            <div style={{ marginTop: 12 }}>Seu pedido está vazio.<br />Adicione produtos para começar.</div>
          </div>
        ) : items.map(([k, it]) => <CartLine key={k} k={k} it={it} setQty={setQty} />)}
      </div>
      {items.length > 0 && (
        <div style={{ padding: 20, borderTop: '1px solid var(--border)', background: 'var(--color-bg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontFamily: 'var(--font-sans)' }}>
            <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>Subtotal</span>
            <span style={{ fontSize: 22, fontWeight: 800, color: 'var(--text-primary)' }}>{BRL(subtotal)}</span>
          </div>
          {consulta > 0 && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: 'var(--accent-warm-strong)', marginTop: 4, textAlign: 'right' }}>+ {consulta} {consulta === 1 ? 'item' : 'itens'} sob consulta</div>}
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--text-muted)', marginTop: 10, lineHeight: 1.5 }}>Valores sujeitos a confirmação. Frete e condições de pagamento são combinados com o vendedor.</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
            <Button variant="accent" size="lg" block iconRight={<Icon name="ArrowRight" size={18} />} onClick={onCheckout}>Finalizar pedido</Button>
            <Button variant="ghost" size="sm" block onClick={clear}>Esvaziar pedido</Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Checkout({ cart, vendedor, cliente, setCliente, onBack, onSent, isMobile }) {
  const [tried, setTried] = useState(false);
  const f = (k) => (e) => setCliente({ ...cliente, [k]: e.target.value });
  const req = ['nome', 'telefone', 'cidade'];
  const missing = req.filter((k) => !(cliente[k] || '').trim());
  const { subtotal, consulta, items } = cartTotals(cart);
  const send = (via) => {
    setTried(true);
    if (missing.length) return;
    const msg = buildMessage(cart, cliente, vendedor);
    if (via === 'whatsapp') window.open('https://wa.me/' + vendedor.whatsapp + '?text=' + encodeURIComponent(msg), '_blank');
    else window.location.href = 'mailto:' + vendedor.email + '?subject=' + encodeURIComponent('Pedido | ' + cliente.nome) + '&body=' + encodeURIComponent(msg);
    onSent();
  };
  const err = (k) => (tried && !(cliente[k] || '').trim() ? 'Campo obrigatório' : undefined);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(28,29,32,0.55)', display: 'flex', alignItems: isMobile ? 'stretch' : 'center', justifyContent: 'center', padding: isMobile ? 0 : 24 }}>
      <div style={{ background: 'var(--color-surface)', width: '100%', maxWidth: 640, maxHeight: isMobile ? '100%' : '92vh', overflowY: 'auto', borderRadius: isMobile ? 0 : 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ padding: isMobile ? '18px 20px' : '24px 32px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button type="button" aria-label="Voltar" onClick={onBack} style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 4, display: 'inline-flex' }}><Icon name="ArrowLeft" size={20} /></button>
          <div>
            <Eyebrow tone="accent" rule={false}>Último passo</Eyebrow>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 600, color: 'var(--text-primary)', marginTop: 4 }}>Seus dados para o pedido</div>
          </div>
        </div>
        <div style={{ padding: isMobile ? 20 : 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
            <Input label="Nome *" placeholder="Seu nome" value={cliente.nome || ''} onChange={f('nome')} error={err('nome')} />
            <Input label="Telefone / WhatsApp *" placeholder="(31) 90000-0000" value={cliente.telefone || ''} onChange={f('telefone')} error={err('telefone')} />
            <Input label="Empresa, haras ou loja" placeholder="Opcional" value={cliente.empresa || ''} onChange={f('empresa')} />
            <Input label="CPF ou CNPJ" placeholder="Opcional" value={cliente.documento || ''} onChange={f('documento')} />
            <Input label="Cidade / UF *" placeholder="Belo Horizonte / MG" value={cliente.cidade || ''} onChange={f('cidade')} error={err('cidade')} />
            <Select label="Forma de pagamento" value={cliente.pagamento || 'A combinar'} onChange={f('pagamento')} options={['A combinar', 'PIX', 'Boleto', 'Cartão', 'Transferência']} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <label style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>Observações</label>
            <textarea rows="3" value={cliente.obs || ''} onChange={f('obs')} placeholder="Endereço de entrega, prazo, dúvidas sobre produtos..." style={{ fontFamily: 'var(--font-sans)', fontSize: 15, padding: 12, border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-sm)', resize: 'vertical', outline: 'none', color: 'var(--text-primary)' }} />
          </div>
          <div style={{ background: 'var(--color-bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', fontFamily: 'var(--font-sans)' }}>
            <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{items.length} {items.length === 1 ? 'produto' : 'produtos'} para <strong style={{ color: 'var(--text-primary)' }}>{vendedor.nome}</strong></span>
            <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-primary)' }}>{BRL(subtotal)}{consulta ? <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent-warm-strong)' }}> + {consulta} sob consulta</span> : null}</span>
          </div>
          {tried && missing.length > 0 && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--danger)' }}>Preencha os campos obrigatórios para enviar.</div>}
          <div style={{ display: 'flex', gap: 10, flexDirection: isMobile ? 'column' : 'row' }}>
            <Button variant="accent" size="lg" block iconLeft={<Icon name="MessageCircle" size={18} />} onClick={() => send('whatsapp')}>Enviar pelo WhatsApp</Button>
            <Button variant="outline" size="lg" block iconLeft={<Icon name="Mail" size={18} />} onClick={() => send('email')}>Enviar por e-mail</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SentScreen({ vendedor, onNew, isMobile }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(28,29,32,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', padding: isMobile ? 28 : 40, maxWidth: 460, textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
        <span style={{ width: 60, height: 60, borderRadius: 'var(--radius-pill)', background: 'var(--success-soft)', color: 'var(--accent-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="Check" size={30} /></span>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 600, color: 'var(--text-primary)', marginTop: 16 }}>Pedido pronto para envio</div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)', margin: '10px 0 0' }}>Confirme o envio da mensagem no WhatsApp ou no e-mail. {vendedor.nome} vai retornar com a confirmação de valores, frete e prazo.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 22 }}>
          <Button variant="accent" block onClick={() => onNew(true)}>Fazer novo pedido</Button>
          <Button variant="ghost" block onClick={() => onNew(false)}>Voltar ao pedido</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { cartTotals, CartPanel, Checkout, SentScreen });
