data: {
    packs: [
        {
            id: 1,
            name: "New Golden Doggy",
            owner: 1,
            members:[{
                userId: 1,
                likedNames: ["Frank", "Bandit", "Bowser"]
            }]
        },
        {
            id: 2,
            name: "New tiny Kitty",
            owner: 2,
            members: [{
                userId: 2,
                likedNames: ["Daisy", "Gouda"]
            }, 
            {
                userId: 1,
                likedNames: ["Daisy", "Gouda"]
            },
            {
                userId: 3,
                likedNames: ["Blue", "Gouda"]
            }]
        },
        {
            id: 3,
            name: "New Donkey",
            owner: 1,
            members: [{
                userId: 1,
                likedNames: ["Frank", "Daisy", "Mille"]
            },
            {
                userId: 3,
                likedNames: ["Bouhda", "Daisy", "Mille"]
            },
        ]
        },
    ]
        
    
}