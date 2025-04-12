import React from 'react'
import { Card } from './Card'

type Props = {
    cardData: {
        text: string
    }[]
}

function CardList({ cardData }: Props) {
    return (
        <>
            {cardData.map((card, idx) =>
                <Card key={idx}>
                    {card.text}
                </Card>
            )}
        </>
    )
}

export default CardList