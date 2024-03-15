const productos = [
    {
        nombre: "Paquete de 25 Nuggets",
        contenido: "25 nuggets de pollo y 4 dips",
        precio: 379,
        imagen: "fam_01",
        categoriaId: 1
    },
    {
        nombre: "Paquete de 35 Nuggets",
        contenido: "35 nuggets de pollo y 6 dips",
        precio: 515,
        imagen: "fam_02",
        categoriaId: 1
    },
    {
        nombre: "Bucket de 6 Piezas",
        contenido: "6 piezas + 2 bisquets + 1 complemento familiar",
        precio: 249,
        imagen: "fam_03",
        categoriaId: 1
    },
    {
        nombre: "Bucket de 8 Piezas",
        contenido: "8 Piezas de Pollo + 2 Complementos Familiares + 3 Bisquets Tradicionales",
        precio: 339,
        imagen: "fam_04",
        categoriaId: 1
    },
    {
        nombre: "Bucket de 10 Piezas",
        contenido: "10 Piezas de Pollo + 2 Complementos Familiares + 4 Bisquets Tradicionales",
        precio: 419,
        imagen: "fam_05",
        categoriaId: 1
    },
    {
        nombre: "Bucket de 12 Piezas",
        contenido: "12 Piezas de Pollo + 2 Complementos Familiares + 4 Bisquets Tradicionales",
        precio: 499,
        imagen: "fam_06",
        categoriaId: 1
    },
    {
        nombre: "Bucket de 12 Piezas + Refresco",
        contenido: "12 Piezas de Pollo + 2 Complementos Familiares + 4 Bisquets + 1 Refresco 2L",
        precio: 539,
        imagen: "fam_07",
        categoriaId: 1
    },
    {
        nombre: "Bucket de 14 Piezas",
        contenido: "14 Piezas de Pollo + 3 Complementos Familiares + 4 Bisquets Tradicionales",
        precio: 559,
        imagen: "fam_08",
        categoriaId: 1
    },
    {
        nombre: "Bucket de 15 piezas",
        contenido: "15 Piezas de Pollo + 2 Purés de Papa Familiares + 1 Ensalada Familiar y 4 Bisquetes",
        precio: 565,
        imagen: "fam_09",
        categoriaId: 1
    },
    {
        nombre: "Bucket de 16 piezas",
        contenido: "16 Piezas de Pollo + 3 Complementos Familiares + 4 Bisquetes Tradicionales",
        precio: 599,
        imagen: "fam_10",
        categoriaId: 1
    },
    {
        nombre: "Bucket de 18 piezas",
        contenido: "18 Piezas de Pollo + 3 Complementos Familiares + 4 Bisquetes",
        precio: 629,
        imagen: "fam_11",
        categoriaId: 1
    },
    {
        nombre: "Chick N' Share Ke-Tiras",
        contenido: "6 Ke Tiras Naturales o Salseadas",
        precio: 219,
        imagen: "fam_12",
        categoriaId: 1
    },
    {
        nombre: "Chick N' Share Pollo",
        contenido: "Chick N' Share 6 Piezas",
        precio: 219,
        imagen: "fam_13",
        categoriaId: 1
    },
    {
        nombre: "Chick N' Share Mix",
        contenido: "3 Piezas + 3 Ke Tiras Naturales o Salseadas",
        precio: 219,
        imagen: "fam_14",
        categoriaId: 1
    },
    {
        nombre: "8 Piezas Solas",
        contenido: "8 Piezas de Pollo",
        precio: 259,
        imagen: "fam_15",
        categoriaId: 1
    },
    {
        nombre: "9 Ke Tiras Lovers",
        contenido: "9 Ke Tiras (naturales o salseadas) + 1 Papas Familiares",
        precio: 335,
        imagen: "fam_16",
        categoriaId: 1
    },
    {
        nombre: "Paquete Mix",
        contenido: "5 Piezas de Pollo + 2 Ke Tiras + 1 Hamburguesa Kruncher + 2 Complementos Familiares",
        precio: 359,
        imagen: "fam_17",
        categoriaId: 1
    },
    {
        nombre: "Combo 8 Nuggets",
        contenido: "8 nuggets de pollo + 1 Papas + 1 Refresco",
        precio: 155,
        imagen: "indi_01",
        categoriaId: 2
    },
    {
        nombre: "Combo 12 Nuggets",
        contenido: "12 nuggets de pollo + 1 Papas + 1 Refresco",
        precio: 199,
        imagen: "indi_02",
        categoriaId: 2
    },
    {
        nombre: "Combo Ke Tiras Burger",
        contenido: "1 Burger de Pollo + 1 Papas medianas + 1 Refresco lata",
        precio: 200,
        imagen: "indi_03",
        categoriaId: 2
    },
    {
        nombre: "Combo Big Crunch",
        contenido: "1 Burger de Pollo crunch + 1 Papas Medianas + 1 Refresco",
        precio: 200,
        imagen: "indi_04",
        categoriaId: 2
    },
    {
        nombre: "Mega box Ke Tiras Burger + 1 Pieza",
        contenido: "1 Burger de pollo + 1 Refresco + 1 Papas + 1 Ensalada + 1 Pieza",
        precio: 230,
        imagen: "indi_05",
        categoriaId: 2
    },
    {
        nombre: "Chicken Sandwich Bacon Combo",
        contenido: "Sandwich de Pollo + 1 Papas Grandes + 1 Refresco",
        precio: 130,
        imagen: "indi_06",
        categoriaId: 2
    },
    {
        nombre: "Box 2 Piezas",
        contenido: "2 Piezas de Pollo + 1 Pure + 1 bisquet + 1 Refresco",
        precio: 160,
        imagen: "indi_07",
        categoriaId: 2
    },
    {
        nombre: "Box 2 Ke Tiras",
        contenido: "2 Ke Tiras de Pollo + 1 Pure + 1 bisquet + 1 Refresco",
        precio: 160,
        imagen: "indi_08",
        categoriaId: 2
    },
    {
        nombre: "Big Box Pollo",
        contenido: "2 Piezas de Pollo + 1 Pure + 1 Bisquet + 1 Ensalada + 1 Refresco",
        precio: 190,
        imagen: "indi_09",
        categoriaId: 2
    },
    {
        nombre: "Big Box Ke Tiras",
        contenido: "2 Ke Tiras de Pollo + 1 Pure + 1 Bisquet + 1 Ensalada + 1 Refresco",
        precio: 190,
        imagen: "indi_10",
        categoriaId: 2
    },
    {
        nombre: "Mega Box Pollo",
        contenido: "4 Piezas de Pollo + 1 Pure + 1 Bisquet + 1 Ensalada + 1 Refresco",
        precio: 220,
        imagen: "indi_11",
        categoriaId: 2
    },
    {
        nombre: "Mega Box que Tiras",
        contenido: "4 Piezas de Pollo + 1 Pure + 1 Bisquet + 1 Ensalada + 1 Refresco",
        precio: 220,
        imagen: "indi_12",
        categoriaId: 2
    },
    {
        nombre: "Kid Bucket Ke Tira + Reloj Snoopy",
        contenido: "1 Pieza de Pollo + 1 Agua + 1 Pure + 1 Reloj De Snoopy",
        precio: 180,
        imagen: "infa_01",
        categoriaId: 3
    },
    {
        nombre: "Kid Bucket Nuggets + Reloj Snoopy",
        contenido: "5 Piezas de Nuggets + 1 Agua + 1 Pure + 1 Reloj De Snoopy",
        precio: 190,
        imagen: "infa_02",
        categoriaId: 3
    },
    {
        nombre: "Kid Bucket Pieza de Pollo + Reloj Snoopy",
        contenido: "1 Pieza de Pollo + 1 Agua + 1 Pure + 1 Reloj De Snoopy",
        precio: 190,
        imagen: "infa_03",
        categoriaId: 3
    },
    {
        nombre: "Kid Bucket Popcorn + Reloj de snoopy",
        contenido: "5 Piezas de Nuggets + 1 Palomitas+  1 Agua + 1 Pure + 1 Reloj De Snoopy",
        precio: 200,
        imagen: "infa_04",
        categoriaId: 3
    },
    {
        nombre: "Kid Bucket Cruncher + Reloj Snoopy",
        contenido: "1 Burger de Pollo + 1 Pure + 1 Agua + 1 Reloj de Snoopy",
        precio: 250,
        imagen: "infa_05",
        categoriaId: 3
    },
    {
        nombre: "Reloj Snoopy",
        contenido: "1 Reloj De Snoopy",
        precio: 55,
        imagen: "infa_06",
        categoriaId: 3
    },
    {
        nombre: "Papas",
        contenido: "1 papas",
        precio: 55,
        imagen: "comp_01",
        categoriaId: 4
    },
    {
        nombre: "Ensalada",
        contenido: "1 Ensalada",
        precio: 55,
        imagen: "comp_02",
        categoriaId: 4
    },
    {
        nombre: "Dip Mostaza",
        contenido: "1 Dip de Mostaza",
        precio: 20,
        imagen: "comp_03",
        categoriaId: 4
    },
    {
        nombre: "Dip Chipotle Ahumado",
        contenido: "1 Dip de Chipotle",
        precio: 20,
        imagen: "comp_04",
        categoriaId: 4
    },
    {
        nombre: "Dip Ranch Campestre",
        contenido: "1 Dip de Ranch",
        precio: 20,
        imagen: "comp_05",
        categoriaId: 4
    },
    {
        nombre: "Dip Salsa del Coronel",
        contenido: "1 Dip de Salsa de Coronel",
        precio: 20,
        imagen: "comp_06",
        categoriaId: 4
    },
    {
        nombre: "Dip Buffalo",
        contenido: "1 Dip de Buffalo",
        precio: 20,
        imagen: "comp_07",
        categoriaId: 4
    },
    {
        nombre: "Dip Texas Bbq",
        contenido: "1 Dip de Texas Bbq",
        precio: 20,
        imagen: "comp_08",
        categoriaId: 4
    },
    {
        nombre: "35 Nuggets",
        contenido: "35 Nuggets de Pollo",
        precio: 120,
        imagen: "comp_09",
        categoriaId: 4
    },
    {
        nombre: "12 Nuggets",
        contenido: "12 Nuggets de Pollo",
        precio: 70,
        imagen: "comp_10",
        categoriaId: 4
    },
    {
        nombre: "8 Nuggets",
        contenido: "8 Nuggets de Pollo",
        precio: 45,
        imagen: "comp_11",
        categoriaId: 4
    },
    {
        nombre: "6 Nuggets + Dip",
        contenido: "6 Nuggets de Pollo + 1 Dip",
        precio: 35,
        imagen: "comp_12",
        categoriaId: 4
    },
    {
        nombre: "Big Cream Con Chocloate 1 Litro",
        contenido: "Big Cream de Chocolate de un Litro",
        precio: 70,
        imagen: "post_01",
        categoriaId: 5
    },
    {
        nombre: "Big Cream Con Chocloate Medio Litro",
        contenido: "Big Cream de Chocolate de Medio Litro",
        precio: 40,
        imagen: "post_02",
        categoriaId: 5
    },
    {
        nombre: "Big Cream Con Fresa 1 Litro",
        contenido: "Big Cream de Fresa de un Litro",
        precio: 70,
        imagen: "post_03",
        categoriaId: 5
    },
    {
        nombre: "Big Cream Con Fresa Medio Litro",
        contenido: "Big Cream de Fresa de Medio Litro",
        precio: 45,
        imagen: "post_04",
        categoriaId: 5
    },
    {
        nombre: "Big Cream Con Oreo 1 Litro",
        contenido: "Big Cream de Oreo de un Litro",
        precio: 70,
        imagen: "post_05",
        categoriaId: 5
    },
    {
        nombre: "Agua",
        contenido: "Agua de un Litro",
        precio: 30,
        imagen: "bebi_01",
        categoriaId: 6
    },
    {
        nombre: "Coca-cola 600 ml",
        contenido: "Coca-cola 600 ml",
        precio: 30,
        imagen: "bebi_02",
        categoriaId: 6
    },
    {
        nombre: "Coca-cola de Lata 350 ml",
        contenido: "Coca-cola de 350 ml",
        precio: 20,
        imagen: "bebi_03",
        categoriaId: 6
    },
    {
        nombre: "Coca-cola 2 Litros",
        contenido: "Coca-cola 2 Litros",
        precio: 50,
        imagen: "bebi_04",
        categoriaId: 6
    }
]

export {
    productos
}