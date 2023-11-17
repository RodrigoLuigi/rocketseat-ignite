import { useState } from 'react'
import { Trash } from 'phosphor-react'

import { Container } from './styles'

export interface TaskTypes {
	id: string
	description: string
	status: boolean
}
interface TaskProps {
	task: TaskTypes
	onDeleteTask: (id: string) => void
	onUpdateTaskStatus: (id: string, status: boolean) => void
}

export function Task({ task, onDeleteTask, onUpdateTaskStatus }: TaskProps) {
	const [isChecked, setIsChecked] = useState(task.status || false)

	function handleCheckboxChange() {
		setIsChecked(!isChecked)

		onUpdateTaskStatus(task.id, !isChecked)
	}

	function handleDeleteTask() {
		onDeleteTask(task.id)
	}

	return (
		<Container>
			<label className="checkbox" htmlFor={task.id}>
				<input
					type="checkbox"
					id={task.id}
					name={task.id}
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
				<span className="checkmark"></span>
			</label>

			<p>{task.description}</p>

			<button onClick={handleDeleteTask}>
				<Trash size={16} />
			</button>
		</Container>
	)
}
