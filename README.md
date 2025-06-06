# YouTube Ad Skipper Extension

## Descrição

Esta extensão para Google Chrome detecta quando você acessa um vídeo do YouTube e redireciona automaticamente para o domínio alternativo `yout-ube.com`, permitindo assistir aos vídeos sem anúncios. Ela funciona tanto para acessos diretos quanto para cliques em vídeos dentro do próprio YouTube, além de tentar recarregar a página caso o vídeo não esteja disponível.

## Funcionalidades
- Redirecionamento automático de vídeos do YouTube para `yout-ube.com`
- Suporte a navegação interna (SPA) do YouTube
- Detecção de vídeos indisponíveis e recarregamento automático da página

## Instalação

1. Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/youtube-ad-skipper-extension.git
   ```
2. Abra o Google Chrome e acesse `chrome://extensions/`
3. Ative o "Modo do desenvolvedor" no canto superior direito
4. Clique em "Carregar sem compactação" e selecione a pasta do projeto
5. Pronto! A extensão estará ativa

## Como usar
- Basta acessar qualquer vídeo do YouTube normalmente.
- A extensão irá redirecionar automaticamente para o domínio alternativo.
- Se o vídeo não estiver disponível, a página será recarregada automaticamente.

## Estrutura dos arquivos
- `manifest.json`: Configuração da extensão
- `rules.json`: Regras de redirecionamento declarativas
- `content.js`: Script que detecta navegação interna e vídeos indisponíveis
- `icon48.png` e `icon128.png`: Ícones da extensão

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Aviso
O uso desta extensão é de responsabilidade do usuário. O redirecionamento para domínios alternativos pode violar os termos de serviço do YouTube.

---

Feito com ❤️ para facilitar sua experiência no YouTube! 