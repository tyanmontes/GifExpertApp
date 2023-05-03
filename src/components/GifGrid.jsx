import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/UseFetchGifs";

export const GifGrid = ({ category, onSubsCategory }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <div className="block">
            <div className="title">
                <h3>{category}</h3>
                <button onClick={() => onSubsCategory(category)}>X</button >
            </div>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map(image => (
                        <GifItem key={image.id}
                            {...image} />
                    ))
                }
            </div>
        </div>
    )
}
