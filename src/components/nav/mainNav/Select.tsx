type SelectProps = {
	options: { value: string; label: string }[];
	selectedValue: string;
	onChange: (value: string) => void;
	label?: string;
};

const Select = (props: SelectProps) => {
	const {
		label = 'Choose an option',
		options,
		selectedValue,
		onChange,
	} = props;

	return (
		<div className=''>
			{label && <label>{label}</label>}
			<select
				className='bg-transparent border-none '
				value={selectedValue}
				onChange={(e) => onChange(e.target.value)}>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
