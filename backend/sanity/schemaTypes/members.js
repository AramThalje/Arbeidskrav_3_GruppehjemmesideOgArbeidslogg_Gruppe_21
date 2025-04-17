

export const members = {
    name: "members",
    title: "Members",
    type: "document",
    fields: [
        {
            name: "memberName",
            title: "Medlem Name",
            type: "string"
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

        },
        {
            name: "Image",
            title: "Bilde",
            type: "Image"
            
        },
        {
            name: "workLogs",
            title: "ArbeidsLogg",
            type: "array",
            of: [{type: 'reference', to: [{type: 'workLogs'}]}]
        }
        
    ]

    }