const initState = {
    interviews: [
        {
            id: 'i1', 
            title: 'The EU-Mercosur Trade Deal Must Be Stopped (idummy 1)',
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
            id: 'i2', 
            title: 'The EU-Mercosur Trade Deal Must Be Stopped (idummy 2)',
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
            id: 'i3', 
            title: 'The EU-Mercosur Trade Deal Must Be Stopped (idummy 3)',
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

const interviewReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_INTERVIEW':
            console.log('interview created', action.interview);
            return state;
        case 'CREATE_INTERVIEW_ERROR':
            console.log('create interview error', action.error);
            return state;
        case 'DELETE_INTERVIEW':
            console.log('interview deleted', action.interview);
            return state;
        case 'DELETE_INTERVIEW_ERROR':
            console.log('delete interview error', action.error);
            return state;
        default:
            return state;
    }
}

export default interviewReducer;