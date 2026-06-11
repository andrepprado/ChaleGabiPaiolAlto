// Configurações principais do site — edite aqui quando tiver as informações finais.
const SITE = {
  airbnbUrl: "https://www.airbnb.com.br/rooms/1697423673867581459?unique_share_id=639cff9a-bcb5-45d3-bdaa-59b544188f0b&viralityEntryPoint=1&s=76",

  whatsappUrl: "https://wa.me/5512997108123?text=Olá! Tenho interesse em me hospedar no Chalé Gabi. Poderia me passar mais informações?",

  coordinates: {
    lat: -22.66530961966471,
    lng: -45.66862383295059
  },
  property: {
    guests: "Até 4 hóspedes",
    bedrooms: "1 quarto de casal",
    beds: "1 cama de casal e 1 sofá-cama",
    bathrooms: "1 banheiro",
    price: "Diárias a partir de R$ 560"
  }
};

const galleryItems = [
  { src: "assets/gallery-exterior.jpg", alt: "Varanda externa do chalé entre árvores", caption: "Área externa" },
  { src: "assets/gallery-view.jpg", alt: "Vista das montanhas a partir do chalé", caption: "Vista do chalé" },
  { src: "assets/gallery-interior.jpg", alt: "Sala interna aconchegante com madeira", caption: "Ambiente interno" },
  { src: "assets/gallery-nature.jpg", alt: "Mata atlântica ao redor do chalé", caption: "Natureza ao redor" },
  { src: "assets/gallery-rest.jpg", alt: "Rede no deque com vista para a serra", caption: "Espaço superior" },
  { src: "assets/gallery-town.jpg", alt: "Rua charmosa de São Bento do Sapucaí", caption: "Experiência no interior" }
];


const allPhotoItems = [
  "WhatsApp Image 2026-06-10 at 10.50.13.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.14.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.14 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.15.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.16.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.16 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.16 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.17.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.17 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.17 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.18.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.18 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.19.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.19 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.20.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.20 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.20 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.21.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.22.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.22 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.22 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.23.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.23 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.23 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.24.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.24 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.24 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.25.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.25 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.25 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.26.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.27.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.27 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.27 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.28.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.28 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.29 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.29 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.30.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.30 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.30 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.31.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.31 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.31 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.32.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.32 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.33.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.33 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.33 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.34.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.34 (1).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.34 (2).jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.35.jpeg",
  "WhatsApp Image 2026-06-10 at 10.50.35 (1).jpeg"
].map((fileName, index) => ({
  src: `assets/carousel/${fileName}`,
  alt: `Foto ${index + 1} do Chalé Gabi`,
  caption: `Foto ${index + 1}`
}));


const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");

function setHeaderState() {
  header.classList.toggle("scrolled", window.scrollY > 16);
}
window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

menu.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

// Aplica links do Airbnb, WhatsApp e dados editáveis.
document.querySelectorAll("[data-airbnb-link]").forEach((link) => {
  link.href = SITE.airbnbUrl;
});

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = SITE.whatsappUrl;
});

document.querySelectorAll("[data-property]").forEach((el) => {
  const key = el.dataset.property;
  if (SITE.property[key]) el.textContent = SITE.property[key];
});

/*
const mapUrl = `https://www.google.com/maps?q=${SITE.coordinates.lat},${SITE.coordinates.lng}`;
const mapLink = document.querySelector("[data-map-link]");
if (mapLink) mapLink.href = mapUrl;

const coordinatesText = document.querySelector("[data-coordinates]");
if (coordinatesText) {
  coordinatesText.textContent = `${SITE.coordinates.lat.toFixed(6)}, ${SITE.coordinates.lng.toFixed(6)}`;
}

const mapEmbed = document.querySelector("[data-map-embed]");
if (mapEmbed) {
  const { lat, lng } = SITE.coordinates;
  mapEmbed.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.04},${lat - 0.03},${lng + 0.04},${lat + 0.03}&layer=mapnik&marker=${lat},${lng}`;
}*/

// Localização: Google Maps, Waze, iframe e copiar endereço.
const addressText = "Rod. Pref. Benedicto Gomes de Souza, km 7.4, São Bento do Sapucaí - SP, 12490-000";
const { lat, lng } = SITE.coordinates;

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;

const mapLink = document.querySelector("[data-map-link]");
if (mapLink) {
  mapLink.href = googleMapsUrl;
}

const wazeLink = document.querySelector("[data-waze-link]");
if (wazeLink) {
  wazeLink.href = wazeUrl;
}

const coordinatesText = document.querySelector("[data-coordinates]");
if (coordinatesText) {
  coordinatesText.textContent = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
}

const mapEmbed = document.querySelector("[data-map-embed]");
if (mapEmbed) {
  mapEmbed.src = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
}

const copyAddressButton = document.querySelector("[data-copy-address]");
if (copyAddressButton) {
  copyAddressButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(addressText);

      copyAddressButton.textContent = "Endereço copiado!";

      setTimeout(() => {
        copyAddressButton.textContent = "Copiar endereço";
      }, 2000);
    } catch (error) {
      copyAddressButton.textContent = "Não foi possível copiar";

      setTimeout(() => {
        copyAddressButton.textContent = "Copiar endereço";
      }, 2000);
    }
  });
}
/*
// Lightbox da galeria.
let activeIndex = 0;
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");

function openLightbox(index) {
  activeIndex = index;
  const item = galleryItems[activeIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function changeImage(direction) {
  activeIndex = (activeIndex + direction + galleryItems.length) % galleryItems.length;
  openLightbox(activeIndex);
}

document.querySelectorAll("[data-gallery] [data-index]").forEach((button) => {
  button.addEventListener("click", () => openLightbox(Number(button.dataset.index)));
});

document.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
document.querySelector("[data-lightbox-prev]").addEventListener("click", (event) => {
  event.stopPropagation();
  changeImage(-1);
});
document.querySelector("[data-lightbox-next]").addEventListener("click", (event) => {
  event.stopPropagation();
  changeImage(1);
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowRight") changeImage(1);
  if (event.key === "ArrowLeft") changeImage(-1);
});
*/

// Lightbox da galeria e do carrossel.
let activeIndex = 0;
let activeGallery = galleryItems;

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");

function openLightboxFromList(items, index) {
  activeGallery = items;
  activeIndex = index;

  const item = activeGallery[activeIndex];

  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.caption || "";

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function openLightbox(index) {
  openLightboxFromList(galleryItems, index);
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function changeImage(direction) {
  activeIndex = (activeIndex + direction + activeGallery.length) % activeGallery.length;
  openLightboxFromList(activeGallery, activeIndex);
}

// Galeria principal.
document.querySelectorAll("[data-gallery] [data-index]").forEach((button) => {
  button.addEventListener("click", () => openLightbox(Number(button.dataset.index)));
});

// Carrossel com todas as fotos.
const photoCarousel = document.querySelector("[data-photo-carousel]");
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");

if (photoCarousel) {
  allPhotoItems.forEach((item, index) => {
    const button = document.createElement("button");

    button.className = "photo-carousel-item";
    button.type = "button";
    button.setAttribute("aria-label", `Abrir foto ${index + 1}`);

    button.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" loading="lazy">
    `;

    button.addEventListener("click", () => {
      openLightboxFromList(allPhotoItems, index);
    });

    photoCarousel.appendChild(button);
  });
}

if (carouselPrev && photoCarousel) {
  carouselPrev.addEventListener("click", () => {
    photoCarousel.scrollBy({
      left: -420,
      behavior: "smooth"
    });
  });
}

if (carouselNext && photoCarousel) {
  carouselNext.addEventListener("click", () => {
    photoCarousel.scrollBy({
      left: 420,
      behavior: "smooth"
    });
  });
}

// Eventos do lightbox.
document.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);

document.querySelector("[data-lightbox-prev]").addEventListener("click", (event) => {
  event.stopPropagation();
  changeImage(-1);
});

document.querySelector("[data-lightbox-next]").addEventListener("click", (event) => {
  event.stopPropagation();
  changeImage(1);
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowRight") changeImage(1);
  if (event.key === "ArrowLeft") changeImage(-1);
});

const languageSelect = document.querySelector("[data-language-select]");
const themeToggle = document.querySelector("[data-theme-toggle]");

const originalTexts = {};

document.querySelectorAll("[data-i18n]").forEach((element) => {
  const key = element.dataset.i18n;
  originalTexts[key] = element.textContent.trim();
});

function applyLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (language === "pt-BR") {
      element.textContent = originalTexts[key];
      return;
    }

    const translatedText = TRANSLATIONS?.[language]?.[key];

    if (translatedText) {
      element.textContent = translatedText;
    }
  });

  localStorage.setItem("siteLanguage", language);
}

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-mode", isDark);

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Alternar para modo claro" : "Alternar para modo escuro"
    );
  }

  localStorage.setItem("siteTheme", theme);
}

const savedLanguage = localStorage.getItem("siteLanguage") || "pt-BR";
const savedTheme = localStorage.getItem("siteTheme") || "light";

if (languageSelect) {
  languageSelect.value = savedLanguage;

  languageSelect.addEventListener("change", () => {
    applyLanguage(languageSelect.value);
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";

    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
  });
}

applyLanguage(savedLanguage);
applyTheme(savedTheme);