const Order = require("../Models/orderModel");
const Inventory = require("../Models/inventoryModel");
const outWard = require("../Models/outWardModel");

const errorHandler = require("../Utils/errorHandler");
const catchAsyncError = require("../Middlewares/catchAsyncError");

// adding product in wareHouse
exports.addProduct = catchAsyncError(async (req, res, next) => {
  const data = req.body;
  const resData = await Inventory.create(req.body);

  res.status(200).json({
    success: true,
    resData,
  });
});

//Requesting order to warehouse
exports.createOrder = catchAsyncError(async (req, res, next) => {
  const data = req.body;
  const { name } = data;
  let search = {
    name: {
      $regex: name,
      $options: "i",
    },
  };
  const isAvailable = await Inventory.find({ search });
  if (!isAvailable) {
    return next(new errorHandler("No item found", 404));
  }
  const resData = await Order.create(req.body);

  res.status(200).json({
    succes: true,
    message: "Order created successfully",
    resData,
  });
});

//update stock function
async function updateStock(namey,quantity)
{
  console.log(namey);
    let search = {
      items: {name: {
        $regex: namey,
        $options: "i"
      }
    }}
  console.log(namey);
  const isAvailable = await Inventory.find({ search });
  if(isAvailable)
  {
    console.log('true');
  }
   isAvailable.quantity = isAvailable.quantity - quantity;
    console.log(isAvailable.quantity);
    const updatedQuantity = isAvailable.quantity;
    console.log(updatedQuantity);
    await Inventory.findOneAndUpdate({search},{quantity: updatedQuantity});
}

//update Box

exports.outward = catchAsyncError(async (req, res, next) => {
  const data = req.body;
  
  const { description, box, type, items } = data;

  items.map( async (item) => {
    console.log(item.name);
    console.log(item.quantity);
    const itemName = item.name
    const quantity = item.quantity;
    await updateStock(item.name,quantity);
  } );

  await outWard.create(req.body);

  res.status(200).json({
    success: true,
    message: "Items quantity updated sucessfully"
  });

});

exports.check = () => {
  res.status(200).json({
    message: "ok",
  });
};
