# Rádio Pindaí FM 88,9 — PWA

Aplicativo web instalável desenvolvido em HTML, CSS e JavaScript.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub, por exemplo `pindai-fm`.
2. Envie todos os arquivos e a pasta `assets`.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione `main` e `/ (root)` e salve.
6. Aguarde a publicação e abra o endereço HTTPS gerado.

## Ícones
`assets/icon-192.png` e `assets/icon-512.png` são necessários para a instalação. Substitua-os por versões quadradas da logo oficial antes da publicação.

## Observações
- O streaming é carregado diretamente do endereço Zeno informado.
- O service worker armazena os arquivos da interface para abrir a estrutura mesmo com conexão instável. A transmissão ao vivo exige internet.
- No iPhone, a instalação é feita pelo Safari: Compartilhar → Adicionar à Tela de Início.
- O botão de instalação automática aparece nos navegadores compatíveis; no iOS, o usuário instala pelo menu Compartilhar.
- Esta primeira etapa é a versão pública do aplicativo. O painel administrativo com autenticação e banco de dados será integrado em uma etapa seguinte. Não há senha administrativa simulada ou credenciais expostas neste projeto.
