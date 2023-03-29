// ** ===================================================
// **   GET
// ** ===================================================


// !!final url = '${_urlApi}products?linkTo=id_store_product&equalTo=$idStore&orderBy=category_product&orderMode=DESC&select=id_product,id_store_product,idproductcloud_product,approval_product,state_product,category_product,name_product,imageCloud_product,price_product,delivery_time_product,deliveryday_product,description_product,idproductcloud_product,stock_product';
//**http://localhost:3000/api/data/?table=products&linkTo=id_store_product&equalTo=2&orderBy=category_product&orderMode=DESC&select=id_product,id_store_product,idproductcloud_product,approval_product,state_product,category_product,name_product,imageCloud_product,price_product,delivery_time_product,deliveryday_product,description_product,idproductcloud_product,stock_product
        
//!! final url = '${_urlApi}cloudproducts?linkTo=idproduct_cloudproduct&equalTo=$idCloudProduct&orderBy=id_cloudproduct&orderMode=ASC&select=url_cloudproduct';
//** */ http://localhost:3000/api/data/?table=cloudproducts&linkTo=idproduct_cloudproduct&equalTo=1959035&orderBy=id_cloudproduct&orderMode=ASC&select=url_cloudproduct

//!! final url = '${_urlApi}datalistproducts?linkTo=idcloudproduct_datalistproduct&equalTo=$idCloudProduct&orderBy=id_datalistproduct&orderMode=ASC&select=nameList_datalistproduct,min_datalistproduct,max_datalistproduct,options_datalistproduct,prices_datalistproduct';
//** */ http://localhost:3000/api/data/?table=datalistproducts&linkTo=idcloudproduct_datalistproduct&equalTo=29088892130&orderBy=id_datalistproduct&orderMode=ASC&select=nameList_datalistproduct,min_datalistproduct,max_datalistproduct,options_datalistproduct,prices_datalistproduct

//!! final url = 'http://www.ikingdomclub.com/shoppingcarts?linkTo=idfirebaseuser_shoppingcart&equalTo=$idUser&orderBy=id_shoppingcart&orderMode=ASC&select=*';
//** */ http://localhost:3000/api/data/?table=shoppingcarts&linkTo=idfirebaseuser_shoppingcart&equalTo=Oc97KH2LeDRWik4e7jkV4hyR9Wz1&select=*

//!! final url = 'http://www.ikingdomclub.com/wishlist?wishlist=true&linkTo=$userIdFirebase';
// ** http://localhost:3000/api/data/?table=wishlist&wishlist=true&linkTo=wcMRSPLZzNcsgC7YOrOtzseXwUg1

//!! final url = 'http://www.ikingdomclub.com/wishlists?idUser=$userIdFirebase&idProduct=$idItem&search=true';
//** */ http://localhost:3000/api/data/?table=wishlists&idUser=wcMRSPLZzNcsgC7YOrOtzseXwUg1&idProduct=25&search=true

//!! final url = 'http://www.ikingdomclub.com/wishlist?linkTo=$userIdFirebase&wishlist=true';
// **http://localhost:3000/api/data/?table=wishlist&wishlist=true&linkTo=wcMRSPLZzNcsgC7YOrOtzseXwUg1

// TODO: Revisar esto detenidamente, hay que agregar los campos en la base de datos y revisar la llamada desde la app
//!! final url = '$_urlApi?kingdomUserOrders=$id';
//** */ http://localhost:3000/api/data/?kingdomUserOrders=asdads

//!! final url = '$_urlApi?kingdomUserOrdersRecords=$id';

//!! final url = '${_urlApi}salesdetails?kingdomOrder=$id';

//!! final url = '${_urlApi}productsoptions?linkTo=codeshoppingcarts_productoption&equalTo=$id&select=codeitem_productoption,label_productoption,options_productoption,prices_productoption,res_productoption';
//** */ http://localhost:3000/api/data/?table=productsoptions&linkTo=codeshoppingcarts_productoption&equalTo=KD2911573247965&select=codeitem_productoption,label_productoption,options_productoption,prices_productoption,res_productoption

//!! final url = 'http://www.ikingdomclub.com/productsoptions?linkTo=codeitem_productoption&equalTo=$codeItem&orderBy=id_productoption&orderMode=ASC&select=id_productoption,label_productoption,min_productoption,max_productoption,options_productoption,res_productoption,prices_productoption';
//** */ http://localhost:3000/api/data/?table=productsoptions&linkTo=codeitem_productoption&equalTo=KD-IT587976723155&orderBy=id_productoption&orderMode=ASC&select=id_productoption,label_productoption,min_productoption,max_productoption,options_productoption,res_productoption,prices_productoption

//!! final url = '${_urlApi}banners?linkTo=idstore_banner&equalTo=10001&orderBy=numorden_banner&orderMode=ASC&select=url_banner,state_banner';
// ** http://localhost:3000/api/data/?table=banners&linkTo=idstore_banner&equalTo=0&orderBy=numorden_banner&orderMode=ASC&select=url_banner,state_banner

//!! final url = '$_urlApi?notifications&idfirebase=$idFirebase';

// TODO: Ismael tenes que contruir esta tabla
//!! final url = '${_urlApi}awards?linkTo=id_award&equalTo=$id&orderBy=id_award&orderMode=DESC&select=*';


//!! final url = 'http://www.ikingdomclub.com/cards?linkTo=iduserfirebase_card&equalTo=$idUser&orderBy=id_card&orderMode=ASC&select=id_card,state_card,color_card,number_card,expirydate_card,holder_card,cvv_card,token_card,selected_card';
//** */ http://localhost:3000/api/data/?table=cards&linkTo=iduserfirebase_card&equalTo=9GoBtVFgTdYsfO9cZ04TinRuYuM2&orderBy=id_card&orderMode=ASC&select=id_card,state_card,color_card,number_card,expirydate_card,holder_card,cvv_card,token_card,selected_card

//!! final url = 'http://www.ikingdomclub.com/addresses?linkTo=idfirebase_address&equalTo=$idUser&orderBy=id_address&orderMode=ASC&select=id_address,lat_address,state_address,lng_address,address_address,name_address,icon_address,selected_address';
// **http://localhost:3000/api/data/?table=addresses&linkTo=idfirebase_address&equalTo=9GoBtVFgTdYsfO9cZ04TinRuYuM2&orderBy=id_address&orderMode=ASC&select=id_address,lat_address,state_address,lng_address,address_address,name_address,icon_address,selected_address

//!! final url = 'http://www.ikingdomclub.com/stores?linkTo=id_store&equalTo=$idStore&select=id_store,name_store,about_store,logocloud_store,lat_store,lon_store,commissionpercentage_store';
// ** http://localhost:3000/api/data/?table=stores&linkTo=id_store&equalTo=2&select=id_store,name_store,about_store,logocloud_store,lat_store,lon_store,commissionpercentage_store

// TODO: Echale un ojo a esta consulta, te toca crear la condicion
//!! final url = 'http://www.ikingdomclub.com/products?id=$id&query=$query&search=products&column=name_product&select=id_product,id_store_product,idproductcloud_product,approval_product,state_product,category_product,name_product,imageCloud_product,price_product,delivery_time_product,deliveryday_product,description_product,idproductcloud_product';

//? Ojo qui, revisa esta consulta detenidamente
//!! final url = 'http://www.ikingdomclub.com/products?id=1&query=$query&search=stores&column=name_store&select=id_store,state_store,connectivity_store,approval_store,name_store,logocloud_store,covercloud_store,about_store,maincategory_store,lat_store,lon_store';

//!! const url = 'http://www.ikingdomclub.com/maincategories?orderBy=index_category&orderMode=ASC&select=state_category,banner_category,name_category,image_category,index_category,idbanner_category';
//** */ http://localhost:3000/api/data/?table=maincategories&orderBy=index_category&orderMode=ASC&select=state_category,banner_category,name_category,image_category,index_category,idbanner_category

// TODO: Echale un ojo a esta consulta, te toca crear la condicion
//!! final url = 'http://www.ikingdomclub.com/stores?category=$category&select=id_store,state_store,connectivity_store,approval_store,name_store,logocloud_store,covercloud_store,about_store,maincategory_store,lat_store,lon_store,type_store,commissionpercentage_store&orderBy=order_store&orderMode=ASC';

//!! final url = 'http://www.ikingdomclub.com/banners?orderBy=numorden_banner&orderMode=ASC&equalTo=$id&linkTo=idstore_banner&select=state_banner,url_banner';
// **http://localhost:3000/api/data/?table=banners&orderBy=numorden_banner&orderMode=ASC&equalTo=2&linkTo=idstore_banner&select=state_banner,url_banner

//!! final url = 'http://www.ikingdomclub.com/storescategories?orderBy=order_storecat&orderMode=ASC&equalTo=$id&linkTo=idStore_storecat&select=state_storecat,name_storecat,image_storecat';
//** */ http://localhost:3000/api/data/?table=storescategories&orderBy=order_storecat&orderMode=ASC&equalTo=2&linkTo=idStore_storecat&select=state_storecat,name_storecat,image_storecat

// TODO: Echale un ojo a esta consulta, te toca crear la condicion
//!! final url = 'http://www.ikingdomclub.com/products?IdStore=$idStore&categorySelected=$category&productCategory=true&select=id_product,id_store_product,idproductcloud_product,approval_product,state_product,category_product,name_product,imageCloud_product,price_product,delivery_time_product,deliveryday_product,description_product,idproductcloud_product';

//!! const url = 'http://www.ikingdomclub.com/versions?orderBy=id_version&orderMode=ASC&select=current_version,imagen_version,type_version';
//** */ http://localhost:3000/api/data/?table=versions&select=current_version,imagen_version,type_version

//!! final String url = 'http://www.ikingdomclub.com/?kvisit=$visit&kuser=$id&kpage=$note';

//!! final url = 'http://www.ikingdomclub.com/salesdetails?cart=true&linkTo=$id';

//!! const String url = 'http://www.ikingdomclub.com/shipping?select=promotionState_shipping,promotion_shipping,price_shipping,basePrice_shipping,plus_shipping,min_shipping';

//!! const String url = 'http://www.ikingdomclub.com/servers?select=name_server';

//!! var request = http.Request('GET', Uri.parse('http://www.ikingdomclub.com/?kingdomDeleteCartUser=$idUser'));


// ** ===================================================
// **   POST
// ** ===================================================
//!! http://www.ikingdomclub.com/shoppingcarts?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Njk2MTA2ODcsImV4cCI6MTgyNzI5MDY4NywiZGF0YSI6eyJpZCI6NTMsImVtYWlsIjoiZWR1Z2EzMTBAZ21haWwuY29tIn19.FF4MPRXWVY5bdE-qZh6yleL4-DtjT6xuR3Rue7e4bs8









// ** ===================================================
// **   DELETE
// ** ===================================================

//** */ http://localhost:3000/api/data/?table=addresses&id=48&nameId=id_address