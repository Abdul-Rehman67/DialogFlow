const axios = require('axios')


// all services will define here regarding orders
const getOrderService = async (intentName, orderId) => {
  // getOrderService  Start 
  try {
    if (intentName === "Final Intent") {
      return {
        status: true, fulfillmentText: "Your Welcome! Have a nice day ahead"
      }
    }
    const response = await axios.post('https://orderstatusapi-dot-organization-project-311520.uc.r.appspot.com/api/getOrderStatus', {
      orderId: orderId
    });
    const shipmentDate = new Date(response.data.shipmentDate).toDateString();
    return {
      status:true, fulfillmentText: `Your order ${orderId} will be shipped on ${shipmentDate}`
    };
  }
  catch (error) {
  console.log(error)
    return {
     status:false, fulfillmentText: 'Sorry, there was an error retrieving your order status. Please try again later.'
    };
  }
    // getOrderService  End
}


module.exports = { getOrderService };
