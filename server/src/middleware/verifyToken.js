import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const jwt_token = req.cookies.jwt_token;
  if (!jwt_token) return res.status(401).json({success: false, message: "Unauthorized - no token provided"});

  try 
  {
    const decoded = jwt.verify(jwt_token, process.env.JWT_SECRET);

    if (!decoded) return res.status(401).json({success: false, message: "Unauthorized - invalid token"})
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
  } 
  catch (error) 
  {
    console.log("Eror in verifyToken", error);
    return res.status(500).json({ success: false, message: "Server Error"}) 
  }
}