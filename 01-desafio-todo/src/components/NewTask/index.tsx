import { PlusCircle } from 'phosphor-react'

import { Container } from './styles'

export function NewTask() {
	return (
		<Container>
			<input
				type="text"
				name="newTask"
				placeholder="Adicione uma nova tarefa"
			/>

			<button>
				Criar <PlusCircle size={16} weight="bold" />
			</button>
		</Container>
	)
}
