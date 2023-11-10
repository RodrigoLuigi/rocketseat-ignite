import styles from './Comment.module.css'
import PropTypes from 'prop-types'

import { Avatar } from '../Avatar'

import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'

Comment.propTypes = {
	content: PropTypes.string,
	onDeleteComment: PropTypes.func.isRequired
}

export function Comment({ content, onDeleteComment }) {
	const [likeCount, setLikeCount] = useState(0)

	function handleDeleteComment() {
		onDeleteComment(content)
	}

	function handleLikeComment() {
		setLikeCount((prevState) => prevState + 1)
	}

	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				src="https://github.com/RodrigoLuigi.png"
				alt=""
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Rodrigo Luigi</strong>
							<time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
								Cerca de 1h atrás
							</time>
						</div>

						<button onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={20} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	)
}
