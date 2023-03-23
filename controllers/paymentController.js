const stripe = require("stripe")("sk_test_51M3EDcLvaK7iIuts9zSj2i4QbcY8OPzfdUEBO3C5zyVzxcLylePbVIG6EYUsrDqBfFZMarqjoAfYagSvWk41irT300CPfZJiQc")


const paymentProcess = async(req,res,next)=>{
    const {token, amount} = req.body
    let paymentId = token.card.id
    try {
      await stripe.charges.create({
      source: token.id,
      amount,
      currency: "USD",

    })
    res.status(200).json({ success: true, paymentId});
console.log("Payment ",paymentId)
    } catch (error) {
      console.error(error);
      res.status(500).json("Internal Server error occured");
    }
}


// const paymentProcess = async(req,res,next)=>{
//     try {
//         let mypayment = await stripe.paymentIntents.create({
//             amount: req.body.amount,
//             currency: 'usd',
//             confirm: true,
//             automatic_payment_methods:{
//                 enabled: true
//             }

//         })
//         if (!mypayment) {
//           return res.status(400).json({ success: false, message: "Pls check Something missing in payment process" });
//         }
        
//         res.status(200).json({ success: true, client_secret:mypayment.client_secret });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json("Internal Server error occured");
//       }
// }






module.exports = {paymentProcess};