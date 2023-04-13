const products = [
    {
        name:"Ryzen 5", 
        category:"procesador",
        img: '../img/ryzen5__4500.webp',
        price: 16000,
        id: "1",
    },
    {
        name: "Ryzen 7",
        category: "procesador",
        img: '../img/ryzen7__5700G.webp',
        price: 18500,
        id: "2",
    },
    {
        name: "Ryzen 9",
        category: "procesador",
        img: '../img/ryzen9__5900x.webp',
        price: 21000,
        id: "3",
    },
    {
        name: "Mother B450M",
        category: "mother",
        img: '../img/mother__b450m.webp',
        price: 14000,
        id: "4",
    },
    {
        name: "Mother B500",
        category: "mother",
        img: '../img/mother__b550.webp',
        price: 16000,
        id: "5",
    },
    {
        name: "Mother X570",
        category: "mother",
        img: '../img/mother__x570.webp',
        price: 19500,
        id: "6",
    },
    {
        name: 'RTX 2080',
        category: "gpu",
        img: '../img/rtx2080.webp',
        price: 28000,
        id: "7",
    },
    {
        name: 'RTX 3080',
        category: "gpu",
        img: '../img/rtx3080.webp',
        price: 33500,
        id: "8",
    },
    {
        name: 'RTX 4080',
        category: "gpu",
        img: '../img/rtx4080.webp',
        price: 38000,
        id: "9",
    },
    {
        name:'RAM Kingston',
        category: "ram",
        img: '../img/ram__kingston8gb.webp',
        price: 3500,
        id: "10",
    },
    {
        name: 'RAM Corsair',
        category: "ram",
        img: '../img/ram__corsiar8gb.webp',
        price: 4500,
        id: "11",
    },
    {
        name: 'RAM Viper',
        category: "ram",
        img: '../img/ram__viper16gb.webp',
        price: 6000,
        id: "12",
    },
    {
        name: 'Disco HDD 1TB',
        category: 'discos',
        img: '../img/discoHDD1TB.webp',
        price: 4700,
        id: "13",
    },
    {
        name: 'Disco HDD 2TB',
        category: 'discos',
        img: '../img/discoHDD2TB.webp',
        price: 5250,
        id: "14",
    },
    {
        name: 'Disco SDD 1TB',
        category: 'discos',
        img: '../img/discoSDD1TB.webp',
        price: 7550,
        id: "15",
    },
    {
        name: 'Disco SDD 2TB',
        category: 'discos',
        img: '../img/discoSDD1TB.webp',
        price: 9750,
        id: "16",
    },
]

export const getProduct = () => {
    return new Promise( (res) => {
        setTimeout( () => {
            res(products)
        }, 100);
    })
}

export const getOneProduct = (id) => {
    return new Promise ( (res) => {
        setTimeout( () => {
            const product = products.find(prod => prod.id === id)

            res(product)
        }, 100)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise ( (res) => {
        setTimeout(() => {
            const productsCategory = products.filter(prod => prod.category === category)

            res(productsCategory)
        }, 100);
    })
}