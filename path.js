const User = require('./router/user');
const UserManagement=require("./router/userManagement")
const inviteuser=require('./router/invite')
const {postCustomizer, getCustomizer,getCustomizerByIdd,getCustomizerById,updateCustomizer} = require('./router/customize')
const layerdata = require('./router/layer')
const productdata = require('./router/product')
const shopifystore=require('./router/shopify')
module.exports = {

	//user authentication
	'/auth/user/register': User.register,
	'/auth/user/login': User.login,


	//user management
	'/profile/addprofiledetails':UserManagement.addprofiledetails,
	'/profile/getprofilelist':UserManagement.getprofilelist,
	'/profile/getuser/{id}':UserManagement.getuser,
	'/profile/updateuser':UserManagement.updateuser,
	'/profile/deleteuser':UserManagement.deleteuser,

	'/profile/super-admin-manager/create':UserManagement.createsuperadminmanager,
	'/profile/super-admin/manager/getlist':UserManagement.getsuperadminmanager,
	'/profile/super-admin-manager/:userId':UserManagement.updatesuperadminmanager,

	'/profile/store-owner-manager/create':UserManagement.createstoreownermanager,
	'/profile/store-owner-manager/getlist':UserManagement.getstoreownermanager,
	'/profile/store-owner-manager/:userId':UserManagement.updatestoreownermanager,
	'/profile/store-owner/:userId':UserManagement.updatestoreownerstatus,
	'/profile/store-owner/:userId':UserManagement.deletestoreowner,

	'/email/invite':inviteuser.inviteuser,

	'/data/customizer/post':postCustomizer,
	'/data/customizer':getCustomizer,
	'/data/customizer/:pid/get':getCustomizerByIdd,
	'/data/customizerData/:pid':getCustomizerById,
	'/data/customizer/:pid':updateCustomizer,

	'/data/layerdata/post':layerdata.createLayerdata,
	'/data/layerdata/get':layerdata.getLayerdata,
	'/data/layerdata/:id/get':layerdata.getLayerdataBydId,
	'/data/layerdata/:id/update':layerdata.updateLayerdata,
	'/data/layerdata/:id/delete':layerdata.deleteLayerdata,

	'/data/ProductData/    post':productdata.createProductdata,
	'/data/ProductData/get':productdata.getProductdata,
	'/data/ProductData/:id/get':productdata.getProductdataBydId,
	'/data/ProductData/:id/update':productdata.updateProductdata,
	'/data/ProductData/:id/  delete':productdata.deleteProductdata,


//shopify
'/shopify/products  /post':shopifystore.createproduct,
'shopify/orders': shopifystore.fetchorders,
'shopify/ordersbydaterange':shopifystore.fetchorderbydaterange,
'shopify/customers':shopifystore.fetchcustomers,
'shopify/products':shopifystore.fetchproducts,
'shopify/products/:id' :shopifystore.fetchproductsbyid,
'shopify/cart':shopifystore.cart,
'shopify/totalstore':shopifystore.countshopoifystore,



	
}