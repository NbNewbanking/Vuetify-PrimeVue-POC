# Vue 3 + Vite + Vuetify 3 + PrimeVue 3 + Tailwind (what a combo)

This POC was made to check if it is possible to mix Vuetify 3 with a stack PrimeVue 3 + Tailwind.
In fact, it appears to be possible without major styling conflicts. 
Existing "conflicts":
* Tailwind uses a 'preflight' plugin, which for example removes margins and headings stylings (and many more).
https://tailwindcss.com/docs/preflight#headings-are-unstyled
With this plugin enabled vanilla h1 elements won't be giant as they should be. Instead, we have to provide a theming for those elements by ourselves. Thankfully, it doesn't affect Vuetify, because Vuetify's components use classes like .v-card-title etc. So they don't rely on vanilla headings stylings.
* Vuetify has it's own Tailwind-like classes. For example, both Tailwind and Vuetify have .mr-4 class (which, if I'm right, have different values :0). However, Tailwind let's us set a prefix for it's classes (tailwind.config.js, line 11). Now, using tw-mr-4 we are using a tailwind class.
* There would be a problem of conflicting classes of the default UI preset used by PrimeVue if we wanted to use it. This is because Vuetify does a 'css reset' as well, and it cannot be 'layered' with css rules. In general @layer is a cool feature from css, but it can't be used with Vuetify. I won't go much into detail, because we don't want to use any UI preset with PrimeVue. We'll be styling our components by ourselves while using the 'unstyled' version of PrimeVue. Therefore, we are not limited from doing our work as we meant to do it. A limitation would exist if we eventually wanted to use a UI preset for PrimeVue, while still having Vuetify installed.

With that in mind, I think it is possible to have both Vuetify and unstyled PrimeVue + Tailwind enabled in one project. The conflicts don't seem to be too harsh for now. Keep in mind it is just a POC, though.
