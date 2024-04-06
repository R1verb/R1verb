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

// SMOOTH SCROLL



// CHANGE TOPIC

const checkbox = document.getElementById('checkbox');

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  
  const isLightTheme = document.body.classList.contains('light-theme');
  
  localStorage.setItem('isLightTheme', isLightTheme);
}

window.onload = function() {
  const savedTheme = localStorage.getItem('isLightTheme');
  
  if (savedTheme === 'true') {
    document.body.classList.add('light-theme');
    checkbox.checked = true;
  }
}

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
  if (window.innerWidth > 767) {
    burgerMenu.classList.remove('burger_menu-active');
    navList.classList.remove('nav_mobile-active');
    body.classList.remove('lock');
  }
});

// BURGER MENU



// DOWNLOAD BUTTON ALL

// R1VERB BUTTON

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

// R1VERB BUTTON

// MORPHI BUTTON

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

// MORPHI BUTTON

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


// COPYTEXT SETTINGS

// Получаем все элементы с классом "copyText"
var copyTextElements = document.querySelectorAll(".copyText");

// Перебираем каждый элемент и добавляем обработчик события клика
copyTextElements.forEach(function(element) {
    element.addEventListener("click", function() {
        // Создаем временный элемент для копирования текста
        var tempInput = document.createElement("input");

        // Устанавливаем значение временного элемента равным тексту, который нужно скопировать
        tempInput.value = element.textContent;

        // Добавляем временный элемент на страницу
        document.body.appendChild(tempInput);

        // Выбираем весь текст внутри временного элемента
        tempInput.select();

        // Копируем выбранный текст
        document.execCommand("copy");

        // Удаляем временный элемент
        document.body.removeChild(tempInput);
    });
});

// COPYTEXT SETTINGS