

export const quotes = [{
        id: 1,
        text: "Elementary, my dear Watson",
        author: "Sherlock Holmes"
    },
    {
        id: 2,
        text: "I think therefore I am",
        author: "Rene Descartes"
    },
    {
        id: 3,
        text: "Big Brother is watching you",
        author: "George Orwell"
    },
    {
        id: 4,
        text: "You talkin ’ to me ?",
        author: "Travis Bickle"
    }
];

export function removeQuote(){
    let quote = quotes.filter(function(item){
        return item.id !== quote.id;
    })
  }