import { IoMdClose } from 'react-icons/io';

interface DeleteButtonProps {
	onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
	return (
		<button onClick={onClick}>
			<IoMdClose />
		</button>
	);
};

export default DeleteButton;
