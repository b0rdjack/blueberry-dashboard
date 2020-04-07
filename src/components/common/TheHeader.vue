<template>
  <b-col id="header_block">
    <b-navbar toggleable="lg">
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <font-awesome-icon :icon="['fas', 'user']" class="icon alt" />
            </template>
            <b-dropdown-item href="#">
              <font-awesome-icon :icon="['fas', 'user-cog']" class="icon alt" />Mon profil
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="icon alt" />Déconnexion
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-col>
</template>
<script>
export default {};
</script>