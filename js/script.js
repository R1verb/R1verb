document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('.header');
  const body = document.body;

  burgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
  });

  const menuItems = document.querySelectorAll('.nav-links .link a');
  menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
      navLinks.classList.remove('show');
      burgerMenu.classList.remove('active');
    });
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('show');
      burgerMenu.classList.remove('active');
    }
  });

  document.addEventListener('click', function(event) {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickInsideBurger = burgerMenu.contains(event.target);
    const isClickInsideHeader = header.contains(event.target);

    if (!isClickInsideNav && !isClickInsideBurger && !isClickInsideHeader) {
      navLinks.classList.remove('show');
      burgerMenu.classList.remove('active');
      body.classList.remove('no-scroll');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('.scroll-link');

  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
        options: {
          duration: 800,
          easing: 'ease-in-out',
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  function scrollToTop() {
    const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 8);
    }
  }

  window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', function() {
    scrollToTop();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollTopButton = document.querySelector('#scroll-to-top');

  const savedScrollTop = localStorage.getItem('scroll-top') || 0;
  const savedZoom = localStorage.getItem('zoom') || 1;

  document.documentElement.scrollTop = savedScrollTop;
  document.body.scrollTop = savedScrollTop;
  document.body.style.zoom = savedZoom;

  window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }

    localStorage.setItem('scroll-top', document.documentElement.scrollTop);
  });

  window.addEventListener('beforeunload', function() {
    localStorage.setItem('zoom', document.body.style.zoom);
  });
});

document.addEventListener('copy', function(event) {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const container = range.commonAncestorContainer;

    if (container instanceof HTMLImageElement) {
      event.preventDefault();
      alert('Копирование изображений запрещено.');
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, существует ли элемент с id 'R1verbButton'
  var r1verbButton = document.getElementById('R1verbButton');

  // Если элемент существует, добавляем обработчик события
  if (r1verbButton) {
    r1verbButton.addEventListener('click', function() {
      var downloadLinks = [
        'https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe',
        'https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=73f68aaff94a47d6bac5644c44539f88',
        'https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1703498647~acl=/*~hmac=83794007f2cb1db204640ed4423db4dfa288b699215997177e6500f497eb662d',
        'https://discord.com/api/download/ptb?platform=win',
        'https://www.google.com/intl/ru_ru/chrome/',
        'https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-624ru.exe',
        'https://www.utorrent.com/intl/ru/downloads/complete/track/stable/os/win/',
        'https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user',
        'https://ru.download.nvidia.com/GFE/GFEClient/3.27.0.120/GeForce_Experience_v3.27.0.120.exe',
        'https://stoigr.com/uploads/download/Spotify-Premium.torrent',
        'https://drv.dns-shop.ru/oth/A/ardor-gaming-prime-wireless-ardw-pr3325-bk_drajver_165841_23112022.zip',
        'https://redragon.ru/data/files/20220207/818c627c.zip'
      ];

      downloadLinks.forEach(function(link) {
        var anchor = document.createElement('a');
        anchor.href = link;
        anchor.target = '_blank';
        anchor.download = link.split('/').pop();
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      });
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, существует ли элемент с id 'MorphiButton'
  var morphiButton = document.getElementById('MorphiButton');

  // Если элемент существует, добавляем обработчик события
  if (morphiButton) {
    morphiButton.addEventListener('click', function() {
      var downloadLinks = [
        'https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe',
        'https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=73f68aaff94a47d6bac5644c44539f88',
        'https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1703498647~acl=/*~hmac=83794007f2cb1db204640ed4423db4dfa288b699215997177e6500f497eb662d',
        'https://discord.com/api/download/ptb?platform=win',
        'https://www.google.com/intl/ru_ru/chrome/',
        'https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-624ru.exe',
        'https://www.utorrent.com/intl/ru/downloads/complete/track/stable/os/win/',
        'https://ru.download.nvidia.com/GFE/GFEClient/3.27.0.120/GeForce_Experience_v3.27.0.120.exe',
        'https://telegram.org/dl/desktop/win64'
      ];

      downloadLinks.forEach(function(link) {
        var anchor = document.createElement('a');
        anchor.href = link;
        anchor.target = '_blank';
        anchor.download = link.split('/').pop();
        anchor.style.display = 'none';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      });
    });
  }
});