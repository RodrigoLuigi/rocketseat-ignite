import todoLogo from '../../assets/todo-logo.svg'

import { Container } from './styles'

export function Header() {
	return (
		<Container>
			<img src={todoLogo} alt="Logo tipo To-do" />
		</Container>
	)
}
