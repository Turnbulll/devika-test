import React from "react";
import { Giphy } from "../../../../../shared/types/giphy";
import styles from "./ImageGrid.module.scss";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";

interface ImageGridProps {
    items: Giphy[];
    error: string | null;
    loading: boolean;
    emptyMessage?: string;
}
const ImageGrid = ({ items, error, loading, emptyMessage = "No items" }: ImageGridProps) => {

    if (loading) {
        return <div className={styles.center}><LoadingSpinner /></div>;
    }
    if (error) {
        return <p className={styles.center}>{"Something went wrong please try again"}</p>;
    }
    if (items.length === 0) {
        return <p className={styles.center}>{emptyMessage}</p>;
    }

    return (
        <div className={styles.giphyGrid}>
            {items.map((item) => GiphyItem({ item }))}
        </div>
    )
}

export default ImageGrid;

const GiphyItem = ({ item }: { item: Giphy }) => {
    return (
        <div key={item.id} className={styles.giphyItem}>
            <div className={styles.imageContainer}>
                <img
                    src={item.images.fixed_height.url}
                    alt={item.title}
                    loading="lazy"
                />
                <div className={styles.overlay}>
                    <button
                        onClick={() => navigator.clipboard.writeText(item.images.fixed_height.url)}
                    >
                        Copy Link
                    </button>
                    <a href={item.images.fixed_height.url} target="_blank" rel="noopener noreferrer">
                        View
                    </a>
                </div>
            </div>
        </div>
    )
}