## Tech.Care Patient Dashboard

### Tech Stack
- Nuxt 3
- Vue 3
- Vuex 4
- TypeScript
- Chart.js + vue-chartjs
- Plain CSS

### Preview
  <img width="1512" height="827" alt="Screenshot 2026-06-15 at 22 48 12" src="https://github.com/user-attachments/assets/660aa990-70dc-4077-8f45-fdaf3cf2780d" />


### Setup
```bash
yarn install
cp .env.example .env
yarn dev
```
Open the local URL printed in the terminal => localhost server.


### Build
```bash
yarn build
yarn preview
```

For static review output:
```bash
yarn generate
```

### Project Structure
```text
components/          Reusable UI components
composables/         Store access layer
store/               Vuex state management
types/               TypeScript interfaces
utils/               Pure helper functions
assets/css/          Global styles
pages/index.vue      Dashboard page composition
```
