const socketController = (socket) => {
  // console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    // console.log("Cliente desconectado", socket.id);
  });

  // recibe el evento "enviar-mensaje" del FrontEnd
  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 1999;
    callback({ id, fecha: new Date().getTime() });

    /**
     *  broadcast:es para enviar mensaje a otros sockets 
     */
    socket.broadcast.emit("enviar-mensaje", payload); // envia el evento "enviar-mensaje" al FrontEnd
  });
};

module.exports = {
  socketController,
};
