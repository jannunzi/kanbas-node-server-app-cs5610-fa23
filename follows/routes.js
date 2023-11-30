import * as dao from "./dao.js";

function FollowsRoutes(app) {
  const userFollowsUser = async (req, res) => {
    const follower = req.session["currentUser"]._id;
    const followed = req.params["followed"];
    const follows = await dao.userFollowsUser(follower, followed);
    res.json(follows);
  };
  const userUnfollowsUser = async (req, res) => {
    const follower = req.session["currentUser"]._id;
    const followed = req.params["followed"];
    const status = await dao.userUnfollowsUser(follower, followed);
    res.json(status);
  };
  const findFollowersOfUser = async (req, res) => {
    const followed = req.params["followed"];
    const followers = await dao.findFollowersOfUser(followed);
    res.json(followers);
  };
  const findFollowedUsersByUser = async (req, res) => {
    const follower = req.params["follower"];
    const followed = await dao.findFollowedUsersByUser(follower);
    res.json(followed);
  };

  app.post("/api/users/:followed/follows", userFollowsUser);
  app.delete("/api/users/:followed/follows", userUnfollowsUser);
  app.get("/api/users/:followed/followers", findFollowersOfUser);
  app.get("/api/users/:follower/following", findFollowedUsersByUser);
}

export default FollowsRoutes;
