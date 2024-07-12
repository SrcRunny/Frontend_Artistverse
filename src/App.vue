<template>
  <section id="Navbar" class="fixed top-0 w-full z-50">
    <div class="navbar bg-gradient">
      <div class="navbar-start text-neutral-content">
        <router-link to="/">
          <a class="btn btn-ghost text-2xl">ARTISTVERSE</a>
        </router-link>
        <span class="page-name ml-4 text-xl font-semibold">{{ $route.meta.title }}</span>
      </div>
      <div class="navbar-end">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-70 right-0 left-auto"
          >
            <router-link to="/"
              ><li><a>Homepage</a></li></router-link
            >
            <router-link to="/layoutview"
              ><li><a>Lyrics Generate</a></li></router-link
            >
            <router-link to="/recommend"
              ><li><a>Camera Mood</a></li></router-link
            >
            <router-link to="/guitarchord"
              ><li><a>Chord Progression</a></li></router-link
            >
          </ul>
        </div>
      </div>
    </div>
  </section>

  <RouterView></RouterView>
</template>
<style scoped>
.navbar {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0));
}

/* Other styles for the navbar content */
</style>
