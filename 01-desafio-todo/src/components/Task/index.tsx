import { Trash } from 'phosphor-react'
import { Container } from './styles'

interface TaskProps {
	id: string
}

export function Task({ id }: TaskProps) {
	return (
		<Container>
			<label className="checkbox" htmlFor={id}>
				<input type="checkbox" id={id} name={id} />
				<span className="checkmark"></span>
			</label>

			<p>
				Integer urna interdum massa libero auctor neque turpis turpis semper.
				Duis vel sed fames integer.
			</p>

			<button>
				<Trash size={16} />
			</button>
		</Container>
	)
}
