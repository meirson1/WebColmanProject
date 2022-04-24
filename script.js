var ads = [
    new Ad({
        name: "one",
        templateUrl: "templates/templateA.html",
        texts: ["text1", "text2", "text3", "text4"],
        imagesUrl: ["images/img1.jpg", "images/img2.jpg"],
        days: {
            monday: {
                fromHour: 6,
                toHour: 12
            },
            wednesday: {
                fromHour: 6,
                toHour: 12
            }
        },

        fromDate: "1/1/2022",
        toDate: "12/31/2022",
        timeDuration: 3,
        screens: {"1": true, "2": true}
    }),
    new Ad({
        name: "two",
        templateUrl: "templates/templateB.html",
        texts: ["text1", "text2", "text3", "text4", "text5", "text6", "text7", "text8", "text9", "text10"],
        imagesUrl: ["images/img1.jpg"],
        days: {
            tuesday: {
                fromHour: 10,
                toHour: 16
            },
            wednesday: {
                fromHour: 10,
                toHour: 16
            }
        },
        fromDate: "3/1/2022",
        toDate: "4/31/2022",
        timeDuration: 5,
        screens: {"1": true, "3": true}
    }),
    new Ad({
        name: "three",
        templateUrl: "templates/templateC.html",
        texts: [],
        imagesUrl: [],
        days: {
            all: true,
            fromHour: 8,
            toHour: 22
        },
        fromDate: "5/1/2022",
        toDate: "6/15/2022",
        timeDuration: 7,
        screens: {"2": true, "3": true}
    }),
    new Ad({
        name: "four",
        templateUrl: "templates/templateA.html",
        texts: ["text1", "text2"],
        imagesUrl: [],
        days: {
            monday: {
                fromHour: 15,
                toHour: 19
            }
        },
        fromDate: "3/29/2022",
        toDate: "4/15/2022",
        timeDuration: 4,
        screens: {"1": true}
    }),
    new Ad({
        name: "five",
        templateUrl: "templates/templateB.html",
        texts: ["text1", "text2", "text3", "text4", "text5", "text6", "text7"],
        imagesUrl: ["images/img1.jpg", "images/img2.jpg"],
        days: {
            monday: {
                fromHour: 1,
                toHour: 23,
            }, tuesday: {
                fromHour: 1,
                toHour: 23,
            }, wednesday: {
                fromHour: 1,
                toHour: 23,
            }
        },

        fromDate: "4/1/2022",
        toDate: "4/31/2022",
        timeDuration: 6,
        screens: {"3": true}
    })
];