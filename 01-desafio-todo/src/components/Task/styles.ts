import styled from 'styled-components'

export const Container = styled.li`
	display: flex;
	align-items: center;
	gap: 1.2rem;

	padding: 1.2rem;

	border-radius: 8px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};

	background: ${({ theme }) => theme.COLORS.GRAY_500};
	box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

	.checkbox {
		display: flex;
		justify-content: center;
		align-items: center;

		min-width: 24px;
		min-height: 24px;

		position: relative;
		cursor: pointer;

		border-radius: 999px;
		border: 2px solid ${({ theme }) => theme.COLORS.BLUE};

		transition: all 0.1s ease-in-out;
	}

	.checkbox > input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	.checkmark {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;

		background-color: transparent;
		border-radius: 999px;

		display: flex;
		justify-content: center;
		align-items: center;

		transition: all 0.4s ease-in-out;
	}

	.checkbox:hover {
		border-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
		background-color: ${({ theme }) => theme.COLORS.BLUE_DARK_TRANSPARENT};
	}

	/* .checkbox:hover .checkmark {
		background-color: ${({ theme }) => theme.COLORS.BLUE_DARK_TRANSPARENT};
	} */

	.checkbox input:checked + .checkmark {
		background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
		border-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
	}

	.checkbox:has(> input:checked):hover .checkmark {
		background-color: ${({ theme }) => theme.COLORS.PURPLE};
		border-color: ${({ theme }) => theme.COLORS.PURPLE};
	}

	.checkbox:has(> input:checked) {
		border: 1px solid ${({ theme }) => theme.COLORS.PURPLE_DARK};
	}

	.checkbox .checkmark:after {
		content: '';
		opacity: 0;
		width: 4px;
		height: 8px;
		margin-bottom: 1px;
		border: solid white;
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);

		transition: all 0.4s ease-in-out;
	}

	.checkbox input:checked + .checkmark:after {
		display: block;
		opacity: 1;
		transition: all 0.4s ease-in-out;
	}

	.checkbox:has(> input:checked) + p {
		color: var(--Gray-300, #808080);
		text-decoration: line-through;
		transition: all 0.4s ease-in-out;
	}

	> p {
		color: ${({ theme }) => theme.COLORS.GRAY_100};
		font-size: 1.4rem;
		line-height: 19.6px;
		text-decoration: none;
		transition: all 0.4s ease-in-out;
	}

	> button {
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: flex-start;

		padding: 4px;

		background: transparent;

		border-radius: 4px;
		border: none;
		transition: 0.1s background-color;

		svg {
			color: ${({ theme }) => theme.COLORS.GRAY_300};
			transition: 0.1s color;
		}

		&:hover {
			background: var(--Gray-400, #333);
		}

		&:hover svg {
			color: ${({ theme }) => theme.COLORS.DANGER};
		}
	}
`
