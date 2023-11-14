import { Task } from './components/Task'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import clipBoardSvg from './assets/clipboard-emptylist.svg'

import {
	Container,
	TaskWrapper,
	Wrapper,
	TaskListContent,
	TaskList
} from './App.styles'

const tasks = [
	{
		id: 1,
		description: 'Integer urna interdum massa libero auctor neque turpis .'
	},
	{
		id: 2,
		description: 'Integer urna interdum massa libero auctor neque turpis .'
	},
	{
		id: 3,
		description: 'Integer urna interdum massa libero auctor neque turpis .'
	}
]

export function App() {
	return (
		<Container>
			<Header />

			<Wrapper>
				<NewTask />

				<main>
					<TaskWrapper>
						<header className="tasksInfo">
							<h2>
								Tarefas criadas <span>{tasks.length}</span>
							</h2>

							<h2>
								Concluídas <span>0</span>
							</h2>
						</header>

						<TaskListContent $primary={tasks.length === 0}>
							{tasks.length > 0 ? (
								<TaskList>
									{tasks.map((task) => {
										return <Task key={task.id} id={String(task.id)} />
									})}
								</TaskList>
							) : (
								<div className="emptyList">
									<img src={clipBoardSvg} alt="Icone de Clipboard" />

									<strong>Você ainda não tem tarefas cadastradas</strong>
									<p>Crie tarefas e organize seus itens a fazer</p>
								</div>
							)}
						</TaskListContent>
					</TaskWrapper>
				</main>
			</Wrapper>
		</Container>
	)
}
