import { ChangeEvent, FormEvent, useState } from 'react'

import { v4 as uuidv4 } from 'uuid'
import { TaskTypes } from '../Task'

import { PlusCircle } from 'phosphor-react'

import { Container } from './styles'

interface NewTaskProps {
	createTask: (data: TaskTypes) => void
}

export function NewTask({ createTask }: NewTaskProps) {
	const [taskDescription, setTaskDescription] = useState('')

	function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		setTaskDescription(event.target.value)
	}

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault()

		const uuid = uuidv4()

		createTask({
			id: uuid,
			description: taskDescription,
			status: false
		})

		setTaskDescription('')
	}

	return (
		<Container onSubmit={handleCreateNewTask}>
			<input
				type="text"
				name="newTask"
				placeholder="Adicione uma nova tarefa"
				required
				value={taskDescription}
				onChange={handleNewTaskChange}
			/>

			<button>
				Criar <PlusCircle size={16} weight="bold" />
			</button>
		</Container>
	)
}
