function redirectIfYoutubeVideo() {
    if (
      (location.hostname === "www.youtube.com" || location.hostname === "youtube.com" ||
       location.hostname === "www.youtube-nocookie.com" || location.hostname === "youtube-nocookie.com") &&
      location.pathname === "/watch" &&
      !location.hostname.startsWith("www.yout-ube.com")
    ) {
      const newUrl = location.href.replace("youtube.com", "yout-ube.com").replace("youtube-nocookie.com", "yout-ube.com");
      window.location.replace(newUrl);
    }
  }
  
  // Detecta mudanças de URL (SPA)
  let lastUrl = location.href;
  setInterval(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      redirectIfYoutubeVideo();
    }

    // Detecta mensagem de vídeo indisponível
    if (
      document.body.innerText.includes("Este vídeo não está disponível") ||
      document.body.innerText.includes("This video is unavailable")
    ) {
      // Recarrega a página após 1 segundo
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  }, 500);
  
  // Também executa ao carregar a página
  redirectIfYoutubeVideo();