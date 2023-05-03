import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    const onSubstractCategory = (category) => {
        const newCategories = categories.slice();
        const index = newCategories.findIndex(cat => (cat === category));
        newCategories.splice(index, 1);
        setCategories(newCategories);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map(category => (
                    <GifGrid key={category}
                        category={category}
                        onSubsCategory={(event) => onSubstractCategory(event)}
                    />
                ))
            }
        </>
    )
};
