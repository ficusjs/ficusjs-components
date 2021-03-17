// scripts for the site

import { use } from 'https://cdn.skypack.dev/ficusjs'
import { html, renderer } from 'https://cdn.skypack.dev/@ficusjs/renderers@latest/uhtml'
import { module as navbarModule } from 'http://localhost:8888/components/custom-elements/navbar/index.js'
use(navbarModule, { renderer, html })