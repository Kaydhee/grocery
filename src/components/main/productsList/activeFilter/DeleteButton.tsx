import { IoMdClose } from 'react-icons/io';

const DeleteButton = ({onClick}) => {
	return (
		<button onClick={onClick}>
			<IoMdClose />
		</button>
	);
};

export default DeleteButton;
