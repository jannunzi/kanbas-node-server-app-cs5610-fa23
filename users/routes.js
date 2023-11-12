import * as dao from "./dao.js";
let currentUser = null;
function UserRoutes(app) {
  const signout = (req, res) => {
    currentUser = null;
    res.json(200);
  };
  app.post("/api/users/signout", signout);
  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json({ message: "Username already taken" });
    }
    currentUser = await dao.createUser(req.body);
    res.json(currentUser);
  };
  app.post("/api/users/signup", signup);
  // ADMIN
  const createUser = async (req, res) => {
    if (currentUser && currentUser.role === "ADMIN") {
      const user = await dao.createUser(req.body);
      res.json(user);
      return;
    }
    res.status(401).json({ message: "Unauthorized" });
  };
  const deleteUser = async (req, res) => {
    if (currentUser && currentUser.role === "ADMIN") {
      const status = await dao.deleteUser(req.params.userId);
      res.json(status);
      return;
    }
    res.status(401).json({ message: "Unauthorized" });
  };
  const findAllUsers = async (req, res) => {
    // if (currentUser && currentUser.role === "ADMIN") {
    const { role } = req.query;
    if (role) {
      const users = await dao.findUsersByRole(role);
      res.json(users);
      return;
    }
    const users = await dao.findAllUsers();
    res.json(users);
    return;
    // }
    // res.status(401).json({ message: "Unauthorized" });
  };
  const updateUser = async (req, res) => {
    const { userId } = req.params;
    console.log("updateUser -->");
    console.log(userId, currentUser._id);
    console.log("<-- updateUser");
    if (
      (currentUser && currentUser.role === "ADMIN") ||
      currentUser._id.toString() === userId
    ) {
      const user = await dao.findUserById(req.params.userId);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      const status = await dao.updateUser(userId, req.body);
      currentUser = await dao.findUserById(userId);
      res.json(status);
      return;
    }
    res.status(401).json({ message: "Unauthorized" });
  };
  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  };
  // Account management
  const signin = async (req, res) => {
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    console.log(username, password, currentUser);
    if (!currentUser) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }
    res.json(currentUser);
  };
  const account = async (req, res) => {
    if (!currentUser) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    res.json(currentUser);
  };
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);

  app.post("/api/users/signin", signin);
  app.post("/api/users/account", account);
}
export default UserRoutes;
