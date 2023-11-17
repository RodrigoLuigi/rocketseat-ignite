import styled from 'styled-components'

interface TaskListContentProps {
	$primary: boolean
}

export const Container = styled.div`
	min-height: 100vh;
`

export const Wrapper = styled.div`
	max-width: 73.6rem;
	padding: 0 1rem;
	margin: -2.7rem auto;
`

export const TaskWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;

	margin-top: 6.4rem;

	> .tasksInfo {
		display: flex;
		justify-content: space-between;

		h2 {
			color: ${({ theme }) => theme.COLORS.BLUE};
			font-size: 1.4rem;
			font-weight: bold;

			display: flex;
			align-items: center;
			gap: 8px;
		}

		span {
			padding: 2px 8px;
			border-radius: 999px;
			background: ${({ theme }) => theme.COLORS.GRAY_400};

			color: ${({ theme }) => theme.COLORS.GRAY_200};
			font-size: 1.2rem;
			font-weight: bold;
		}
	}
`

export const TaskListContent = styled.div<TaskListContentProps>`
	display: flex;
	justify-content: center;
	align-items: center;

	border-top: ${(props) => (props.$primary ? '1px solid' : 'none')};
	border-color: ${({ theme }) => theme.COLORS.GRAY_400};
	border-radius: 8px;

	> .emptyList {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: 6.4rem 2.4rem;

		color: ${({ theme }) => theme.COLORS.GRAY_300};

		img {
			width: 5.6rem;
			height: 5.6rem;

			margin-bottom: 1.6rem;
		}
	}
`

export const TaskList = styled.ul`
	width: 100%;
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`
