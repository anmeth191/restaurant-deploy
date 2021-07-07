const initialValue = {
     
    
      appetizers:[ 
          { id:1,title:'Appetizers',name: 'Bruschetta', description:'Tousted bread eith dice Tomatoes, garlic, olive oil & basil' , priceFull: 5.99 },
          { id:2,title:'Appetizers',name: 'Skin of Potatoes', description:'potatoes stuffed with delicious Bacon and Cheese' , priceFull: 3.99 },
          { id:3,title:'Appetizers',name: 'Fried Shrimps', description:' dressed with marinara Sauce' , priceFull: 8.99 },
          { id:4,title:'Appetizers',name: 'Stuffed Chiles Verdes', description:'Breaded Jalapenos stuffed with chicken & cream cheese' , priceFull: 4.99 },
          { id:5,title:'Appetizers',name: 'EggPlant Rollatini', description:'breaded eggplant stuffed with mozarella in marinara' , priceFull: 6.99 },
          { id:6,title:'Appetizers',name: 'SeaFood party', description:' shrimps, mussels, clams in marinara sauce or garlic butter sauce' , priceFull: 5.99 },
          { id:7,title:'Appetizers',name: 'Chicken Nuggets', description:'12 pieces ' , priceFull: 6.99 },
          { id:8,title:'Appetizers',name: 'Chicken Wings', description:'Hot, mild or BBQ with side of bleu cheese or ranch dressing | 12 pieces ' , priceFull:10.99 },
          { id:9,title:'Appetizers',name: 'Pop Corn Chicken ', description:'Served with fries' , priceFull: 10.99 },
          { id:10,title:'Appetizers',name: 'French fries with Mozarella', description:'french fries topped with melted mozarella cheese ' , priceFull: 5.99 }
          
              ],

        //  sides:[ 
        //     { id:1,name: 'BreadSticks', quantity:6 , price: 3.99 },
        //     { id:2,name: 'Mozzarela Sticks', quantity:6 , price: 5.99 },
        //     { id:3,name: 'Pizza Fries', quantity:6 , price: 5.99 },
        //     { id:4,name: 'Onion Rings', quantity:12 , price: 5.99 },
        //     { id:5,name: 'Breaded Zucchini', quantity:12 , price: 5.99 },
        //     { id:6,name: 'Curly Fries', quantity:'medium / large' , price: 4.99 },
        //     { id:7,name: 'Perogies', quantity:4 , price: 3.99 }

   
        //  ] ,
         
         soupsSalads:[
            { id:1,name: 'Chicken Caesar Salad', description:'Grilled Chicken, croutons, parmesan & caesar dressing' , priceFull: 9.99 },
            { id:2,name: 'New England Clam Chowder', description:'Tousted bread eith dice Tomatoes, garlic, olive oil & basil' , priceFull: 3.99 },
            { id:3,name: 'Cold Antipasto', description:'Ham, Salami, provolone, lettuce, tomatoes, onions and pickles' , priceFull: 9.50 },
            { id:4,name: 'Tuna Salad', description:'Fresh Tuna, lettuce, tomatoes, onions and pickles' , priceFull: 9.99 },
            { id:5,name: 'Chicken Salad', description:'Grilled chicken, lettuce, tomatoes, onions and pickles', priceFull: 8.99 },
            { id:6,name: 'Chicken Tender Salad', description:'Breaded Chicken fingers, lettuce, croutons, parmesan and caesar dressing' , priceFull: 8.99 },
            { id:7,name: 'Chef Salad', description:'Ham, Turkey, provolone, lettuce, tomatoes, onions and pickles' , priceFull: 9.50 },
            { id:8,name: 'Steak Salad', description:'Chip Steak, lettuce, tomatoes, onions and pickles' , priceFull: 8.99 },
            { id:9,name: 'Tossed Salad', description:'Tousted bread eith dice Tomatoes, garlic, olive oil & basil' , priceFull: 5.99 }
         ],

         pizza:[
            { id:1,name: 'Small Pizza', description:'Cheese Pizza', priceFull: 7.50 },
            { id:2,name: 'Medium Pizza', description:'Cheese Pizza', priceFull: 11.50 },
            { id:3,name: 'Large Pizza', description:'Cheese Pizza', priceFull: 13.99 },
            { id:4,name: 'Medium Sicilian Pizza', description:'Sicilian Pizza', priceFull: 9.50 },
            { id:5,name: 'Large Sicilian Pizza', description:'Sicilian Pizza', priceFull: 19.50 }
         ] , 

         gourmetPizza:[
            { id:1,name: 'Veggie Lover', description:'Onions, peppers, broccoli, garlic, mushrooms and tomatoes' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 },
            { id:2,name: 'White', description:'Garlic, broccoli, ricotta, mozzarella' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 17.99 },
            { id:3,name: 'German', description:'Chip steak, hot peppers, onions, lettuce and light sauce' , priceSmall: 10.99, priceMedium: 18.99, priceFull: 19.99 },
            { id:4,name: 'CheeseSteak Stuffed', description:'Double layer with chip steak, cheese and sauce' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 25.99 },
            { id:5,name: 'Romana', description:'Sausage, ham, fries, mozzarella and special sauce' , priceSmall: 10.99, priceMedium: 18.99, priceFull: 20.99 },
            { id:6,name: 'Stuffed', description:'Double layer stuffed with three toppings of your choice, ham and cheese' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 25.99 },
            { id:7,name: 'Meat Lover', description:'Ham, sausage, pepperoni, bacon and hamburger' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 },
            { id:8,name: 'Taco', description:'Seasoned ground beef, sour cream, tomatoes, lettuce & 2 cheeses' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 },
            { id:9,name: 'Hawaiian', description:'Light sauce, pineapple, mozzarella & ham or bacon' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 },
            { id:10,name: 'Buffalo Chicken', description:'Mozzarella, bleu cheese & hot sauce' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 },
            { id:11,name: 'Chicken Parm', description:'Breaded chicken, marinara & mozzarella' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 },
            { id:12,name: 'BBQ Chicken', description:'Chicken, bacon & BBQ sauce' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 }
        ], 

        calzoneStromboli:[
            { id:1,name: 'Stromboli', description:'Stuffed with four toppings of your choice' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 },
            { id:2,name: 'Steak or Chicken Steak Stromboli', description:'Onions, peppers, broccoli, garlic, mushrooms and tomatoes' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 },
            { id:3,name: 'Special Stromboli', description:'Sausage, pepperoni, onions, green peppers, mushrooms & black olives, loaded with mozzarella & topped with tomato sauce' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 },
            { id:4,name: 'Calzone', description:'Stuffed with ham, mozzarella & ricotta' , priceSmall: 10.99, priceMedium: 16.99, priceFull: 18.99 }
        ],

        pasta:[
            { id:1,name: 'Homemade Sauce', description:'House Favorite' , priceFull: 9.99 },
            { id:2,name: 'Garlic & Oil', description:'House Favorite' , priceFull: 9.99 },
            { id:3,name: 'Pesto or Green Pesto', description:'Basil, garlic, olive oil & parmesan with or without fresh tomatoes' , priceFull: 9.99 },
            { id:4,name: 'Alfredo Sauce', description:'Parmesan & spices in a white cream sauce with Chicken' , priceFull: 9.99 },
            { id:5,name: 'Ravioli', description:'Parmesan & spices in a white cream sauce with Chicken' , priceFull: 9.99 },
            { id:6,name: 'Shrimp Tortellini', description:'Cheese tortellini sautéed with shrimp in a brandy alfredo sauce with a touch of tomato sauce' , priceFull: 9.99 },
            { id:7,name: 'Tortellini Primavera', description:'Cheese tortellini with veggies in a tomato or alfredo sauce' , priceFull: 9.99 },
            { id:8,name: 'Lobster Ravioli', description:'Ravioli stuffed with lobster meat sautéed in pink vodka sauce' , priceFull: 9.99 },
            { id:9,name: 'Clam Sauce', description:'Whole chopped clams in marinara or garlic butter sauce' , priceFull: 9.99 },
            { id:10,name: 'Puttanesca', description:'Plum tomatoes, olives, garlic, basil & hot spices' , priceFull: 9.99 },
            { id:11,name: 'Ragu Sauce', description:'Ground beef, meatballs & sausage in tomato sauce' , priceFull: 9.99 },
            { id:12,name: 'Tortellini', description:'Ground sausage, mushrooms & marinara with a touch of cream' , priceFull: 9.99 }
        ],
        bakedDishes:[
            { id:1,name: 'Manicotti', description:'In tomato sauce or marinara' , priceFull: 9.99 },
            { id:2,name: 'Eggplant Parmigiana', description:'Lightly breaded eggplant in tomato sauce, topped with mozzarella' , priceFull: 9.99 },
            { id:3,name: 'Homemade Meat Lasagna', description:'Basil, garlic, olive oil & parmesan with or without fresh tomatoes' , priceFull: 9.99 },
            { id:4,name: 'Baked Pasta', description:'Spaghetti, rigatoni or ziti in tomato sauce with ricotta & mozzarella' , priceFull: 9.99 },
            { id:5,name: 'Stuffed Shells', description:'In tomato sauce or marinara' , priceFull: 9.99 },
            { id:6,name: 'Eggplant Rollatini', description:'Lightly breaded eggplant stuffed with ricotta & mozzarella in marinara' , priceFull: 9.99 }
        ],
         entrees:[
            { id:1,name: 'Parmigiana', description:'Lightly breaded in tomato sauce topped with mozzarella' , priceFull: 9.99 },
            { id:2,name: 'Francese', description:'Dipped in egg & lightly floured, sautéed with capers in a lemon butter sauce' , priceFull: 9.99 },
            { id:3,name: 'Principessa', description:'Sautéed in mushrooms, bell peppers & onions, topped with mozzarella in marinara or white wine' , priceFull: 9.99 },
            { id:4,name: 'Chicken & Broccoli', description:'Chicken & broccoli sautéed in a white wine buttery sauce ' , priceFull: 9.99 },
            { id:5,name: 'Chicken Cordon Bleu', description:'Fresh chicken breast stuffed with ham & provolone in marsala wine sauce' , priceFull: 9.99 },
            { id:6,name: 'Veal Milanese', description:'Sautéed ham, bacon & onions in a cream sauce with marinara' , priceFull: 9.99 },
            { id:7,name: 'Fried Shrimp', description:'Lightly breaded shrimp served with cocktail or tartar sauce' , priceFull: 9.99 },
            { id:8,name: 'Veal Sorrentino', description:'Fresh veal, eggplant, ham & mozzarella in a light marinara' , priceFull: 9.99 },
            { id:9,name: 'Chicken Siciliano', description:'Sautéed in mushrooms, onions & spinach in marsala wine sauce' , priceFull: 9.99 },
            { id:10,name: 'Piccata', description:'Sautéed with capers in a lemon butter sauce' , priceFull: 9.99 },
            { id:11,name: 'Veal Sorrentino', description:'Fresh veal, eggplant, ham & mozzarella in a light marinara' , priceFull: 9.99 },
            { id:12,name: 'Shrimp Scampi', description:'Sautéed in a white wine & garlic lemon butter sauce' , priceFull: 9.99 },
        ],
          chickenBurgers:[
            { id:1,name: 'Hamburger', description:'With Bacon & Cheese' , priceFull: 9.99 },
            { id:2,name: 'Cheeseburger Supreme', description:'Mushrooms, bacon, cheese, lettuce, tomatoes, onions & mayo' , priceFull: 9.99 },
            { id:3,name: 'Chicken Cordon Bleu', description:'Ham & cheese with lettuce, tomatoes, onions & mayo' , priceFull: 9.99 },
            { id:4,name: 'Grilled Chicken', description:'Grilled chicken, lettuce, tomatoes, onions & mayo' , priceFull: 9.99 },
            { id:5,name: 'Fish Fillet', description:'Lettuce, tomatoes, onions & mayo or tartar sauce' , priceFull: 9.99 },
            { id:6,name: 'California Burger', description:'Lettuce, tomatoes, onions, pickles & mayo' , priceFull: 9.99 },
            { id:7,name: 'Pizza Burger', description:'Sauce, parmesan & mozzarella, toasted' , priceFull: 9.99 },
            { id:8,name: 'Chicken Club', description:'Bacon, cheese, lettuce, tomatoes, onions & mayo' , priceFull: 9.99 },
            { id:9,name: 'Chicken on A Roll', description:'Breaded chicken, lettuce, tomatoes, onions & mayo' , priceFull: 9.99 }
        ],
        superBurgers:[
            { id:1,name: 'Gizmo', description:'Ham, cheese, lettuce, tomatoes, onions, pickles & mayo or oil & vinegar' , priceFull: 9.99 },
            { id:2,name: 'Cheeseburger Sub', description:'Lettuce, tomatoes, onions, pickles & mayo or oil & vinegar' , priceFull: 9.99 },
            { id:3,name: 'Pizza Burger Sub', description:'Sauce, parmesan & mozzarella, toasted' , priceFull: 9.99 }
        ],
        hotsubs:[
            { id:1,name: 'Steak', description:'Sauce & onions' , priceFull: 9.99 },
            { id:2,name: 'Steak Hoagie', description:'Lettuce, tomatoes, onions, mayo, oil & vinegar' , priceFull: 9.99 },
            { id:3,name: 'Philly Cheesesteak', description:'Sauce, onions, peppers, mushrooms & sausage' , priceFull: 9.99 },
            { id:4,name: 'Chicken Hoagie', description:'Breaded chicken, lettuce, tomatoes, onions, mayo, oil & vinegar ' , priceFull: 9.99 },
            { id:5,name: 'Chicken Cordon Bleu', description:'Fresh chicken breast stuffed with ham & provolone in marsala wine sauce' , priceFull: 9.99 },
            { id:6,name: 'Meatball', description:'Meatballs & sauce' , priceFull: 9.99 },
            { id:7,name: 'Grilled Chicken Hoagie', description:'Grilled chicken with lettuce, tomatoes, onions & mayo or oil & vinegar' , priceFull: 9.99 },
            { id:8,name: 'Buffalo Chicken Cheesesteak', description:'Fresh veal, eggplant, ham & mozzarella in a light marinara' , priceFull: 9.99 },
            { id:9,name: 'Chicken Siciliano', description:'Hot sauce & bleu cheese' , priceFull: 9.99 },
            { id:10,name: 'Chicken Club', description:'Breaded chicken, bacon, cheese, lettuce, tomatoes, onions & mayo or oil & vinegar' , priceFull: 9.99 },
            { id:11,name: 'Cheesesteak Hoagie', description:'Lettuce, tomatoes, onions, cheese, mayo, oil & vinegar' , priceFull: 9.99 },
            { id:12,name: 'Cheesesteak', description:'House Favorite' , priceFull: 9.99 },
        ] ,
        coldsubs:[
            { id:1,name: 'Italian', description:'Ham, salami, cheese, lettuce, tomatoes & onions' , priceFull: 9.99 },
            { id:2,name: 'Turkey', description:'Lettuce, tomatoes & onions0' , priceFull: 9.99 },
            { id:3,name: 'Veggie Sub', description:'Broccoli, onions, peppers, tomatoes, olives, lettuce & cheese' , priceFull: 9.99 },
            { id:4,name: 'Grilled Chicken Caesar', description:'Grilled chicken, lettuce & Caesar dressing' , priceFull: 9.99 },
            { id:5,name: 'Roast Beef', description:'Lettuce, tomatoes & onions' , priceFull: 9.99 },
            { id:6,name: 'Tuna', description:'Lettuce, tomatoes & onions' , priceFull: 9.99 },
            { id:7,name: 'Italian Wedge', description:'Ham, salami, lettuce, tomatoes, onions & cheese toasted on a pizza crust wedge ' , priceFull: 9.99 },
            { id:8,name: 'Ham & Cheese', description:'Lettuce, tomatoes & onions' , priceFull: 9.99 }
            ] ,

            wraps:[
                { id:1,name: 'Chicken Caesar', description:'Ham, salami, cheese, lettuce, tomatoes & onions' , priceFull: 9.99 },
                { id:2,name: 'Turkey Club', description:'Lettuce, tomatoes & onions0' , priceFull: 9.99 },
                { id:3,name: 'Chicken Club', description:'Broccoli, onions, peppers, tomatoes, olives, lettuce & cheese' , priceFull: 9.99 },
                { id:4,name: 'Tuna', description:'Grilled chicken, lettuce & Caesar dressing' , priceFull: 9.99 }
                ] ,

                kids:[
                    { id:1,name: 'Spaghetti', description:'Ham, salami, cheese, lettuce, tomatoes & onions' , priceFull: 9.99 },
                    { id:2,name: 'Cheese Manicotti', description:'Lettuce, tomatoes & onions0' , priceFull: 9.99 },
                    { id:3,name: 'Stuffed Shells', description:'Broccoli, onions, peppers, tomatoes, olives, lettuce & cheese' , priceFull: 9.99 },
                    { id:4,name: 'Meat Lasagna', description:'Grilled chicken, lettuce & Caesar dressing' , priceFull: 9.99 },
                    { id:5,name: 'Ravioli', description:'Lettuce, tomatoes & onions' , priceFull: 9.99 },
                    { id:6,name: 'Chicken Parmigiana', description:'Lettuce, tomatoes & onions' , priceFull: 9.99 }
                    ] ,

            dessert:[
                { id:1,name: 'Traditional Cannoli', description:'Ham, salami, cheese, lettuce, tomatoes & onions' , priceFull: 9.99 },
                { id:2,name: 'Tiramisu', description:'Lettuce, tomatoes & onions0' , priceFull: 9.99 }
                ] ,
                
                beverages:[
                    { id:1,name: 'Beverages', description:'Soda , water, iced tea, juice' , priceFull: 9.99 },
                    { id:2,name: 'Bottled Beer', description:'Domestic 2.25 | Import 3.25' , priceFull: 9.99 },
                    { id:3,name: 'Beer on Tap', description:'Coors Light & Yuengling Lager' , priceFull: 9.99 },
                    ]
                
}

const menuReducer = (state = initialValue , dispatch)=>{
return state
}

export default menuReducer;