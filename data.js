const data = [
    {
        id: 1,
        name: 'Twinzer', 
        image: 'Twinzer.PNG',
        description: 'Beginner-Intermediate, Intermediate-Advanced, Advanced-Expert',
        category: 'wakesurf',
        price: 899.99,
    },
    {
        id: 2,
        name: 'Space Pod',
        image: 'SpacePod.PNG',
        description: 'Beginner-Intermediate',
        category: 'wakesurf',
        price: 839.99,
    },
    {
        id: 3,
        name: 'Bonzer Bat',
        image: 'BonzerBat.PNG',
        description: 'Intermediate-Advanced, Advanced-Expert',
        category: 'wakesurf',
        price: 839.99,
    },
    {
        id: 4,
        name: 'Scamp',
        image: 'Scamp.PNG',
        description: 'Beginner-Intermediate, Intermediate-Advanced',
        category: 'skimboard',
        price: 325,
    }, 
    {
        id: 5,
        name: 'Shrimp',
        image: 'Shrimp.PNG',
        description: 'Beginner-Intermediate, Intermediate-Advanced',
        category: 'skimboard',
        price: 299,
    }
];

// this is how we export things in node.
module.exports = {
    data
};