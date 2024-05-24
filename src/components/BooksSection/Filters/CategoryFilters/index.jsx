import { categories } from "../../../../data/category"

export const CategoryFilters = ({setCategory}) => {
    return(
        <div>
            <h3>Filtrar por categoria</h3>
            <ul>
               {categories.map(category =>(
                <li key={category.id} onClick={() => setCategory(category.name)} >
                        {category.name}
                </li>
               ))}
            </ul>
        </div>
    )
}