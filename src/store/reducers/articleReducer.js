const initState = {
    articles: [
        {
            id: 'a1', 
            title: 'The EU-Mercosur Trade Deal Must Be Stopped (adummy 1)',
            subject: 'Green European Journal - finance & economy',
            date: '15th May 2020',
            abstract:   `In June 2019, nearly two decades of negotiations between the EU and the Latin American Mercosur bloc concluded in the signing of a trade deal. 
                        Still to be ratified, the EU-Mercosur agreement has attracted strong criticism from diverse actors, from European farmers to environmentalists 
                        and human rights groups. With a focus on Brazil, the Mercosur bloc’s biggest member led by far-right president Jair Bolsonaro, 
                        Julia Lagoutte assesses the threats the deal poses to people and planet, and its prospects going forward.`,
            link: 'https://www.greeneuropeanjournal.eu/the-eu-mercosur-trade-deal-must-be-stopped/',
            info: '7 min. read',
            image:'https://via.placeholder.com/150'
        },
        {
            id: 'a2', 
            title: 'The EU-Mercosur Trade Deal Must Be Stopped (adummy 2)',
            subject: 'Green European Journal - finance & economy',
            date: '15th May 2020',
            abstract:   `In June 2019, nearly two decades of negotiations between the EU and the Latin American Mercosur bloc concluded in the signing of a trade deal. 
                        Still to be ratified, the EU-Mercosur agreement has attracted strong criticism from diverse actors, from European farmers to environmentalists 
                        and human rights groups. With a focus on Brazil, the Mercosur bloc’s biggest member led by far-right president Jair Bolsonaro, 
                        Julia Lagoutte assesses the threats the deal poses to people and planet, and its prospects going forward.`,
            link: 'https://www.greeneuropeanjournal.eu/the-eu-mercosur-trade-deal-must-be-stopped/',
            info: '7 min. read',
            image:'https://via.placeholder.com/150'
        },
        {
            id: 'a3', 
            title: 'The EU-Mercosur Trade Deal Must Be Stopped (adummy 3)',
            subject: 'Green European Journal - finance & economy',
            date: '15th May 2020',
            abstract:   `In June 2019, nearly two decades of negotiations between the EU and the Latin American Mercosur bloc concluded in the signing of a trade deal. 
                        Still to be ratified, the EU-Mercosur agreement has attracted strong criticism from diverse actors, from European farmers to environmentalists 
                        and human rights groups. With a focus on Brazil, the Mercosur bloc’s biggest member led by far-right president Jair Bolsonaro, 
                        Julia Lagoutte assesses the threats the deal poses to people and planet, and its prospects going forward.`,
            link: 'https://www.greeneuropeanjournal.eu/the-eu-mercosur-trade-deal-must-be-stopped/',
            info: '7 min. read',
            image:'https://via.placeholder.com/150'
        }
    ]
};

const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ARTICLE':
            console.log('article created', action.article);
            return state;
        case 'CREATE_ARTICLE_ERROR':
            console.log('create article error', action.error);
            return state;
        case 'DELETE_ARTICLE':
            console.log('article deleted', action.article);
            return state;
        case 'DELETE_ARTICLE_ERROR':
            console.log('delete article error', action.error);
            return state;
        case 'EDIT_ARTICLE':
            console.log('article editted', action.article);
            return state;
        case 'EDIT_ARTICLE_ERROR':
            console.log('edit article error', action.error);
            return state;
        default:
            return state;
    }
}

export default articleReducer;