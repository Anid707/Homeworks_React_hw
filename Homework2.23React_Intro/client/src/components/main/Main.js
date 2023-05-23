import CardItem from '../cardItem/CardItem';
import cl from './main.module.css';

function Main() {
    const cardInfo = [
        {
            title: 'Title 1',
            text: 'Lorem ipsum 1',
        },
        {
            title: 'Title 2',
            text: 'Lorem ipsum 2',
        },
        {
            title: 'Title 3',
            text: 'Lorem ipsum 3',
        }
    ]

    const allCards = cardInfo.map((card) => {
        return <CardItem title={card.title} text={card.text} />
    })

    return (
        <div className={cl.main}>
            <div className={cl.container}>
                {allCards}
            </div>
        </div>
    );
}

export default Main;