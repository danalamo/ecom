<template>
  <div class="main">
    <b-navbar toggleable="lg" type="dark" variant="dark" v-if="$root.me.name">
      <router-link to="/">
        <b-navbar-brand>Boutiquefy </b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link
            to="/orders"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <b-nav-item :href="href" :active="isActive" @click="navigate">
              Orders
            </b-nav-item>
          </router-link>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <span>{{ $root.me.name }}</span>
            </template>
            <router-link to="/profile" v-slot="{ href, navigate }">
              <b-dropdown-item :href="href" @click="navigate">
                Profile
              </b-dropdown-item>
            </router-link>
            <b-dropdown-item href="#" @click="$root.logout">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container class="pt-4">
      <router-view v-if="!$root.me.loading"></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Main'
};
</script>

<style>
.main {
  min-height: 100vh;
}
</style>
