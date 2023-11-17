import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {};
  const createUserLikesAlbum = async (req, res) => {
    const userId = req.params.userId;
    const albumId = req.params.albumId;
    const likes = await dao.createUserLikesAlbum(userId, albumId);
    res.json(likes);
  };
  const deleteUserLikesAlbum = async (req, res) => {};
  const findUsersThatLikeAlbum = async (req, res) => {
    const albumId = req.params.albumId;

    const likes = await dao.findUsersThatLikeAlbum(albumId);
    res.json(likes);
  };
  const findAlbumsThatUserLikes = async (req, res) => {
    const userId = req.params.userId;
    const likes = await dao.findAlbumsThatUserLikes(userId);
    res.json(likes);
  };
  app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:albumId", createUserLikesAlbum);
  app.delete("/api/users/:userId/likes/:albumId", deleteUserLikesAlbum);
  app.get("/api/likes/:albumId/users", findUsersThatLikeAlbum);
  app.get("/api/users/:userId/likes", findAlbumsThatUserLikes);
}

export default LikesRoutes;
