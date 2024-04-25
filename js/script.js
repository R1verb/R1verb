// SMOOTH SCROLL
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    var yOffset = -70;
    var targetY = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    var startingY = window.pageYOffset;
    var diff = targetY - startingY;
    var start;
    function step(timestamp) {
      if (!start) start = timestamp;
      var time = timestamp - start;
      var percent = Math.min(time / 400, 1);
      window.scrollTo(0, startingY + diff * percent);
      if (time < 800) {
        requestAnimationFrame(step);
      }
    }
    requestAnimationFrame(step);
  }
}
window.addEventListener("beforeunload", function() {
  window.scrollTo(0, 0);
});
// SMOOTH SCROLL

// UP SCROLL
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function scrollToTop() {
  const scrollDuration = 300; // milliseconds
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
// UP SCROLL

// CHANGE TOPIC
const checkbox = document.getElementById('checkbox');
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isLightTheme = document.body.classList.contains('light-theme');
  localStorage.setItem('isLightTheme', isLightTheme);
}
// Добавляем функцию для установки начальной темы при загрузке страницы
function setInitialTheme() {
  const savedTheme = localStorage.getItem('isLightTheme');
  if (savedTheme === 'true') {
    document.body.classList.add('light-theme');
    checkbox.checked = true;
  }
}
// Добавляем обработчик события onload для установки начальной темы
window.addEventListener('load', function() {
  setInitialTheme();
});
checkbox.addEventListener('change', toggleTheme);
// CHANGE TOPIC


// BURGER MENU
const burgerMenu = document.querySelector('.burger_menu');
const navList = document.querySelector('.nav_mobile');
const navLinks = document.querySelectorAll('.nav_link');
const body = document.querySelector('body');
burgerMenu.addEventListener('click', ()=>{
  burgerMenu.classList.toggle('burger_menu-active');
  navList.classList.toggle('nav_mobile-active');
  body.classList.toggle('lock');
});
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('burger_menu-active');
    navList.classList.remove('nav_mobile-active');
    body.classList.remove('lock');
  });
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    burgerMenu.classList.remove('burger_menu-active');
    navList.classList.remove('nav_mobile-active');
    body.classList.remove('lock');
  }
});
// BURGER MENU

// COPYTEXT
window.onload = function() {
  document.querySelectorAll(".copyText").forEach(function(element) {
    element.addEventListener("click", function() {
      var textToCopy = element.textContent;
      navigator.clipboard.writeText(textToCopy).then(function() {
        var copyMessage = document.createElement("div");
        copyMessage.textContent = "Текст скопирован";
        copyMessage.classList.add("copy-message");
        document.body.appendChild(copyMessage);
        setTimeout(function() {
          document.body.removeChild(copyMessage);
        }, 2000);
      }).catch(function(error) {
        console.error('Ошибка копирования: ', error);
      });
    });
  });
}
// COPYTEXT

// DOWNLOAD BUTTON ALL
document.querySelector('.r1verb').addEventListener('click', function() {
  var linksToDownload = [
    "https://cdn.cloudflare.steamstatic.com/client/installer/SteamSetup.exe",
    "https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=d5e9f94144e64de8842e96e96dd229c9",
    "https://discord.com/api/download/ptb?platform=win",
    "https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1707120607~acl=/*~hmac=d0c432bc278c63c2cfd4aa02702ef5f0495315f2afce4735b068530f81b015b2",
    "https://www.google.com/intl/ru/chrome/next-steps.html?statcb=0&installdataindex=empty&defaultbrowser=0#",
    "https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-624ru.exe",
    "https://ru.download.nvidia.com/nvapp/client/10.0.0.535/NVIDIA_app_beta_v10.0.0.535.exe",
    "https://ulap.top/pcnp_prog/pcnp_install.exe",
    "https://download-new.utorrent.com/endpoint/utweb/track/stable/os/win",
    "https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user",
    "https://drive.google.com/uc?export=download&id=1szZUC56CnrinfslgYsE_fSGBG1jpcJNK",
    "https://www.apple.com/itunes/download/win64",
    "https://sideloadly.io/SideloadlySetup64.exe",
    "https://drv.dns-shop.ru/oth/A/ardor-gaming-prime-wireless-ardw-pr3325-bk_drajver_165841_23112022.zip",
    "https://redragon.ru/data/files/20220207/818c627c.zip"
  ];
  downloadLinks(linksToDownload);
});

document.querySelector('.morphi').addEventListener('click', function() {
  var morphiLinks = [
    "https://cdn.cloudflare.steamstatic.com/client/installer/SteamSetup.exe",
    "https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=d5e9f94144e64de8842e96e96dd229c9",
    "https://discord.com/api/download/ptb?platform=win",
    "https://download.msi.com/uti_exe/vga/MSIAfterburnerSetup.zip?__token__=exp=1707120607~acl=/*~hmac=d0c432bc278c63c2cfd4aa02702ef5f0495315f2afce4735b068530f81b015b2",
    "https://www.google.com/intl/ru/chrome/next-steps.html?statcb=0&installdataindex=empty&defaultbrowser=0#",
    "https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-624ru.exe",
    "https://ru.download.nvidia.com/nvapp/client/10.0.0.535/NVIDIA_app_beta_v10.0.0.535.exe",
    "https://download-hr.utorrent.com/track/stable/endpoint/utorrent/os/windows",
    "https://www.apple.com/itunes/download/win64",
    "https://sideloadly.io/SideloadlySetup64.exe",
    "https://telegram.org/dl/desktop/win64"
  ];
  downloadLinks(morphiLinks);
});

function downloadLinks(links) {
  links.forEach(function(link) {
    var downloadLink = document.createElement('a');
    downloadLink.href = link;
    downloadLink.download = link.split('/').pop();
    downloadLink.target = '_blank';
    downloadLink.click();
  });
}
// DOWNLOAD BUTTON ALL

// R1VERB EXTENSIONS
var button = document.getElementById('r1verb_extensions');
if (button) {
    button.addEventListener('click', function() {
        var linksToDownload = [
            "https://chromewebstore.google.com/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone?hl=ru&utm_source=ext_sidebar",
            "https://chromewebstore.google.com/detail/adblock-%E2%80%94-%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B9-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B8%D1%80%D0%BE%D0%B2/gighmmpiobklfepjocnamgkkbiglidom?hl=ru&utm_source=ext_sidebar",
            "https://chromewebstore.google.com/detail/shazam-%D0%B8%D1%89%D0%B8%D1%82%D0%B5-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D1%82%D1%80%D0%B5/mmioliijnhnoblpgimnlajmefafdfilb?hl=ru&utm_source=ext_sidebar",
            "https://chromewebstore.google.com/detail/picture-in-picture-pip-fl/gmehookibnphigonphocphhcepbijeen",
            "https://chromewebstore.google.com/detail/browsec-vpn-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D0%B2%D0%BF/omghfjlpggmjjaagoclmmobgdodcjboh?hl=ru&utm_source=ext_sidebar",
            "https://chromewebstore.google.com/detail/volume-sound-booster/eajloihmgggbfobianjoedhmjgfgpdco?hl=ru&utm_source=ext_sidebar"
        ];

        linksToDownload.forEach(function(link) {
            window.open(link, '_blank');
        });
    });
}
// R1VERB EXTENSIONS