const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img:
            "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img:
            "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img:
            "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img:
            "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img:
            "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:
            "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img:
            "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img:
            "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img:
            "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

//buttonlar??n i??lemleri
let funcForButtons = () => {

    const cArr = []; // menu'deki category'leri tuttugumuz array

    //menu'deki categoryleri cArr arrayina eklemek.
    for (let i = 0; i < menu.length; i++) {
        cArr.push(menu[i].category);
    }

    //1'den fazla kez tekrar eden kategorileri cikariyoruz.
    let allCategories = cArr.reduce(function (a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, ["ALL"]);

    console.log(allCategories); // ["ALL", "Korea", "Japan", "China"]

    let btnContainerDOM = document.querySelector(".btn-container"); // buttonlar??n bulundugu alan

    let buttons = allCategories.map(buttonName => { //buttonlar?? allCategories array??ndan ??ekmek.
        return `<button class="btn btn-outline-dark btn-item" data-id=${buttonName}>${buttonName}</button>`; // buttonlar?? olu??turmak
    });
    buttons = buttons.join(""); // buttonlar??n aras??ndaki "," kald??rmak
    btnContainerDOM.innerHTML = buttons; // buttonlar?? eklemek
}
funcForButtons(); // call func


//itemlerin i??lemleri
let funcForItems = () => {
    let sectionCenterDOM = document.querySelector(".section-center");

    let items = menu.map(index => { // menu'nun alt??ndaki objelere ula??arak, objedeki values'lerini key'lerini kullanarak ula??mak.
        return `
        <div class="menu-items col-lg-6 col-sm-12 ${(index.category).toLowerCase()}">
            <img src="${index.img}" alt="${index.title}" class="photo">
            <div class="menu-info">
            <div class="menu-title">
                <h4>${index.title}</h4>
                <h4 class="price">${index.price}</h4>
            </div>
            <div class="menu-text">${index.desc}
            </div>
            </div>
        </div>`
    });

    items = items.join("");
    sectionCenterDOM.innerHTML = items;


    //filter i??lemlerin ba??lang??c??
    let chinaArr = []; //yuka??rda olu??yurudugmuz divleri classlar??na gore arraylar??n ??c??nde tutmak ??c??n 
    let chinaDOM = document.querySelectorAll(".china");
    chinaDOM.forEach(i => {
        chinaArr.push(i); // array div'leri pushlamak
    })

    let japanArr = []; //yuka??rda olu??yurudugmuz divleri classlar??na gore arraylar??n ??c??nde tutmak ??c??n 
    let japanDOM = document.querySelectorAll(".japan");
    japanDOM.forEach(i => {
        japanArr.push(i); // array div'leri pushlamak
    });

    let koreaArr = []; //yuka??rda olu??yurudugmuz divleri classlar??na gore arraylar??n ??c??nde tutmak ??c??n 
    let koreaDOM = document.querySelectorAll(".korea");
    koreaDOM.forEach(i => {
        koreaArr.push(i); // array div'leri pushlamak
    });

    let buttonsDOM = document.querySelectorAll(".btn"); // olu??an buttonlara ula??mak.
    

    buttonsDOM.forEach(index => {
        index.addEventListener("click", event => { // buttonlara click eventi eklemek
            let data = event.target.dataset.id; // buttonlar??n datasetlerine ula??mak
            
            if (data == "China") { // yukar??da ula??t??g??m??z datasetleri kullanarak kontrol yap??p html i??erisinde de??i??iklik yapmak
                sectionCenterDOM.innerHTML = "";
                for (let i=0; i<chinaArr.length; i++){
                    sectionCenterDOM.append(chinaArr[i]); //chinaArr div'lerini sayfada gostermek
                }
            }

            if (data == "Japan") {
                sectionCenterDOM.innerHTML = "";
                for (let i=0; i<japanArr.length; i++){
                    sectionCenterDOM.append(japanArr[i]); 
                }
            }

            if (data == "Korea") {
                sectionCenterDOM.innerHTML = "";
                for (let i=0; i<koreaArr.length; i++){
                    sectionCenterDOM.append(koreaArr[i]); 
                }  
            }

            if (data == "ALL") {
                sectionCenterDOM.innerHTML = items // butun itemler?? gostermek
            }

        });
    })
}
funcForItems(); // call func