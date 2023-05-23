import cl from './cardItem.module.css';

function CardItem({title, text}) {
    
    return (
        <div className={cl.cardItem}>
            <h3>{title}</h3>
            <p>{text}</p>
            <button>Read more</button>
        </div>
    );
}

export default CardItem;