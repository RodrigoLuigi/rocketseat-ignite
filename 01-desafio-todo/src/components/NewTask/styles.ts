import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	gap: 8px;

	> input {
		padding: 1.6rem;
		background: ${({ theme }) => theme.COLORS.GRAY_500};
		color: ${({ theme }) => theme.COLORS.GRAY_100};
		cursor: pointer;

		border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
		border-radius: 8px;
		width: 100%;

		&:placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_300};
		}

		&:focus {
			border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_DARK};
		}
	}

	> button {
		padding: 16px;

		border: none;
		border-radius: 8px;
		background: ${({ theme }) => theme.COLORS.BLUE_DARK};
		color: ${({ theme }) => theme.COLORS.GRAY_100};
		font-size: 1.4rem;
		font-weight: bold;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;

		line-height: 140%;

		&:hover {
			background: ${({ theme }) => theme.COLORS.BLUE};
		}
	}
`
