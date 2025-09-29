import { Header } from "./components/header/header";
import { Avatar } from "./components/avatar/avatar";
import { SocialMedia } from "./components/social-media/social-media";
import { UnderConstruction } from "./components/under-construction/under-construction";
import {startAvatarAnimation} from "./scripts/scripts";

startAvatarAnimation();

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    emailjs: any;
  }
}

async function getLocationData() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return data;
  } catch (error) {
    return {};
  }
}

function shouldTrackVisitor(ip: string): boolean {
  const now = Date.now();
  const HOURS_24 = 24 * 60 * 60 * 1000;

  const lastTrackTime = localStorage.getItem('lastTrackingTime');
  if (lastTrackTime && (now - parseInt(lastTrackTime)) < HOURS_24) {
    console.log('Bu tarayıcıdan 24 saat içinde ziyaret kaydedilmiş');
    return false;
  }

  const trackedIPs = JSON.parse(localStorage.getItem('trackedIPs') || '{}');
  if (trackedIPs[ip] && (now - trackedIPs[ip]) < HOURS_24) {
    console.log('Bu IP adresi 24 saat içinde kaydedilmiş');
    return false;
  }

  localStorage.setItem('lastTrackingTime', now.toString());
  trackedIPs[ip] = now;
  localStorage.setItem('trackedIPs', JSON.stringify(trackedIPs));

  const DAYS_7 = 7 * 24 * 60 * 60 * 1000;
  Object.keys(trackedIPs).forEach(ipAddr => {
    if (now - trackedIPs[ipAddr] > DAYS_7) {
      delete trackedIPs[ipAddr];
    }
  });
  localStorage.setItem('trackedIPs', JSON.stringify(trackedIPs));

  return true;
}

function initializeTracking() {
  (window as any).emailjs.init("L1pFLZ9Jno3iyme1o");

  trackVisitor();
}

async function trackVisitor() {
  try {
    const locationData = await getLocationData();

    if (!shouldTrackVisitor(locationData.ip || 'unknown')) {
      return;
    }

    const visitorData = {
      url: window.location.href,
      referrer: document.referrer || 'Direct',
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      language: navigator.language,
      screenResolution: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      onlineStatus: navigator.onLine,
      cpuCores: (navigator as any).hardwareConcurrency || 'Unknown',
      deviceMemory: (navigator as any).deviceMemory || 'Unknown',
      connectionType: (navigator as any).connection?.effectiveType || 'Unknown',
      networkSpeed: (navigator as any).connection?.downlink || 'Unknown',

      // Location info's
      country: locationData.country || 'Unknown',
      city: locationData.city || 'Unknown',
      region: locationData.region || 'Unknown',
      latitude: locationData.latitude || 'Unknown',
      longitude: locationData.longitude || 'Unknown',
      ip: locationData.ip || 'Unknown',
      isp: locationData.org || 'Unknown'
    };

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      custom_parameter_1: visitorData.referrer
    });

    await (window as any).emailjs.send('service_ne7ebjj', 'template_domiowi', {
      to_email: 'bnilker@gmail.com',
      visitor_url: visitorData.url,
      visitor_referrer: visitorData.referrer,
      visitor_agent: visitorData.userAgent,
      visit_time: visitorData.timestamp,
      visitor_language: visitorData.language,
      screen_resolution: visitorData.screenResolution,
      timezone: visitorData.timezone,
      platform: visitorData.platform,
      cpu_cores: visitorData.cpuCores,
      device_memory: visitorData.deviceMemory,
      connection_type: visitorData.connectionType,
      network_speed: visitorData.networkSpeed,
      country: visitorData.country,
      city: visitorData.city,
      region: visitorData.region,
      latitude: visitorData.latitude,
      longitude: visitorData.longitude,
      ip_address: visitorData.ip,
      isp_provider: visitorData.isp
    });

  } catch (error) {
    console.error('Tracking hatası:', error);
  }
}

window.addEventListener('load', () => {
  initializeTracking();
});


document.querySelectorAll("polygon").forEach((poly) => {
  poly.addEventListener("mouseenter", () => {
    poly.classList.add("animate");

    poly.addEventListener(
      "animationend",
      () => {
        poly.classList.remove("animate");
      },
      { once: true }
    );
  });

  poly.addEventListener("touchstart", () => {
    poly.classList.add("animate");

    poly.addEventListener(
      "animationend",
      () => {
        poly.classList.remove("animate");
      },
      { once: true }
    );
  });
});

function setupNavigation() {
  const mainContent = document.querySelector(".main-content");
  const navLinks = document.querySelectorAll(".main-navigation__link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const href = link.getAttribute("href");

      if (href === "/" || href === "/about") {
        showHomePage();
      } else {
        showUnderConstruction();
      }
    });
  });

  function showHomePage() {
    if (mainContent) {
      mainContent.innerHTML = `
        <div id="avatar-sec">
          <me-avatar></me-avatar>
          <h2 class="presentation__greeting">Hello!</h2>
        </div>

        <div class="intro-text">
          <div class="intro-line">I code websites.</div>
          <div class="intro-line">I do artsy stuff.</div>
          <div class="intro-line">I blog sometimes.</div>
        </div>

        <div class="vertical-text" id="vertical-typewriter" data-typetext="SOFTWARE ENGINEER"></div>
      `;

      setTimeout(() => {
        const verticalElement = document.getElementById("vertical-typewriter");
        if (verticalElement) {
          startTypewriter(verticalElement);
        }
      }, 100);
    }
  }

  function showUnderConstruction() {
    if (mainContent) {
      mainContent.innerHTML = "<under-construction></under-construction>";
    }
  }
}

function startTypewriter(element: HTMLElement) {
  const text = element.dataset.typetext || "";
  let counter = -1;
  let isTyping = true;
  element.innerHTML = "";

  element.classList.add("show-cursor");

  const typeInterval = setInterval(() => {
    if (isTyping) {
      if (counter < text.length - 1) {
        counter++;
        element.innerHTML += text.charAt(counter);
      } else {
        isTyping = false;
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (element.innerHTML.length > 0) {
              element.innerHTML = element.innerHTML.slice(0, -1);
            } else {
              clearInterval(deleteInterval);
              counter = -1;
              isTyping = true;
            }
          }, 50);
        }, 1500);
      }
    }
  }, 120);
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupMobileTouch();

  setTimeout(() => {
    const verticalElement = document.getElementById("vertical-typewriter");
    if (verticalElement) {
      startTypewriter(verticalElement);
    }
  }, 250);
});

// Mobile touch support for navigation links
function setupMobileTouch() {
  const navLinks = document.querySelectorAll(".main-navigation__link");

  navLinks.forEach((link) => {
    link.addEventListener("touchstart", () => {
      link.classList.add("touched");
    });

    link.addEventListener("touchend", () => {
      setTimeout(() => {
        link.classList.remove("touched");
      }, 300);
    });
  });
}
