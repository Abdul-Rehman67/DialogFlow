const {  getOrderService } = require("../services/userService");


// all controller regarding user order will be define here 

const getOrderController = async (req, res) => {
  // getOrderController  Start
  const orderId = req.body.queryResult.parameters.orderId;
  const intentName = req.body.queryResult.intent.displayName;
  try {
    let result = await getOrderService(intentName,orderId)
    if(result.status){
      return res.json({
        fulfillmentText: result.fulfillmentText
      });
    } 
    else{
      return res.json({
        fulfillmentText: result.fulfillmentText
      });
    }
  } catch (error) {
    return res.json({
      fulfillmentText: 'Sorry, there was an error retrieving your order status. Please try again later.'
    });
  }
  // getOrderController  End
};

module.exports = { getOrderController };
