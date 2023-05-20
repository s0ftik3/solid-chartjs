import { createSignal, For, Switch, Match } from 'solid-js'
import DefaultChartPage from './pages/DefaultChart'
import RegisterablesPage from './pages/Registerables'
import TypedChartPage from './pages/TypedChart'
import styles from './styles/App.module.css'
import type { Component } from 'solid-js'

type DemoPage = 'DefaultChart.tsx' | 'TypedChart.tsx' | 'Registerables.tsx'

const App: Component = () => {
    const demoPages: DemoPage[] = [
        'DefaultChart.tsx',
        'TypedChart.tsx',
        'Registerables.tsx'
    ]
    
    const [demoPage, setDemoPage] = createSignal<DemoPage>(demoPages[0])

    const onDemoPageSelect = (event: any) => {
        setDemoPage(event.target.value as DemoPage)
    }

    return (
        <>
            <div class={styles.selectContainer}>
                <select class={styles.selectField} name="types" onChange={onDemoPageSelect} style={{ 'margin-right': '5px' }}>
                    <For each={demoPages}>
                        {(page) => (
                            <option value={page} selected={demoPage() === page}>
                                {page}
                            </option>
                        )}
                    </For>
                </select>
                <p>or <a class={styles.link} href={'https://github.com/s0ftik3/solid-chartjs/tree/main/dev/pages/' + demoPage()}>view source</a></p>
            </div>
            <Switch>
                <Match when={demoPage() === 'DefaultChart.tsx'} >
                    <DefaultChartPage />
                </Match>
                <Match when={demoPage() === 'TypedChart.tsx'}>
                    <TypedChartPage />
                </Match>
                <Match when={demoPage() === 'Registerables.tsx'}>
                    <RegisterablesPage />
                </Match>
            </Switch>
            
        </>
    )
}

export default App
