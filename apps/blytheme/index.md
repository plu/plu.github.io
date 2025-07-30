---
layout: home
aside: false

hero:
  name: BlytheMe
  text: Your Blythe Community
  tagline: Create, collect, and connect - all in one place made just for Blythe fans.
  image:
    src: /assets/blytheme/icon.webp
    alt: BlytheMe App Icon
  actions:
    - theme: brand
      text: Download on App Store
      link: https://apps.apple.com/app/apple-store/id6746345423?pt=204562&ct=website&mt=8

features:
  - icon: 👤
    title: Personal Profile
    details: Build your personal profile and showcase your beloved Blythe dolls with beautiful photos and custom details.
  - icon: 🔍
    title: Discover Collections
    details: Browse other users' collections, get inspired by unique styles, and discover new dolls from around the world.
  - icon: 🌟
    title: Community Connection
    details: Whether you're a longtime collector or just getting started, this app is your cozy corner of the Blythe Community.
  - icon: 📸
    title: Beautiful Galleries
    details: Showcase your dolls with stunning photo galleries and detailed information about each piece in your collection.
---

<div class="app-showcase">

## See BlytheMe in Action

<div class="screenshot-gallery">
  <div class="screenshot">
    <img src="/assets/blytheme/screenshot-1.webp" alt="BlytheMe Screenshot 1" />
    <p>Browse and discover amazing Blythe collections</p>
  </div>
  <div class="screenshot">
    <img src="/assets/blytheme/screenshot-2.webp" alt="BlytheMe Screenshot 2" />
    <p>Add beautiful photos and custom details</p>
  </div>
  <div class="screenshot">
    <img src="/assets/blytheme/screenshot-3.webp" alt="BlytheMe Screenshot 3" />
    <p>Create your personal profile and showcase your dolls</p>
  </div>
  <div class="screenshot">
    <img src="/assets/blytheme/screenshot-4.webp" alt="BlytheMe Screenshot 4" />
    <p>Showcase and share your unique Blythe creations effortlessly</p>
  </div>
</div>

  <div class="download-center">
    <a href="https://apps.apple.com/app/apple-store/id6746345423?pt=204562&ct=website&mt=8" class="download-button">
      <img src="/assets/app_store_badge.svg" alt="Download on the App Store" />
    </a>
  </div>

</div>

## Perfect for Every Collector

Whether you're a **longtime collector** or **just getting started**, BlytheMe provides everything you need to:

- **Document your collection** with beautiful photos and detailed information
- **Connect with other collectors** and share your passion
- **Discover new dolls** and get inspired by unique styles from around the world
- **Build your profile** as part of the global Blythe community

<style>
.app-showcase {
  margin: 3rem 0;
}

.screenshot-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.screenshot {
  text-align: center;
}

.screenshot img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.screenshot img:hover {
  transform: translateY(-5px);
}

.screenshot p {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.download-section {
  text-align: center;
  margin: 4rem 0;
  padding: 3rem 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.download-section h3 {
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.download-section p {
  margin-bottom: 2rem;
  color: var(--vp-c-text-2);
}

.download-center {
  text-align: center;
  margin: 2rem 0;
}

.download-button {
  display: inline-block;
}

.download-button img {
  height: 60px;
  width: auto;
}

@media (max-width: 768px) {
  .screenshot-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .screenshot img {
    max-width: 200px;
  }
}

@media (max-width: 480px) {
  .screenshot-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
