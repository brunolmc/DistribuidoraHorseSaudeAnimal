/* Vendedores da Distribuidora Horse.
   Cada vendedor tem um link próprio: pedido.html?rep=<codigo>  (ex.: seudominio.com.br/pedido?rep=leandro)
   Os pedidos feitos por esse link vão para o WhatsApp e o e-mail do vendedor.
   whatsapp: só números, com 55 + DDD (ex.: 5531998739510).
   Campos vazios usam o contato geral da empresa. */
window.HORSE_VENDEDORES = {
  padrao: { nome: 'Distribuidora Horse', whatsapp: '5531998739510', email: 'vendas@horsesaudeanimal.com.br', telefone: '(31) 3411-3034' },
  leandro: { nome: 'Leandro', whatsapp: '', email: '', telefone: '' },
};
