let quotesArray = [
    {
        "quote": "I love you not only for what you are, but for what I am when I am with you.",
        
    },
    {
        "quote": "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
       
    },
    {
        "quote": "You are my heart, my life, my one and only thought.",
      
    },
    {
        "quote": "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
        "author": "Leo Christopher"
    },
    {
        "quote": "You are the finest, loveliest, tenderest, and most beautiful person I have ever known—and even that is an understatement.",
        "author": "F. Scott Fitzgerald"
    },
    {
        "quote": "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
      
    },
    {
        "quote": "To the world, you may be one person, but to one person you are the world.",
       
    },
    {
        "quote": "If I had a flower for every time I thought of you... I could walk through my garden forever.",
      
    },
    {
        "quote": "You are my today and all of my tomorrows.",
       
    },
    {
        "quote": "I love you as one loves certain dark things, secretly, between the shadow and the soul.",
       
    },
    {
        "quote": "I wish I could turn back the clock. I’d find you sooner and love you longer.",
        
    },
    {
        "quote": "The best thing to hold onto in life is each other.",
       
    },
    {
        "quote": "You are my sun, my moon, and all of my stars.",

    },
    {
        "quote": "I have found the one whom my soul loves.",
      
    },
    {
        "quote": "I love you more than yesterday, less than tomorrow.",

    },
    {
        "quote": "If I know what love is, it is because of you.",

    },
    {
        "quote": "When I saw you I fell in love, and you smiled because you knew.",
   
    },
    {
        "quote": "You are my heart, my soul, my treasure, my today, my tomorrow, my forever, and my everything.",
        "author": "Unknown"
    },
    {
        "quote": "In your smile, I see something more beautiful than the stars.",
   
    },
    {
        "quote": "You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.",

    },
    {
        "quote": "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
        
    },
    {
        "quote": "You have bewitched me, body and soul, and I love, I love, I love you. I never wish to be parted from you from this day on.",
 
    },
    {
        "quote": "I want all of you, forever, you and me, every day.",
        "author": "Nicholas Sparks"
    },
    {
        "quote": "I love you. I am at rest with you. I have come home.",

    },
    {
        "quote": "You are my heart, my life, my one and only thought.",
   
    },
    {
        "quote": "I would rather spend one lifetime with you, than face all the ages of this world alone.",
  
    },
    {
        "quote": "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",

    },
    {
        "quote": "I love you as the plant that never blooms but carries in itself the light of hidden flowers; thanks to your love a certain solid fragrance, risen from the earth, lives darkly in my body.",
   
    },
    {
        "quote": "You are my today and all of my tomorrows.",
    
    },
    {
        "quote": "My love for you is past the mind, beyond my heart, and into my soul.",
   
    },
    {
        "quote": "To love is nothing. To be loved is something. But to love and be loved, that’s everything.",
   
    },
    {
        "quote": "I love you because the entire universe conspired to help me find you.",
  
    },
    {
        "quote": "The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts and brings peace to our minds. That’s what I hope to give you forever.",
    }
]

// picking random array value 

function getRandomQuotes(quotesArray){
  return Math.floor(Math.random() * quotesArray)
}

// get quotes

function getQuotes(){
    let randomNumber = getRandomQuotes(quotesArray.length);
    document.getElementById("quote").innerHTML = quotesArray[randomNumber].quote;
    document.getElementById("author").innerHTML = '- ' + quotesArray[randomNumber].author;
}
