import { pool } from "../../src/utils/db.js";


export const getData = async (req, res) => {
    try {

        const params = req.query;
        let orderBy = null;
        let orderMode = null;
        let sql = '';
    
  
        /*=========================
		    Peticiones con filtro
		===========================*/   
        if (params.linkTo && params.equalTo) {
            
            /*=============================================
			 Preguntamos si viene variables de orden
			=============================================*/
            if (params.orderBy && params.orderMode) {
                sql = `SELECT ${params.select} FROM ${params.table} WHERE ${params.linkTo} = '${params.equalTo}' ORDER BY ${params.orderBy} ${params.orderMode}`;
            }else{
                sql = `SELECT ${params.select} FROM ${params.table} WHERE ${params.linkTo} = '${params.equalTo}'`;
            }
            
                
            /*============================
		     Peticiones para el buscador
		    =============================*/
        } else if (params.linkTo && params.search) {
            
            if (params.orderBy && params.orderMode) {
                sql = `SELECT ${params.select} FROM ${params.table} WHERE ${params.linkTo} LIKE '%${params.search}%' ORDER BY ${params.orderBy} ${params.orderMode}`;
            }else{
                sql = `SELECT ${params.select} FROM ${params.table} WHERE ${params.linkTo} LIKE '%${params.search}%'`;
            }

            /*============================
		     Peticiones del Wishlist
		    =============================*/
        } else if (params.linkTo && params.wishlist) {
            sql = `SELECT stores.commissionpercentage_store, wishlists.id_wishlist, wishlists.state_wishlist, products.id_product,products.approval_product,products.state_product, products.name_product, products.imageCloud_product,products.price_product,products.id_store_product FROM products INNER JOIN wishlists ON products.id_product = wishlists.idproduct_wishlist INNER JOIN stores ON wishlists.idstore_wishlist = stores.id_store WHERE wishlists.iduserFirebase_wishlist = '${params.linkTo}' AND state_wishlist = 'active' ORDER BY wishlists.id_wishlist DESC`;
            
            /*================================================
		     Peticion para ver si existe item en la wishList
		    =================================================*/
        } else if (params.idUser && params.idProduct && params.search) {
            sql = `SELECT id_wishlist FROM wishlists WHERE iduserFirebase_wishlist = '${params.idUser}' AND idproduct_wishlist = '${params.idProduct}' AND state_wishlist = 'active'`;
        } else if (params.kingdomUserOrders) {
            sql = `SELECT stores.logocloud_store AS logo, stores.name_store as name, sales.id_sale as id, sales.process_sale as process, sales.actiondate_sale as actiondate, sales.purchasecode_sale as codesale FROM sales INNER JOIN stores ON sales.idstore_sale = stores.id_store WHERE sales.idfirebaseuser_sale = '${params.kingdomUserOrders}' AND (sales.process_sale = 'process' OR sales.process_sale = 'paidout' OR sales.process_sale = 'inprocess' OR sales.process_sale = 'finish')`;
        } else if (params.kingdomUserOrdersRecords) {
            sql = `SELECT stores.logocloud_store AS logo, stores.name_store as name, sales.id_sale as id, sales.process_sale as process, sales.actiondate_sale as actiondate, sales.purchasecode_sale as codesale FROM sales INNER JOIN stores ON sales.idstore_sale = stores.id_store WHERE sales.idfirebaseuser_sale = '${params.kingdomUserOrdersRecords}' AND sales.deleteuser_sale = '0' AND (sales.process_sale = 'delivered' OR sales.process_sale = 'deposited')`;
        } else if (params.visit && params.user && params.page) {
            sql = ` INSERT INTO records (idvisit_record, iduserfirebase_record, page_record) VALUES ('${params.visit}','${params.user}','${params.page}')`;
        } else if (params.category && params.select) {
            if (params.table == 'stores') {
                sql = `SELECT ${params.select} FROM ${params.table} WHERE maincategory_store = '${params.category}'  AND state_store = 'active' AND approval_store = 'approved' ORDER BY id_store DESC`;
            } else if (params.table == 'storescategories'){
                sql = `SELECT ${params.select} FROM ${params.table}  WHERE idStore_storecat = '${params.category}' AND state_storecat = 'show' ORDER BY order_storecat ASC`;
            }
        } else if (params.IdStore && params.categorySelected && params.select) {
            sql = `SELECT ${params.select} FROM ${params.table}  WHERE id_store_product = '${params.IdStore}' AND category_product = '${params.categorySelected}'`;
        } else if (params.id && params.query && params.select && params.column && params.search) {
            
            if (params.table == 'stores') {
                sql = `SELECT ${params.select} FROM ${params.table}  WHERE ${params.column} LIKE '%${params.query}%' AND state_store = 'active' AND connectivity_store = 'open' AND approval_store = 'approved' ORDER BY id_store DESC`;
            } else if (params.table == 'products') {
                sql = `SELECT ${params.select} FROM ${params.table}  WHERE ${params.column} LIKE '%${params.query}%' AND id_store_product = '${params.id}' AND approval_product = 'approved' AND state_product = 'show' ORDER BY id_product DESC`;
            }
        } else if (params.linkTo && params.cart) {
            sql = `SELECT  salesdetails.id_saledetails, products.id_product, products.id_store_product, products.idproductcloud_product, products.name_product, products.price_product, products.imageCloud_product, products.description_product, salesdetails.purchasecode_saledetails, salesdetails.specificationscode_saledetails, salesdetails.quantity_saledetails, salesdetails.total_saledetails, salesdetails.note_saledetails FROM products INNER JOIN salesdetails ON products.id_product = salesdetails.idproduct_saledetails WHERE salesdetails.purchasecode_saledetails = '${params.linkTo}' ORDER BY salesdetails.id_saledetails DESC`;
            
            // Peticiones para traer la lista de peliculas de la cartelera
        } else if (params.showmeMyMovies) {
            let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=c550c9241c0da49be4f0b988e3ea1048&language=es-ES";
            let response = await fetch(url);
            let data = await response.json();
            
            return res.status(200).json(data);
        
        } else if (params.notifications && params.idfirebase) {
            sql = `SELECT id_notification,state_notification,type_notification,idfirebase_notification,purchasecode_notification,image_notification,title_notification,message_notification FROM notifications WHERE idfirebase_notification = '${params.idfirebase}' AND state_notification = 'show' ORDER BY id_notification DESC`;
        } else if (params.kingdomSales && params.process) {
            sql = `SELECT stores.name_store, stores.logocloud_store, sales.id_sale, sales.process_sale, sales.idstore_sale, sales.purchasecode_sale, sales.total_sale, sales.kingdomcommission_sale, sales.datecreated_sale FROM sales INNER JOIN stores ON sales.idstore_sale = stores.id_store WHERE sales.process_sale = '${params.process}'`;
        } else if (params.idStore && params.process && params.select) {
            sql = `SELECT ${params.select} FROM sales WHERE idstore_sale = '${params.idStore}' AND process_sale = '${params.process}'`;
        } else if (params.kingdomStoreSales) {
            sql = `SELECT id_sale,process_sale,idfirebaseuser_sale,idstore_sale,total_sale,paymentdate_sale,purchasecode_sale,deposit_sale,actiondate_sale,score_sale,comment_sale,kingdomcommission_sale FROM sales WHERE idstore_sale = '${params.kingdomStoreSales}' AND (process_sale = 'finish' OR process_sale = 'delivered')`;
        } else if (params.kingdomOrder) {
            sql = `SELECT salesdetails.id_saledetails, products.name_product, products.imageCloud_product,salesdetails.quantity_saledetails,salesdetails.total_saledetails, salesdetails.note_saledetails, salesdetails.specificationscode_saledetails FROM salesdetails INNER JOIN products ON salesdetails.idproduct_saledetails = products.id_product WHERE salesdetails.purchasecode_saledetails = '${params.kingdomOrder}' ORDER BY salesdetails.id_saledetails ASC`;
        } else if (params.kingdomDeliveries) {
            sql = `SELECT stores.id_store, stores.name_store, stores.logocloud_store, stores.tele_store, stores.lat_store, stores.lon_store, sales.id_sale, sales.purchasecode_sale, sales.deliveryTime_sale, sales.iddriver_sale, sales.actiondate_sale,deliveries.distance_delivery, deliveries.id_delivery, deliveries.state_delivery, deliveries.idDriver_delivery, deliveries.total_delivery, deliveries.accepted_delivery, addresses.lat_address, addresses.lng_address FROM sales INNER JOIN stores ON sales.idstore_sale = stores.id_store INNER JOIN deliveries ON sales.purchasecode_sale = deliveries.purchasecode_delivery INNER JOIN addresses ON addresses.id_address = deliveries.idaddress_delivery WHERE sales.process_sale = 'inprocess' ORDER BY sales.id_sale ASC`;
        } else if (params.kingdomDeliveriesPay) {
            sql = `SELECT stores.logocloud_store, stores.name_store, stores.lat_store, stores.lon_store, deliveries.idDriver_delivery, deliveries.distance_delivery, deliveries.total_delivery, deliveries.tip_delivery, deliveries.accepted_delivery,deliveries.assigned_delivery, deliveries.pickedUp_delivery, deliveries.delivered_delivery, deliveries.deposited_delivery, deliveries.driverscore_delivery, deliveries.note_delivery, addresses.lat_address, addresses.lng_address, drivers.fullName_driver FROM deliveries INNER JOIN stores ON deliveries.idStore_delivery = stores.id_store INNER JOIN addresses ON deliveries.idaddress_delivery = addresses.id_address INNER JOIN drivers ON drivers.id_driver = deliveries.idDriver_delivery WHERE deliveries.state_delivery = '${params.kingdomDeliveriesPay}' ORDER BY deliveries.id_delivery DESC`;
        } else if (params.kingdomDeliveriesByDriver && params.statusSale) {
            sql = `SELECT stores.id_store, stores.name_store, stores.logocloud_store, stores.tele_store, stores.lat_store, stores.lon_store, stores.address_store, stores.puntoreferencia_store, sales.id_sale, sales.purchasecode_sale, sales.deliveryTime_sale, sales.iddriver_sale, sales.actiondate_sale,deliveries.distance_delivery, deliveries.id_delivery, deliveries.state_delivery, deliveries.idDriver_delivery, deliveries.total_delivery, deliveries.accepted_delivery, addresses.lat_address, addresses.lng_address FROM sales INNER JOIN stores ON sales.idstore_sale = stores.id_store INNER JOIN deliveries ON sales.purchasecode_sale = deliveries.purchasecode_delivery INNER JOIN addresses ON addresses.id_address = deliveries.idaddress_delivery WHERE sales.process_sale = '${params.statusSale}' AND sales.iddriver_sale = '${params.kingdomDeliveriesByDriver}' ORDER BY sales.id_sale ASC`;
        } else if (params.kingdomDeliveriesByDriverWay) {
            sql = `SELECT stores.name_store, stores.logocloud_store, sales.id_sale, sales.idfirebaseuser_sale, sales.purchasecode_sale, sales.actiondate_sale,deliveries.id_delivery, deliveries.distance_delivery, deliveries.total_delivery, deliveries.tip_delivery, addresses.lat_address, addresses.lng_address, addresses.address_address, addresses.referencepoint_address, userscel.name_userscel, userscel.phone_userscel FROM sales INNER JOIN stores ON sales.idstore_sale = stores.id_store INNER JOIN deliveries ON sales.purchasecode_sale = deliveries.purchasecode_delivery INNER JOIN addresses ON addresses.id_address = deliveries.idaddress_delivery INNER JOIN userscel ON userscel.idfirebase_userscel = addresses.idfirebase_address WHERE sales.process_sale = 'finish' AND sales.iddriver_sale = '${params.kingdomDeliveriesByDriverWay}' ORDER BY sales.id_sale ASC`;
        } else if (params.kingdomDriverTips) {
            sql = `SELECT stores.name_store, stores.logocloud_store, sales.id_sale, sales.actiondate_sale, deliveries.distance_delivery, deliveries.tip_delivery, deliveries.total_delivery FROM sales INNER JOIN stores ON sales.idstore_sale = stores.id_store INNER JOIN deliveries ON sales.purchasecode_sale = deliveries.purchasecode_delivery WHERE sales.process_sale = 'delivered' AND sales.iddriver_sale = '${params.kingdomDriverTips}' AND deliveries.tip_delivery > 0 ORDER BY sales.id_sale ASC`;
        } else if (params.kUserOrders) {
            sql = `SELECT stores.logocloud_store AS logo, stores.name_store as name, sales.id_sale as id, sales.process_sale as process, sales.actiondate_sale as actiondate, sales.purchasecode_sale as codesale FROM sales INNER JOIN stores ON sales.idstore_sale = stores.id_store WHERE sales.idfirebaseuser_sale = '${params.kUserOrders}' AND (sales.process_sale = 'process' OR sales.process_sale = 'paidout' OR sales.process_sale = 'inprocess' OR sales.process_sale = 'finish')`;
            // Este endpoint nos trae los datos de la direccion de la entrega
        } else if (params.directions && params.origin && params.destination) {
            let url = `https://maps.googleapis.com/maps/api/directions/json?mode=driving&transit_routing_preferences=less_driving&origin=${params.origin}&destination=${params.destination}&key=AIzaSyAnY1dQNLedy_FIjfDuHHKWY6J3KwVDyuU`;
            let response = await fetch(url);
            let data = await response.json();
            
            return res.status(200).json(data);






            // sql = ``;
            /*============================
		     Peticiones sin filtro
		    =============================*/
        } else {
            if (params.orderBy && params.orderMode) {
                sql = `SELECT ${params.select} FROM ${params.table} ORDER BY ${params.orderBy} ${params.orderMode}`;
            }else{
                sql = `SELECT ${params.select} FROM ${params.table}`;
            }
        }









        
        const [rows] = await pool.query(sql);
        
        if (rows.length == 0) {
            return res.status(400).json({ message: "Something goes wrong" });
        }
        
        return res.status(200).json({
            'status': 200,
            'total': rows.length,
            'results': rows
        });


    } catch (error) {
      return res.status(400).json({ message: "Something goes wrong" });
    }
  };
