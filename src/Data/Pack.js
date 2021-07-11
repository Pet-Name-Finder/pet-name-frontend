const data = {
    packs: [
        {
            id: 1,
            name: "New Golden Doggy",
            owner: 1,
            members:[{
                userId: 1,
                likedNames: ["Frank", "Bandit", "Bowser"],
                currentName: 4
            }]
        },
        {
            id: 2,
            name: "New tiny Kitty",
            owner: 2,
            members: [{
                userId: 2,
                likedNames: ["Daisy", "Gouda"],
                currentName: 1
            }, 
            {
                userId: 1,
                likedNames: ["Daisy", "Gouda"],
                currentName: 8
            },
            {
                userId: 3,
                likedNames: ["Blue", "Gouda"],
                currentName: 5
            }]
        },
        {
            id: 3,
            name: "New Donkey",
            owner: 1,
            members: [{
                userId: 1,
                likedNames: ["Frank", "Daisy", "Mille"],
                currentName: 5
            },
            {
                userId: 3,
                likedNames: [],
                currentName: 0
            },
        ]
        },
    ]
}

export default data;