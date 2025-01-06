// // authMiddleware.js
// const jwt = require("jsonwebtoken");

// const authenticateUser = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   console.log("Authorization Header:", authHeader);

//   // if (!authHeader || !authHeader.startsWith("Bearer ")) {
//   //   return res.status(401).json({ message: "Authentication required" });
//   // }

//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, "helloabcd");
//     req.user = decoded; // or however you've structured your JWT payload
//     next();
//   } catch (error) {
//     console.error("JWT Error:", error);
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

// module.exports = authenticateUser;
