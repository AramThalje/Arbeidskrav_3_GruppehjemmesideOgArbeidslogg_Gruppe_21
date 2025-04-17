export const WorkLogs = {
    name : "workLogs",
    title : "ArbeidsLogg",
    type: "document",
    fields : [
        {
        name: "date",
        title: "Dato",
        type: "date"
        },
        {
        name: "memberName",
        title: "Medlem navn",
        type: "array",
        of: [{type: 'reference', to: [{type: 'members'}]}]
        },
        {
        name: "workTitle",
        title: "Arbeids tittel",
        type: "string"
        },
        {
        name: "duration",
        title: "Varighet i timer",
        type: "string",
        
        
        },

    ]
}