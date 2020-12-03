const initState = {
    contents: [
        {
            id: "about",
            header: "What I do...",
            content1: "I produce Green Wave the Green European Journal‘s podcast, which showcases the best of their articles in audio form.",
            content2: "I am also the co-founder and co-host of the Big Green Politics Podcast, alongside political commentator Seden Anlar. Find it on any podcast app or listen here.",
            tab1Title: "Writing",
            tab1Header: "WRITING, COPY-EDITING, PROOFREADING",
            tab1ContentA: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum error pariatur consequuntur voluptatibus ab ea, quod commodi vitae illo officia deleniti velit voluptas quibusdam similique non eaque odit? Ex, voluptas.",
            tab1ContentB: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum error pariatur consequuntur voluptatibus ab ea, quod commodi vitae illo officia deleniti velit voluptas quibusdam similique non eaque odit? Ex, voluptas.",
            tab2Title: "Podcasting",
            tab2Header: "PODCASTING",
            tab2ContentA: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum error pariatur consequuntur voluptatibus ab ea, quod commodi vitae illo officia deleniti velit voluptas quibusdam similique non eaque odit? Ex, voluptas.",
            tab2ContentB: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum error pariatur consequuntur voluptatibus ab ea, quod commodi vitae illo officia deleniti velit voluptas quibusdam similique non eaque odit? Ex, voluptas."
        },
        {
            id: "contact",
            header: "Get In Touch",
            content1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci voluptatum accusamus rem quidem sequi corporis sapiente harum accusantium voluptas, eos, voluptatibus dolorum, commodi quae. Architecto corporis enim inventore dolorem!",
            content2: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci voluptatum accusamus rem quidem sequi corporis sapiente harum accusantium voluptas, eos, voluptatibus dolorum, commodi quae. Architecto corporis enim inventore dolorem!"
        },
        {
            id: "profile",
            header: "Hello.",
            content: "I am a journalist, editor, podcaster – with a focus on European and global affairs, women’s rights, indigenous rights, and Green politics."
        }
    ]
};

const contentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT_CONTENT':
            console.log('content editted', action.content);
            return state;
        case 'EDIT_CONTENT_ERROR':
            console.log('edit content error', action.error);
            return state;
        default:
            return state;
    }
}

export default contentReducer;