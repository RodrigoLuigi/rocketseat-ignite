import { useEffect, useState } from 'react'
import { TaskTypes } from './components/Task'

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

export function App() {
	const [tasks, setTasks] = useState<TaskTypes[]>([])

	const countTrueStatus = tasks.filter((obj) => obj.status === true).length

	function handleNewTask(data: TaskTypes) {
		setTasks([...tasks, data])

		localStorage.setItem('@tasks', JSON.stringify([...tasks, data]))
	}

	function deleteTask(taskToDelete: string) {
		const tasksWithoutDeleteOne = tasks.filter((task) => {
			return task.id !== taskToDelete
		})
		setTasks(tasksWithoutDeleteOne)

		localStorage.setItem('@tasks', JSON.stringify(tasksWithoutDeleteOne))
	}

	function updateTaskStatus(id: string, status: boolean) {
		const taskWhitUpdateStatus = tasks.map((task) => {
			if (task.id === id) {
				task.status = status
			}
			return task
		})
		setTasks(taskWhitUpdateStatus)

		localStorage.setItem('@tasks', JSON.stringify(taskWhitUpdateStatus))
	}

	useEffect(() => {
		const storedTasks = localStorage.getItem('@tasks')

		if (storedTasks) {
			const parsedTasks = JSON.parse(storedTasks)
			setTasks(parsedTasks)
		}
	}, [])

	return (
		<Container>
			<Header />

			<Wrapper>
				<NewTask createTask={handleNewTask} />

				<main>
					<TaskWrapper>
						<header className="tasksInfo">
							<h2>
								Tarefas criadas <span>{tasks.length}</span>
							</h2>

							<h2>
								Concluídas
								<span>
									{tasks.length > 0
										? `${countTrueStatus} de ${tasks.length}`
										: `${tasks.length}`}
								</span>
							</h2>
						</header>

						<TaskListContent $primary={tasks.length === 0}>
							{tasks.length > 0 ? (
								<TaskList>
									{tasks.map((task) => {
										return (
											<Task
												key={task.id}
												task={task}
												onUpdateTaskStatus={updateTaskStatus}
												onDeleteTask={deleteTask}
											/>
										)
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
