<script setup lang="ts">
import HomeIcon from '~/assets/icons/home-icon.svg'
import PeopleIcon from '~/assets/icons/people-icon.svg'
import CalendarIcon from '~/assets/icons/calendar-icon.svg'
import MessageIcon from '~/assets/icons/message-icon.svg'
import CardIcon from '~/assets/icons/card-icon.svg'
import SettingsIcon from '~/assets/icons/settings-icon.svg'
import MoreVertIcon from '~/assets/icons/more-vert-icon.svg'
import Logo from '~/assets/icons/logo.svg'
</script>

<template>
  <header class="top-nav">
    <div class="brand">
      <img class="logo" :src="Logo" alt="" />
    </div>
    <nav class="nav-links" aria-label="Main navigation">
      <NuxtLink to="/overview"><img :src="HomeIcon" alt="" />Overview</NuxtLink>
      <NuxtLink to="/"><img :src="PeopleIcon" alt="" />Patients</NuxtLink>
      <NuxtLink to="/schedule"><img :src="CalendarIcon" alt="" />Schedule</NuxtLink>
      <NuxtLink to="/message"><img :src="MessageIcon" alt="" />Message</NuxtLink>
      <NuxtLink to="/transactions"><img :src="CardIcon" alt="" />Transactions</NuxtLink>
    </nav>
    <section class="doctor-card" aria-label="logged-in">
      <img src="https://images.pexels.com/photos/6762866/pexels-photo-6762866.jpeg" alt="" />
      <div>
        <strong>Dr. Jose Simmons</strong>
        <span>General Practitioner</span>
      </div>
      <div class="vert-divider" />
      <button class="icon-button icon-button-bottom-margin " type="button" aria-label="settings">
        <img :src="SettingsIcon"alt="" />
      </button>
      <button class="icon-button icon-button-bottom-margin " type="button" aria-label="more-vert">
        <img :src="MoreVertIcon" alt="" />
      </button>
    </section>
  </header>
</template>
