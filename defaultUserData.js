export default defaultUserData = {

    //uses the defaul user data if user data could not be retived 
    UserData: {
        username: 'Goran Topic',
        usermotto: 'Chicken Chaiser',
        money: 0,
        level: 0,
        currentExp: 0,
        nextLvExp: 10,
        profilePicSet: false,
        profilePicUri: null,
        badges: [
            { img: require('./assets/images/Badges/badge0.png'), title: "Adventurer", des: "Start Questing" },
            { img: require('./assets/images/Badges/badge1.png'), title: "Samaritan", des: "Help a freind with a quest" },
            { img: require('./assets/images/Badges/badge2.png'), title: "Powerful One", des: "Finish a strength Quest" },
            { img: require('./assets/images/Badges/badge3.png'), title: "Really Powerful One", des: "Finish a second strength Quest" },
            { img: require('./assets/images/Badges/badge4.png'), title: "title4", des: "des4" },
            { img: require('./assets/images/Badges/badge5.png'), title: "title5", des: "des5" },
            { img: require('./assets/images/Badges/badge6.png'), title: "title6", des: "des6" },
            { img: require('./assets/images/Badges/badge7.png'), title: "title7", des: "des7" },
            { img: require('./assets/images/Badges/badge8.png'), title: "title8", des: "des8" },
            { img: require('./assets/images/Badges/badge9.png'), title: "title9", des: "des9" },
            { img: require('./assets/images/Badges/badge10.png'), title: "title10", des: "des10" },
            { img: require('./assets/images/Badges/badge11.png'), title: "title11", des: "des11" },
            { img: require('./assets/images/Badges/badge12.png'), title: "title12", des: "des12" },
            { img: require('./assets/images/Badges/badge13.png'), title: "title13", des: "des13" },
        ],
        stats: {
            "Total Quest Completed": 0,
            "Stregth": 5,
            "Speed": 5,
            "Inteligence": 5,
            "Endurance": 5,
            "Alquemy": 5,
            "Badges Unlocked": 5,
            "Total Exp": 0,
        },
        Quests: [
            {
                qindex: 0,
                title: "IN CIRI'S FOOTSTEPS",
                shield: require('./assets/images/shields/COA_multiple_locations_Tw3.png'),
                exp: 10,
                selected: false,
                done: false,
                isInEditMode: false,
                isActiveDummyTask: false,
                tCount: 4,
                tasks: [
                    {
                        title: "Go To Velen",
                        tindex: 0,
                        selected: false,
                        done: false,
                    }, {
                        title: "Find Yennifer",
                        tindex: 1,
                        selected: false,
                        done: false,
                    }, {
                        title: "Have Sex with Yennifer",
                        tindex: 2,
                        selected: false,
                        done: false,
                    }
                ]
            }, {
                qindex: 1,
                title: "GWENT: VELEN PLAYERS",
                shield: require('./assets/images/shields/COA_Velen_Tw3.png'),
                exp: 20,
                selected: false,
                done: false,
                isInEditMode: false,
                isActiveDummyTask: false,
                tCount: 4,
                tasks: [
                    {
                        title: "Win a unique card from the baron",
                        tindex: 0,
                        selected: false,
                        done: false,
                    }, {
                        title: "Win a unique card from the man in Oreton",
                        tindex: 1,
                        selected: false,
                        done: false,
                    }, {
                        title: "Win a unique card from Haddy of Midcopse",
                        tindex: 2,
                        selected: false,
                        done: false,
                    }, {
                        title: "Win a unique card from the soothsayer",
                        tindex: 3,
                        selected: false,
                        done: false,
                    }]
            }, {
                qindex: 2,
                title: "SCAVENGER HUNT: CAT SCHOOL GEAR UPGRADE DIAGRAMS",
                shield: require('./assets/images/shields/COA_Novigrad_Tw3.png'),
                exp: 15,
                selected: false,
                done: false,
                isInEditMode: false,
                isActiveDummyTask: false,
                tCount: 4,
                tasks: [
                    {
                        title: "Find boot Diagram using your Witcher senses",
                        tindex: 0,
                        selected: false,
                        done: false,
                    }, {
                        title: "Find the silver sword ugrade diagram using your Witcher Senses",
                        tindex: 1,
                        selected: false,
                        done: false,
                    }, {
                        title: "Find the armor upgrade diagram using your Witcher Senses",
                        tindex: 2,
                        selected: false,
                        done: false,
                    }, {
                        title: "Win a unique card from the soothsayer",
                        tindex: 3,
                        selected: false,
                        done: false,
                    }
                ],
            },
        ]
    }
}