<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-chartjs&background=tiles&project=%20" alt="solid-chartjs">
</p>

# solid-chartjs

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

Chart.js implementation for SolidJs. The API is the same as you can find on [chartjs.org](https://chartjs.org)

## Quick start

Install it:

```bash
npm i solid-chartjs
# or
yarn add solid-chartjs
# or
pnpm add solid-chartjs
```

Use it:

```tsx
import { SolidChartJs } from 'solid-chartjs'

function foo() {
    return (
        <>
            <SolidChartJs
                height={/* optional */}
                width={/* optional */}
                type={/* any available chart type */}
                data={/* some data */)}
                options={/* optional */}}
            />
        </>
    )
}
```