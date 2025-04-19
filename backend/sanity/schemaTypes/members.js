

export const members = {
    name: "members",
    title: "Medlemmer",
    type: "document",
    fields: [
        {
            name: "memberName",
            title: "Medlem navn",
            type: "string"
        }, 
        {
            name: "email",
            tltle: "E-post",
            type: "string",

        },
        {
            name: "description",
            title: "Beskrivelse",
            type: "string"
        },
        {
            name: "hobbies",
            title: "Interesser",
            type: "array",
            of: [{type: 'string', title: 'Intresser'}]

        },
        {
            name: "Image",
            title: "Bilde",
            type: "image"
            
        },
        {
            name: "workLogs",
            title: "ArbeidsLogg",
            type: "array",
            of: [{type: 'reference', to: [{type: 'workLogs'}]}]
        }
        
    ]

    }