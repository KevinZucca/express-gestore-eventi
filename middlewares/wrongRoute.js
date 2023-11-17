module.exports = function (req, res, next) {
  res.status(404).json("La pagina a questo indirizzo non esiste");
};
