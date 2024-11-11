<template>
  <div class="dropdown ms-3">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      id="userDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="bi bi-person-circle"></i>
    </a>
    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
      <li>
        <router-link class="dropdown-item" to="/connexion">CONNEXION</router-link>
      </li>
      <li>
        <router-link class="dropdown-item" to="/inscription">INSCRIPTION</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
};
</script>

<style scoped>
/* Ajoutez des styles si nécessaire */
</style>
