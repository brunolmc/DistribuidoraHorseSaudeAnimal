# Site Distribuidora Horse — Saúde Animal

Site institucional estático (HTML + React via CDN). **Pronto para subir no GitHub e importar no Vercel.** Responsivo (desktop e mobile).

## Como colocar no ar (GitHub → Vercel)
1. Suba **todo o conteúdo desta pasta** para um repositório no GitHub (os arquivos devem ficar na raiz do repositório).
2. No Vercel: **Add New → Project → Import** o repositório.
3. Framework Preset: **Other** · Build Command: *(deixe vazio)* · Output Directory: **`.`** (raiz).
4. **Deploy**. É um site estático — não há etapa de build.

## Páginas
- `index.html` — home, catálogo (amostra), A Horse, contato.
- `catalogo-completo.html` — catálogo completo (fora do menu; acessível pelos botões “Ver catálogo completo”), com busca e filtro por categoria.

## Arquivos
- `styles.css` + `tokens/` — cores, tipografia, espaçamento.
- `_ds_bundle.js` — componentes de marca compilados.
- `*.js` / `products.js` — telas e dados do catálogo.
- `assets/` — logos e emblema (a logo não é alterada).
- `vercel.json` — configuração opcional de URLs.

## Observações
- Fontes usam Google Fonts como substitutas do lettering da logo.
- As imagens dos produtos ainda são placeholders — substituir quando houver as fotos.
