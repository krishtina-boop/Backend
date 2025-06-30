// const asyncHandeler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

//WITH PROMISES
const asyncHandeler = (requestHandeler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandeler(req, res, next)).catch((error) => {
      next(error);
    });
  };
};
export { asyncHandeler };
