
export const accessHome = ( req, res ) => {
  res.json({
    "url": "/home",
    "data": "home"
  });
};

export const listFiles = ( req, res ) => {
  res.json({
    "data": "files"
  });
};

export const accessFile = ( req, res ) => {
  const { fileId = "if", fileNumber = "" } = req.params;
  if( fileNumber ) {
    res.json({
      "fileid": fileId,
      "fileNumber": fileNumber
    });
  } else {
    res.json({
      fileId
    });
  }
};
