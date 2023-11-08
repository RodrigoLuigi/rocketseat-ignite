import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<div>
						<strong>Rodrigo</strong>{' '}
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
							fuga nemo eius nihil accusamus laudantium? Repudiandae est, error,
							quas natus assumenda impedit quia placeat neque, ut et repellendus
							dignissimos sed!
						</p>
					</div>
				</main>
			</div>
		</div>
	)
}
