import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Initialize state from URL search params
  const [categories, setCategories] = useState(searchParams.get('categories')?.split(',') || []);

  // List of all categories
  const categoryOptions = [
    'Vegetables',
    'Fresh Fruits',
    'Milk & Eggs',
    'Bakery',
    'House Hold',
    'Dry Fruits',
    'Drinks',
  ];

  // Handle category selection/deselection
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    let updatedCategories = [...categories];

    if (event.target.checked) {
      // Add the category if checked
      if (!updatedCategories.includes(category)) {
        updatedCategories.push(category);
      }
    } else {
      // Remove the category if unchecked
      updatedCategories = updatedCategories.filter((cat) => cat !== category);
    }

    // Update the local state and sync with the URL
    setCategories(updatedCategories);

    // Update the URL query parameters
    const params = new URLSearchParams(searchParams);
    if (updatedCategories.length > 0) {
      params.set('categories', updatedCategories.join(','));
    } else {
      params.delete('categories');
    }
    navigate({ search: params.toString() });
  };

  // Sync checkboxes with URL when loading
  useEffect(() => {
    const urlCategories = searchParams.get('categories')?.split(',') || [];
    setCategories(urlCategories);
  }, [searchParams]);

  return (
    <div className='border-2 border-l-0 border-b-0 border-r-0 border-t-gray/50'>
      <h2 className='mb-4 font-bold md:font-semibold text-xl md:text-2xl'>
        Category
      </h2>

      <ul
        className='flex flex-col items-start justify-start
        gap-2 text-sm md:text-xl'>
        {categoryOptions.map((category) => (
          <li className='flex items-center justify-center gap-2' key={category}>
            <input
              type='checkbox'
              value={category}
              checked={categories.includes(category)}
              onChange={handleCategoryChange}
              id={category}
            />
            <label htmlFor={category}>{category}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

